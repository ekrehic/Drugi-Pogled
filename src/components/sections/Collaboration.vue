<template>
  <div id="collaboration" class="collaboration">
      <div class="section">
        <h1 class="has-text-centered">
          Suradnja
        </h1>

        <p>
          Aktivni sam volonter u
          <span class="has-text-italic">
            Centru za poremećaje hranjenja BEA,
          </span>
          gdje pružam besplatnu psihološku podršku osobama s poremećajima prehrane. Više o Centru BEA na linku
          <a href="https://www.centarbea.hr" target="_blank">
            https://www.centarbea.hr
          </a>
        </p>
        <p>
          Surađujem s udrugom
          <span class="has-text-italic">
            Centar za razvoj vrijednosti
          </span>
          u aktivnosti „Psihosocijalno savjetovanje dostupno svima“ gdje također volontiram. O udruzi i samom projektu više na linku
          <a href="https://centarvrijednost.com.hr" target="_blank">
            https://centarvrijednost.com.hr
          </a>
        </p>
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class Quote extends Vue {
}

export default Quote;
</script>

<style lang="scss">
.collaboration {
  background: #03AFAE;
  color: #fff;

  h1, p, a {
    color: #fff;
  }

  h1 {
    padding-bottom: 12px;
  }

  a:hover {
    color: #222F4F;
  }
}

</style>
