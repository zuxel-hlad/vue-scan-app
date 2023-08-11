<template lang="pug">
section.section
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
<style lang="scss" scoped></style>
