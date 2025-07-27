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

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Luella Hammes",
        "tel": "606-136-5201 x07112",
        "address": "2408 Kelsie Ville",
        "opening_hours": "08:00",
        "description": "Eveniet et veritatis et aspernatur sed non.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.337587170916876",
        "viewCounts": 0,
        "createdAt": "2025-07-21T13:58:12.000Z",
        "updatedAt": "2025-07-21T13:58:12.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z"
        },
        "Comments": [
            {
                "id": 1,
                "text": "Ipsum eum quis est aut vero molestiae qui voluptatem optio.",
                "UserId": 3,
                "RestaurantId": 1,
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
                "id": 51,
                "text": "Voluptatem aut ex dolor.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$k4ty8W0Nip0Zi1wLOjPL4OIzvnFuWAc4Butn7zi5GqXlixncVLuhi",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2025-07-21T13:58:12.000Z",
                    "updatedAt": "2025-07-21T13:58:12.000Z"
                }
            },
            {
                "id": 101,
                "text": "Voluptatem nam doloribus.",
                "UserId": 2,
                "RestaurantId": 1,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$QdVtXT6hbOije6fHPLPYmeTPE6fTvglOoNlgf0bwy0Wixem45uSp.",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2025-07-21T13:58:12.000Z",
                    "updatedAt": "2025-07-21T13:58:12.000Z"
                }
            }
        ]
    }
}

export default {
  data() {
    return {
      restaurant: {},
    }
  },
  created() {
    this.fetchRestaurantDashboard()
  },
  methods: {
    fetchRestaurantDashboard() {
      const { restaurant } = dummyData
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
    }
  }
}
</script>