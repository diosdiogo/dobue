<template>
  <div>
    <b-modal id="modalProduto" hide-footer>
       <div>
            <b-card-group deck>
                
                <b-card :img-src=produto[next].img img-alt="Card image" img-top>

                    <b-button-toolbar key-nav aria-label="Toolbar with button groups" style="">
                        <b-button-group class="mx-1">
                            <b-button @click="anterior(produto.length)">&laquo;</b-button>
                            <b-button-group class="mx-1">
                            </b-button-group>
                            <b-button  @click="proximo(produto.length)">&raquo;</b-button>
                        </b-button-group>
                    </b-button-toolbar>

                    <b-card-text>
                        <b-row>
                            <b-col>
                                <h3 style="color: #fff">Descrição</h3>
                                <span style="color: #fff">{{ produto[next].descricao }}</span>
                            </b-col>
                            <b-col>
                                <h3 style="color: #fff">Cores</h3>
                                <div style="color: #fff; margin-bottom: 15px;" :key="item.id" v-for="(item) in produto[next].cores">
                                   <span :style="{'padding-left':'20px', 'margin-right': '15px','background':item.cor }"></span>  {{ item.descricao }}  
                                </div>
                            </b-col>
                            
                            <b-col>
                                <h3 style="color: #fff">Tamanho</h3>
                                <span style="color: #fff">{{ produto[next].dimensoes }}</span>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
                
            </b-card-group>
            
       </div>
    </b-modal>
</div>
</template>

<script>
export default {
    props: ['produto'],

    data (){
      return {
          dimensoes:[],
          materiais:[],
          embalagem:[],
          next: 0
      }
    },
    beforeMount(){
        
    },
    methods: {
        proximo(e){
            if(this.next < e-1){
                this.next ++
            }
        },
        anterior(e){
            if(this.next >= e-1){
                this.next = this.next -1
            }
        }
    }

}
</script>

<style>

    #modalProduto .modal-content{
        background-color: #4D4D4D;
    }
    #modalProduto .modal-dialog {
        max-width: 902px;
    }
    #modalProduto .modal-header {
        border-bottom: none !important;
    }
</style>

<style scoped>
    #modalProduto{
        color: #fff;
    }
.btn-toolbar {
    justify-content: center;
}
</style>