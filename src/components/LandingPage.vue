<template>
  <div>
    <navigation/>
    <page-cover/>
    <features/>
    <about/>
    <apartments/>
    <location-features :text="$t(`welcome.text`)"/>
    <wellness/>
    <pool/>
    <location/>
    <quote/>
    <contact/>
    <page-footer/>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Navigation from "@/components/base/Navigation.vue";
import PageFooter from "@/components/base/Footer.vue";
import PageCover from "@/components/sections/PageCover.vue";
import Features from "@/components/sections/Features.vue";
import Apartments from "@/components/sections/Apartments.vue";
import About from "@/components/sections/About.vue";
import Quote from "@/components/sections/Quote.vue";
import LocationFeatures from "@/components/sections/LocationFeatures.vue";
import Wellness from "@/components/sections/Wellness.vue";
import Pool from "@/components/sections/Pool.vue";
import Location from "@/components/sections/Location.vue";
import Contact from "@/components/sections/Contact.vue";

@Component({
  components: {
    Navigation,
    PageCover,
    Features,
    About,
    Apartments,
    Quote,
    Wellness,
    Pool,
    Location,
    Contact,
    PageFooter,
    LocationFeatures,
  }
})
class LandingPage extends Vue {

}

export default LandingPage;
</script>

<style lang="scss">

</style>
