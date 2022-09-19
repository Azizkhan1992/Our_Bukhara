<template>
    <div class="our-uzb-container">
        <our-uzb-header-layout/>
        <our-uzb-content-layout/>
        <our-uzb-footer-layout/>
    </div>
</template>
<script>
    import OurUzbHeaderLayout from './OurUzbHeaderLayout.vue';
    import OurUzbContentLayout from './OurUzbContentLayout.vue';
    import OurUzbFooterLayout from './OurUzbFooterLayout.vue'
export default {
    name: 'our-main',
    components: {OurUzbHeaderLayout, OurUzbContentLayout, OurUzbFooterLayout}
}
</script>