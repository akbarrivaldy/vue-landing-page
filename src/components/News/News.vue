<template>
  <section id="news" class="container flex flex-col gap-8 bg-green-400 py-12">
    <h2 class="text-4xl">News</h2>
    <div class="grid grid-cols-3 gap-4">
      <NewsCard :title="news.title" :content="news.content" v-for="(news, index) in newses" :key="index" />
    </div>
  </section>
</template>

<script>
  import NewsCard from "./NewsCard.vue"

  export default {
    name: 'News',
    components: {
      NewsCard,
    },
    data() {
      return {
        newses: [
          {
            title: 'Fixing the bug in v1.0.1',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, enim?',
          },
          {
            title: 'How to setup Vue Tailwind',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, enim?',
          },
          {
            title: 'Interviewing John Doe',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, enim?',
          },
          {
            title: 'Focusing on Bug Fixing',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, enim?',
          },
          {
            title: 'Vue Tailwind v1.0.0 Released',
            content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, enim?',
          },
        ]
      }
    }
  }
</script>