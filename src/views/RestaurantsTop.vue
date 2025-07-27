<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div v-for="restaurant in restaurants" :key="restaurant.id" class="card mb-3"
      style="max-width: 540px;margin: auto;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img class="card-img" :src="`https://picsum.photos/320/240?random=${Math.floor(Math.random() * 1000)}`">
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button v-if="restaurant.isFavorited" @click="deleteFavorite(restaurant.id)" type="button" class="btn btn-danger mr-2">
              移除最愛
            </button>
            <button v-else @click="addFavorite(restaurant.id)" type="button" class="btn btn-primary">
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue';

const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
  }
}

const dummyData = {
  "restaurants": [
    {
      "id": 50,
      "name": "Carley Ortiz",
      "tel": "524.656.8733 x140",
      "address": "4421 Annamae Courts",
      "opening_hours": "08:00",
      "description": "Porro atque illo veniam deleniti sunt numquam rem ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.8830927441068095",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 49,
      "name": "Maxie Grant",
      "tel": "1-716-743-4031 x6586",
      "address": "365 Joelle Flat",
      "opening_hours": "08:00",
      "description": "Ducimus voluptates assumenda culpa ex quia non ut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.389867664345246",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "London Feeney",
      "tel": "1-523-890-2965 x19789",
      "address": "948 Johnathan Terrace",
      "opening_hours": "08:00",
      "description": "Incidunt veniam natus iusto dolor. Eveniet placeat",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.3645251404941448",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Flavie Padberg",
      "tel": "(186) 489-7948",
      "address": "282 Zachery Lake",
      "opening_hours": "08:00",
      "description": "Laudantium beatae nobis officia assumenda facere l",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.43922629902118",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Matilda O'Kon",
      "tel": "966.090.9979 x79935",
      "address": "30749 Margarita Points",
      "opening_hours": "08:00",
      "description": "Tenetur officiis voluptatum dolores inventore repe",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.235306086336664",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Elza Bradtke",
      "tel": "(284) 884-0299 x91914",
      "address": "68139 Stamm Island",
      "opening_hours": "08:00",
      "description": "Omnis iusto asperiores quisquam sequi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.68570969696772",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Bryce Considine",
      "tel": "1-144-457-1573 x162",
      "address": "01985 Langworth Court",
      "opening_hours": "08:00",
      "description": "fugiat dolore quam",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.204277243246935",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Marcelo Crist",
      "tel": "1-550-595-8719 x53327",
      "address": "393 Evert Hollow",
      "opening_hours": "08:00",
      "description": "Dolorum et porro tenetur assumenda ut unde ut quas",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.52764648855126",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Brock Conroy",
      "tel": "1-704-716-6342 x5134",
      "address": "5829 Verner Mill",
      "opening_hours": "08:00",
      "description": "Laudantium qui qui reprehenderit sequi eos volupta",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.03609771750659",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 41,
      "name": "Emery Altenwerth",
      "tel": "1-454-532-2892",
      "address": "49243 Harber Village",
      "opening_hours": "08:00",
      "description": "Laboriosam qui ab animi ut rerum. Voluptatem sapie",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.76615519379344",
      "viewCounts": 0,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}

export default {
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
      currentUser: dummyUser.currentUser
    }
  },
  created() {
    this.fetchRestaurantsTop()
  },
  methods: {
    fetchRestaurantsTop() {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restId) {
      this.restaurants = this.restaurants.map((rest) => {
        if(rest.id === restId) {
          return {
            ...rest,
            FavoritedUsers: [...rest.FavoritedUsers, this.currentUser],
            isFavorited: true
          }
        }
        return rest
      })
    },
    deleteFavorite(restId) {
      this.restaurants = this.restaurants.map((rest) => {
        if(rest.id === restId) {
          return {
            ...rest,
            FavoritedUsers: rest.FavoritedUsers.filter((user) => user.id !== this.currentUser.id),
            isFavorited: false
          }
        }
        return rest
      })
    },
  }
}
</script>