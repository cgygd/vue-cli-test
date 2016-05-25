<template>
    <div class="main marginTop100">
        <h2>测试页面</h2>
        <Display></Display>
        <Increment></Increment>
        <Jianshao></Jianshao>
    </div>
</template>

<script type="text/javascript">
    import Display from '../components/Display'
    import Increment from '../components/Increment'
    import Jianshao from '../components/jianshao'
    export default{
        components:{
            Display,
            Increment,
            Jianshao
        }
    }
</script>
