<template>
    <h3 class="nearby__tittle">附近店铺</h3>
        <div
            class="nearby__item"
            v-for="item in nearbyList"
            :key="item.id"
        >
            <img class="nearby__item__img" :src="item.imgUrl"/>
            <div class="nearby__content">
            <div class="nearby__content__tittle">{{item.tittle}}</div>
            <div class="nearby__content__tags">
                <div class="nearby__content__tag">{{item.tags}}</div>
                <!-- <div class="nearby__content__tag">月售1万+</div>
                <div class="nearby__content__tag">月售1万+</div> -->
            </div>
            <p class="nearby__content__highlight">{{item.desc}}</p>
          </div>
        </div>
    <div class="nearby"></div>
</template>

<script>
export default {
  name: 'NearByPage',
  setup () {
    const nearbyList = [{
      id: 1,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      tittle: '沃尔玛',
      tags: '月售1万+ 起送费￥0 基础费￥5',
      desc: 'VIP尊享满89元减4元运费卷（每月3张）'
    }, {
      id: 2,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      tittle: '沃尔玛',
      tags: '月售1万+ 起送费￥0 基础费￥5',
      desc: 'VIP尊享满89元减4元运费卷（每月3张）'
    }, {
      id: 3,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      tittle: '沃尔玛',
      tags: '月售1万+ 起送费￥0 基础费￥5',
      desc: 'VIP尊享满89元减4元运费卷（每月3张）'
    }, {
      id: 4,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      tittle: '沃尔玛',
      tags: '月售1万+ 起送费￥0 基础费￥5',
      desc: 'VIP尊享满89元减4元运费卷（每月3张）'
    }, {
      id: 5,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      tittle: '沃尔玛',
      tags: '月售1万+ 起送费￥0 基础费￥5',
      desc: 'VIP尊享满89元减4元运费卷（每月3张）'
    }, {
      id: 6,
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      tittle: '沃尔玛',
      tags: '月售1万+ 起送费￥0 基础费￥5',
      desc: 'VIP尊享满89元减4元运费卷（每月3张）'
    }]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
.nearby {
  &__tittle {
    margin: .16rem 0 .02rem 0;
    font-size: .18rem;
    font-weight: normal;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    &__tittle {
      line-height: .22rem;
      font-size: .16rem;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin-top: .08rem;
      color: #E93B3B;
    }
    border-bottom: 1px solid #F1F1F1;
  }
}
</style>
