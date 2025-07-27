<template>
  <div class="container py-5">
    <AdminRestaurantForm :initial-restaurant="restaurant" @after-submit-form="handleAfterSubmit"/>
  </div>
</template>
<script>
import AdminRestaurantForm from '@/components/AdminRestaurantForm.vue';

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Luella Hammes",
    "tel": "606-136-5201 x07112",
    "address": "2408 Kelsie Ville",
    "opening_hours": "08:00",
    "description": "Eveniet et veritatis et aspernatur sed non.",
    "image": `https://picsum.photos/320/240?random=${Math.floor(Math.random() * 1000)}`,
    // "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.337587170916876",
    "viewCounts": 0,
    "createdAt": "2025-07-21T13:58:12.000Z",
    "updatedAt": "2025-07-21T13:58:12.000Z",
    "CategoryId": 2,
  }
}

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
      }
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('restaurantId', restaurantId)
      const { restaurant } = dummyData
      const { id, name, email, tel, image, CategoryId: categoryId, opening_hours: openingHours, address, description } = restaurant
      this.restaurant = {
        id, name, email, tel, image, categoryId, openingHours, address, description
      }
    },
    handleAfterSubmit(formData) {
      for (const[key, value] of formData.entries()) {
        console.log(key, ":", value)
      }
    }
  }
}
</script>