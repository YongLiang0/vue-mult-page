<template>
    <div class="qun-base-controls">
        <Volume :isMuted.sync="isMuted" />
        <Progress @paused="$emit('paused')" />
        <Fullscreen :isFullscreen.sync="isFullscreen" />
    </div>
</template>

<script>
import Volume from './controls/Volume';
import Progress from './controls/Progress';
import Fullscreen from './controls/Fullscreen';
export default {
    name: 'BaseControls',
    components: {
        Volume,
        Progress,
        Fullscreen
    },

    data() {
        return {
            isMuted: false,
            isFullscreen: false
        };
    },

    watch: {
        isFullscreen(newData, oldData) {
            this.$emit('fullscreen', newData);
        }
    },

    computed: {
        $parentComponent() {
            return this.$parent;
        },
        $video() {
            return this.$parentComponent.$video;
        }
    },

    created() {
        this.$nextTick(() => {
            const { volume } = this.$video
            this.isMuted = this.$video.muted || volume === 0
            this.initVideoEvents();
        });
    },

    methods: {
        initVideoEvents() {
            this.$video.addEventListener('volumechange', function(e) {
                this.isMuted = e.target.muted;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.qun-base-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 21;
    width: 100%;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    user-select: none;
}
</style>

