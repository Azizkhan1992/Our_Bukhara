<template>
    <div class="travell-services-container">
        <div class="travell-services-content">
            <h1>Интерактивные услуги</h1>
            <div class="services-images">
                <travell-services-left/>
            </div>
            
        </div>
    </div>
</template>
<script>
    import TravellServicesLeft from './content-items/TravellServicesLeft.vue';
export default {
    name: 'travell-services',
    components: {TravellServicesLeft}
}
</script>