<template>
    <div class="menu menu-bar-container">
        <div :class="['col-xs-4', 'menu-item',{'menu-item-activied':index==='1'}]">
            <span class="glyphicon glyphicon-home"></span>
            <p>首页</p>
        </div>

        <div :class="['col-xs-4', 'menu-item',{'menu-item-activied':index==='2'}]">
            <span class="glyphicon glyphicon-certificate"></span>
            <p>选码</p>
        </div>

        <div :class="['col-xs-4', 'menu-item',{'menu-item-activied':index==='3'}]">
            <span class="glyphicon glyphicon-user"></span>
            <p>我的</p>
        </div>        
    </div>
</template>


<script>
export default {
    name:"menu-bar",
    props:{
 
            index:{
                type:String,
                default:"1" // 1表示首页,2表示选码,3表示我的
            
            }
    }
}
</script>



<style scoped>
    .menu-bar-container{
        height: 55px;
    }
</style>
