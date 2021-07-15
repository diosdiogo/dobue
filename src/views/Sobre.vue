<template>
    <div>
      <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">

            <!---------------------------------------------------//
            //          História                                //
            ---------------------------------------------------->
                <b-row class="text-center">
                    <b-col><h1 class="font-header">{{ sobre.titulo_historia }}</h1></b-col>
                </b-row>
                <b-row class="sobre-missao">
                    <b-col class="text-sobre">
                            <span>
                                {{ sobre.descricao_historia }}
                            </span>
                    </b-col>
                    <b-col>
                        <img :src=sobre.imagem_video alt="Dobue" class="b-dobue float-right">
                    </b-col>
                </b-row>

                <!---------------------------------------------------//
                //          Missão visão valores                    //
                ---------------------------------------------------->
                <b-row class="sobre-card-dobue">
                  <b-col>
                      <b-card class="card-sobre" :title=sobre.titulo_missao>
                        <b-card-text>
                          {{ sobre.descricao_missao }}
                        </b-card-text>
                      </b-card>
                  </b-col>

                  <b-col>
                    <b-card class="card-sobre" :title=sobre.titulo_visao>
                      <b-card-text>
                        {{ sobre.descricao_visao }}
                      </b-card-text>
                    </b-card>
                  </b-col>

                  <b-col>
                    <b-card class="card-sobre" :title=sobre.titulo_valores>
                      <b-card-text>
                        {{ sobre.descricao_visao }}
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
  import axios from 'axios'
  export default {
    name: 'App',

    components: {
      Toolbar,
      Rodape
    },
    data (){
     
      return {
        sobre:{}
      }
    },
    created(){
        const headers = { 
        "Content-Type": "application/json"
        }
        axios.get('https://api.dobue.com.br/institucional.php','', headers)
        .then((function (response) {
            if(response.status == 200) {
                this.sobre = response.data;
            }
            
        }).bind(this))
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

    @media(max-width: 760px){
      .sobre-missao{
        display: block;
      }
      .sobre-card-dobue{
        display: flow-root;
      }
    }
    
</style>