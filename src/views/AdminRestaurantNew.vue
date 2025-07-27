<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <adminRestaurantForm @after-submit-form="handleAfterSubmit"/>
  </div>
</template>

<script>
import AdminRestaurantForm from '@/components/AdminRestaurantForm.vue';

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      for(const [key, value] of formData.entries()) {
        console.log(key, ':', value)
      }
    }
  }
}
</script>