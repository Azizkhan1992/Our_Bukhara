<template>
  <div class="travell-statistics-container">
    <div class="statistics-background-one"></div>
    <div class="statistics-background-two"></div>
    <div class="travell-statistics-content">
        <h1>Статистика</h1>
        <div class="travell-statistics-wrapper">
            <travell-statistics-left/>
            <travell-statistics-right/>
        </div>
    </div>
  </div>
</template>
<script>
    import TravellStatisticsLeft from './content-items/TravellStatisticsLeft.vue';
    import TravellStatisticsRight from './content-items/TravellStatisticsRight.vue';
export default {
  name: "travell-statistics",
  components: {TravellStatisticsLeft, TravellStatisticsRight}
};
</script>
