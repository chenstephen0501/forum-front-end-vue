<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />

    <router-link :to="{ name: 'admin-restaurant-new' }" class="btn btn-primary mb-4">
      New Restaurant
    </router-link>

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
    <AdminRestaurantsTable :restaurants="restaurants" @after-delete-restaurant="afterDeleteRestaurant" :deleting-id="deletingId"/>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';
import AdminRestaurantsTable from '@/components/AdminRestaurantsTable.vue';
import adminAPI from '@/apis/admin'
import { Toast } from '@/utils/helpers';

export default {
  name: 'AdminRestaurants',
  components: {
    AdminNav,
    AdminRestaurantsTable,
  },
  data() {
    return {
      restaurants: [],
      deletingId: null
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await adminAPI.restaurants.get()
        this.restaurants = data.restaurants
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法拿取餐廳資料，請稍後再試'
        })
      }
    },
    async afterDeleteRestaurant(restaurantId) {
      try {
        this.deletingId = restaurantId
        const { data } = await adminAPI.restaurants.delete(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.filter((rest) => rest.id !== restaurantId)
        this.deletingId = null
      } catch(error) {
        this.isProcessing = null
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>