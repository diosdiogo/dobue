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
                 <b-row style="margin-top: 15px">
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
                                    placeholder="Sua mensaggem..."
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

                        <GmapMap 
                            :center= "center"
                            :zoom="12"
                            style="width: 100%; height: 100%"
                        >
                            <GMapCluster :zoomOnClick="true">
                                <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
                                    @click="center = m.position" />
                            </GMapCluster>
                        </GmapMap>
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
</style>