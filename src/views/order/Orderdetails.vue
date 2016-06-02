

<template>

<div class="main marginTop100">
    <h2>这是订单详情{{$route.params.orderid}}，三级路由</h2>
    <Display :orderid='$route.params.orderid'></Display>


    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <modal :show.sync="showModal">
        <h3 slot="header">custom header</h3>
    </modal>


</div>

</template>

<script type="text/javascript">
import Display from '../../components/Display'
import Modal from './Modal'
export default {
    components: {
        Display,
        Modal
    },
    data() {
        return {
            showModal: false
        }
    }
}

</script>
