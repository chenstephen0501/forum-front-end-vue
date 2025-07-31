<template>
  <div class="card mb-3">
    <div class="card-header">
      <strong>{{ followings.length }}</strong> followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <!-- <img
          :src="following.image | emptyImage"
          width="60"
          height="60"
          class="mr-1"
        > -->
        <!-- <img :src="`https://picsum.photos/60/60?random=${Math.floor(Math.random() * 1000)}`"
        style="width: 60px;" class="mr-1"> -->
        <img :src="following.image | emptyUserImage"
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
    followings: {
      type: Array,
      default: () => []
    }
  },
}
</script>