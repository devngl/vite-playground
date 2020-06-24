<template>
    <div>
        <label for="number">Número</label>
        <input id="number" type="text" :value="card.number" @input="updateNumber($event.target.value)">
        <label for="csc">CSC</label>
        <input id="csc" type="text" :value="card.csc" @input="updateCsc($event.target.value)">
        <label for="month">Mes de expiración</label>
        <input id="month" type="text" :value="card.expirationMonth" @input="updateMonth($event.target.value)">
        <label for="year">Año de expiración</label>
        <input id="year" type="text" :value="card.expirationYear" @input="updateYear($event.target.value)">
    </div>
</template>

<script>
  import { reactive } from 'vue'

  export default {
    emits: ['update:number', 'update:csc', 'update:month', 'update:year'],
    props: {
      number: { type: String, default: null },
      csc: { type: String, default: null },
      month: { type: String, default: null },
      year: { type: String, default: null },
    },
    setup (props, { emit }) {
      const card = reactive({
        number: props.number,
        csc: props.csc,
        expirationMonth: props.month,
        expirationYear: props.year,
      })
      const updateNumber = value => emit('update:number', value)
      const updateCsc = value => emit('update:csc', value)
      const updateMonth = value => emit('update:month', value)
      const updateYear = value => emit('update:year', value)

      return { card, updateNumber, updateCsc, updateMonth, updateYear }
    },
  }
</script>

<style>
    input {
        display: block;
        width: 100%;
    }
</style>