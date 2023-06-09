<template>
  <div class="navigation">
    <div class="navigation__topbar">
      <div class="navigation__logo">
        <img alt="River Drina" src="@/assets/images/RiverDrina_logo_plain.png"/>
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
            <button class="button" @click="bookApartment">
              {{ $t(`navigation.book`) }}
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
        <button class="button is-yellow" @click="bookApartment">
          {{ $t(`navigation.book`) }}
        </button>
    </div>

    <div class="navigation__language-selector">
      <span :class="currentLang === 'ba' ? `navigation__language is-active` : `navigation__language is-clickable`" @click="setLanguage('ba')">
        BHS
      </span>
      <span>
        /
      </span>
      <span :class="currentLang === 'en' ? `navigation__language is-active` : `navigation__language is-clickable`" @click="setLanguage('en')">
        ENG
      </span>
    </div>

    <b-modal v-model="modals.book">
      <div class="modal__body">
        <div class="is-flex is-justify-content-center is-align-items-center p-b-20">
          <img class="wave" src="@/assets/images/wave-green.png" alt="Green river drina wave"/>
        </div>
        <book/>
      </div>
    </b-modal>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Book from "@/components/forms/Book.vue";

@Component({
  components: {
    Book,
  }
})
class Navigation extends Vue {
  isMobileMenuActive = false;

  modals = {
    book: false,
  }

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
      {
        name: this.$t(`navigation.contact`),
        link: '/contact'
      },
    ];
  }

  get currentLang() {
    return this.$i18n.locale
  }

  setLanguage(lang) {
    if(lang === this.$i18n.locale) return;

    this.$i18n.locale = lang;
  }


  toggleMenu() {
    this.isMobileMenuActive = !this.isMobileMenuActive;
  }

  bookApartment() {
    this.modals.book = true;
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
    height: 80px;
    z-index: 100;

    @media screen and (max-width: 1024px) {
      height: 56px;
    }

    @media screen and (max-width: 760px) {
      padding: 0 28px;
    }

    .navigation__logo {
      padding: 5px 0;
      height: 100%;

      img {
        max-height: 100%;
        width: auto;
      }
    }

    .navigation__menu {
      width: 80%;

      .columns {
        text-align: right;
        justify-content: space-between;

        .column {
          width: unset;
        }
      }

      .navigation__item {
        text-transform: lowercase;
        font-size: 18px;
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
            stroke: #28B5B5;
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
    background: #8FD9A8;
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
        color: #ffffff;
      }
    }

    .button {
      margin-top: 10px;
      font-size: 20px;
      font-weight: 600;
    }
  }

  .navigation__language-selector {
    position: fixed;
    top: 80px;
    z-index: 100;
    background: linear-gradient(45deg, transparent 0%, transparent 5%, #4B778D 60%, #4B778D 100%);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 50px;
    color: #fff;
    font-size: 15px;
    height: 24px;

    @media screen and (max-width: 1024px) {
      top: 56px;
    }

    .navigation__language {
      padding: 0 5px;

      &.is-active {
        font-weight: 700;
      }

      &.is-clickable {
        :hover {
          color: #8FD9A8;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
