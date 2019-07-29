# js-gui-vue

> JavaScript is a great language for writing and testing quick apps with user interaction.
>
> Vue.js is an easy addition that enables two-way data binding (immediate updates are easy and no more 'document.getElementById')

## Links

- [Demo](https://denisecase.github.io/js-gui-vue/)
- [Source](https://github.com/denisecase/js-gui-vue)

## Requirements

- A browser (e.g., Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)

## Benefits

- No downloads required - almost every computer already has a browser
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

```HTML
  <!-- Vue.js -->
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.6/dist/vue.js"></script>
```

Then, remove any calculational event handlers, and instead, specify your Vue components. For each new Vue component, define:

1. el - short for HTML element for this component
2. data - the inputs, defined in your HTML with the 'v-model' attribute
3. computed - the outputs, placed in inner HTML with double curly braces

An example is shown below.

```JavaScript

   console.log('Specify Vue components .......................')

    new Vue({
      el: '#vue-app',
      data: {
        guest: 'Lilly',
        firstNumber: 5,
        secondNumber: 3
      },
      computed: {
        result() {
          const i = parseInt(this.firstNumber)
          const j = parseInt(this.secondNumber)
          return this.guest + ', your sum is ' + add(i, j) + '.'
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
- [js-colors](https://github.com/profcase/js-colors)
- [js-e1](https://github.com/profcase/js-e1)
- [js-gui-basic](https://github.com/profcase/js-gui-basic)
- [js-gui](https://github.com/profcase/js-gui)
- [js-gui-ajax](https://github.com/profcase/js-gui-ajax)
- [js-gui-storage](https://github.com/profcase/js-gui-storage)
- [js-gui-with-tests](https://github.com/profcase/js-gui-with-tests)
- [js-gui-pwa-fact](https://github.com/denisecase/js-gui-pwa-fact)
- [js-gui-vue](https://github.com/denisecase/js-gui-vue)
- [node-server](https://github.com/profcase/node-server)
- [todo-server-jwt](https://github.com/profcase/todo-server-jwt)
- [node-express-app](https://github.com/denisecase/node-express-app)
- [node-express-chat](https://github.com/denisecase/node-express-chat)
- [node-express-mvc](https://github.com/denisecase/node-express-mvc)
- [node-express-mvc-ejs-start](https://bitbucket.org/professorcase/node-express-mvc-ejs-start)
- [node-express-mvc-ejs-passport](https://bitbucket.org/professorcase/node-express-mvc-ejs-passport)
