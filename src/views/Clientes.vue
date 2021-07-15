<template>
    <div>
      <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">

            <!---------------------------------------------------//
            //          História                                //
            ---------------------------------------------------->
                <b-row class="text-center" style="margin-top: 15px;">
                    <b-col>
                        <h1 class="font-header">{{ paginaC.titulo }}</h1>
                        <span>{{ paginaC.descricao }}</span>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 30px; margin-bottom:30px;">
                    <b-col cols="4" v-for="(item,i) in clientes" :key="i">
                        <img :src=item.src :alt="item.alt" class="image-cliente">
                    </b-col>
                </b-row>

                <!---------------------------------------------------//
                //          Missão visão valores                    //
                ---------------------------------------------------->
               
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
          clientes:[],
          paginaC: {}
      }
    },
    created(){
        const headers = { 
        "Content-Type": "application/json"
        }
        axios.get('https://api.dobue.com.br/pageCliente.php','', headers)
        .then((function (response) {
            if(response.status == 200) {
                this.paginaC = response.data;
            }
            
        }).bind(this)),
      
        axios.get('https://api.dobue.com.br/clientes.php','', headers)
        .then((function (response) {
            var retorno
            if(response.status == 200) {
              retorno = response.data;
              retorno.forEach((value, index) => {
                this.clientes.push({
                  src: value.logo,
                  alt: value.nome
                })
              })
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