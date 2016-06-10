

<template>

<div class="main marginTop100">
    <h2>首页入口，一级路由</h2>
    <hello></hello>
    <popover effect="fade" placement="right" trigger="click" title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default ">Popover on bottom</button>
    </popover>
    <doc></doc>
</div>

</template>

<script type="text/javascript">

import {
    alert, popover
}
from 'vue-strap'

import Hello from '../components//Hello'
import doc from './Doc'
export default {
    components: {
        Hello,
        alert,
        popover,
        doc
    }
}

</script>
