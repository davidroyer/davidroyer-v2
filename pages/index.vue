<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Personal Website - V2
      </h1>
      <pre>{{ articles }}</pre>
    </div>
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

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
