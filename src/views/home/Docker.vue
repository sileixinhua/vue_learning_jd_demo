<template>
    <div class="docker">
        <!-- BEM 命名法则 -->
        <!-- block__element--Modifier -->
        <span class="docker__item docker__item--active">
            <div class='iconfont'>&#xe639;</div>
            <div class='docker__tittle'>首页</div>
        </span>
        <span class="docker__item">
            <div class='iconfont'>&#xe899;</div>
            <div class='docker__tittle'>购物车</div>
        </span>
        <span class="docker__item">
            <div class='iconfont'>&#xe8ae;</div>
            <div class='docker__tittle'>订单</div>
        </span>
        <span class="docker__item">
            <div class='iconfont'>&#xe62f;</div>
            <div class='docker__tittle'>我的</div>
        </span>
    </div>
</template>

<script>
export default {
  name: 'DockerPage'
}
</script>

<style lang="scss">
.docker {
  @import url(./style/virables.scss);
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: 1px solid #F1F1F1;
  // background: green;
  box-sizing: border-box;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      font-size: .18rem; //20px == 0.1rem
      margin: .07rem 0 .02rem 0;
    }
    &--active {
      color: #1fa4fc;
    }
  }
}

.docker__tittle {
  font-size: 15px;
  // transform: scale(.5 .5);
  // transform-origin: center top;
}
</style>
