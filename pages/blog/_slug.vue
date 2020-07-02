<template>
  <div class="article">
    <h1 v-text="article.title" />
    <article v-html="article.html" />
  </div>
</template>

<script>
export default {
  asyncData({ $cmsApi, params }) {
    const article = $cmsApi.get('blog', params.slug)
    return { article }
  },
}
</script>

<style src="@droyer/nuxtcms/lib/assets/blog-styles.css"></style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
