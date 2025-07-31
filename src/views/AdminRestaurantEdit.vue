<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit-form="handleAfterSubmit" :is-processing="isProcessing"/>
  </div>
</template>
<script>
import AdminRestaurantForm from '@/components/AdminRestaurantForm.vue';
import adminAPI from '@/apis/admin'
import { Toast } from '@/utils/helpers';

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        CategoryId: "",
      },
      isProcessing: false
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail(restaurantId)
        const { id, name, email, tel, image, CategoryId: categoryId, opening_hours: openingHours, address, description } = data.restaurant
        this.restaurant = {
          id, name, email, tel, image, categoryId, openingHours, address, description
        }
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍候再試'
        })
      }
    },
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({ restId: this.restaurant.id, formData })
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push('/admin/restaurants')
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法修改餐廳資料，請稍候再試'
        })
      }
    }
  }
}
</script>