<template>
<div :class='{"text-red": true, "active": isActive}'>클래스 바인딩</div>
  <div :class='class2'>클래스 바인딩</div>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      isActive: true,
      class2: ['active', 'hasError']
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {}
}
</script>

<style>
.text-red {
  color: red;
  font-weight: normal;
}
.active {
  font-weight: bold;
}
</style>
