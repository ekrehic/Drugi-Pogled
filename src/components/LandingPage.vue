<template>
  <div>
    <navigation/>
    <page-cover/>
    <features/>
    <about-me/>
    <about-gestalt/>
    <services/>
    <collaboration/>
<!--    <apartments/>-->
<!--    <location-features :text="$t(`welcome.text`)"/>-->
<!--    <wellness/>-->
<!--    <pool/>-->
<!--    <location/>-->
<!--    <quote/>-->
<!--    <contact/>-->
<!--    <page-footer/>-->
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Navigation from "@/components/base/Navigation.vue";
import PageCover from "@/components/sections/PageCover.vue";
import Features from "@/components/sections/Features.vue";
import AboutMe from "@/components/sections/AboutMe.vue";
import AboutGestalt from "@/components/sections/AboutGestalt.vue";
import Services from "@/components/sections/Services.vue";
import Collaboration from "@/components/sections/Collaboration.vue";
import Contact from "@/components/sections/Contact.vue";
import PageFooter from "@/components/base/Footer.vue";

@Component({
  components: {
    Navigation,
    PageCover,
    Features,
    AboutMe,
    AboutGestalt,
    Services,
    Collaboration,
    Contact,
    PageFooter,
  }
})
class LandingPage extends Vue {

}

export default LandingPage;
</script>

<style lang="scss">

</style>
