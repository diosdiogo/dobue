<template>
    <div class="rodape">
         
        <v-main class="rodape-1">
            <v-container>
                <b-row align-v="center">
                   <!---------------------------------------------------//
                    //          Informações de contato rodapé           //
                    ---------------------------------------------------->

                    <b-col cols="6">
                         <b-row class="contato">
                            <b-col>
                                <span class="rodape-info">Rua Campos Sales, 45 <br /> Parque Industrial Novo <br /> Sabáudia - PR</span>
                            </b-col>
                        </b-row>
                        <b-row class="contato">
                            <b-col class="info-contato">
                                <b-row>
                                    <b-col>
                                         <font-awesome-icon :icon="['fas', 'envelope']" style=" margin-top: 15px; font-size: 25px; margin-right: 10px;"/>
                                        <span class="rodape-info">sac@dobue.com.br  <br /> contato@dobue.com.br</span>
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
                                        <span class="rodape-info">( 43 ) 3151-1611</span>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                    <!---------------------------------------------------//
                    //                     Logo rodapé                  //
                    ---------------------------------------------------->
                    <b-col cols="6">
                        <img src="@/assets/logo-2.png" alt="" class="logo-rodape">
                    </b-col>
                </b-row>
                  <!---------------------------------------------------//
                    //          redes social rodapé                      //
                    ---------------------------------------------------->
                <b-row>
                     <b-col>
                        <a href="https://www.facebook.com/dobue.movelaria.39" class="link-rede-social"><font-awesome-icon style="margin-right:5px; color: #fff" :icon="['fab', 'facebook-f']" class="icon"/> 
                        <span style="margin-right:18px;"> Dobue Movelaria </span></a>
                    </b-col>
                    <b-col>
                        <a href="https://www.instagram.com/dobue_movelaria/" class="link-rede-social"><font-awesome-icon style="margin-right:5px; color: #fff" :icon="['fab', 'instagram']" class="icon"/> 
                        <span> @dobue_movelaria </span></a>
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
     
</template>

<script>
export default {

}
</script>

<style scoped>
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
        height: 55px;
        font-size: 11px;
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
    .v-application a {
        color: #fff !important;
    }
    .link-rede-social a{
        color: #fff !important;
    }
</style>