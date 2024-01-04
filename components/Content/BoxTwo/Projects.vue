<template>
    <div class="projectscard">
        <div class="projectscard_div">
            <h6>Projects</h6>
            <ul class="projectscard_ul">
                <li class="p_bold">frontend</li>
                <li class="p_bold">backend</li>
            </ul>
        </div>
        <div class="projectscard_projects">
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
            <div class="projectscard_project">
                <p class="p_bold--blank">name project</p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.projectscard {
    display: flex;
    padding: 0.625rem 1.25rem 1.25rem 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
    align-self: stretch;
    border-radius: 0.3125rem;
    background: #FFF;

    /* shadown-1 */
    box-shadow: 0px 4px 10px 0px #9697B0;

    &_div {
        display: flex;
        padding-right: 2.5rem;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }
    &_ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3.125rem;
    }
    &_projects {
        display: flex;
        align-items: flex-start;
        align-content: flex-start;
        gap: 2.5rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
    &_project {
        display: flex;
        padding: 0.625rem;
        align-items: flex-start;
        gap: 0.625rem;
        border-radius: 0.3125rem;
        background: #17171B;
    }
    .p_bold--blank {
        color: #FFF;

        /* p-bold */
        font-family: 'Montserrat-Bold';
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1.618rem; /* 161.8% */
    }
}


@media screen and (max-width: 900px) {
    .projectscard {

        &_div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 0.625rem;
            align-self: stretch;
        }
    }
}

</style>