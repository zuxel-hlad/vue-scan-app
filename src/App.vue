<template lang="pug">
main.main
    router-view(v-slot="{Component}")
        transition(name="page")
            component(:is="Component")
</template>
<script>
export default {
    name: 'App',
};
</script>

<style lang="scss" scoped></style>
