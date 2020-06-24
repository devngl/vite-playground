<template>
    <img v-if="image" :src="image" alt="" width="900">
</template>

<script>
  import { ref } from 'vue'

  export default {
    async setup () {
      let image = ref(null)
      const url = new URL('https://apodapi.herokuapp.com/api')
      const response = await fetch(url, { method: 'GET', headers: {} })
      response.json().then(data => image.value = data.url)

      return { image }
    },
  }
</script>
