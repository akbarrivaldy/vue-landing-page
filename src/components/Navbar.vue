<template>
  <header class="container bg-green-400">
    <nav class="flex justify-between items-center py-4">
      <a href="" class="flex-1">
        <p class="text-3xl font-bold text-white">{{ title }}</p>
      </a>
      <div class="flex-1 flex justify-end items-center gap-6">
        <a href="" class="py-2 text-white">Docs</a>
        <a href="" class="py-2 text-white">Community</a>
        <a href="" class="py-2 text-white">Contribute</a>
      </div>
    </nav>
  </header>
</template>

<script>

  export default {
    name: 'Navbar',
    props: {
      title: String,
    }
  }

</script>