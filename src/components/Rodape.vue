<template>
    <div class="rodape">

        <div class="desktop">
            <v-main class="rodape-1">
                <v-container>
                    <b-row align-v="center">
                        <!---------------------------------------------------//
                        //          Informações de contato rodapé           //
                        ---------------------------------------------------->
                        <b-col cols="4">
                            <b-row class="contato">
                                <b-col cols="1">
                                </b-col>
                                <b-col>
                                    <span class="rodape-info">{{ contato.endereco }}</span>
                                </b-col>
                            </b-row>
                            <b-row class="contato">
                                <b-col class="info-contato">
                                    <b-row>
                                        <b-col cols="1">
                                            <font-awesome-icon :icon="['fas', 'envelope']" style=" margin-top: 15px; font-size: 25px; margin-right: 10px;"/>
                                        </b-col>
                                        <b-col>
                                            <span class="rodape-info">{{ contato.email_principal }}  <br /> {{ contato.email_secundario }}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                            <b-row class="contato">
                                <b-col class="info-contato">
                                    <b-row>
                                        <b-col cols="1">
                                            <font-awesome-icon :icon="['fas', 'phone-alt']" class="icon-contato"/>
                                        </b-col>
                                        <b-col>
                                            <span class="rodape-info">{{ contato.telefone_principal }}</span>
                                        </b-col>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-col>
                        <!---------------------------------------------------//
                        //                     Logo rodapé                  //
                        ---------------------------------------------------->
                        <b-col cols="4" class="text-center">
                            <img :src=modulo.modulo_aparencia_rodape alt="" class="logo-rodape">
                        </b-col>
                        
                        <!---------------------------------------------------//
                        //          redes social rodapé                      //
                        ---------------------------------------------------->

                        <b-col cols="4">
                            <b-row class="text-right">
                                <b-col>
                                    <a :href=social[0].social_url class="link-rede-social"><font-awesome-icon style="margin-right:5px; color: #fff" :icon="['fab', 'facebook-f']" class="icon"/> 
                                    <span style="margin-right:18px; color: #fff"> Dobue Movelaria </span></a>
                                </b-col>
                            </b-row>
                            <b-row class="text-right">
                                <b-col>
                                    <a :href=social[1].social_url class="link-rede-social"><font-awesome-icon style="margin-right:5px; color:#fff" :icon="['fab', 'instagram']" class="icon"/> 
                                    <span style="color: #fff"> @dobue_movelaria </span></a>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                </v-container>
            </v-main>

            <!---------------------------------------------------//
            //          Direitos reservados                      //
            ---------------------------------------------------->
            <v-main class="rodape-2">
                <v-container>
                    <b-row>
                        <b-col>
                            <span>Dodue Movelaria © 2021 | Todos os direitos reservados</span>
                        </b-col>
                        <b-col style="text-align: end;">
                            <span>Desenvolvido por Arte Visual Soft</span>
                        </b-col>
                    </b-row>
                </v-container>
            </v-main>
        </div>

        <!---------------------------------------------------//
        //          Rodapé mobile                           //
        ---------------------------------------------------->
        <div class="mobile">
            <RodapeMobile />
        </div>
        
    </div>
     
</template>

<script>
import RodapeMobile from '../components/RodapeMobile'
import axios from 'axios'
export default {
    
    components: {
      RodapeMobile
    },
    data(){
        return {
            contato:{},
            social:{},
            modulo:{}
        }
    },
    methods: {
    },
    created(){
         const headers = { 
            "Content-Type": "application/json"
            }
            axios.get('https://api.dobue.com.br/contato.php','', headers)
            .then((function (response) {
                if(response.status == 200) {
                    this.contato = response.data;
                }
            }).bind(this)),

            axios.get('https://api.dobue.com.br/social.php','', headers)
            .then((function (response) {
                if(response.status == 200) {
                    this.social = response.data;
                }
            }).bind(this)),

            axios.get('https://api.dobue.com.br/modulo.php','', headers)
            .then((function (response) {
                if(response.status == 200) {
                    this.modulo = response.data;
                }
            }).bind(this))
        
    }
}
</script>

<style>
.rodape{
    color:#fff;
    bottom:0;
    width:100%;
}
.rodape-1{
    background-color:#512B42;
}

.rodape-2{
    background-color:#481B36;
    height: 41px;
    font-size: 13px;
    font-family: inherit;
}

.rodape-info{
    font-size: 14px;
    font-family: -webkit-pictograph;
    font-weight: 300;
}
.logo-rodape{
    width: 150px;
}
.contato{
    margin-top: 0 !important;
    padding: 0 !important;
}
.mobile{
    display: none;
}
@media(max-width: 760px){
    .desktop{
        display: none;
    }
   .mobile{
        display: block;
    }
}
 .link-rede-social a{
    text-decoration: none;
    color: #fff;
}
</style>