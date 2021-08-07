<template>
  <section id="forms" class="container py-12 bg-green-100">
    <div class="flex justify-between gap-4">
      <div class="flex flex-col w-1/2 gap-4">
        <h3 class="text-4xl">Contact Us</h3>
        <Form />
      </div>
      <div class="flex flex-col w-1/2 gap-4 justify-start items-end text-right">
        <h3 class="text-4xl">Sponsors</h3>
        <div class="grid grid-cols-4 gap-2">
          <img src="../../assets/logo.png" alt="" class="w-20" v-for="(sponsor, index) in sponsors" :key="index">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Form from "./Form.vue"

  export default {
    name: 'Forms',
    components: {
      Form,
    },
    data() {
      return {
        sponsors: 6,
      }
    }
  }
</script>