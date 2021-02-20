<template>
  <div class="about">
    <h1 class="bg-red-400">This is an about page</h1>
    <div class="test">
      testing tailwind css
    </div>
    <div class="flex flex-col p-10 m-20 space-y-3 bg-purple-500 rounded-2xl">
      <h1 class="px-6 py-1 text-gray-500 bg-white rounded-lg hover:bg-red-500 hover:text-white">Testing here</h1>
      <h1 class="px-6 py-1 text-gray-500 bg-white rounded-lg hover:bg-red-500 hover:text-white">Testing here</h1>
      <h1 class="px-6 py-1 text-gray-500 bg-white rounded-lg hover:bg-red-500 hover:text-white">Testing here</h1>
    </div>
  </div>
</template>

<style scoped>
.test {
  @apply font-bold;
  @apply text-5xl;
  @apply border-black;
}
</style>
