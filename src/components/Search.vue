<template>
    <div class="mt-2">
        <form @submit.prevent="searchUsers">
            <input type="search" class="form-control" v-model.lazy.trim='filterText' placeholder="Search Users">
            <input type="submit" class="btn btn-block btn-md btn-default mt-3" value="Search" /> 
        </form>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
export default {
    name: 'SearchUsers',
    data() {
        return {
            filterText: ''
        }
    },
    methods: {
        searchUsers(e) {
            if (!this.filterText) {
                const alert = {
                    message: 'Please enter something to search for a github user',
                    msgType: 'danger'
                }
                eventBus.$emit('showAlert',alert);
                return;
            }
            this.$emit('searchUser',this.filterText);
            this.filterText = '';
        }
    }
}
</script>

<style scoped>
    .btn-default {
        background: #333 !important;
        color: #fff;
    }
    input[class=form-control],input[type=submit] {
        box-shadow: none;
    }
</style>
