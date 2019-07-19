<template>
    <div>
       <title-bar title="澳门博彩网站"></title-bar>
       <carousel></carousel>
       <history-list :items="lists"></history-list>
       <menu-bar index="1"></menu-bar>
    </div>
</template>


<script>

import TitleBar from "@/pages/common/TitleBar" 
import Carousel from "@/pages/common/Carousel" 
import HistoryList from './components/HistoryList'
import MenuBar from '@/pages/common/MenuBar'
import axios from 'axios'
export default {
    name:"home-page",
    components:{
        TitleBar,
        Carousel,
        HistoryList,
        MenuBar
    },
    data(){
        return {
            lists:[]
        }
    },
    mounted(){
        axios.get("/static/index").then(result=>{
            //console.log(result.data)
            this.lists = result.data.lists 
        })
    }
}
</script>

<style scoped>

</style>
