<template>
    <div class="boxone">
        <ContentBoxOneAboutme></ContentBoxOneAboutme>
        <ContentBoxOneProjectImg></ContentBoxOneProjectImg>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.boxone {
    display: flex;
    padding: 1.25rem 2.5rem 0.625rem 2.5rem;
    align-items: flex-start;
    gap: 1.875rem;
    align-self: stretch;
}

@media screen and (max-width: 900px) {
    .boxone {
        display: flex;
        padding: 1.25rem 2.5rem 0.625rem 2.5rem;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.875rem;
        align-self: stretch;
    }  
}
</style>