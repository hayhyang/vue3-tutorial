<template>
<div :style='style'>스타일 바인딩: 글씨는 red, 폰트크기: 30px</div>
  <button @click='clickHandler'>색상 변경</button>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      style: {
        color: 'red',
        fontSize: '30px'
      }
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    clickHandler () {
      this.style.color = 'blue'
    }
  }
}
</script>

<style>

</style>
