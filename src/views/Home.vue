

<template>

<div class="main marginTop100">
    <pre>
        Select data :{{arr}}
    </pre>
    <v-select :placeholder="'请选择一个物流公司'" :value.sync="arr" :options="fruitOptions" :search="true" :close-on-select="true">
    </v-select>
    <hr />
    <button type="button" class="btn btn-primary" @click="tojson" name="button">转换json</button>

    <hr />
    <h2>首页入口，一级路由</h2>
    <hello></hello>
    <popover effect="fade" placement="right" trigger="click" title="Title" content="Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod">
        <button class="btn btn-default ">Popover on bottom</button>
    </popover>
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
    <hr />
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

import vSelect from '../components/selecte/Select'


export default {
    components: {
        Hello,
        alert,
        popover,
        doc,
        vSelect,
    },
    data() {
      return {
        fruitOptions: [
          {value:'{"name":"顺丰速运","code":"shunfengsuyun"}', label:'顺丰速运'},
          {value:'{"name":"圆通快递","code":"yuantongkuaidi"}', label:'圆通快递'},
          {value:'{"name":"天天快递","code":"tiantiankuaidi"}', label:'天天快递'},
          {value:'{"name":"申通快递","code":"shentongkuaidi"}', label:'申通快递'},
          {value:'{"name":"EMS","code":"ems"}', label:'EMS'},
          {value:'{"name":"城通快递","code":"chengtongkuaidi"}', label:'城通快递'},
          {value:'{"name":"同城快递","code":"tongchengkuaidi"}', label:'同城快递'},
          {value:'{"name":"宅急送","code":"zhaijisong"}', label:'宅急送'},
          {value:'{"name":"德邦物流","code":"debangwuliu"}', label:'德邦物流'},
          {value:'{"name":"铁通物流","code":"tietongwuliu"}', label:'铁通快递'},
        ],
        arr: [],
      }
  },
  methods:{
      tojson:function(){
          if (this.arr[0]==undefined||this.arr[0]=='undefined') {
              return false;
          }
          console.log(this.arr);
          console.log(JSON.parse(this.arr));
      }
  }
}

</script>
