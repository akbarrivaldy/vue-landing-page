<template>
  <section id="features" class="container flex justify-between py-10 gap-4">
    <FeatureCard 
      title="Clean"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, mollitia?"
      icon="fas fa-fire"
    />
    <FeatureCard 
      title="Fast"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, mollitia?"
      icon="fas fa-clock"
    />
    <FeatureCard 
      title="Easy"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, mollitia?"
      icon="fas fa-times"
    />
  </section>
</template>

<script>
  import FeatureCard from "./FeatureCard.vue"

  export default {
    name: 'Features',
    components: {
      FeatureCard,
    }
  }
</script>