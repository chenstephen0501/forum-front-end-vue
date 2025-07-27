<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments :restaurant-comments="restaurantComments" @after-delete-comment="afterDeleteComment" />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from '@/components/RestaurantDetail.vue'
import RestaurantComments from '@/components/RestaurantComments.vue'
import CreateComment from '@/components/CreateComment.vue'

const dummyData = {
  "restaurant": {
    "id": 3,
    "name": "Timothy Waters",
    "tel": "530-909-0724 x413",
    "address": "5196 Kathleen Stravenue",
    "opening_hours": "08:00",
    "description": "quia",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.27603651632434",
    "viewCounts": 1,
    "createdAt": "2025-07-21T13:58:12.000Z",
    "updatedAt": "2025-07-24T17:11:08.508Z",
    "CategoryId": 2,
    "Category": {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
        "id": 103,
        "text": "Sed ea eligendi error sint officia.",
        "UserId": 3,
        "RestaurantId": 3,
        "createdAt": "2025-07-21T13:58:12.000Z",
        "updatedAt": "2025-07-21T13:58:12.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
          "isAdmin": false,
          "image": null,
          "createdAt": "2025-07-21T13:58:12.000Z",
          "updatedAt": "2025-07-21T13:58:12.000Z"
        }
      },
      {
        "id": 53,
        "text": "Assumenda fuga recusandae delectus.",
        "UserId": 3,
        "RestaurantId": 3,
        "createdAt": "2025-07-21T13:58:12.000Z",
        "updatedAt": "2025-07-21T13:58:12.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
          "isAdmin": false,
          "image": null,
          "createdAt": "2025-07-21T13:58:12.000Z",
          "updatedAt": "2025-07-21T13:58:12.000Z"
        }
      },
      {
        "id": 3,
        "text": "Perspiciatis et quis pariatur illo accusamus possimus rem.",
        "UserId": 3,
        "RestaurantId": 3,
        "createdAt": "2025-07-21T13:58:12.000Z",
        "updatedAt": "2025-07-21T13:58:12.000Z",
        "User": {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
          "isAdmin": false,
          "image": null,
          "createdAt": "2025-07-21T13:58:12.000Z",
          "updatedAt": "2025-07-21T13:58:12.000Z"
        }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}

const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
  }
}

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
      currentUser: dummyUser.currentUser
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const {
        restaurant, isFavorited, isLiked
      } = dummyData
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
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter((comment) => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload
      console.log(dummyUser)
      console.log('cafterCreateComment', payload)
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text,
        createdAt: new Date()
      })
    }
  }
}
</script>