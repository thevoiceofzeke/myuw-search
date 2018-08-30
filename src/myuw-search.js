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
        this.$form          = this.shadowRoot.querySelector('form#form');
        this.$icon          = this.shadowRoot.querySelector('i#icon');
        this.$input         = this.shadowRoot.querySelector('input#input');
        this.$button        = this.shadowRoot.querySelector('button#submit');
        this.$toggle        = this.shadowRoot.querySelector('button#toggle');
        this.$toggleIcon    = this.shadowRoot.querySelector('i#iconToggle');
        
        // Set icon and label values
        this.$icon.innerText = this.icon;
        this.$toggleIcon.innerText = this.icon;
        this.$input.setAttribute('aria-label', this.inputLabel);
        this.$input.setAttribute('placeholder', this.inputLabel);
        this.$button.setAttribute('aria-label', this.buttonLabel);
        this.$toggle.setAttribute('aria-label', 'show search');

        // Get viewport width and toggle button position
        // this.$cssWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        // this.$togglePosition = this.$toggle.getBoundingClientRect();

        // Add click event listeners for submit and toggle buttons
        this.$button.addEventListener('click', e => {
            this.submitSearch(e);
        });
        
        this.$toggle.addEventListener('click', e => {
            this.toggleSearch(e);
        });

        // Listen for clicks outside the element
        document.addEventListener('click', e => {
            if (this.$form.hasAttribute('expanded')) {
                if (!e.target.closest('myuw-search')) {
                    this.toggleSearch(e);
                }
            }
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
    submitSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.callback && typeof this.callback === 'function') {
            this.callback( this.$input.value );
        }
    }

    /**
     * (MOBILE-ONLY) Display the search bar
     */
    toggleSearch(event) {
        // Get viewport width and position of toggle button
        this.$cssWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.$togglePosition = this.$toggle.getBoundingClientRect();

        // Get value for 'right' positioning of form anchor (minus width of button)
        var right = Math.floor(this.$cssWidth - this.$togglePosition.left - 42);

        // Set positioning
        this.$form.style.right = right;

        // Set icon for toggle button and expand form
        if (this.$form.hasAttribute('expanded')) {
            this.$form.removeAttribute('expanded');
            this.$toggleIcon.innerText = this.icon;
            this.$toggle.setAttribute('aria-label', 'show search');
        } else {
            this.$form.setAttribute('expanded', 'true');
            this.$toggleIcon.innerText = 'arrow_forward';
            this.$toggle.setAttribute('aria-label', 'close search');
        }
    }
}

MyUWSearch.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-search', MyUWSearch);
