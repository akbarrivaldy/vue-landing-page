<template>
  <div class="flex flex-col flex-1 p-6 rounded-md bg-gray-200">
    <img src="../../assets/img-2.jpg" :alt="title" class="w-full mb-4">
    <h5 class="text-lg font-bold mb-2">{{ title }}</h5>
    <p class="text-base mb-4">{{ content }}</p>
    <button class="btn btn-primary">Read</button>
  </div>
</template>

<script>
  export default {
    name: 'NewsCard',
    props: {
      title: String,
      content: String,
    }
  }
</script>