<template>
    <div>
        <button @click='jianshao'>Increment-1</button>
        <h3 style="color:#ff0000">vuex跨组件状态测试值：Count is {{ counterValue }}</h3>
    </div>
</template>
<script type="text/javascript">
    import {jianshaoCounter} from '../vuex/actions.js'
    import { getCount } from '../vuex/getters'
    export default{
        vuex:{
            getters: {
              // 注意在这里你需要 `getCount` 函数本身而不是它的执行结果 'getCount()'
              counterValue: getCount
            },
            actions:{
                jianshao:jianshaoCounter
            }
        }
    }
</script>
