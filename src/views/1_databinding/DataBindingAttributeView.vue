<template>
  <input type='text' :value='userId' readonly />
  <img :src='imgSrc' alt='' style='width: 100px; height: auto;'>
  <input type='text' v-model='txt' />
  <button :disabled='txt === ""'>입력</button>

</template>

<script>
export default {
  component: {},
  data () {
    return {
      userId: 'asdfasdf',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
      txt: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>
