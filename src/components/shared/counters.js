import { ref } from 'vue'

export function simpleCounter() {
  const count = ref(0)
  function increment() { count.value++ }

  return { count, increment }
}