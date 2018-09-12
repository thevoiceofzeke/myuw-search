# `<myuw-search>`

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-search@^1?module"></script>
<script nomodule scr="https://unpkg.com/@myuw-web-components/myuw-search@^1"></script>
```

**Important:** For responsive features to work properly, ensure your application includes the viewport meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
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

### Custom CSS properties

- **--myuw-search-border**: Used to set the border color of the search component (to support themes with light background colors). Defaults to `none`.
- **--myuw-app-bar-color**: Used by to set the color of the search button icon on small screens. Defaults to white. 

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
