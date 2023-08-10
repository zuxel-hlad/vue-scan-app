<template lang="pug">
.scanner
    h2.title Scan your QR-Code
    .scanner__wrapper(
        :class="{'scanner__wrapper_is-loaded': !isLoading}"
    )
        qr-stream(
            @decode="onScan"
        )
</template>
<script>
import { QrStream } from 'vue3-qr-reader';

export default {
    name: 'QRcode-Scanner',

    components: {
        QrStream,
    },

    data() {
        return {
            isLoading: true,
        };
    },

    mounted() {
        setTimeout(() => {
            this.isLoading = false;
        }, 2500);
    },

    methods: {
        onScan(scanResult) {
            if (scanResult) {
                this.$emit('on-scan', scanResult);
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.scanner {
    &__wrapper {
        position: relative;
        border: 1px solid $gold;
        border-radius: 12px;
        overflow: hidden;
        width: 300px;
        height: 300px;
        margin: 0 auto;

        & .qr-stream-wrapper {
            overflow: hidden;
            border-radius: 12px;
        }

        &::before {
            content: '';
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: url('../assets/svg/preloader.svg') center/contain
                no-repeat;
            transition: opacity 0.25s;
        }

        &_is-loaded {
            &:before {
                opacity: 0;
            }
        }
    }
}
</style>
