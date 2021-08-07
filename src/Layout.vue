<template>
  <Navbar title="VueTailwind" />
  <Hero
    heading="Build your application with Vue and TailwindCSS"
    subheading="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque esse deserunt placeat omnis sapiente id cum obcaecati minima voluptates dolore."
  />
  <Features />
  <News />
  <Forms />
  <Footer />
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import Hero from "./components/Hero.vue"
  import Features from "./components/Features/Features.vue"
  import News from "./components/News/News.vue"
  import Forms from "./components/Forms/Forms.vue"
  import Footer from "./components/Footer.vue"

  export default {
    name: 'Layout',
    components: {
      Navbar,
      Hero,
      Features,
      News,
      Forms,
      Footer,
    }
  }
</script>