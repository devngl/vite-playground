<template>
    <div id='root'>
        <div id="above-logo" style="font-weight: bolder"></div>
        <img alt="Vue logo" src="./assets/logo.png"/>
        <div id='nav'>
            <router-link to='/'> Counter</router-link>
            <router-link to='/suspend'>Suspend</router-link>
            <router-link to='/multiple-models'>Multiple Models</router-link>
            <router-link to='/better-reactivity'>Better Reactivity</router-link>
            <router-link to='/portals'>Portals</router-link>
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
