<template>
  <div class="section">
    <h2>Vue 组件</h2>
    <pkg-button label="Default Button" @click="handleClick" />
    <pkg-button type="primary" label="Primary Button" @click="handleClick" />
    <pkg-button type="success" label="Success Button" @click="handleClick" />
    <pkg-button type="warning" label="Warning Button" @click="handleClick" />
    <pkg-button type="danger" label="Danger Button" @click="handleClick" />
    <pkg-button label="Disabled Button" disabled @click="handleClick" />
  </div>
</template>

<script lang="ts">

export default {
  name: 'VueApp',
  methods: {
    handleClick() {
      alert('Vue button clicked!');
    }
  }
}
</script>

<style scoped>
.section {
  margin: 20px 0;
}
</style> 