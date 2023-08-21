<template lang="pug">
section.section
    h1.title Your result is: {{ scanResult || 'not-found' }}
    router-link.link(
        v-if="scanResult"
        to="/scan"
    ) Scan qr-code again ?
</template>
<script>
export default {
    name: 'result-page',

    data() {
        return {
            scanResult: '',
        };
    },

    created() {
        this.setTitle();
    },

    methods: {
        setTitle() {
            const scanResult = this.$route.query?.['scan-result'];
            if (scanResult) {
                this.scanResult = scanResult;
            }
        },
    },
};
</script>
