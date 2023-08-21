<template lang="pug">
section.section
    login-form
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'login-page',

    components: {
        LoginForm,
    },

    created() {
        if (localStorage.getItem('jwt')) {
            this.$router.push('/scan');
        }
    },
};
</script>
