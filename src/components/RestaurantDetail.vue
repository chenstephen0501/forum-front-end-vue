<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <!-- <img
        class="img-responsive center-block" 
    src="https://loremflickr.com/320/240/food,dessert,restaurant/"
        style="width: 250px;margin-bottom: 25px;"
      > -->
      <img class="img-responsive center-block"
        :src="`https://picsum.photos/320/240?random=${Math.floor(Math.random() * 1000)}`"
        style="width: 250px;margin-bottom: 25px;">
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }">Dashboard</router-link>

      <button :disabled="isProcessingFavorite" v-if="restaurant.isFavorited" type="button" @click="deleteFavorite(restaurant.id)"
        class="btn btn-danger btn-border mr-2">
        {{ isProcessingFavorite ? '處理中...' : '移除最愛'}}
      </button>
      <button :disabled="isProcessingFavorite"  v-else type="button" @click="addFavorite(restaurant.id)" class="btn btn-primary btn-border mr-2">
        {{ isProcessingFavorite ? '處理中...' : '加到最愛' }}
      </button>
      <button :disabled="isProcessingLike"  v-if="restaurant.isLiked" type="button" @click="unLike(restaurant.id)" class="btn btn-danger like mr-2">
        {{ isProcessingLike ? '處理中...' : 'Unlike' }}
      </button>
      <button :disabled="isProcessingLike"  v-else type="button" @click="onLike(restaurant.id)" class="btn btn-primary like mr-2">
        {{ isProcessingLike ? '處理中...' : 'Like' }}
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      isProcessingFavorite: false,
      isProcessingLike: false,
    }
  },
  watch:{
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurants,
        ...newValue
      }
    }
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        this.isProcessingFavorite = true
        const { data } = await usersAPI.addFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant.isFavorited = true
        this.isProcessingFavorite = false
      } catch (error) {
        this.isProcessingFavorite = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法加到最愛，請稍候再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessingFavorite = restaurantId
        const { data } = await usersAPI.deleteFavorite(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant.isFavorited = false
        this.isProcessingFavorite = false
      } catch (error) {
        this.isProcessingFavorite = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法移除最愛，請稍候再試'
        })
      }
    },
    async onLike(restaurantId) {
      try {
        this.isProcessingLike = true
        const { data } = await usersAPI.addLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant.isLiked = true
        this.isProcessingLike = false
      } catch (error) {
        this.isProcessingLike = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法點讚，請稍候再試'
        })
      }
    },
    async unLike(restaurantId) {
      try {
        this.isProcessingLike = true
        const { data } = await usersAPI.deleteLike(restaurantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant.isLiked = false
        this.isProcessingLike = false
      } catch (error) {
        this.isProcessingLike = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取消讚，請稍候再試'
        })
      }
    },
  }
}
</script>
<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>