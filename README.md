# Tailwind CSS ~ Debug Mode

A plugin that provides a `debug` component that makes it visually easier to view the document structure.

## Basic usage

> Currently, the plugin only supports the `debug` component on a body element.

```html
<!-- Enable debug mode : -->
<body class="debug">
  <!-- ... -->
</body>
```

![](/home/jeroen/Code/tailwind-debug/static/examle.png)

## Example

View an example of the [debug mode in action](#)

## Installation

Install the plugin:

```sh
# Using npm
npm install tailwind-debug

# Using Yarn
yarn add tailwind-debug
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('tailwind-debug-mode'),
    // ...
  ],
}
```

## Configuration

```
{
    screensColor: '#000000cc', // the color of the screensize background
    wireColor: '#000000cc', // the color of the wires
    svgColor: '#000000cc', // the color of the svg
    textColor: '#33333399', // the color of the text on hover
    inputColor: '#33333322', // the background color of input elements
}
```
