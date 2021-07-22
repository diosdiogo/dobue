<template>
    <div>
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
                :img-src="item.src" :alt="i.alt"> 
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
    import axios from 'axios'
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
        methods: {
        },
        created(){
            const headers = { 
            "Content-Type": "application/json"
            }
            axios.get('https://api.dobue.com.br/slide.php','', headers)
            .then((function (response) {
                if(response.status == 200) {
                    this.imageCarousel = response.data;
                }
                
            }).bind(this))
        }
    }
</script>

<style scoped>

</style>