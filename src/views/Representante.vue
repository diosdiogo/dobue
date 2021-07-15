<template>
    <div>
        <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">
                <b-row class="text-center">
                    <b-col>
                        <h1 class="font-header">{{pagRep.titulo}}</h1>
                        <span>{{ pagRep.descricao }}</span>
                    </b-col>
                </b-row>
            </v-container>
            <!-- -------------------------------------------------//
            // Formulário de contato e mapa                       //
            //----------------------------------------------------->

            <div class="card-mapa">
                <div class="map">
                    <iframe 
                        :src="mapaRepesentante" 
                        class="map-contato" style="border:0; z-index:999" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="map-form">
                    <label class="label-representante">BUSQUE UM REPRESENTANTE: </label>
                    <b-form-select v-model="selectRepresentante" class="mb-6 select-representante" @change="buscarRepresentante($event)">
                        <template #first>
                            <b-form-select-option :value="null" disabled>-- REPRESENTANTES --</b-form-select-option>
                        </template>
                         <b-form-select-option v-for="(i,index) in representantes" :key="index" :value="i" class="select-representante" style="text-transform: uppercase;">{{ i.representante }}</b-form-select-option>
                    </b-form-select>

                    <div class="map-card-select">
                        <iframe 
                            :src="mapaRepesentante" 
                            class="map-contato" style="border:0; z-index:999" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                
            </div>
            
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
            Rodape,
        },
        data (){
            return {
                pagRep: {},
                selectRepresentante: '',
                mapaRepesentante: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.916004405069!2d-51.557155485549586!3d-23.31880615856341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecb058572434ff%3A0xa67a672feeeb754a!2sAv.%20Pres.%20Campos%20S%C3%A1les%2C%2045%20-%20Industrial%20Novo%2C%20Sab%C3%A1udia%20-%20PR%2C%2086720-000!5e0!3m2!1spt-BR!2sbr!4v1620981495304!5m2!1spt-BR!2sbr',
                representantes:[],
                }
        },
        created(){
            const headers = { 
            "Content-Type": "application/json"
            }
            axios.get('https://api.dobue.com.br/pageRep.php','', headers)
                .then((function (response) {
                    if(response.status == 200) {
                        this.pagRep = response.data;
                    }
            }).bind(this)),

            axios.get('https://api.dobue.com.br/representantes.php','', headers)
                .then((function (response) {
                     var retorno
                    if(response.status == 200) {
                        retorno = response.data;
                        retorno.forEach((value, index) => {
                            this.representantes.push({
                                id : value.id,
                                rota : value.maps,
                                representante: value.nome
                            })
                        })
                    }
            }).bind(this))
        },
        computed: {

        },

        methods: {
            buscarRepresentante(e){
                this.mapaRepesentante = e.rota;
                console.log(e);
            }
         }
   }
</script>
<style scoped>
    .form-control{
        border-radius: 10px !important;
        height: 53px;
    }   
    .btn-contato-enviar{
        border-radius: 10px !important;
        width: 178px;
        height: 44px;
        background-color: #512B42
    }
    .map-contato{
        width: 100%; 
        height: 600px;
    }
    .card-mapa{
        margin-top: 15px;
        width: 100%;
        height: 600px;
    }
    .map{

    }
    .map-form{
        width: 480px;
        height: 400px;
        background-color: #fff;
        position: absolute;
        top: 148px;
        right: 15px;
        z-index: 9999;
        padding: 15px;
    }
    .label-representante{
        font-size: 17px;
        color: #512B42;
        font-weight: 600;
    }
    .select-representante{
        height: 53px;
        border-radius: 10px;
        border: 1px #512B42 solid ;
    }
    .map-card-select{
        display:none;
    }
    .select-representante select{
        text-transform: uppercase;
    }
    @media(max-width: 760px){
        .contato-row{
            display: flow-root;
        }
       .map-form{
           position: relative;
           top:15px;
           width: 95%;
           height: 550px;
           margin: 0 auto;
           right: 0;
       }
       .map{
           display: none;
       }
        .map-contato{
            height: 400px;
        }
        .map-card-select{
            display:block;
        }
    }
    
</style>