<template>
  <div class="our-content-container">
    <our-uzb-scroll-items />
    <our-scale-items />
    <our-open-uzb />
    <our-carousel />
    <our-travel-items />
    <our-tour-uzb/>
  </div>
</template>
<script>
import OurUzbScrollItems from "@/views/content/OurUzbScrollItems.vue";
import OurScaleItems from "@/views/content/OurScaleItems.vue";
import OurOpenUzb from "@/views/content/OurOpenUzb.vue";
import OurCarousel from "@/views/content/OurCarousel.vue";
import OurTravelItems from "@/views/content/OurTravelItems.vue";
import OurTourUzb from "@/views/content/OurTourUzb.vue";
export default {
  name: "our-content",
  components: {
    OurUzbScrollItems,
    OurScaleItems,
    OurOpenUzb,
    OurCarousel,
    OurTravelItems,
    OurTourUzb
  },
};
</script>
