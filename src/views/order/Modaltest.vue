

<template>


    <modal :show.sync="showbox">
        <h3 slot="header">custom header</h3>
        <div slot="footer">
            <button class="modal-default-button" @click="setModal">
                好的
            </button>
        </div>
    </modal>


</template>

<script type="text/javascript">

import {showModal} from '../../vuex/actions'
import Modal from './Modal'
export default {
    props:['showbox'],
    vuex:{
        actions:{
            showmodal:showModal
        }
    },
    components: {
        Modal
    },
    methods:{
        setModal:function(){
            this.showmodal(false)
        }
    }
}

</script>
