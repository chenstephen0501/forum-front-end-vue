<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
    </div>
    <div v-if="restaurants.length < 1">
      此類別目前還沒有餐廳
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination v-if="totalPage.length > 1" :current-page="currentPage" :total-page="totalPage"
      :next-page="nextPage" :previous-page="previousPage" :category-id="categoryId" />
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue';
import RestaurantCard from '@/components/RestaurantCard.vue';
import RestaurantsNavPills from '@/components/RestaurantsNavPills.vue';
import RestaurantPagination from '@/components/RestaurantPagination.vue';
import restaurantsAPI from '@/apis/restaurants'
import { Toast } from '@/utils/helpers';

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({
      queryPage: page,
      queryCategoryId: categoryId
    })
  },
  beforeRouteUpdate(to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const resp = await restaurantsAPI.getRetaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })
        const { restaurants, categories, categoryId, page, totalPage, prev, next } = resp.data
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>