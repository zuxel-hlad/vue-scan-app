<template lang="pug">
.wrapper
    h1.wrapper__item hello
</template>
<script>
export default {
    name: 'scan-page',

    mounted() {
        if (!localStorage.getItem('jwt')) {
            this.$router.push('/login');
        }
    },
};
</script>
<style lang="scss" scoped></style>
