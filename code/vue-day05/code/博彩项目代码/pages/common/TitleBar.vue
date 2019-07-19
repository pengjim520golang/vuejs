<template>
    <div class="row">
        <div class="col-xs-12 title"> 
            <div class="my-nav-back" v-if="needback">&lt;返回</div>{{title}}
        </div>
    </div> 
</template>


<script>
export default {
    name:"title-bar",
    props:["needback","title"]
}
</script>


<style scoped>
.my-nav-back{
    position:absolute;
}
</style>
