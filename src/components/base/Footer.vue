<template>
  <div class="page-footer">
    <div class="footer__content">
      <div class="links">
        <div v-for="item in navigationItems" :key="`footer-link-${item.name}`" class="link">
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div class="social-media">
        <a href="https://facebook.com/riverdrina/" target="_blank">
          <svg-icons icon="facebook" stroke="transparent" fill="#8FD9A8" :width="24" :height="24"/>
        </a>
        <a href="https://www.instagram.com/riverapartments/" target="_blank">
          <svg-icons icon="instagram" view-box="0 0 242 242" stroke="transparent" fill="#8FD9A8" :width="24" :height="24"/>
        </a>
        <a href="https://wa.me/41767923562" target="_blank">
          <svg-icons icon="whatsup" view-box="0 0 308 308" stroke="transparent" fill="#8FD9A8" :width="24" :height="24"/>
        </a>
      </div>
      <div class="contact-mail">
        <a href="mailto:info@riverdrina.ba">
          info@riverdrina.ba
        </a>
      </div>
      <div class="copyright">
        <span>
          © 2022 River Drina, Inc. All right reserved
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Footer extends Vue {
  get navigationItems() {
    return [
      {
        name: this.$t(`navigation.about`),
        link: '/about'
      },
      {
        name: this.$t(`navigation.apartments`),
        link: '/apartments'
      },
      {
        name: this.$t(`navigation.wellnessSpa`),
        link: '/wellness'
      },
      {
        name: this.$t(`navigation.swimmingPool`),
        link: '/pool'
      },
      {
        name: this.$t(`navigation.location`),
        link: '/location'
      },
    ];
  }
}

export default Footer;
</script>

<style lang="scss">
.page-footer {
  background: #4B778D;
  color: #fff;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  .footer__content {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .links {
      display: flex;
      width: 100%;
      justify-content: space-around;
      margin-bottom: 30px;

      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }

      .link {
        padding-bottom: 5px;
      }

      a:not(:hover) {
        color: #ffffff;
      }
    }

    .social-media {
      display: flex;
      margin-bottom: 20px;

      .vue-icon__wrapper {
        padding: 8px;
        margin: 0 10px;
        border: 2px solid #8fd9a8;
        border-radius: 50%;
        transition: all 250ms ease;
        cursor: pointer;

        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .contact-mail {
      margin-bottom: 30px;

      a {
        color: #8fd9a8;
      }
    }

    .copyright {
      span{
        font-size: 12px;
      }
    }
  }
}
</style>
