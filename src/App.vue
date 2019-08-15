<template>
  <div>
    <app-header />
    <div class="container mt-4">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header'

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
}
.bg-primary {
  background: #dc3545
}
</style>
