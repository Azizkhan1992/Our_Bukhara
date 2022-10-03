<template>
    <div class="our-footer-layout">
        <div class="our-footer-content">
            <img src="@/assets/OurItems/Footer/img.png" alt="">
            <div class="footer-wrapper">
                <div class="footer-top">
                    <our-footer-items/>
                </div>
                <div class="footer-bottom">
                    <div class="footer-bottom-left">
                        <p>Файлы cookie</p>
                    <p>Карта сайта</p>
                    <p>Политика конфиденциальности</p>
                    <p>Главное на сегодня</p>
                    </div>
                    <div class="footer-bottom-right">
                        <p>Разработка сайта</p>
                        <img src="@/assets/OurItems/Footer/Frame1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import OurFooterItems from '@/views/footer/OurFooterItems.vue';
export default {
    name: 'our-footer',
    components: {OurFooterItems}
}
</script>