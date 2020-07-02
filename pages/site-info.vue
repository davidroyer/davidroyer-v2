<template>
  <div>
    <h1>Site Info Page</h1>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('nuxtify').fetch()

    return {
      page,
    }
  },
}
</script>

<style></style>
