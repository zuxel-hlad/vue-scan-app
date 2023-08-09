<template lang="pug">
form.login-form(@submit.prevent="signIn")
    label.login-form__label
        span.login-form__label-text Login
        input.login-form__input(
            v-model.trim="login"
            type="text" 
            name="login" 
            placeholder="Enter your login"
        )
    label.login-form__label
        span.login-form__label-text Password
        input.login-form__input(
            v-model.trim="password"
            type="password" 
            name="login" 
            placeholder="Enter your password"
        )
    button.login-form__button(
        type="submit"
        ) sign-in
</template>
<script>
export default {
    name: 'login-form',

    emits: ['login'],

    data() {
        return {
            login: '',
            password: '',
        };
    },

    methods: {
        signIn() {
            if (!this.login.length || !this.password.length) return;
            this.$emit('login', btoa(`${this.login}:${this.password}`));
            this.login = '';
            this.password = '';
            this.$router.push('/scan');
        },
    },
};
</script>
<style scoped lang="scss">
.login-form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1 1 auto;
    max-width: 450px;
    padding: 118px 40px;
    border-radius: 6px;
    border: 1px solid $gold;
    gap: 20px;

    &__label {
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-weight: 500;
        &-text {
            display: block;
            color: $light-gray;
        }
    }

    &__input,
    &__button {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        border-radius: 18px;
    }

    &__input {
        color: $light-gray;
        background-color: transparent;
        border: 1px solid $gray;
        padding: 10px 21px;
        transition: border-color 0.25s;

        &:focus,
        &:focus-visible {
            outline: 1px solid $gold;
        }
        &:hover {
            border-color: $gold;
        }
    }

    &__button {
        display: block;
        padding: 10px 21px;
        cursor: pointer;
        text-transform: uppercase;
        border: 1px solid transparent;
        font-weight: 500;
        border-radius: 15px;
        transition: opacity 0.25s;
        background: linear-gradient(
            98deg,
            #ba8f1c 8.83%,
            #f9ec30 51.99%,
            #ba8f1c 94.35%
        );
        color: $black;

        &:focus-visible {
            outline: 1px solid $light-gray;
        }

        &:hover {
            opacity: 0.7;
        }

        &:active {
            opacity: 0.8;
        }
    }
}
</style>
