<template>
  <div class="our-content-container">
    <our-uzb-scroll-items />
    <our-scale-items />
    <our-open-uzb />
    <our-carousel />
    <our-travel-items />
    <our-tour-uzb/>
    <our-travell-helper/>
    <our-hot-now/>
    <our-cities-art/>
    <our-travell-location/>
    <our-travell-statistics/>
    <our-travell-news/>
    <our-travell-services/>
    <our-travell-videos/>
  </div>
</template>
<script>
import OurUzbScrollItems from "@/views/content/OurUzbScrollItems.vue";
import OurScaleItems from "@/views/content/OurScaleItems.vue";
import OurOpenUzb from "@/views/content/OurOpenUzb.vue";
import OurCarousel from "@/views/content/OurCarousel.vue";
import OurTravelItems from "@/views/content/OurTravelItems.vue";
import OurTourUzb from "@/views/content/OurTourUzb.vue";
import OurTravellHelper from '@/views/content/OurTravellHelper.vue';
import OurHotNow from '@/views/content/OurHotNow.vue';
import OurCitiesArt from "@/views/content/OurCitiesArt.vue";
import OurTravellLocation from "@/views/content/OurTravellLocation.vue";
import OurTravellStatistics from "@/views/content/OurTravellStatistics.vue";
import OurTravellNews from "@/views/content/OurTravellNews.vue";
import OurTravellServices from '@/views/content/OurTravellServices.vue';
import OurTravellVideos from "@/views/content/OurTravellVideos.vue";

export default {
  name: "our-content",
  components: {
    OurUzbScrollItems,
    OurScaleItems,
    OurOpenUzb,
    OurCarousel,
    OurTravelItems,
    OurTourUzb,
    OurTravellHelper,
    OurHotNow,
    OurCitiesArt,
    OurTravellLocation,
    OurTravellStatistics,
    OurTravellNews,
    OurTravellServices,
    OurTravellVideos
  },
};
</script>
