# js-gui-vue

> JavaScript is a great language for writing and testing quick apps with user interaction.
>
> Vue.js is an easy addition that enables two-way data binding (immediate updates are easy and no more 'document.getElementById')

## Links

- [Demo](https://profcase.github.io/js-gui-vue/)
- [Source](https://github.com/profcase/js-gui-vue)

## Requirements

- A browser (e.g., Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)

## Benefits

- No downloads required - almost every computer already has a browser
- No languages, tooling, or versions to worry about - your browser is ready to run JavaScript
- Pick your paradigm - you can code using functional, object-oriented, imperative, or event-driven paradigms
- Built-in features for user input
- Easy-to-style with a CSS CDN link
- Easy-to-use Vue components with a Vue.js CDN link

## Converting the HTML to use Vue

1. Wrap the component in an HTML tag and specify the component id (e.g. vue-app)
2. Convert each input HTML element 'id' attribute to 'v-model' attribute
3. Remove any input default values from the HTML input elements
4. If you have a button to trigger an update event, you can delete it. Vue will automatically update results as inputs change.
5. Covert output HTML elements to use {{identifier}} for inner HTML. The 'id' attribute is not needed for updating the data and can be removed.

## Specifying the Vue Component

First add Vue.js with a script element pointing to the CDN source before your custom code.

```JavaScript
  <!-- Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js"></script>
```

Then, remove any calculational event handlers, and instead, specify your Vue components. For each new Vue component, define:

1. el - short for HTML element for this component
2. data - the inputs, defined in your HTML with the 'v-model' attribute
3. computed - the outputs, placed in inner HTML with double curly braces

An example is shown below.

```JavaScript

 console.log("Specify root Vue instance .......................")

    new Vue({
      el: "#vue-app",
      data: {
        guest: "Lilly",
        firstNumber: 5,
        secondNumber: 3
      },
      computed: {
        result() {
          const i = parseInt(this.firstNumber)
          const j = parseInt(this.secondNumber)
          return this.guest + ", your sum is " + add(i, j) + "."
        }
      }
    })
```

## Resources

- [Bootstrap Material Design CDN](https://mdbootstrap.com/md-bootstrap-cdn/)
- [HTML Validator](https://validator.w3.org/)
- [JavaScript Standard Style Validator](https://standardjs.com/demo.html)
- [Vue.js JavaScript framework CDN](https://vuejs.org/v2/guide/installation.html) - small, incrementally-adoptable framework for JavaScript user interfaces

## See Also

- [js-console](https://github.com/profcase/js-console)
- [js-gui](https://github.com/profcase/js-gui)
- [js-gui-vue](https://github.com/denisecase/js-gui-vue)
- [js-gui-storage](https://github.com/profcase/js-gui-storage)
- [js-node](https://github.com/profcase/js-node)
- [js-node-express](https://github.com/profcase/js-node-express)
