<template>
  <div>
    <NavBar />
    <div class="wrapper">
    <Title>{{event.value.name}}</Title>
      <div class="content">
      <div class="text">
        <div class="date">{{event.value.date}}</div>
        <div class="name">{{event.value.name}}</div>
        <div class="description">{{event.value.description}}</div>

      </div>
        <img :src="imageUrl(event.value.img)" />
      </div>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useFetchOneEvent} from "@/components/hooks/useFetchOneEvent";
import Title from "@/components/UI/Title.vue";
import NavBar from "@/components/MainPage/NavBar.vue";
export default {
  components: {NavBar, Title},
setup() {
 const {event} = useFetchOneEvent({id: useRoute().params.id})
  function imageUrl(value) {
   return new URL(`${process.env.VUE_APP_API_URL}/${value}`, import.meta.url).href
  }
  return { event, imageUrl}
}

}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  top: 200px;
  width: 1300px;
  margin: 0 auto;
}
.content{
  display: flex;
}
.date{
  width: 96px;
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
img{
  width: 650px;
  border-radius: 10px;
  margin-left: 135px;
}
</style>