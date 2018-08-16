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
        // this['theme-name']      = this.getAttribute('theme-name');

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
}

MyUWSearch.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-search', MyUWSearch);
