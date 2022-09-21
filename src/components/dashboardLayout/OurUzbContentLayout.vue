<template>
  <div class="our-content-container">
    <our-uzb-scroll-items />
    <our-scale-items />
    <our-open-uzb />
    <our-carousel />
  </div>
</template>
<script>
import OurUzbScrollItems from "@/views/content/OurUzbScrollItems.vue";
import OurScaleItems from "@/views/content/OurScaleItems.vue";
import OurOpenUzb from "@/views/content/OurOpenUzb.vue";
import OurCarousel from "@/views/content/OurCarousel.vue";
export default {
  name: "our-content",
  components: { OurUzbScrollItems, OurScaleItems, OurOpenUzb, OurCarousel },
};
</script>
