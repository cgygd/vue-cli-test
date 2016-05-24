<template>
    <div class="main marginTop100">
        <h2>测试页面</h2>
        <Display></Display>
        <Increment></Increment>
    </div>
</template>

<script type="text/javascript">
    import Display from '../components/Display'
    import Increment from '../components/Increment'
    export default{
        components:{
            Display,
            Increment
        }
    }
</script>
