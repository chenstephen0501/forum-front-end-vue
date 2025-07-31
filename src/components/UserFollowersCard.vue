<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        v-for="follower in followers"
        :key="follower.id"
        :to="{ name: 'user', params: { id: follower.id } }"
      >
        <!-- <img
          :src="follower.image | emptyImage"
          width="60"
          height="60"
          class="mr-1"
        > -->
        <!-- <img :src="`https://picsum.photos/60/60?random=${Math.floor(Math.random() * 1000)}`"
        style="width: 60px;" class="mr-1"> -->
        <img :src="follower.image | emptyUserImage"
        style="width: 60px;">
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyUserImageFilter } from '@/utils/mixins';
export default {
  mixins: [emptyUserImageFilter],
  props: {
    followers: {
      type: Array,
      default: () => [],
    }
  }
}
</script>