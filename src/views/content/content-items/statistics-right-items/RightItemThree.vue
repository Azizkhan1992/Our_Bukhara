<template>
  <div class="item-three-container items">
    <div class="item-three-content">
      <div class="item-three-chart">
        <div class="chart-wrapper">
          <svg
            viewBox="-1 -1 400 300"
            xmlns="http://www.w3.org/2000/svg"
            width="400px"
            height="300px"
            style="border: 2px solid #000000"
            v-for="(item, idx) in statistics_three"
            :key="idx"
          >
            <rect
              :x="(idy+1)*40" 
              :y="300 - `${100 - item}`"
              width="20px"
              :height="100 - `${item}` + 'px'"
              style="fill: green; stroke: azure;"
              v-for="item, idy in statistics_three[0]" :key="idy"
            ></rect>
          </svg>
        </div>
      </div>
      <h3>1881345</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "item-three",
  data() {
    return {
      statistics_three: [
        [25, 45, 75, 35, 55],
        [50, 15, 65, 85, 20],
      ],
    };
  },
};
</script>
