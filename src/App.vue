<template>
    <div id="app">
        <menu></menu>
        <div class="container">
            <router-view keep-alive></router-view>
        </div>
        <foot></foot>
    </div>
</template>

<script>

import Menu from './components/Header'
import Foot from './components/Footer'
import store from './vuex/store' // import 我们刚刚创建的 store

export default {
    components: {
        Menu,
        Foot
    },
    store // 在根组件加入 store，让它的子组件和 store 连接
}

</script>
