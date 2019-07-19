<template>
    <div>
       <title-bar title="博彩详情页" needback="true"></title-bar>
       <carousel></carousel>
       　<!-- 自定义详情页部分　-->
        <div class="row item div-padding" >
                <!--左边11个格子-->
                <div class="col-xs-12">
                    <!--开奖日期-->
                    <div class="row">
                        <span style="font-size: 18px;">第{{history.code}}期</span>
                        <span style="margin-left: 10px;">{{history.date}}</span>
                    </div>

                    <!--开奖号码-->
                    <div class="row div-padding" style="margin-top: 10px;">
                        
                        <div class="ball-item ball-red" v-for="red,index in redBallData" :key="index">{{red}}</div>
                        <div class="ball-item ball-blue">{{history.blue}}</div>
                        
                    </div>

                </div>

            


        </div>


        
                <div class="container" style="margin:0px auto">
                    
                    <div class="row" style="width:100%;padding:10px;">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>售出数量</th>
                                        <th>最高的奖金</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{history.sales}}</td>
                                        <td>{{history.poolmoney}}</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>

                    <div class="row" style="width:100%;padding:10px;">
                            <table class="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th colspan="3">投注记录</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td>code</td>
                                        <td>投注数量</td>
                                        <td>投注总额</td>
                                    </tr>
                                    <tr v-for="rs in history.prizegrades">
                                        <td>{{rs.code}}</td>
                                        <td>{{rs.typenum}}</td>
                                        <td>{{rs.typemoney}}</td> 
                                    </tr> 
                                </tbody>
                            </table>
                    </div>


                </div> 
                <br />   <br />   <br />   <br />   
       <menu-bar index="1" ></menu-bar>
    </div>

</template>





<script>

import TitleBar from "@/pages/common/TitleBar" 
import Carousel from "@/pages/common/Carousel" 
import MenuBar from '@/pages/common/MenuBar'
import axios from 'axios' 
export default {
    name:"details-page",
    data(){
        return {
           
            history:{},
            redBallData:[]
        }
    },
    components:{
        TitleBar,
        Carousel,
        MenuBar
    },

    mounted(){
        //console.log( this.$route.query ) 
        let code = this.$route.query.code
        axios.get("/static/detail?code=" + code).then( result=>{
            //console.log(result)
            this.history = result.data.data 
            this.redBallData = this.history.red.split(',')
            console.log(this.redBallData) 
        })
        
    }

}
</script>

<style scoped>
.div-padding{
    padding-left: 20px;
}
</style>
