<template>
    <div id="aboutGestalt" class="about-gestalt">
      <div class="section">
        <div class="columns is-multiline">
          <div class="column is-4 column--image lh-0">
            <img src="@/assets/images/Gestalt_therapy.png" alt="Gestalt therapy"/>
          </div>
          <div class="column is-8 column--text is-flex is-flex-direction-column is-justify-content-flex-end">
            <h1>
              O Gestalt terapiji
            </h1>
            <p class="p-b-15">
              Gestalt terapija je humanistički i iskustveni pristup psihoterapiji koji se fokusira na sadašnji trenutak i naglašava osobnu odgovornost, samosvijest i integraciju uma, tijela i emocija. Središnji dio gestalt psihoterapije je pojam “gestalt”, koji se odnosi na cjelokupnu ili kompletnu sliku, što znači da osobu promatramo kao cjelinu. Terapeut potiče klijenta da istraži svoje misli, osjećaje i ponašanja u kontekstu svog neposrednog iskustva, umjesto da se oslanja isključivo na prošle događaje ili buduća očekivanja. Usredotočujući se na sadašnjost, na ovdje i sada, gestalt terapija ima za cilj pomoći klijentu da stekne uvid u svoje obrasce ponašanja i odnosa prema drugima i svijetu oko sebe.            </p>
            <p class="p-b-15">
              Jedna od ključnih tehnika u gestalt terapiji je korištenje eksperimenata i vježbi za olakšavanje svjesnosti i samootkrivanja. Kroz dijaloge, igranje uloga i druge interaktivne metode, klijenta se potiče da postane svjesniji svojih emocija, tjelesnih osjeta i neverbalnih znakova. Upravo ta povećana samosvijest može dovesti do dubljeg razumijevanja nečijih temeljnih potreba, sukoba i neriješenih pitanja.            </p>
            <p class="p-b-15">
              Drugi važan aspekt gestalt terapije je naglasak na osobnoj odgovornosti. Klijenta se potiče da preuzme odgovornost nad svojim mislima, osjećajima i postupcima, prepoznajući da ima moć donošenja odluka i stvaranja promjena u svom životu. Ovaj osnažujući pristup potiče samoprihvaćanje, samoizražavanje i osobni rast.
            </p>
            <p class="p-b-15">
              Gestalt terapeuti također obraćaju pozornost na dinamiku odnosa između terapeuta i klijenta. Terapeutski odnos služi kao mikrokozmos klijentovih interakcija u vanjskom svijetu, pružajući prilike za istraživanje, eksperimentiranje i iscjeljivanje. Terapeut je u ulozi suputnika te na taj način podržava klijentov proces samootkrivanja.
            </p>
            <p class="p-b-20">
              Gestalt psihoterapija nudi holistički i integrativni pristup osobnoj transformaciji i psihološkoj dobrobiti. Promicanjem samosvijesti, odgovornosti i autentičnog izražavanja, ovaj terapijski pravac može pomoći pojedincima da razviju zdravije odnose, riješe sukobe i žive ispunjenijim životom.
            </p>
          </div>
        </div>
      </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
class AboutGestalt extends Vue {
}

export default AboutGestalt;
</script>

<style lang="scss">
.about-gestalt {
  padding-top: 20px;

  h1 {
    padding-bottom: 12px;
  }

  .column--image {
    padding-right: 40px;

    @media screen and (max-width: 768px) {
      padding-right: 12px;
    }
  }

  .column--text {
    padding-left: 40px;

    @media screen and (max-width: 768px) {
      padding-left: 12px;
    }
  }
}
</style>
