<template>
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
</template>

<script>
export default {
  name: 'StaticPart'
}
</script>

<style lang="scss">
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
</style>
