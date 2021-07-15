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
                        <h1 class="font-header">{{pagina.titulo}}</h1>
                        <span>{{pagina.descricao}}</span>
                    </b-col>
                </b-row>
                <div class="card-subgrupo" style="margin-top: 15px; margin-bottom:15px;">
                    <div class="painel-subgrupo" :key="i.grupo_id" v-for="(i) in group" cols="6">
                      <b-card
                        overlay
                        :img-src=i.grupo_image
                        img-alt="Card Image"
                        text-variant="white"
                        class="card-grupo"
                        @click="buscarProduto(i)"
                      >
                        <div class="descricao-subgrupo">
                            <span class="text-descricao-subgrupo">{{ i.grupo_descricao }}</span>
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
  import axios from 'axios'

  export default {
    name: 'App',

    components: {
      Toolbar,
      Rodape,
      ModalProduto
    },
    data (){
     
      return {
        group: {},
        produto:  [],
        pagina: {},
        dimensoes:[],
        materiais:[],
        embalagem:[]
      }
    },
    mounted() {
      const headers = { 
        "Content-Type": "application/json"
        }

      axios.get('https://api.dobue.com.br/grupo.php','', headers)
        .then((function (response) {
          if(response.status == 200) {
              this.group = response.data;
            this.group.sort((a, b) => {
              if(a.descricao > b.descricao)
                return 1
              if(a.descricao < b.descricao)
                return -1
              return 0
            });
          }
            
        }).bind(this)),

        axios.get('https://api.dobue.com.br/pageProduto.php','', headers)
        .then((function (response) {
          if(response.status == 200) {
              this.pagina = response.data;
          }
            
        }).bind(this))
    },
    methods: {
      buscarProduto(e){
        const headers = { 
        "Content-Type": "application/json"
        }

      axios.get('https://api.dobue.com.br/produto_by_grupo.php?grupo='+e.grupo_id+'','', headers)
        .then((function (response) {
            if(response.status == 200) {
                var retorno = response.data;
                this.produto = [];
                var cores = []
                retorno.forEach((value, index) => {
                  cores = [],
                  value['0'].grupoCores.forEach((grupoCor, keyGrupoCor) =>{
                    grupoCor['0'].forEach((cor, keyCor) =>{
                       cores.push({
                         id: cor.id,
                         descricao: cor.descricao,
                         cor: cor.codigo,
                         grupo: grupoCor.grupoNome
                       })
                    })
                  })
                  this.produto.push({
                    id: value.produto_id,
                    produto: value.produto_titulo,
                    descricao: value.produto_descricao,
                    dimensoes: value.produto_tamanho,
                    materiais: value.produto_material,
                    embalagem: value.produto_embalagem,
                    img: value.produto_imagem,
                    cores: cores
                  })
                })
                this.$bvModal.show('modalProduto')
            }
            
        }).bind(this))

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