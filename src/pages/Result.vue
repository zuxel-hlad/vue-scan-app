<template lang="pug">
section.section.result
    h1.result__title Your result is: {{ scanResult || 'not-found' }}
</template>
<script>
export default {
    name: 'result-page',

    data() {
        return {
            title: '',
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
<style lang="scss">
.result {
    display: flex;
    justify-content: center;
    align-items: center;

    &__title {
        font-size: 36px;
        font-weight: 700;
        color: $white;
    }
}
</style>
