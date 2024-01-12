<template>
  <header class="header">
    <div class="header_content" @click="toggleActive">
      <Icon class="header_icon" name="iconamoon:arrow-up-2-bold"></Icon>
      <p class="p_bold">Stack</p>
    </div>
    <div class="stack" :class="{ activate: isActive }">
      <SidebarBackend></SidebarBackend>
      <SidebarFrontend></SidebarFrontend>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>



<style scoped lang="scss">
.header {
    display: none;
}

@media screen and (max-width: 1150px) {
  .header {
    display: block;
    background: #CECFF1;
    width: 100%;
    position: fixed;
    z-index: 2;
    padding: .6rem;
    top: 0;
  }
  .p_bold {
    display: block;
  }

  .header_content {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      gap: .6rem;
    }
  .header_icon {
      width: 2.5rem;
      height: 2.5rem;
      transform: rotate(180deg);
  }
  .stack {
    display: none;
  }
  .activate {
    display: flex;
    flex-flow: column wrap;
    padding: 5rem;
    gap: 5rem;
    height: 100vh;
  }
}
</style>