import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: state => state.count * 2,
  },
  actions: {
    increment () {
      this.count++
    },
    async waitAndIncrement() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      this.count++
    },
    decrement () {
      this.count--
    },
    reset () {
      this.count = 0
    },
  },
})
// This store can be used in your components like this:
// <script setup>
// import { useCounterStore } from '@/stores/counter';
// const counterStore = useCounterStore();
// </script>
// <template>
//   <div>
//     <p>Count: {{ counterStore.count }}</p>
//     <p>Double Count: {{ counterStore.doubleCount }}</p>
//     <button @click="counterStore.increment">Increment</button>
//     <button @click="counterStore.decrement">Decrement</button>
//     <button @click="counterStore.reset">Reset</button>
//   </div>
// </template>
