<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments" @after-delete-comment="afterDeleteComment" :deleting-id="deletingId"/>
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" :is-processing="isProcessing"/>
  </div>
</template>

<script>
import RestaurantDetail from '@/components/RestaurantDetail.vue'
import RestaurantComments from '@/components/RestaurantComments.vue'
import CreateComment from '@/components/CreateComment.vue'

import commentsAPI from '@/apis/comments'
import restautantsAPI from '@/apis/restaurants'
import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      deletingId: null,
      isProcessing: false,
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restautantsAPI.getRestaurant(restaurantId)
        const {
          restaurant, isFavorited, isLiked
        } = data
        const {
          id,
          name,
          Category,
          image,
          opening_hours: openingHours,
          tel,
          address,
          description,
        } = restaurant
        this.restaurant = {
          id,
          name,
          tel,
          address,
          openingHours,
          description,
          image,
          categoryName: Category.name ? Category.name : '未分類',
          isFavorited,
          isLiked
        }
        this.restaurantComments = restaurant.Comments
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍候再試'
        })
      }
    },
    async afterDeleteComment(commentId) {
      try {
        this.deletingId = commentId
        const { data } = await commentsAPI.deleteComment(commentId)
        if (data.status !== 'success') {
          throw new Error(DataTransfer.message)
        }
        this.restaurantComments = this.restaurantComments.filter((comment) => comment.id !== commentId)
        this.deletingId = null
      } catch (error) {
        this.deletingId = null
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍候再試'
        })
      }
    },
    async afterCreateComment(payload) {
      try {
        this.isProcessing = true
        const { restaurantId, text } = payload
        const { data } = await commentsAPI.createComment({restaurantId, text})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurantComments.push({
          id: data.commentId,
          RestaurantId: restaurantId,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name
          },
          text,
          createdAt: new Date()
        })
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍候再試'
        })
      }
    }
  }
}
</script>