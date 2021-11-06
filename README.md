# open-graph-embed-card

[DEMO](https://grapesjs-open-graph-embed-card.glitch.me/)
> **Provide a live demo of your plugin**
A simple embed card that uses open graph protocol to provide a website snapshot for your hyperlink.

### HTML
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-open-graph-embed-card"></script>

<div id="gjs"></div>
```

### JS
```js
const editor = grapesjs.init({
	container: '#gjs',
  height: '100%',
  fromElement: true,
  storageManager: false,
  plugins: ['grapesjs-open-graph-embed-card'],
    pluginsOpts: {
    'grapesjs-open-graph-embed-card': { /* Your options here */ }
  }
});
```

### CSS
#### The css has variables that are loaded into the styles. You can override these variables in your project to style the cards

* --og-card-background: #f8f9fa;
* --og-card-border-radius: 0rem;
* --og-card-border-color: #dcdcdc;
* --og-card-border-style: solid;
* --og-card-border-width: 1px;
* --og-card-max-width: 600px;
* --og-card-font-size: 1em;
* --og-card-font-color: #494949;
* --og-card-font-hover-color: #494949;
* --og-card-figure-background: #848482;
* --og-card-header-background: transparent;
* --og-card-body-background: transparent;
* --og-card-footer-background: transparent;
* ... Please see src/grapesjs-open-graph-embed-card/components.js for how these styles are applied

## Summary

* Plugin name: `grapesjs-open-graph-embed-card`
* Components
    * `open-graph-card`
* Blocks
    * `open-graph-card`


## Options

| Option | Description | Default | Type
|-|-|-|-
| `category` | Specify the category you can find the block. | `Basic` | blocks
|-|-|-|-
| `url` | The url used to query/parse the website and return the open graph styled json. | `''` | components
| `request_type` | The type of request to pass. | `GET` | components
| `headers` | Necessary headers to pass with the query url. | `{}` | components
| `params` | Necessary params to pass with the query url. | `{}` | components
| `query_name` | The name of the query var that is appended to the url. Note, this would like something like this: https://my_fake_website_parser.com?url=https://en.wikipedia.org/wiki/Facebook_Platform#Open_Graph_protocol. | `url` | components

## Download

* CDN
  * `https://unpkg.com/grapesjs-open-graph-embed-card`
* NPM
  * `npm i grapesjs-open-graph-embed-card`
* GIT
  * `git clone https://github.com/booellean/grapesjs-open-graph-embed-card.git`


## Usage

From your server
- It's important to note that this plugin expects a specific return value to operate. It was developed with the same json return values as [Mozilla's page-metadata-parser](https://github.com/mozilla/page-metadata-parser). Please set up your server and/or callbacks from public parsers to return in that format in the 'data' field;

```js
  data: {
    description: "A user displayable description for the page.",
    icon: "A URL which contains an icon for the page.",
    image: "A URL which contains a preview image for the page.",
    keywords: "The meta keywords for the page.",
    provider: "A string representation of the sub and primary domains.",
    title: "A user displayable title for the page.",
    type:	"The type of content as defined by opengraph.",
    url: "A canonical URL for the page."
  }
```

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-open-graph-embed-card.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-open-graph-embed-card'],
      pluginsOpts: {
        'grapesjs-open-graph-embed-card': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-open-graph-embed-card';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: ['grapesjs-open-graph-embed-card'],
  pluginsOpts: {
    'grapesjs-open-graph-embed-card' : { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```
---

## Development

Clone the repository

```sh
$ git clone https://github.com/booellean/grapesjs-open-graph-embed-card.git
$ cd grapesjs-open-graph-embed-card
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```


## License

MIT
