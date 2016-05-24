<template>
    <div class="main marginTop100">
        <h2>这是订单详情{{$route.params.orderid}}，三级路由</h2>
        <Display></Display>
    </div>
</template>
<script type="text/javascript">
    import Display from '../../components/Display'
    export default{
        components:{
            Display,
        }
    }
</script>
