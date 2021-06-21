<template>
    <div>
        <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">
                <b-row class="text-center">
                    <b-col>
                        <h1 class="font-header">contato</h1>
                        <span>It is a long established fact that a reader will be distracted by</span>
                    </b-col>
                </b-row>
                <!-- -------------------------------------------------//
                // Formulário de contato e mapa                       //
                //----------------------------------------------------->
                 <b-row style="margin-top: 15px" class="contato-row">
                    <b-col>
                        <!-- -------------------------------------------------//
                        // Formulário                                        //
                        //----------------------------------------------------->
                        <b-form @submit="onSubmit">
                            <b-form-group id="input-nome">
                                <b-form-input
                                id="input-nome"
                                v-model="form.nome"
                                type="text"
                                placeholder="Seu nome"
                                required
                                ></b-form-input>
                            </b-form-group>

                            <b-form-group id="input-email">
                                <b-form-input
                                id="input-nome"
                                v-model="form.email"
                                type="email"
                                placeholder="Seu email"
                                required
                                ></b-form-input>

                            </b-form-group>

                            <b-form-group id="input-assunto">
                                <b-form-input
                                id="input-assunto"
                                v-model="form.email"
                                type="email"
                                placeholder="Seu assunto"
                                required
                                ></b-form-input>

                            </b-form-group>

                            <b-form-group id="input-mensagem">
                                <b-form-textarea
                                    id="textarea"
                                    v-model="form.msg"
                                    placeholder="Sua mensagem..."
                                    rows="3"
                                    max-rows="6"
                                    ></b-form-textarea>

                            </b-form-group>
                            <b-button type="submit" class="btn-contato-enviar" variant="primary">ENVIAR</b-button>
                        </b-form>
                    </b-col>
                    <b-col>
                        <!-- -------------------------------------------------//
                        // Mapa                                              //
                        //----------------------------------------------------->

                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.916004405069!2d-51.557155485549586!3d-23.31880615856341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecb058572434ff%3A0xa67a672feeeb754a!2sAv.%20Pres.%20Campos%20S%C3%A1les%2C%2045%20-%20Industrial%20Novo%2C%20Sab%C3%A1udia%20-%20PR%2C%2086720-000!5e0!3m2!1spt-BR!2sbr!4v1620981495304!5m2!1spt-BR!2sbr" 
                        class="map-contato" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </b-col>
                 </b-row>
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
            Rodape,
        },
        data (){
            return {
                form: { 
                    nome:       '',
                    email:      '',
                    assunto:    '',
                    msg:        ''
                },

                center: { lat: -23.3229379, lng: -51.5577118 },
                markers: [
                    {
                        position: {
                            lat: -23.3229360, 
                            lng: -51.5577118
                        }
                    },
                ]
            }
        },
        computed: {

        },

        methods: {
            onSubmit(event) {
                event.preventDefault()
                alert(JSON.stringify(this.form))
            },
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
        height: 100%
    }
    @media(max-width: 760px){
        .contato-row{
            display: flow-root;
        }
        .map-contato{
            width: 100%; 
            height: 250px;
        }
    }
    
</style>