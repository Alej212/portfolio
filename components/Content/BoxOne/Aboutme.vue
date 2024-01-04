<template>
    <div  class="aboutme">
        <div class="aboutme_div">
            <h4>About me</h4>
            <p>
                Soy un desarrollador Full Stack con experiencia en el diseño, desarrollo, implementación y pruebas de aplicaciones. Mis lenguajes favoritos para programar son JavaScript y Python. Mis habilidades abarcan tanto el frontend, con la creación de interfaces de usuario en Figma, como el backend, con la creación de APIs robustas y escalables. Además, realizo pruebas en mis aplicaciones para garantizar su correcto funcionamiento.
            </p>
        </div>
        <ul class="aboutme_ul">
            <h6>See more</h6>
            <li class="aboutme_li">
                <Icon name="bi:linkedin" class="aboutme_icon"></Icon>
            </li>
            <li class="aboutme_li">
                <Icon name="bi:github" class="aboutme_icon"></Icon>
            </li>
        </ul>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.aboutme {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;
    flex: 1 0 0;

    &_div {
        display: flex;
        padding: 0rem 1.25rem 1.25rem 1.25rem;
        flex-direction: column;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 0.3125rem;
        background: #FFF;

        /* shadown-1 */
        box-shadow: 0px 4px 10px 0px #9697B0;
    }
    &_ul {
        display: flex;
        padding: 0.625rem 2.5rem;
        justify-content: center;
        align-items: center;
        gap: 1.875rem;
        border-radius: 0.3125rem;
        background: #FFF;

        /* shadown-1 */
        box-shadow: 0px 4px 10px 0px #9697B0;
    }
    &_li {}
    &_icon {
        width: 2.1875rem;
        height: 2.1875rem;
    }
}
</style>