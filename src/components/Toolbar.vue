<template>
    <div>
        <v-card
            flat
            tile
           
            >
            <v-toolbar dense class="toolbar">
                <v-container class="content-toobar">
                    <font-awesome-icon :icon="['fas', 'phone-alt']" class="icon"/> 
                    <span style="margin-right:8%;"> ( 43 ) 3151-1611 </span>

                    <font-awesome-icon :icon="['far', 'clock']" class="icon header-fone"/> 
                    <span class="header-fone"> Seg - Sex: 07:45 – 12:00 | 13:15 – 17:45 </span>
                    
                    <v-spacer></v-spacer>
                    <div class="social-toobar">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="icon"/> 
                        <span style="margin-right:15px;"> contato@dobue.com.br</span>
                        <a href="https://www.facebook.com/dobue.movelaria.39" class="link-rede-social"><font-awesome-icon style="margin-right:15px;" :icon="['fab', 'facebook-f']" class="icon"/></a>
                        <a href="https://www.instagram.com/dobue_movelaria/" class="link-rede-social"><font-awesome-icon :icon="['fab', 'instagram']" class="icon"/></a>
                    </div>
                    
                </v-container>
                
            </v-toolbar>
                
        </v-card>
        <v-container class="pa-0">
            <b-navbar toggleable="lg">
                <b-navbar-brand href="/">
                    <img src="@/assets/logo-dobue.png" alt="Logo-Dobue" class="logo-dobue">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item to="/">HOME</b-nav-item>
                        <b-nav-item to="/sobre">SOBRE </b-nav-item>
                        <b-nav-item to="/produto">PRODUTOS</b-nav-item>
                        <b-nav-item to="/clientes">CLIENTES</b-nav-item>
                        <b-nav-item to="/representante">REPRESENTANTES</b-nav-item>
                        <b-nav-item to="/contato">CONTATO</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </v-container>
    </div>
</template>

<script>

    export default {

    }
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