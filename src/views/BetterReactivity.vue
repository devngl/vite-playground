<template>
    <div>This is the object: {{ _object }} and this is the array: {{ _array }}</div>
    <br/>

    <div>Test **reactive** actions:</div>
    <button type="button" @click="addToArrayByIndex">Test 1</button>
    <button type="button" @click="createNewObjectProperty">Test 2</button>
    <button type="button" @click="deleteObjectProperty">Test 3</button>
</template>

<script>
  import { reactive, ref } from 'vue'

  export default {
    setup () {
      const _object = reactive({ index: 0, willBeDeleted: 'will be deleted' })
      const _array = ref([1, 2, 3, 4])

      const addToArrayByIndex = () => _array.value[4] = 5
      const createNewObjectProperty = () => _object.value = 'This is test 2 working properly'
      const deleteObjectProperty = () => delete _object.willBeDeleted

      return { _object, _array, addToArrayByIndex, createNewObjectProperty, deleteObjectProperty }
    },
  }
</script>