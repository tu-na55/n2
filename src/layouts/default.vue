<template>
  <v-app>
    <v-app-bar fixed app color="primary" class="white--text">
      <v-app-bar-nav-icon class="white--text" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <VMain>
      <v-container>
        <nuxt />
      </v-container>
    </VMain>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { appStore } from '@/store'
@Component
export default class extends Vue {
  get title() {
    return appStore.title
  }
}
</script>
