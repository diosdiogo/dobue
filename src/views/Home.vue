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
                img-width="600"
                img-height="180"
                style="text-shadow: 1px 1px 2px #333;"
                
              >
                <b-carousel-slide > 
                  <template #img>
                      <img
                        class="d-flex img-fluid"
                        width="300"

                      src="@/assets/carosel1.png"
                        alt="image slot"
                      >
                    <img
                        class="d-flex img-fluid"
                        width="300"

                        src="@/assets/carosel2.png"
                        alt="image slot"
                      >
                  </template>
                </b-carousel-slide>
            </b-carousel>
          </v-container>
          <v-main style="background-color:#F3F3F3; margin-top: 15px;">
              <v-container>
               <b-row class="home-missao">
                  <b-col>
                    <div class="video-home">
                      <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                        allowfullscreen
                      ></b-embed> 
                    </div>
                     
                  </b-col>
                  <b-col>
                    <div>
                      <b-card title="NOSSA MISSÃO" id="card-missao">

                        <b-card-text>
                         Nossa missão é ter orgulho no que fazemos, 
                         fabricar nossos móveis com a máxima qualidade e oferecer conforto e 
                         segurança aos nossos clientes.
                        </b-card-text>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
              </v-container>
          </v-main>
        <Rodape />
      </div>
</template> id: "11"


<script>
//https://xd.adobe.com/view/d2cbe841-8e9f-4465-a7e9-128875e0a186-8798/specs/
  import Toolbar from '../components/Toolbar'
  import Carousel from '../components/Carousel'
  import Rodape from '../components/Rodape'
  
  
  export default {
    name: 'App',
    components: {
      Toolbar,
      Carousel,
      Rodape,
      
    },
    data (){
      return {
          slide: 0,
          sliding: null,
          imageCarousel:[
              {src: 'assets/Painel_Toronto.jpg', alt: "Painel Toronto"},
              {src: 'assets/Painel_Munique.jpg', alt: "Painel Monique"},
              {src: 'assets/Painel_Istambul.jpg', alt: "Painel Istambul"},
          ],
      }
    },
      
};
</script>
<style>
  .font-header{
      font-size: 43px;
      font-weight: 900;
      color: #512B42;
      font-family: system-ui;
  }
  .font-header-2{
    font-size: 30px;
    font-weight: 900;
    color: #512B42;
    font-family: system-ui;
  }
  #carousel-index .carousel-inner {
    width: 94%;
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
  #carousel-index .carousel-control-prev{
    width:2%;
  }
  #carousel-index .carousel-control-next{
    width:2%;
  }
  #carousel-index .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%2fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
  }

   #carousel-index .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%2fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e")
  }

  .card-missao, .card{
    background-color:transparent !important;
    border: none !important;
    padding:40px;
  }
  .video-home{
    
    padding:25px;
    
  }
  .card-missao, .card-title{
    font-size: 25px;
    font-weight: 900;
    color: #512B42;
    font-family: system-ui;
  }
  
@media(max-width: 760px){
  .home-missao{
      display: block !important;
  }
  .card-missao, .card{
    padding: 0;
    text-align: justify;
  }
  .text-center{
    width: 100% !important;
  }
}
  
</style>