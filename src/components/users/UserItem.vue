<template>
    <div class="card mt-5 text-center">
        <div class="img-container">
            <img :src="user.avatar_url" class="img-circle" alt="Photo 1" />
        </div>
        <h5 class="mt-2"> {{ user.login}} </h5>
        <router-link class="btn btn-sm btn-dark" :to='`/users/${user.login}`'> More </router-link>
    </div>
</template>

<script>

export default {
    name: 'UserItem',
    props: ['user']
}
</script>

<style scoped lang='scss'>
    .card {
        border: 1px solid #ccc;
        height: 12rem;
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        margin-right: .01rem;
        .img-container {
            height: 40%;
            width: 40%;
          
            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
          
        }
        .btn-dark {
            width: 50%;
        }
    }
    
</style>
