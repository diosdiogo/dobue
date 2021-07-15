<template>
    <div>
        <v-card
            flat
            tile
           
            >
            <v-toolbar dense class="toolbar">
                <v-container class="content-toobar">
                    <font-awesome-icon :icon="['fas', 'phone-alt']" class="icon"/> 
                    <span style="margin-right:8%;"> {{ contato.telefone_principal }} </span>

                    <font-awesome-icon :icon="['far', 'clock']" class="icon header-fone"/> 
                    <span class="header-fone"> Seg - Sex: 07:45 – 12:00 | 13:15 – 17:45 </span>
                    
                    <v-spacer></v-spacer>
                    <div class="social-toobar">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="icon"/> 
                        <span style="margin-right:15px;"> {{ contato.email_principal }}</span>
                        <a :href=social[0].social_url class="link-rede-social"><font-awesome-icon style="margin-right:15px;" :icon="['fab', 'facebook-f']" class="icon"/></a>
                        <a :href=social[1].social_url class="link-rede-social"><font-awesome-icon :icon="['fab', 'instagram']" class="icon"/></a>
                    </div>
                    
                </v-container>
                
            </v-toolbar>
                
        </v-card>
        <v-container class="pa-0">
            <b-navbar toggleable="lg">
                <b-navbar-brand href="/">
                    <img :src=modulo.modulo_aparencia_logo alt="Logo-Dobue" class="logo-dobue">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/">{{ menu.modulo1 }}</b-nav-item>
                        <b-nav-item to="/sobre">{{ menu.modulo2 }} </b-nav-item>
                        <b-nav-item to="/produto">{{ menu.modulo3 }}</b-nav-item>
                        <b-nav-item to="/clientes">{{ menu.modulo4 }}</b-nav-item>
                        <b-nav-item to="/representante">{{ menu.modulo5 }}</b-nav-item>
                        <b-nav-item to="/contato">{{ menu.modulo6 }}</b-nav-item>
                        <b-nav-item to="/download">{{ menu.modulo7 }}</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </v-container>
    </div>
</template>

<script>

import axios from 'axios'
   export default {
       name: 'menu',
        components: {},
        data(){
            return {
                contato:{},
                menu:{},
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

            axios.get('https://api.dobue.com.br/menu.php','', headers)
            .then((function (response) {
                if(response.status == 200) {
                    this.menu = response.data;
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
    };
</script>
<style scoped>
    .icon{
        margin-right: 8px !important;
        font-size: 16px;
    }
    .toolbar{
        padding: 0 0 0px 20px;
        background-color: #512B42 !important;
        color:#FFFFFF !important;
        font-size: 12px !important;
    }
    .content-toobar{
        display: flex;
    }
    .logo-dobue{
        top:0;
        width: 253px;
    }
    .navbar{
        padding: 0 1rem;
    }
    .nav-link{
        font-size: 12px;
        color: #000;
        font-weight: 600;
    }
    .link-rede-social{
        color: #fff;
    }
    @media (max-width: 980px) {
        .logo-dobue{
            width: 150px !important;
        }
    }
    @media(max-width: 760px){
        .header-fone{
            display: none;
        }
        .social-toobar{
            display: flex;
            align-items: flex;
            margin-top: 8px;
        }
    }
</style>