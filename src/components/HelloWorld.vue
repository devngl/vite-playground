<template>
  <h1>{{ msg }}</h1>
  <button @click="increment">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { simpleCounter } from './shared/counters'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup () {
    return { ...simpleCounter() }
  },
}
</script>
