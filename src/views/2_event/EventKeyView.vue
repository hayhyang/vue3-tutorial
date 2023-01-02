<template>
  <input type='search' name='' id='' v-model='searchText' @keyup.enter='doSearch'/>
  <button @click='doSearch'>검색</button>
</template>

<script>
export default {
  component: {},
  data () {
    return {
      searchText: ''
    }
  },
  setup () {},
  created () {},
  mounted () {},
  unmounted () {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    }
  }
}
</script>

<style>

</style>
