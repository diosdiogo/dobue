<template>
    <div>
       
        <v-card
            flat
            tile
            height="150px"
            color="red"
            >
                <v-toolbar dense class="toolbar">
                    <v-container class="content-toobar">
                        <font-awesome-icon :icon="['fas', 'phone-alt']" class="icon"/> 
                        <span style="margin-right:8%;"> ( 43 ) 3151-1611 </span>

                        <font-awesome-icon :icon="['far', 'clock']" class="icon"/> 
                        <span> Seg - Sex: 07:45 – 12:00 | 13:15 – 17:45 </span>
                        
                        <v-spacer></v-spacer>
                        <font-awesome-icon :icon="['fas', 'envelope']" class="icon"/> 
                        <span style="margin-right:15px;"> contato@dobue.com.br</span>
                        <font-awesome-icon style="margin-right:15px;" :icon="['fab', 'facebook-f']" class="icon"/> 
                        <font-awesome-icon :icon="['fab', 'instagram']" class="icon"/> 
                    </v-container>
                    
                </v-toolbar>
                <v-container>
                    
                </v-container>
            </v-card>
        

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
</style>