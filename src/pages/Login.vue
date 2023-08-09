<template lang="pug">
section.section.login
    login-form(@login="setAuth")
</template>
<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
    name: 'login-page',

    components: {
        LoginForm,
    },

    methods: {
        setAuth(info) {
            if (info) {
                localStorage.setItem('jwt', info);
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.login {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
