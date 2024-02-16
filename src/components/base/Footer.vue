<template>
  <div class="page-footer">
    <div class="footer__content">
      <div class="footer__logo">
        <img class="logo" src="@/assets/images/drugipogled_white.png" alt="DRUGI POGLED"/>
      </div>

      <div class="links">
        <div v-for="item in navigationItems" :key="`footer-link-${item.name}`" class="link">
          <router-link :to="item.link">
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div class="contact-mail">
        <a href="mailto:info@drugipogled.hr">
          info@drugipogled.hr
        </a>
      </div>
      <div class="social-media">
        <a href="https://www.facebook.com/drugi.pogled.savjetovanje" target="_blank">
          <svg-icons icon="facebook" stroke="transparent" fill="#03AFAE" :width="24" :height="24"/>
        </a>
        <a href="https://www.instagram.com/drugi_pogled_savjetovanje/" target="_blank">
          <svg-icons icon="instagram" view-box="0 0 242 242" stroke="transparent" fill="#03AFAE" :width="24" :height="24"/>
        </a>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="obrt">
          <span class="has-text-weight-semibold is-block">
            Drugi pogled, obrt za savjetovanje i poduku, vl. Danijela Tadić
          </span>
        <span class="is-block">
            IBAN: HR1624020061140467055
          </span>
        <span class="is-block">
            Banka: Erste&Steiermärkische Bank d.d.
          </span>
      </div>
      <div class="copyright">
          <span>
            ©Copyright Drugi Pogled 2023. All right reserved
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
        name: 'Drugi pogled',
        link: '/drugiPogled'
      },
      {
        name: 'O meni',
        link: '/oMeni'
      },
      {
        name: 'O Gestalt terapiji',
        link: '/oGestaltTerapiji'
      },
      {
        name: 'Usluge i cjenik',
        link: '/usluge'
      },
      {
        name: 'Suradnja',
        link: '/suradnja'
      },
      {
        name: 'Kontakt',
        link: '/kontakt'
      },
    ];
  }
}

export default Footer;
</script>

<style lang="scss">
.page-footer {
  background: #222F4F;
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-top: 180px;
  }

  .footer__content {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .footer__logo {
      max-width: 200px;
      margin-bottom: 20px;
    }

    .links {
      display: flex;
      width: 100%;
      justify-content: space-around;
      margin-bottom: 20px;

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
        padding: 4px;
        margin: 0 10px;
        //border: 2px solid #8fd9a8;
        border-radius: 50%;
        transition: all 250ms ease;
        cursor: pointer;

        &:hover {
          transform: scale(1.08);
        }
      }
    }

    .contact-mail {
      margin-bottom: 30px;

      a {
        font-size: 20px;
        color: #03AFAE;
      }
    }
  }

  .footer__bottom {
    width: 100%;
    display: flex;
    background: rgba(0, 0, 0, 0.15);
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    span {
      font-size: 12px;
    }

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>
