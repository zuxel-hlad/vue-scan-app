<template lang="pug">
section.section
    QRcode-Scanner
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
};
</script>
