<template>
  <div id="carousel-example-generic" class="carousel slide row" data-ride="carousel">
  <!-- Indicators -->
  <ol class="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>

  <!-- Wrapper for slides -->
  <div class="carousel-inner" role="listbox">
    <div class="item active">
      <img src="@/assets/images/1.jpg" alt="图片1">
      <div class="carousel-caption">
        博彩图片1
      </div>
    </div>
    <div class="item">
      <img src="@/assets/images/2.jpg" alt="pic2">
      <div class="carousel-caption">
        博彩图片2
      </div>
    </div>

    <div class="item">
      <img src="@/assets/images/3.jpg" alt="pic3">
      <div class="carousel-caption">
        博彩图片3
      </div>
    </div>

  </div>

  <!-- Controls -->
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>  
</template>


<script>
export default {
    name:"carousel"
}
</script>



<style scoped>

</style>
