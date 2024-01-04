<template>
    <header class="header">
        <Icon class="header_icon" name="iconamoon:arrow-up-2-bold"></Icon>
    </header>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
    display: none;
    padding: 0.625rem;
    align-items: flex-start;
    gap: 0.625rem;
    align-self: stretch;
    background: #CECFF1;

    &_icon {
        width: 2.5rem;
        height: 2.5rem;
        transform: rotate(180deg);
    }
}

@media screen and (max-width: 1150px) {
  .header {
    display: block;
  }
}
</style>