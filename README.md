# `<myuw-search>`

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-search@^1?module"></script>
<script nomodule scr="https://unpkg.com/@myuw-web-components/myuw-search@^1"></script>
```

Use the component's HTML tag wherever you want:

```html
<myuw-search
    input-label="Search MyUW"
    button-label="Submit search"
    icon="search">
</myuw-search>
```

Create a callback function wherever you want in your code:

```js
/* 
    Target the search component
    - This example assumes you have given the component an ID value (e.g. <myuw-search id="search">)-
    - The "value" parameter is the String value from the search input field
*/
document.getElementById('search').callback = (value) => {
    /*
        Perform search logic here. For example:
            - Pass the search value as a parameter to your app's search page
    */
}
```

### Configurable properties via attributes

- **inputLabel (input-label)**: Text to use in the aria-label and placeholder of the search field
- **buttonLabel (button-label)**: Text to use for the aria-label of the search button
- **icon (icon)**: Text name of the material icon to use for the submit button ("search" by default)

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
