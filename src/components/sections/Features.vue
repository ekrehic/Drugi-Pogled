<template>
  <div class="section features">
    <div class="columns is-mobile is-multiline">
      <div v-for="f in features" :key="`feature-${f.name}`" class="column  is-6-touch is-3-desktop">
        <div class="feature">
          <img :src="f.icon" :alt="f.name">
          <h4 v-text="f.name"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Features extends Vue {
  get features() {
    return [
      {
        name: this.$t(`features.activities`),
        icon: require('@/assets/images/features/outdoor_activities.png'),
      },
      {
        name: this.$t(`features.silence`),
        icon: require('@/assets/images/features/silence.png'),
      },
      {
        name: this.$t(`features.pool`),
        icon: require('@/assets/images/features/pool.png'),
      },
      {
        name: this.$t(`features.relaxation`),
        icon: require('@/assets/images/features/relaxation.png'),
      },
    ];
  }
}

export default Features;
</script>

<style lang="scss">
.features {

  @media  screen and (min-width: 1316px){
    .columns {
      justify-content: space-between;

      .column {
        width: unset;
      }
    }
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 126px;

      @media screen and (max-width: 768px) {
        width: 120px;
      }

      @media screen and (max-width: 420px) {
        width: 80px;
      }
    }

    h4 {
      font-weight: 300;
      text-align: center;
    }
  }
}
</style>
