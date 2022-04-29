<template>
  <nav>
    <div class='wrapper'>
        <static-part></static-part>
        <near-by-page></near-by-page>
    </div>
    <docker-page></docker-page>
  </nav>
  <router-view/>
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearByPage from './NearBy.vue'
import DockerPage from './Docker.vue'
export default {
  name: 'HomePage',
  components: { StaticPart, NearByPage, DockerPage }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto; //纵向滚动
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;
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
