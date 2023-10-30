<template>
  <div class="wrapper__header" :class="uu">
  <div class="block__header">
<!--      <div class="img"></div>-->
    <router-link :to="{name: 'main', hash: '#start'}" class="img"></router-link>
    <div class="links">
  <router-link :to="{name: 'main', hash: '#start'}" class="link">Главная</router-link>
  <router-link to="/sessions" class="link">Сеансы</router-link>
  <router-link :to="{name: 'main', hash: '#feedback'}" class="link">Отзывы</router-link>
  <router-link :to="{name: 'main', hash: '#contacts'}" class="link">Контакты</router-link>
  <router-link :to="{name: 'main', hash: '#about'}" class="link">О нас</router-link>
      <router-link :to="{name: 'sessions'}">
        <my-button class="btn">Записаться на сеанс</my-button>
      </router-link>
    </div>

  </div>
    <div class="line"></div>
  </div>

</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  data() {
    return {
      pageOffset: 0,
      burger_active: false
    }
  },
  mounted() {
    window.addEventListener('scroll', async () =>this.pageOffset = window.pageYOffset)
  },

  computed:{
    uu(){
      if(this.pageOffset !== 0){
        return 'scroll'

      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper__header{
  width: 100%;
  height: 99px;
  z-index: 999;
  background-color: #162831;
  display: flex;
  justify-content: center;
  position: fixed;
  flex-direction: column;
  align-items: center;
  transition: all 0.6s ease 0s;
}
.block__header{
  width: 1300px;
  height: 99px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links {
  display: flex;
  align-items: center;
}
.link{
  margin: 0 30px;
  text-decoration: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 135%;
  color: var(--white, #FFF);
}
.btn{
  margin-left: 80px;
}
.img{
  width: 110px;
  height: 60px;
  background: center / contain no-repeat url('@/assets/logo2.png')
}
.scroll{
  transition: all 0.6s ease 0s;
  box-shadow: rgba(0, 0, 0, 0.07) 15px 15px 15px 15px;

}
.line{
  //width: 1300px;
  //height: 2px;
  //
  //background-color: #fff;
  //opacity: 0.3;
}
</style>