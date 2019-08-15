<template>
   <nav class="navbar bg-danger">
        <h1>
          <i :class='icon'></i>
          {{title}}
        </h1>
        <ul class="navbar navbar-right">
          <router-link to='/' tag='li'>
                <a>Home</a>
          </router-link>
            <router-link to='/about' tag='li'>
                <a>About</a>
          </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: 'fa fa-github'
        },
        title: {
            type: String,
            default: 'GithubFinder'
        }
    }
}
</script>

<style lang='scss' scoped>
    nav {
        color: #fff;
    }
    ul.navbar-right {
        display: flex;
        align-items: center; 
        a {
            margin: 0 .5rem;
        }
    }
    .navbar a {
        color: white;
        text-decoration: none;
     
    }
    .navbar ul {
        list-style-type: none;
    }
</style>
