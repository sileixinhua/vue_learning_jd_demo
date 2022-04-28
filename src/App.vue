<template>
  <nav>
    <div class='wrapper'>
      <div class="position">
        <span class="iconfont position__icon">&#xe61f;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont position__notice">&#xe601;</span>
      </div>
      <div class='search'>
        <span class="iconfont">&#xe6e1;</span>
        山姆会员商店优惠商品
      </div>
      <div class="banner">
        <img
          class="banner__img"
          src='http://www.dell-lee.com/imgs/vue3/banner.jpg'
        />
      </div>
      <div class="icons">
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png"/>
          <p class="icons__item__desc">超市便利</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png"/>
          <p class="icons__item__desc">菜市场</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png"/>
          <p class="icons__item__desc">水果店</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png"/>
          <p class="icons__item__desc">鲜花绿植</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png"/>
          <p class="icons__item__desc">医药健康</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png"/>
          <p class="icons__item__desc">家居时尚</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png"/>
          <p class="icons__item__desc">烘培蛋糕</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png"/>
          <p class="icons__item__desc">签到</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png"/>
          <p class="icons__item__desc">大牌免运</p>
        </div>
        <div class="icons__item">
          <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png"/>
          <p class="icons__item__desc">红包套餐</p>
        </div>
      </div>
      <div class="gap"></div>
      <div class="nearby">
        <h3 class="nearby__tittle">附近店铺</h3>
        <div class="nearby__item">
          <img class="nearby__item__img" src="http://www.dell-lee.com/imgs/vue3/near.png"/>

        </div>
        <div class="nearby__content">
          <div class="nearby__content__tittle">沃尔玛</div>
          <div class="nearby__content__tags">沃尔玛
            <div class="nearby__content__tag">月售1万+</div>
            <div class="nearby__content__tag">月售1万</div>
            <div class="nearby__content__tag">月售1万</div>
          </div>
          <p class="nearby__content__highlight">VIP尊享满89元减4元运费卷（每月3张）</p>
        </div>
      </div>
    </div>

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
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
}

// .position__icon 优先级高于 .position
.position {
  @import url(./style/virables.scss);
  position: relative;
  padding: .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  .postion__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  .position__notice {
    position: absolute;
    right: 0;
    top: .18rem;
    font-size: .15rem;
  }
}

.search {
  line-height: .32rem;
  background: #f5f5f5;
  color: #b7b7b7;
  border-radius: .16rem;
  font-size: .14rem;
  .iconfont {
    position: relative;
    top: .03rem;
    display: inline-block;
    padding: 0 .08rem 0 .16rem;
    font-size: .2rem;
  }
  margin-bottom: .12rem;
}

.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  // 以上配置在绘制UI时，图片没加载出来时会预留位置，不会造成页面元素位置抖动
  &__img {
    width: 100%;
  }
}

.icons {
  display: flex;
  flex-wrap: wrap;
  // 自适应横排展示并且自适应换行
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
    }
  }
}

.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: #F1F1F1;
}

.nearby {

}

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
