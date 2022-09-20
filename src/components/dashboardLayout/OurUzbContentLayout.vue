<template>
    <div class="our-content-container">
        <our-uzb-scroll-items/>
        <our-scale-items/>
        <our-open-uzb/>
    </div>
</template>
<script>
    import OurUzbScrollItems from '@/views/content/OurUzbScrollItems.vue';
    import OurScaleItems from '@/views/content/OurScaleItems.vue';
    import OurOpenUzb from '@/views/content/OurOpenUzb.vue';
export default {
    name: 'our-content',
    components: {OurUzbScrollItems, OurScaleItems, OurOpenUzb}
}
</script>