<template>
    <HeaderContent></HeaderContent>
    <main>
        <slot></slot>
    </main>
    <FooterContent></FooterContent>
</template>

<script setup></script>

<style scoped lang="scss">
@media screen and (max-width: 1150px) {
    main {
        margin-top: 3.5rem;
    }
}
</style>