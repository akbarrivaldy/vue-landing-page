<template>
  <section id="hero" class="container flex justify-between items-center py-20 gap-6">
    <div class="flex-1 flex flex-col gap-4">
      <h1 class="text-5xl">{{ heading }}</h1>
      <p class="text-lg">
        {{ subheading }}
      </p>
      <button class="btn btn-primary mr-auto mt-2">Get Started</button>
    </div>
    <div class="flex justify-end">
      <img src="../assets/logo.png" alt="">
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Hero',
    props: {
      heading: String,
      subheading: String,
    }
  }
</script>