<template>
    <div class="videos-popup">
        <slot/>
    </div>
</template>
<script>
export default {
    name: 'videos-popup',
    props: {
        isPlaying: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return{
            isExit: false
        }
    },
    methods:{
        Activate(){
            this.isExit = this.isPlaying;
        },
        exit(){
            this.isExit = false
        }
    }
}
</script>
<style>
.videos-popup{
    width: 100%;
    height: 100%;
}
</style>