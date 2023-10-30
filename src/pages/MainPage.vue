<template>
  <NavBar />
  <div id="start">
  <div class="__container" >
    <StartView />
    <Sessions style="margin-top: 150px"/>
  </div>
    <Feedback style="margin-top: 80px" id="feedback"/>
  <div class="__container">
    <About style="margin-top: 80px" id="about"/>
    <Contacts style="margin-top: 80px" id="contacts"/>
  </div>
  </div>
</template>

<script>
import StartView from "@/components/MainPage/StartView.vue";
import NavBar from "@/components/MainPage/NavBar.vue";
import Sessions from "@/components/MainPage/Sessions.vue";
import About from "@/components/MainPage/About.vue";
import Contacts from "@/components/MainPage/Contacts.vue";
import Feedback from "@/components/MainPage/Feedback.vue";

export default {
  components: {Feedback, Contacts, About, Sessions, StartView, NavBar}

}
</script>

<style lang="scss">
body{
  background: #162831 !important;
}

.__container{
  margin: 0 auto;
  width: 1300px;
}

</style>