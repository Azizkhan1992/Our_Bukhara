<template>
  <div class="statistics-right-container">
    <right-item-one/>
    <right-item-two/>
    <right-item-three/>
    <right-item-four/>
  </div>
</template>
<script>
    import RightItemOne from './statistics-right-items/RightItemOne.vue';
    import RightItemTwo from './statistics-right-items/RightItemTwo.vue';
    import RightItemThree from './statistics-right-items/RightItemThree.vue';
    import RightItemFour from './statistics-right-items/RightItemFour.vue'
export default {
  name: "statistics-right",
  components: {RightItemOne, RightItemTwo, RightItemThree, RightItemFour}
};
</script>
