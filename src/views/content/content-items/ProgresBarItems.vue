<template>
  <div class="progres-bar-items">
    <div
      v-for="(item, idx) in progres_item"
      :key="idx"
      class="bar-items"
      :class="item.active ? 'header-active' : 'header-deactive'"
    >
      <button @click="setProgresTab(item.value)">
        {{ item.title }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "progres-bar-items",
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      progres_item: [],
    };
  },
  mounted() {
    this.init_item();
  },
  methods: {
    setProgresTab(value){
        this.progres_item = this.progres_item?.map((item) => {
            item.active = false;

            if(item.value === value){
                item.active = true
                this.$emit('changedTab', item.value)
            }
            return item
        })
    },
    init_item() {
      this.progres_item = this.headers.map((item) => {
        item.active = !!item.active;
        return item;
      });
    },
  },
};
</script>
