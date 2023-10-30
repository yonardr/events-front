<template>
  <router-link :to="{path: 'sessions' + `/${data.id}`} " class="link">
  <div class="container">
    <img  :src="imageUrl"/>
    <div class="text">
    <div class="date">{{data.date}}</div>
    <div class="name">{{data.name}}</div>
    <div class="description">{{data.description}}</div>
      <router-link :to="{path: 'sessions' + `/${data.id}`} ">
      <my-button class="btn" :color="'blue'" >Открыть сеанс</my-button>
      </router-link>
    </div>
  </div>
  </router-link>
</template>

<script>

import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  props:{
    data:{

    }
  },
  setup(props){
    const imageUrl = new URL(`${process.env.VUE_APP_API_URL}/${props.data.img}`, import.meta.url).href
    return {imageUrl};
  }

}
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  display: flex;
  border: solid 2px var(--accent, #018ABE);
  padding: 50px 60px;
  border-radius: 20px;
}
.text{
  margin-left: 50px;
}
.date{
  text-align: center;
  width: 105px;
  border-radius: 5px;
  background: var(--accent, #018ABE);
  align-items: flex-start;
  padding: 6px 12px 5px 12px;
  color: #fff;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
  margin-bottom: 30px;
}
.name{
  color: var(--white, #FFF);
  font-family: El Messiri,serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 20px;
}
.description{
  color: var(--white, #FFF);
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: 140%;
  margin-bottom: 40px;
}
.btn{
  color: var(--white, #FFF);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%;
}
img{
  width: 550px;
}
.link{
  text-decoration: none;
}
</style>