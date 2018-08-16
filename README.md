# `<myuw-search>`

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```

## Getting Started

Add the following import to your page's `<head>`:

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-search@^1?module"></script>
<script nomodule scr="https://unpkg.com/@myuw-web-components/myuw-search@^1"></script>
```

Use the component's HTML tag wherever you want:

```HTML
<myuw-search
    input-label="Search MyUW"
    button-label="Submit search"
    icon="search">
</myuw-search>
```

### Configurable properties via attributes

**inputLabel (input-label)**: Text to use in the aria-label and placeholder of the search field
**buttonLabel (button-label)**: Text to use for the aria-label of the search button
**icon (icon)**: Text name of the material icon to use for the submit button ("search" by default)

