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
          <router-link :to="{
              name: 'restaurant', params: {
                id: restaurant.id
              }
            }">
            <img class="card-img" :src="`https://picsum.photos/320/240?random=${Math.floor(Math.random() * 1000)}`">
          </router-link>
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
            <router-link :to="{
              name: 'restaurant', params: {
                id: restaurant.id
              }
            }" class="btn btn-primary mr-2">Show</router-link>

            <button v-if="restaurant.isFavorited" @click="deleteFavorite(restaurant.id)" type="button"
              class="btn btn-danger mr-2">
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

import reataurantsAPI from '@/apis/restaurants'
import usersAPI from '@/apis/users'

import { Toast } from '@/utils/helpers';

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
    async fetchRestaurantsTop() {
      try {
        const { data } = await reataurantsAPI.getTopRestaurants()
        this.restaurants = data.restaurants
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法拿到人氣餐廳資料, 請稍候再試'
        })
      }
    },
    async addFavorite(restId) {
      try {
        const { data } = await usersAPI.addFavorite(restId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map((rest) => {
          if (rest.id === restId) {
            return {
              ...rest,
              FavoritedUsers: [...rest.FavoritedUsers, this.currentUser],
              isFavorited: true,
              FavoriteCount: rest.FavoriteCount + 1,
            }
          }
          return rest
        })
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restId) {
      try {
        const { data } = await usersAPI.deleteFavorite(restId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.map((rest) => {
          if (rest.id === restId) {
            return {
              ...rest,
              FavoritedUsers: rest.FavoritedUsers.filter((user) => user.id !== this.currentUser.id),
              isFavorited: false,
              FavoriteCount: rest.FavoriteCount - 1,
            }
          }
          return rest
        })
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    },
  }
}
</script>