<template>
    <div style="border: solid 2px #2c3e50; border-radius: 5px; padding: 15px; display: flex">
        <div style="width: 220px; padding-right: 30px; border-right: teal 2px dashed;">
            <CardDetails v-model:number.trim="cardNumber"
                         v-model:csc.trim="cardCSC"
                         v-model:month.trim="cardExpirationMonth"
                         v-model:year.trim="cardExpirationYear"
            />
        </div>

        <div style="margin-left: 10px">
            <span>Los datos se actualizan en nuestro data correctamente:</span>
            <ul>
                <li>Número: {{cardNumber}}</li>
                <li>CSC: {{cardCSC}}</li>
                <li>Fecha de expiración: {{cardExpirationMonth}}/{{cardExpirationYear}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
  import CardDetails from '../components/CardDetails.vue'

  export default {
    data () {
      return {
        cardNumber: "1234-3242-4451-9583",
        cardCSC: "333",
        cardExpirationMonth: "12",
        cardExpirationYear: "24",
      }
    },
    components: { CardDetails }
  }
</script>

<style scoped>
    * {
        text-align: left;
    }
</style>