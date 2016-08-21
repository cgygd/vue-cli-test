

<template>

<nav class="navbar navbar-default">
    <div class="container">
        <ul class="nav navbar-nav">
            <li><a v-link="{ path: '/index' }">首页</a></li>
            <li><a v-link="{ path: '/orderlist' }">订单列表</a></li>
            <li><a v-link="{ path: '/test' }">测试页面</a></li>
            <li><a v-link="{ path: '/faq' }">faq</a></li>
        </ul>
    </div>
</nav>

</template>
