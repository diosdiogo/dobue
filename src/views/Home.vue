<template>
    <div>
        <Toolbar style="margin-bottom:15px;"/>
        <Carousel style="margin-bottom:15px;"/>

         <v-container class="pa-0">
            <b-row class="text-center">
                <b-col><h1 class="font-header">PRODUTOS</h1></b-col>
            </b-row>
            <b-row class="text-center">
                <b-col><span class="font-description">Nossos produtos, cabeceiras, painéis, mesas, cadeiras e buffets.</span></b-col>
            </b-row>

             <b-carousel 
                id="carousel-index"
                v-model="slide"
                :interval="4000"
                controls
                img-width="300"
                img-height="180"
                style="text-shadow: 1px 1px 2px #333;"
                
              >
                <b-carousel-slide > 
                  <template #img>
                      <img
                        class="d-flex img-fluid"
                        width="300"

                        src="https://picsum.photos/1024/480/?image=55"
                        alt="image slot"
                      >
                    <img
                        class="d-flex img-fluid"
                        width="300"

                        src="https://picsum.photos/1024/480/?image=58"
                        alt="image slot"
                      >

                    </template>
                </b-carousel-slide>
        </b-carousel>
         </v-container>
      </div>
</template>

<script>
  import Toolbar from '../components/Toolbar'
  import Carousel from '../components/Carousel'

  export default {
    name: 'App',

    components: {
      Toolbar,
      Carousel
    },
    data (){
     
      return {
          slide: 0,
          sliding: null,
          imageCarousel:[
              {src: 'assets/Painel_Toronto.jpg', alt: "Painel Toronto"},
              {src: 'assets/Painel_Munique.jpg', alt: "Painel Monique"},
              {src: 'assets/Painel_Istambul.jpg', alt: "Painel Istambul"},
          ]
      }
    }
    
};
</script>
<style>
  .font-header{
      font-size: 43px;
      font-weight: 900;
      color: #512B42;
      font-family: system-ui;
  }
  #carousel-index .carousel-inner {
    width: 84%;
    margin: 0 auto;
  }
  #carousel-index .carousel-item {
    display: flex !important;
    float: none !important;
    margin: 0 auto !important;
  }
  #carousel-index img {
    padding: 15px;
    width: 50%;
    margin: 0 auto;
  }
  #carousel-index .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%2fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
  }

   #carousel-index .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%2fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e")
  }

  
</style>