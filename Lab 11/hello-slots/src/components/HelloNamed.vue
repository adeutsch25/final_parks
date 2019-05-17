<template>
  <div class="hello">

      <p>This class is 
          <slot name="subject"></slot>
      </p>

      <p>And it is on 
        <slot name="day"></slot>
        </p>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloNamed from './components/HelloNamed.vue'

export default {
    name: 'app',
    components: {
        helloWorld, HelloNamed
    }
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
