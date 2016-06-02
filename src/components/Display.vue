

<template>

<div>
    <h3 style="color:#ff0000">vuex跨组件状态测试值：Count is {{ counterValue }}</h3>
    <p>
        {{orderid}}
    </p>
</div>

</template>

<script>
import {
    getCount
}
from '../vuex/getters'
export default {
    props:['orderid'],
    vuex: {
        getters: {
            // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
            counterValue: getCount
        }
    },
    ready:function(){
        console.log(this.orderid);
    }
}

</script>
