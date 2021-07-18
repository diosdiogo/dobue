<template>
    <div>
      <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">

            <!---------------------------------------------------//
            //          titulo pagina                                //
            ---------------------------------------------------->
                <b-row class="text-center" style="margin-top: 15px;">
                    <b-col>
                        <h1 class="font-header">{{ paginaD.titulo }}</h1>
                        <span>{{ paginaD.descricao }}</span>
                    </b-col>
                </b-row>
                <div>
                </div>

                <!---------------------------------------------------//
                //          Lista titulo                            //
                -------------------------------------------------- -->

                <b-container class="bv-example-row">
                    <b-row>

                    </b-row>
                </b-container>
               
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
          download:[],
          paginaD: {}
      }
    },
    created(){
        const headers = { 
        "Content-Type": "application/json"
        }
        axios.get('https://api.dobue.com.br/pageDownload.php','', headers)
        .then((function (response) {
            if(response.status == 200) {
                this.paginaD = response.data;
            }
            
        }).bind(this)),
      
        axios.get('https://api.dobue.com.br/clientes.php','', headers)
        .then((function (response) {
            var retorno
            if(response.status == 200) {
              retorno = response.data;
                console.log(retorno)
            }
            
        }).bind(this))
    }
    
};
</script>
<style>
 .font-header{
    font-size: 40px;
    font-weight: 700;
    color: #512B42;
    font-family: system-ui;
    text-transform: uppercase;
  }
  .image-cliente{
    width: 100%;
    vertical-align: top;
  }
</style>