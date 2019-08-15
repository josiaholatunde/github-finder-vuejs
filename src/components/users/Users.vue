<template>
  <div>
    <div class="row-1">
        <app-user-item v-for="user in users" :user='user' :key='user.id'></app-user-item>
    </div>
  </div>
</template>

<script>
import UserItem from './UserItem'
export default {
  name: 'Users',
  props: ['users'],
 components: {
   appUserItem: UserItem
 },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .row-1 {
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
  }
</style>
