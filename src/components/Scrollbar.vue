<template>
  <div class="p-4 w-28 text-left bg-orange-500 text-white rounded-lg z-50">
    x: {{ Math.round(properties.x * 100) / 100 }} <br />
    y: {{ Math.round(properties.y * 100) / 100 }}
  </div>
</template>

<script setup>
const properties = defineProps(['x', 'y']);
</script>

<style scoped></style>
