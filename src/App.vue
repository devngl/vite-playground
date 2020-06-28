<template>
    <div id='root'>
        <img alt="Vue logo" src="./assets/logo.png"/>
        <div id='nav'>
            <router-link to='/'> Counter</router-link>
            <router-link to='/suspend'>Suspend</router-link>
            <router-link to='/multiple-models'>Multiple Models</router-link>
            <router-link to='/better-reactivity'>Better Reactivity</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
    #nav a {
        padding: 0 5px;
    }
</style>
