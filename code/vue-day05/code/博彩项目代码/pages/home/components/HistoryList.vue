<template>
    <div class="div-padding">
       
        <history-item  
           v-for="item in items" 
           :key="item.code" 
           :history="item"
           @click.native="gotoDetailsPage('/details?code=' + item.code)">
        </history-item>
    </div>
</template>


<script>
import HistoryItem from './HistoryItem'
export default {
    name:"history-list",
    props:["items"],
    components:{
        HistoryItem
    },
    methods:{
        gotoDetailsPage(path){
            //$router实际上叫全局的路由对象，来自于vue-router的模块
            //$route表示私有组件的路由对象
            this.$router.push(path)  
        }
    }
}
</script>


<style scoped>
    .div-padding{
        padding-left:10px;
    }
</style>
