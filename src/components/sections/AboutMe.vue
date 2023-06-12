<template>
  <div id="aboutMe" class="about-me__wrapper">
    <div class="about-me">
      <div class="section">
        <div class="columns is-multiline">
          <div class="column is-12 column--image column--image--touch is-flex is-justify-content-flex-end is-hidden-desktop">
            <img src="@/assets/images/Danijela_Tadic.png" alt="Danijela Tadic"/>
          </div>
          <div class="column column--title is-12 p-b-0">
            <h1>
              O meni
            </h1>
          </div>
          <div class="column is-12-touch is-8-desktop column--text">
            <p class="p-b-15">
              Ja sam Danijela Tadić, magistra pedagogije i edukantica Gestalt psihoterapije pod supervizijom. Oduvijek me privlačila ideja kako pomoći drugima i bolje se međusobno razumjeti. Na taj put krećem upisujući studij pedagogije. Profesionalnu karijeru započinjem radom u osnovnoj školi te u sustavu obrazovanja ostajem duži period. Dodatno sam se educirala u području profesionalnog usmjeravanja i savjetovanja u razvoju karijere te sam završila program stručnog usavršavanja vezano uz upravljanje ljudskim resursima. S Gestaltom sam se susrela kad sam imala 25 godina. Moja terapeutica me primila za ruku i povela na jedno nevjerojatno putovanje. Pružajući mi podršku često me je poticala da „bacim“ drugi pogled na stvari. Gestalt i ja družili smo se tijekom svih ovih godina na različite načine.
            </p>
            <p class="p-b-15">
              Tijekom trogodišnjeg osobnog iskustva partnerske terapije prema Imago principima javila mi se želja za potpunijim upoznavanjem sebe te prije tri i pol godine upisujem edukaciju za Gestalt psihoterapeuta pri Centru IGW Zagreb te sam trenutno edukantica 3. godine. Prije nepune dvije godine odlučila sam da se u potpunosti želim posvetiti psihoterapijskom radu s klijentima te sam otvorila privatnu praksu. Svoje daljnje stručno usavršavanje planiram u smjeru partnerske terapije prema Imago principima.
            </p>
            <p class="p-b-15">
              Kao vanjski suradnik u pružanju psihoterapijskih i savjetodavnih usluga surađujem s Centrom za poremećaje hranjenja BEA. Kontinuirano se dodatno educiram i usavršavavam te sam uključena u superviziju psihoterapijskog rada s ciljem što kvalitetnijeg rada s klijentima.
              <span class="is-block">
            Pridruženi sam član Društva gestalt i integrativnih psihoterapeuta Hrvatske (DGIPH).
          </span>
            </p>
            <p class="">
              Radeći posao psihoterapeuta ostvarila sam svoj davni san o tome što želim biti i što želim raditi. Privatno sam supruga i majka jednog dječaka i jedne djevojčice. Životni prostor dijelimo s jednom predivnom sivom macom.
            </p>
          </div>
          <div class="column is-4 column--image--desktop is-hidden-touch">
            <img src="@/assets/images/Danijela_Tadic.png" alt="Danijela Tadic"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class AboutMe extends Vue {
}

export default AboutMe;
</script>

<style lang="scss">
.about-me__wrapper {
  padding-top: 160px;

  .about-me {
    background: #222F4F;
    color: #fff;

    p {
      color: #fff;
    }

    .column--title {
      @media screen and (max-width: 1024px)  {
        margin-top: -100px;
      }

      @media screen and (max-width: 768px)  {
        margin-top: -60px;
      }
    }

    .column--image--desktop {
      img {
        margin-top: -280px;
      }
    }

    .column--image--touch {
      img {
        width: 280px;
        margin-top: -180px;

        @media screen and (max-width: 740px)  {
          margin-top: -160px;
          width: 200px;
        }

        @media screen and (max-width: 420px)  {
          margin-top: -140px;
          width: 160px;
        }
      }
    }
  }
}

</style>
