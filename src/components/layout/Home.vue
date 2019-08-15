<template>
    <div>
        <app-alert></app-alert>
        <app-search @searchUser='filter'></app-search>
        <app-users :users='fetchUsers'></app-users>
    </div>
</template>

<script>
import Search from '../Search';
import Users from '../users/Users';
import Alert from '../Alert';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Search',
    components: {
        appSearch: Search,
        appUsers: Users,
        appAlert: Alert
    },
    computed: {
        ...mapGetters(['fetchUsers']),
        filterUsers() {
            return this.fetchUsers()
        }
    },
    methods: {
        ...mapActions(['searchUsers']), 
        filter(filterText) {
            console.log('Yo',filterText);
            this.searchUsers(filterText);
        }
    }
}

</script>

<style>

</style>
