<template lang="pug">
section.section.scanner
    .container
        QRcode-Scanner(@on-scan="scanQrCode")
</template>
<script>
import QRcodeScanner from '@/components/QRcodeScanner.vue';

export default {
    name: 'scan-page',
    components: {
        QRcodeScanner,
    },

    created() {
        if (!localStorage.getItem('jwt')) {
            this.$router.push('/login');
        }
    },

    methods: {
        scanQrCode(scanResult) {
            if (!scanResult) return;
            this.$router.push({
                path: '/result',
                query: {
                    'scan-result': scanResult,
                },
            });
        },
    },
};
</script>
<style lang="scss" scoped>
.scanner {
    & .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
