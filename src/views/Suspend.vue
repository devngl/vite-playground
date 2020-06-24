<template>
    <span v-if="error">Algo ha ido mal obteniendo la imagen: {{error}}</span>
    <Suspense v-else>
        <template #default>
            <NasaDailyAPOD></NasaDailyAPOD>
        </template>
        <template #fallback>
            <div>Solicitando imagen por API...</div>
        </template>
    </Suspense>
</template>

<script>
  import { onErrorCaptured, ref } from 'vue'
  import NasaDailyAPOD from '../components/NasaDailyAPOD.vue'

  export default {
    components: { NasaDailyAPOD },
    setup () {
      const error = ref(null)
      onErrorCaptured(e => {
        error.value = e
        return true
      })

      return { error }
    },
  }
</script>
