<template>
  <div class="blog">
    <ul>
      <li v-for="(article, key) in articles" :key="key">
        <nuxt-link :to="`/blog/${article.slug}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ $cmsApi }) {
    const articles = $cmsApi.get('blog')
    return { articles }
  },
}
</script>

<style></style>
