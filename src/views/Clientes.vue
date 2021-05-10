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
                        <h1 class="font-header">clientes</h1>
                        <span>It is a long established fact that a reader will be distracted by</span>
                    </b-col>
                </b-row>
                <b-row style="margin-top: 15px; margin-bottom:15px;">
                    <b-col cols="4" v-for="(item,i) in clientes" :key="i">
                        <img :src="require(`@/`+item.src)" :alt="item.alt" class="image-cliente">
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

  export default {
    name: 'App',

    components: {
      Toolbar,
      Rodape
    },
    data (){
     
      return {
          clientes:[
              {src:'assets/logo-esplanada-negativo.png', alt:'esplanada'},
              {src:'assets/MultilojaLogoAzulsemBox.png', alt:'esplanada'},
              {src: 'assets/logo-benoit.png', alt:'Benolt'}
          ]
      }
    }
    
};
</script>
<style scoped>
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