<template>
    <div v-if="alert" :class="['alert', { 'alert-danger': alert.msgType}]">
        <i class="fa fa-info-circle"></i>
        {{ alert.message }}
    </div>
</template>

<script>
import { eventBus } from '../main.js';
export default {
    name: 'Alert',
   // props: ['message','msgType'],
   data() {
      return {
        alert: {}
      }
   },
    created() {
        eventBus.$on('showAlert', (data) => {
            console.log('i ran')
            this.alert = data;
        })
    }
}
</script>

<style>

</style>
