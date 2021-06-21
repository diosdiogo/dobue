<template>
    <div>
        <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">
                <b-row class="text-center">
                    <b-col>
                        <h1 class="font-header">representante</h1>
                        <span>It is a long established fact that a reader will be distracted by</span>
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

   export default {
        name: 'App',
        components: {
            Toolbar,
            Rodape,
        },
        data (){
            return {
                selectRepresentante: '',
                mapaRepesentante: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.916004405069!2d-51.557155485549586!3d-23.31880615856341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecb058572434ff%3A0xa67a672feeeb754a!2sAv.%20Pres.%20Campos%20S%C3%A1les%2C%2045%20-%20Industrial%20Novo%2C%20Sab%C3%A1udia%20-%20PR%2C%2086720-000!5e0!3m2!1spt-BR!2sbr!4v1620981495304!5m2!1spt-BR!2sbr',
                representantes:[
                    {
                        id: 1,
                        rota: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1828.605360840809!2d-51.45062174678848!3d-23.560874219745227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ec9be0d9b5b959%3A0x2dd5502c5f5a520!2sR.%20Humberto%20Contato%2C%20400%20-%20Jardim%20Paulista%2C%20Apucarana%20-%20PR%2C%2086808-310!5e0!3m2!1spt-BR!2sbr!4v1621863451511!5m2!1spt-BR!2sbr',
                        representante: 'Ataidemoveis Representações Comerciais de Moveis'
                    },
                    {
                        id: 2,
                        rota:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.2495525655954!2d-51.083075285367805!3d-29.538226014874883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951948c7438c9777%3A0x1c15493884200b36!2sR.%20Imac.%20Concei%C3%A7%C3%A3o%2C%2088%2C%20Morro%20Reuter%20-%20RS%2C%2093990-000!5e0!3m2!1spt-BR!2sbr!4v1620983788513!5m2!1spt-BR!2sbr',
                        representante:'DMC HOME COMERCIO E REPRESENTAÇÕES'
                    },
                    {
                        id: 3,
                        rota: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.636845428666!2d-51.44614008554724!3d-23.401351361586638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eca3f0e6a8f9cb%3A0x63580704b844e250!2sR.%20Fruteira%2C%20415%20-%20Parque%20Veneza%2C%20Arapongas%20-%20PR%2C%2086701-650!5e0!3m2!1spt-BR!2sbr!4v1621863760183!5m2!1spt-BR!2sbr',
                        representante: 'Elizete Cortez Caminha'
                    },
                    {
                        id: 4,
                        rota:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.385551193823!2d-49.32724278570397!3d-16.707603650526256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef660259aa535%3A0xac3764c4fe6e4d96!2sR.%20CP-19%2C%2050%20-%20Res.%20Celina%20Park%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1620984160623!5m2!1spt-BR!2sbr',
                        representante:'Gilmar Agassi Evaristo Prestadora de Serviços'
                    },
                ],
                }
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