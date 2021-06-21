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
                        <h1 class="font-header">produtos</h1>
                        <span>It is a long established fact that a reader will be distracted by</span>
                    </b-col>
                </b-row>
                <div class="card-subgrupo" style="margin-top: 15px; margin-bottom:15px;">
                    <div class="painel-subgrupo" :key="i.id" v-for="(i) in group" cols="6">
                      <b-card
                        overlay
                        :img-src="require( '@/' + i.img )"
                        img-alt="Card Image"
                        text-variant="white"
                        class="card-grupo"
                        @click="buscarProduto(i)"
                      >
                        <div class="descricao-subgrupo">
                            <span class="text-descricao-subgrupo">{{ i.descricao }}</span>
                        </div>
                      </b-card>
                    </div>
                </div>
               
               <ModalProduto :produto='produto'/>
            </v-container>
        </v-main>
      <Rodape />
    </div>
</template>

<script>
//https://xd.adobe.com/view/d2cbe841-8e9f-4465-a7e9-128875e0a186-8798/specs/
  import Toolbar from '@/components/Toolbar'
  import Rodape from '@/components/Rodape'
  import ModalProduto from '@/components/ModalProduto'
  import Json from '@/components/Produto.json'

  //import axios from 'axios'

  export default {
    name: 'App',

    components: {
      Toolbar,
      Rodape,
      ModalProduto
    },
    data (){
     
      return {
        group: Json.group,
        produtos: Json.produtos,
        produto:  [],
        dimensoes:[],
        materiais:[],
        embalagem:[]
      }
    },
    mounted() {
      this.group.sort((a, b) => {
        if(a.descricao > b.descricao)
          return 1
        if(a.descricao < b.descricao)
          return -1
        return 0
      });

      const dataGrupo = {
          lista:'grupo'
       }

      const headers = { 
       "Content-Type": "application/json"
      }
      // axios.post('http://localhost:8080/admin/', dataGrupo, headers)
      // .then(function (response) {
        
      //   console.log(response);
      // })
    },
    methods: {
      buscarProduto(e){
        const produto   = [];
        const dimensoes = [];

        this.produtos.map(function(value, key){
          if(e.id == value.grupo){
            produto.push(value)
          }
        })
        this.produto = produto
        console.log(this.produto)
        // if(this.produto.length > 0){
        //     dimensoes =  produto.dimensoes.split(";")
        // }
        // console.log(dimensoes)

        this.$bvModal.show('modalProduto')
      }
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
  .card-subgrupo{
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .painel-subgrupo{
    width: 50%;
  }
  .card-grupo img{
    width: 100%;
    height: 250px;
    cursor: pointer;
  }
  .descricao-subgrupo{
    position: absolute;
     bottom: 0;
     background-color: rgba(243, 243, 243, 0.5);
     width: 100%;
     height: 38px;
     left: 0;
     padding-left: 15px;
  }
  .text-descricao-subgrupo{
    color: #000000;
    font-size: 21px;
    font-weight: 600;
  }

  
</style>