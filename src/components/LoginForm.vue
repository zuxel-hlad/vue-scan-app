<template lang="pug">
form.login-form(@submit.prevent="signIn")
    label.login-form__label
        span.login-form__label-text Login
        input.login-form__input(
            v-model.trim="login"
            type="text" 
            name="login" 
            placeholder="Enter your login"
            autocomplete="new-login"
        )
    label.login-form__label
        span.login-form__label-text Password
        input.login-form__input(
            v-model.trim="password"
            type="password" 
            name="password" 
            placeholder="Enter your password"
            autocomplete="new-password"
        )
    button.login-form__button(
        type="submit"
        :disabled="!isFormValid"
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

    computed: {
        isFormValid() {
            return this.login.length > 0 && this.password.length > 0;
        },
    },

    methods: {
        signIn() {
            if (!this.isFormValid) return;
            localStorage.setItem('jwt', btoa(`${this.login}:${this.password}`));
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
    width: 100%;
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
            outline: none;
            border: none;
            border: 1px solid $gold;
            border-radius: 18px;
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
        transition:
            opacity 0.25s,
            box-shadow 0.25s;
        background: linear-gradient(
            98deg,
            #ba8f1c 8.83%,
            #f9ec30 51.99%,
            #ba8f1c 94.35%
        );
        color: $black;

        &:focus-visible {
            border: none;
            outline: none;
            border: 1px solid $gold;
        }

        &:hover {
            opacity: 0.7;
        }

        &:active {
            box-shadow:
                -2px -2px 10px $gold,
                2px 2px 10px $gold;
            opacity: 1;
        }

        &[disabled] {
            background: $gray;
            pointer-events: none;
        }
    }
}
</style>
