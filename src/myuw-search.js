import tpl from './myuw-search.html';

export class MyUWSearch extends HTMLElement {
    constructor() {
        super();

        // Create a shadowroot for this element
        this.attachShadow({mode: 'open'});

        // Append the custom HTML to the shadowroot
        this.shadowRoot.appendChild(MyUWSearch.template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return [
            'input-label',
            'button-label',
            'icon'
        ];
    }

    /**
    *   Web component lifecycle hook to update changed properties
    */
    attributeChangedCallback(name, oldValue, newValue) {
        // Update the attribute internally
        this[name] = newValue;
        // Update the component
        this.updateComponent(name, newValue);
    }

    /**
    *   When component is first attached to the DOM,
    *   get its defined attributes and listen for
    *   scrolling
    */
    connectedCallback() {
        // Get all attributes
        this.icon           = this.getAttribute('icon') || 'search';
        this.inputLabel     = this.getAttribute('input-label') || 'Search';
        this.buttonLabel    = this.getAttribute('button-label') || 'Submit search';

        // Get elements to update
        this.$icon      = this.shadowRoot.querySelector('i#icon');
        this.$input     = this.shadowRoot.querySelector('input#input');
        this.$button    = this.shadowRoot.querySelector('button#submit');
        
        // Set icon and label values
        this.$icon.innerText = this.icon;
        this.$input.setAttribute('aria-label', this.inputLabel);
        this.$input.setAttribute('placeholder', this.inputLabel);
        this.$button.setAttribute('aria-label', this.buttonLabel);

        // Add click event listener for submit button
        
        this.$button.addEventListener('click', e => {
            this.submitSearch();
        });

        this.updateComponent();
    }

    /**
    *   Clean up event listeners if element is removed from the DOM
    */
    disconnectedCallback() {

    }

    /**
    *   Update the component state 
    */
    updateComponent() {
        
    }

    /**
     *  Submit search
     */
    submitSearch() {
        
    }
}

MyUWSearch.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-search', MyUWSearch);
