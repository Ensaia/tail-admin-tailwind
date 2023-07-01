<template>
 <div>
  <preloader></preloader>
  <div class="flex h-screen overflow-hidden">
    <sidebar></sidebar>
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Header />
      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        </div>
      </main>
    </div>
  </div>
 </div>
</template>

<script>
import Header from '@/components/view/Header.vue'
import Sidebar from '@/components/view/Sidebar.vue'
import Preloader from '@/components/view/Preloader.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Preloader,
    Header,
  }
}
</script>

<style>
</style>
