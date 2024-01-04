<template>
    <div class="frontendcard">
        <p class="p_bold">frontend</p>
        <ul class="frontendcard_ul">
            <li class="frontendcard_li">
                <Icon name="ion:logo-pwa" class="frontendcard_icon"></Icon>
            </li>
            <li class="frontendcard_li">
                <Icon name="file-icons:vite" class="frontendcard_icon"></Icon>
            </li>
            <li class="frontendcard_li">
                <Icon name="icomoon-free:html-five" class="frontendcard_icon"></Icon>
            </li>
            <li class="frontendcard_li">
                <Icon name="uiw:css3" class="frontendcard_icon"></Icon>
            </li>
            <li class="div_li">
                <Icon name="ri:bootstrap-fill" class="frontendcard_icon"></Icon>
            </li>
            <li class="div_li">
                <Icon name="simple-icons:tailwindcss" class="frontendcard_icon"></Icon>
            </li>
            <li class="div_li">
                <Icon name="cib:sass" class="frontendcard_icon"></Icon>
            </li>
            <li class="frontendcard_li">
                <Icon name="simple-icons:ionic" class="frontendcard_icon"></Icon>
            </li>
            <li class="frontendcard_li">
                <Icon name="solar:figma-bold" class="frontendcard_icon"></Icon>
            </li>
            <li class="frontendcard_li">
                <Icon name="akar-icons:vue-fill" class="frontendcard_icon"></Icon>
            </li>
            <li class="frontendcard_li">
                <Icon name="simple-icons:nuxtdotjs" class="frontendcard_icon"></Icon>
            </li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.frontendcard {
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