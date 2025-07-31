<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from '@/apis/restaurants'
import { Toast } from '@/utils/helpers'

export default {
  name: 'RestaurantDashboard',
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        viewCounts: 0,
        categoryName: "",
        commentsLength: 0,
      },
    }
  },
  created() {
    const { id: restId } = this.$route.params
    this.fetchRestaurantDashboard(restId)
  },
  methods: {
    async fetchRestaurantDashboard(restId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant(restId)
        const { restaurant } = data
        const {
          id,
          name,
          viewCounts,
          Category,
          Comments,
        } = restaurant
        this.restaurant = {
          id,
          name,
          viewCounts,
          categoryName: Category.name,
          commentsLength: Comments.length,
        }
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍候再試'
        })
      }
    }
  }
}
</script>