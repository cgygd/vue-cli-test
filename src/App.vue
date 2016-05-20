<template>

    <div id="app">
        <menu></menu>
        <router-view keep-alive></router-view>
        <foot></foot>
    </div>

</template>

<script>

import Menu from './components/Header'
import Foot from './components/Footer'

export default {
    components: {
        Menu,
        Foot
    }
}

</script>
