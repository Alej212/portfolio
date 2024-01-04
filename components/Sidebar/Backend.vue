<template>
    <div class="backendcard">
        <p class="p_bold">backend</p>
        <ul class="backendcard_ul">
            <li class="backendcard_li">
                <Icon name="simple-icons:firebase" class="backendcard_icon"></Icon>
            </li>
            <li class="backendcard_li">
                <Icon name="ri:supabase-fill" class="backendcard_icon"></Icon>
            </li>
            <li class="backendcard_li">
                <Icon name="cib:redis" class="backendcard_icon"></Icon>
            </li>
            <li class="backendcard_li">
                <Icon name="simple-icons:mongodb" class="backendcard_icon"></Icon>
            </li>
            <li class="backendcard_li">
                <Icon name="akar-icons:postgresql-fill" class="backendcard_icon"></Icon>
            </li>
            <li class="backendcard_li">
                <Icon name="devicon:express" class="backendcard_icon"></Icon>
            </li>
            <li class="backendcard_li">
                <Icon name="akar-icons:node-fill" class="backendcard_icon"></Icon>
            </li>
            <li class="backendcard_li">
                <Icon name="bxl:django" class="backendcard_icon"></Icon>
            </li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.backendcard {
    display: flex;
    padding-bottom: 1.25rem;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    align-self: stretch;
    &_ul {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 1.875rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
    &_li {
        width: 2.1875rem;
        height: 2.1875rem;
    }
    &_icon {
        width: 2.1875rem;
        height: 2.1875rem;
    }
}
</style>