<template>
    <div class="projectimg">
        <h6>Visualization page</h6>
        <div class="projectimg_div">
            <Icon class="projectimg_icon" name="akar-icons:vue-fill"></Icon>
            <Icon class="projectimg_icon" name="ion:logo-pwa"></Icon>
            <Icon class="projectimg_icon" name="simple-icons:tailwindcss"></Icon>
            <Icon class="projectimg_icon" name="bi:git"></Icon>
        </div>
        <div class="projectimg_img"></div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.projectimg {
    display: flex;
    padding: 0.625rem 1.5625rem 1.25rem 1.5625rem;
    flex-direction: column;
    align-items: center;
    gap: 0.3125rem;
    border-radius: 0.3125rem;
    background: #FFF;

    /* shadown-1 */
    box-shadow: 0px 4px 10px 0px #9697B0;
    &_div {
        display: flex;
        padding: 0.625rem;
        justify-content: center;
        align-items: flex-start;
        align-content: flex-start;
        gap: 1.25rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
    &_img {
        display: flex;
        width: 18.75rem;
        height: 20rem;
        align-items: flex-start;
        background: linear-gradient(0deg, rgba(72, 72, 84, 0.40) 0%, rgba(72, 72, 84, 0.40) 100%), url(''), lightgray 50% / cover no-repeat;
    }
    &_icon {
        width: 1.875rem;
        height: 1.875rem;
    }
}

@media screen and (max-width: 900px) {
    .projectimg {
        display: flex;
        padding: 0.625rem 1.5625rem 1.25rem 1.5625rem;
        flex-direction: column;
        align-items: center;
        gap: 0.3125rem;
        align-self: stretch;

        &_img {
            display: flex;
            height: 20rem;
            width: auto;
            align-items: flex-start;
            align-self: stretch;
            background: linear-gradient(0deg, rgba(72, 72, 84, 0.40) 0%, rgba(72, 72, 84, 0.40) 100%), url(''), lightgray 50% / cover no-repeat;
        }
    }
}
</style>