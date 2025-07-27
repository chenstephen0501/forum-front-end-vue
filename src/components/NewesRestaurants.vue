<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="card-body">
      <div>
        <h4>
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">{{ restaurant.name }}</router-link>
          <small>{{ restaurant.Category.name ? restaurant.Category.name : '未分類' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>{{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>
<script>
import { fromNowFilter } from '../utils/mixins'

export default {
  mixins: [fromNowFilter],
  props: {
    restaurants: {
      type: Array,
      required: true,
    }
  },
}
</script>
<style scoped>
small {
  font-size: 10px;
}
</style>