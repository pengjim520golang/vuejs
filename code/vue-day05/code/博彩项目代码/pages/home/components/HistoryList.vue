<template>
    <div class="div-padding">
        <history-item v-for="item in items" :key="item.code" :history="item"></history-item>
    </div>
</template>


<script>
import HistoryItem from './HistoryItem'
export default {
    name:"history-list",
    props:["items"],
    components:{
        HistoryItem
    }
}
</script>


<style scoped>
    .div-padding{
        padding-left:10px;
    }
</style>
