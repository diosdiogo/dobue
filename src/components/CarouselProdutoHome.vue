<template>
  <b-carousel 
        id="carousel-index"
        v-model="slide"
        :interval="4000"
        controls
        img-width="600"
        img-height="180"
        style="text-shadow: 1px 1px 2px #333;"
        
        >
        <b-carousel-slide class="produto-slide"> 
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
            
            <img
                class="d-flex img-fluid"
                width="300"
                src="@/assets/carosel3.jpg"
                alt="image slot"
                >
            <img
                class="d-flex img-fluid"
                width="300"
                src="@/assets/carosel4.jpg"
                alt="image slot"
                >
            </template>
        </b-carousel-slide>
    </b-carousel>
</template>

<script>
export default {

}
</script>

<style>

</style>