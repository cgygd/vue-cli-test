<template>
    <div style="width:100%; background:#ccc;">
        公用头部
        <p>
            <a v-link="{ path: '/index' }">首页</a>
            <a v-link="{ path: '/orderlist' }">订单列表</a>
            <a v-link="{ path: '/test' }">测试页面</a>
        </p>
    </div>
</template>
