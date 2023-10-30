<template>
  <div>
    <Title>Отзывы</Title>
    <div class="coverflow-example">
      <swiper
          class="swiper"
          :modules="modules"
          :pagination="pagination"
          :effect="'coverflow'"
          :grab-cursor="true"
          :loop="true"
          :slides-per-view="3"
          :space-between="0"
          :coverflow-effect="{
        rotate: 0,
        stretch: -50,
        depth: 100,
        modifier: 3,
        slideShadows: true
      }"
      >
        <swiper-slide class="slide" v-for="item in $store.state.feedbacks.feedback" :key="index">
          <div class="slide__box">
            <div class="name">{{item.name}}</div>
            <div class="text__slide">{{item.text}}</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Title from "@/components/UI/Title.vue";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue'
import {EffectCoverflow, Pagination} from "swiper/modules";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
export default {
  components: {Title,Swiper, SwiperSlide},
  setup(){
    return{
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '" style="background-color: #fff;border-radius: 4px;padding: 8px; margin: 10px"></span>';
        },
      },
      modules:[Pagination, EffectCoverflow]
    }
  }
}
</script>

<style lang="scss" scoped>


.coverflow-example {

  position: relative;
}

.swiper {
  height: 100%;
  width: 100%;
  padding-bottom: 100px;

  .slide {
    width: 100%;
    height:100%;

    .slide__box {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: #018ABE;
      border-radius: 10px;
      padding:50px  60px ;
      .name{
        color: var(--white, #FFF);
        font-family: Proxima Nova,serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%;
        margin-bottom: 20px;
      }
      .text__slide{
        color: #FFF;
        font-family: Proxima Nova,serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 100;
        line-height: 140%;
      }
      @media (min-width: 1800px) {
        .text__slide{
          white-space: pre;
          font-size: 14px;
        }
      }
      @media (min-width: 2200px) {
        .text__slide{
          white-space: normal;
          font-size: 16px;
        }
      }
    }
  }
}

</style>