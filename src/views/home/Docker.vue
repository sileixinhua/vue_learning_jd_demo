<template>
    <div class="docker">
        <!-- BEM 命名法则 -->
        <!-- block__element--Modifier -->
        <div
            v-for="(item, index) in dockerList"
            :class="{'docker__item': true, 'docker__item--active': index === 0}"
            class="docker__item"
            :key="item.icon"
        >
            <div class='iconfont' v-html="item.icon"></div>
            <div class='docker__tittle'>{{item.text}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DockerPage',
  setup () {
    const dockerList = [
      { icon: '&#xe639;', text: '首页' },
      { icon: '&#xe899;', text: '购物车' },
      { icon: '&#xe8ae;', text: '订单' },
      { icon: '&#xe62f;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
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
