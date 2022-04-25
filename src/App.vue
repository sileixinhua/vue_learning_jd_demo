<template>
  <nav>
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
  </nav>
  <router-view/>
</template>

<style lang="scss">
.docker {
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

// & 元素修饰符
// .docker__item {
//   flex: 1;
//   text-align: center;
//   .iconfont {
//     font-size: .18rem; //20px == 0.1rem
//     margin: .07rem 0 .02rem 0;
//   }
// }

// .docker__item--active {
//   color: #1fa4fc;
// }

.docker__tittle {
  font-size: 15px;
  // transform: scale(.5 .5);
  // transform-origin: center top;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

</style>
