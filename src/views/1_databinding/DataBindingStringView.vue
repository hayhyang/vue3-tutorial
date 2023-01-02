<template>
<div>
<h1>{{userName}}</h1>
  <p>{{message}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      userName: 'John Doe',
      message: 'Hello world'
    }
  }
}
</script>

<style scoped>
.text-red {
  color: red;
}

</style>
