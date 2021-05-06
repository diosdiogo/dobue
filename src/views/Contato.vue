<template>
    <div>
        <Toolbar style="margin-bottom:15px;"/>
        <v-main style="background-color:#F3F3F3">
            <v-container class="pb-5">
                <b-row class="text-center">
                    <b-col><h1 class="font-header">contato</h1></b-col>
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
            Rodape
        },
        data (){
            
            return {
            
            }
        }
   }
</script>