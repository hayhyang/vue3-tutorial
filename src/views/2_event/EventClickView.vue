<template>
<button @click='increaseCounter'>Add 1</button>
  <p>{{counter}}</p>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      counter: 0
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    increaseCounter() {
      this.counter++
    }
  }
}
</script>

<style>

</style>
