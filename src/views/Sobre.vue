<template>
    <div>
      <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">

            <!---------------------------------------------------//
            //          História                                //
            ---------------------------------------------------->
                <b-row class="text-center">
                    <b-col><h1 class="font-header">nossa historia</h1></b-col>
                </b-row>
                <b-row>
                    <b-col class="text-sobre">
                            <span>Fundada em 2.005, a Dobuê Movelaria iniciou suas atividades nas instalações de uma antiga granja, na cidade de Sabáudia, interior do estado do Paraná, na época a empresa contava com uma pequena equipe e estrutura física limitada, a produção era exclusivamente dedicada à cabeceiras para box.<br />
                            Em junho de 2.007, a empresa mudou-se para instalações próprias, e desde então investe ininterruptamente em tecnologia, estrutura e na equipe de trabalhadores. <br />
                            No ano de 2.016 inserimos em nossa linha de produtos as salas de jantar.<br />
                            Hoje contamos com mais 10.000 m² de área produtiva, entre indústria e escritório, e um quadro de mais 100 colaboradores.<br />
                            Ao longo dos 16 anos presente no mercado da indústria e comércio de móveis a Dobuê sempre se destacou pela qualidade dos seus produtos e ganha cada vez mais espaço no cenário nacional, sempre trabalhando para atender a todos com excelência e qualidade.
                            </span>
                    </b-col>
                    <b-col>
                        <img src="@/assets/dobue.png" alt="Dobue" class="b-dobue float-right">
                    </b-col>
                </b-row>

                <!---------------------------------------------------//
                //          Missão visão valores                    //
                ---------------------------------------------------->
                <b-row>
                  <b-col>
                      <b-card class="card-sobre" title="nossa MISSÃO">
                        <b-card-text>
                          Nossa missão é ter orgulho no que fazemos, fabricar nossos móveis com a máxima qualidade e oferecer conforto e segurança aos nossos clientes.
                        </b-card-text>
                      </b-card>
                  </b-col>

                  <b-col>
                    <b-card class="card-sobre" title="nossa visão">
                      <b-card-text>
                        Consolidar nossa marca no mercado, oferecendo aos nossos clientes e parceiros relações transparentes e duradouras, focando no desenvolvimento sustentável e traçando estratégias para suprir as necessidades da empresa e do mercado.
                      </b-card-text>
                    </b-card>
                  </b-col>

                  <b-col>
                    <b-card class="card-sobre" title="nossos valores">
                      <b-card-text>
                        A empresa preza pela integridade, colaboração, ética, paixão, responsabilidade, respeito, comprometimento e qualidade.
                      </b-card-text>
                    </b-card>
                  </b-col>

                </b-row>
            </v-container>
        </v-main>
      <Rodape />
    </div>
</template>

<script>
//https://xd.adobe.com/view/d2cbe841-8e9f-4465-a7e9-128875e0a186-8798/specs/
  import Toolbar from '../components/Toolbar'
  import Rodape from '../components/Rodape'

  export default {
    name: 'App',

    components: {
      Toolbar,
      Rodape
    },
    data (){
     
      return {

      }
    }
    
};
</script>
<style scoped>

  .text-sobre{
        text-align: justify;
        font-size: 16px;
        vertical-align: baseline;
    }

    .b-dobue{
      width: 100%;
    }
    .card-sobre{
      background-color: #FFFFFF !important;
    }
    .card-missao, .card-title {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 700; 
    }
    .card-text{
      text-align: justify;
    }
</style>