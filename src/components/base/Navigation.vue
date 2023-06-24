<template>
  <div class="navigation">
    <div class="navigation__topbar">
      <div class="navigation__logo">
        <img alt="Drugi Pogled" src="@/assets/images/dp-logo.png"/>
      </div>

      <div class="navigation__menu is-hidden-touch">
        <div class="columns is-vcentered">
          <div v-for="item in navigationItems" :key="`nav-${item.name}`" class="column is-2">
            <div class="navigation__item">
              <router-link :to="item.link">
                {{ item.name }}
              </router-link>
            </div>
          </div>
          <div class="column is-2">
            <button class="button" @click="contact">
              Kontaktiraj
            </button>
          </div>
        </div>
      </div>
      <div class="navigation__menu navigation__menu--touch is-hidden-desktop">
        <div class="menu cross">
          <label :class="isMobileMenuActive ? 'is-active' : ''" >
            <!--          <input type="checkbox">-->
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" @click="toggleMenu()">
              <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
              <path class="line--2" d="M0 50h99" />
              <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
            </svg>
          </label>
        </div>
      </div>
    </div>

    <div class="navigation__items--mobile is-hidden-desktop" :class="isMobileMenuActive ? 'is-active' : ''">
        <div v-for="item in navigationItems" :key="`nav-${item.name}-mobile`" class="navigation__item">
          <router-link :to="item.link">
            <div @click="isMobileMenuActive = false;">
              {{ item.name }}
            </div>
          </router-link>
        </div>
        <button class="button is-yellow" @click="contact">
          Kontaktiraj
        </button>
    </div>

<!--    <div class="navigation__language-selector">-->
<!--      <span :class="currentLang === 'ba' ? `navigation__language is-active` : `navigation__language is-clickable`" @click="setLanguage('ba')">-->
<!--        BHS-->
<!--      </span>-->
<!--      <span>-->
<!--        /-->
<!--      </span>-->
<!--      <span :class="currentLang === 'en' ? `navigation__language is-active` : `navigation__language is-clickable`" @click="setLanguage('en')">-->
<!--        ENG-->
<!--      </span>-->
<!--    </div>-->

    <b-modal v-model="modals.contact">
      <div class="modal__body">
        <contact-form/>
      </div>
    </b-modal>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ContactForm from "@/components/forms/ContactForm.vue";

@Component({
  components: {
    ContactForm,
  }
})
class Navigation extends Vue {
  isMobileMenuActive = false;

  modals = {
    contact: false,
  }

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

  toggleMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  contact() {
    this.modals.contact = true;
  }
}

export default Navigation;
</script>

<style lang="scss">
.navigation {
  .navigation__topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    z-index: 100;

    @media screen and (max-width: 1024px) {
      height: 56px;
    }

    @media screen and (max-width: 760px) {
      padding: 0 28px;
    }

    .navigation__logo {
      padding: 10px 0;
      height: 100%;

      img {
        max-height: 100%;
        width: auto;
      }
    }

    .navigation__menu {
      width: 70%;

      @media (min-resolution: 280dpi) {
        width: 80%;
      }

      .columns {
        text-align: right;
        justify-content: space-between;

        .column {
          width: unset;
        }
      }

      .navigation__item {
        font-size: 16px;
        font-weight: 600;

        @media (min-resolution: 280dpi) {
          font-size: 14px;
        }


        a {
          color: #222F4F;

          &:hover {
            color: #03AFAE;
          }
        }
      }

      &.navigation__menu--touch {
        .menu {
          display: flex;
          justify-content: flex-end;

          .line--1,
          .line--3 {
            --total-length: 111.22813415527344;
            --offset: -50.22813415527344;
          }
          .line--2 {
            --total-length: 99;
          }

          label {
            display: block;
            cursor: pointer;
            position: relative;
            width: 70px;
            height: 70px;

            &.is-active {
              svg {
                path {
                  transform: translateX(30px);
                }
                .line--1,
                .line--3 {
                  --offset: -17;
                  --length: 22.627416998;
                }
                .line--2 {
                  --offset: -20;
                  --length: 0;
                }
              }
            }
          }

          path {
            fill: none;
            stroke: #03AFAE;
            stroke-width: 4;
            stroke-linecap: round;
            stroke-linejoin: round;
            --length: 32;
            --offset: -38;
            stroke-dasharray: var(--length) var(--total-length);
            stroke-dashoffset: var(--offset);
            transition: all 600ms cubic-bezier(.645, .045, .355, 1);
          }
        }
      }
    }
  }

  .navigation__items--mobile {
    position: fixed;
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    padding-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #DED0BF;
    z-index: 80;
    transition: all 600ms cubic-bezier(.645, .045, .355, 1);

    * {
      opacity: 0;
      transition: all 600ms cubic-bezier(.645, .045, .355, 1);

    }

    &.is-active {
      height: 100vh;

      * {
        opacity: 1;
      }
    }

    .navigation__item {
      margin-bottom: 10px;

      a {
        font-size: 20px;
        font-weight: 600;
        color: #222F4F;
      }
    }

    .button {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
