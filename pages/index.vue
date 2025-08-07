<script setup lang="ts"></script>

<template>
  <div>
    <BasePrimaryButton />
    <br>
    <BaseSecondaryButton />
    <br>
    <BaseTertiaryButton />
    <br>
    <BaseNavigationButton buttonName="haii" :onClick="() => navigateTo('/certificate')" path="/" />
  </div>
</template>

<style scoped></style>
