<template>
  <form class="w-full mt-2">
    <div class="flex flex-col py-3 gap-2" v-for="(input, index) in inputs" :key="index">
      <label :for="input.name" class="capitalize">{{ input.name }}</label>
      <input class="px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-green-400" :type="input.type" :id="input.name" required>
    </div>
    <div class="flex flex-col py-3 gap-2">
      <label for="message" class="capitalize">Message</label>
      <textarea id="message" rows="6" class="px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-green-400" required></textarea>
    </div>
    <button class="btn btn-primary mt-4">Submit</button>
  </form>
</template>

<script>
  export default {
    name: 'Form',
    data() {
      return {
        inputs: [
          {
            type: 'email',
            name: 'email'
          },
          {
            type: 'text',
            name: 'name'
          },
        ]
      }
    }
  }
</script>