<template>
    <div class="sidebar">
        <h5>Stack</h5>
        <SidebarBackend></SidebarBackend>
        <SidebarFrontend></SidebarFrontend>
    </div>
</template>

<script setup></script>

<style scoped lang="scss">
.sidebar {
    display: flex;
    width: 16.0625rem;
    padding: 0.625rem 1.875rem;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;
    align-self: stretch;
    background-color: $Normal;
}

@media screen and (max-width: 1150px) {
  .sidebar {
    display: none;
  }
}

@media screen and (max-width: 900px) {
}
</style>