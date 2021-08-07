<template>
  <div class="flex flex-col justify-center text-center bg-gray-100 rounded-md px-8 py-6">
    <i class="mb-2 text-3xl" :class="icon"></i>
    <h4 class="text-xl mb-2">{{ title }}</h4>
    <p class="text-md">{{ subtitle }}</p>
  </div>
</template>

<script>
  export default {
    name: 'FeatureCard',
    props: {
      title: String,
      subtitle: String,
      icon: String,
    }
  }
</script>