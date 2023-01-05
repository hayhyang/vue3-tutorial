<template>
  <button @click='decrement'> decrement </button>
  {{test2}} {{count}} {{oddOrEven}}
  <button @click='increment'> increment </button>
  <button @click='incrementAsync'> incrementAsync </button>
  <button @click='actionA'> actionA </button>
  <button @click='actionB'> actionB </button>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      sampleData: ''
    }
  },
  setup () {},
  created () {},
  mounted () {
    console.log('store', this.$store)
  },
  unmounted () {},
  methods: {
    increment() {
      this.$store.commit({ type: 'increment', amount: 4 })
    },
    decrement() {
      this.$store.commit({ type: 'decrement', amount: 3 })
    },
    incrementAsync() {
      this.$store.dispatch('incrementAsync', { amount: 10 })
    },
    actionA() {
      this.$store.dispatch('actionA', { amount: 200 }).then(() => console.log('commit actionA'))
    },
    actionB() {
      this.$store.dispatch('actionB')
    }
  },
  computed: {
    count () {
      return this.$store.state.count.count
    },
    oddOrEven () {
      return this.$store.getters.oddOrEven
    }
  }
}
</script>

<style>

</style>
