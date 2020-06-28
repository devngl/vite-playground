<template>
    <div>Lets move our friend to the top, above the Vue Logo (location out of this component):</div>

    <br>
    <Teleport to="#above-logo" :disabled="disabled">
        <span>(ʘ‿ʘ)╯</span>
    </Teleport>

    <br>
    <button type="button" @click="disabled = !disabled">
        <span v-if="disabled" >Send him to the top</span>
        <span v-else>Bring him back!</span>
    </button>
</template>

<script>
  export default {
    name: 'portals',
    data () {
      return {
        disabled: true
      }
    },
  }
</script>