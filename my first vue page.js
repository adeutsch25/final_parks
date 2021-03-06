<!DOCTYPE html>
<html>
<head>
    <title>Hello Vue</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>

<body>
    <div id="app">
        <h1>Hello Vue</h1>
        
        <p v-text="message"></p>
 
        <button v-on:click="addExclamation">Add !</button>
    </div>

    <script>
        let app = new Vue({
            el: '#app',
            data: {
                message: 'hi!',
            },
            methods: {
                addExclamation: function(event) {
                    this.message += '!'
                }
            }
        })
    </script>

</body>
</html>