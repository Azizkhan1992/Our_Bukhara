<template>
    <div class="travell-videos-container">
        <div class="travell-videos-default">
            <button @click="play">
                <img src="@/assets/OurItems/Content/FourtenVideos/play.svg" alt="">
            </button>
        </div>
        <div class="travell-videos-popup" v-if="isPlaying">
            <i class="item-close" @click="play">
                <img src="@/assets/OurItems/Content/FourtenVideos/close1.svg" alt="">
            </i>
        <travell-videos-popup :isPlaying="isPlaying">
            <iframe src="https://www.youtube.com/embed/vQVwkyn3-F8?autoplay=1" width="100%" height="100%" style="border: none"></iframe>
        </travell-videos-popup>
        </div>
    </div>
</template>
<script>
    import TravellVideosPopup from './content-items/TravellVideosPopup.vue'
export default {
    name: 'travell-videos',
    components: {TravellVideosPopup},
    data(){
        return{
            isPlaying: false
        }
    },
    methods:{
        play(){
            this.isPlaying = ! this.isPlaying
        }
    }
}
</script>