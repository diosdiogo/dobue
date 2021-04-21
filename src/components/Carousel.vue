<template>
    <div>
       
        <!-- <v-carousel hide-delimiters>
            <v-carousel-item>
            <font-awesome-icon :icon="['fas', 'angle-left']" class="icon" />
                    <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                        >
                        <div class="display-3">
                            <img style="width:100%" src="@/assets/Painel_Toronto.jpg" alt="Painel Toronto">
                        </div>
                    </v-row>
            </v-carousel-item>
        </v-carousel> -->
        <b-carousel 
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
           >
                 <b-carousel-slide  
                 v-for="(item,i) in imageCarousel"
                :key="i"
                :img-src="require(`@/`+item.src)" :alt="i.alt"> </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                slide: 0,
                sliding: null,
                imageCarousel:[
                    {src: 'assets/Painel_Toronto.jpg', alt: "Painel Toronto"},
                    {src: 'assets/Painel_Munique.jpg', alt: "Painel Monique"},
                    {src: 'assets/Painel_Istambul.jpg', alt: "Painel Istambul"},
                ]
            }
        },
    }
</script>

<style scoped>

</style>