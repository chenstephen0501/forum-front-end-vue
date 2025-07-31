<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <!-- <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      > -->
      <img class="card-img-top" :src="`https://picsum.photos/320/240?random=${Math.floor(Math.random() * 1000)}`"
        alt="Card image cap" width="286px" height="180px">
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link :to="{ name: 'restaurant', params: { id: restaurant.id } }">
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category.name }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button :disabled="isProcessing" v-if="restaurant.isFavorited" @click.stop.prevent="deleteFavorite(restaurant.id)" type="button"
          class="btn btn-danger btn-border favorite mr-2">
          移除最愛
        </button>
        <button :disabled="isProcessing" v-else @click.stop.prevent="addFavorite(restaurant.id)" type="button"
          class="btn btn-primary btn-border favorite mr-2">
          加到最愛
        </button>
        <button :disabled="isProcessing" v-if="restaurant.isLiked" @click.stop.prevent="deleteLike(restaurant.id)" type="button"
          class="btn btn-danger like mr-2">
          Unlike
        </button>
        <button :disabled="isProcessing" v-else @click.stop.prevent="addLike(restaurant.id)" type="button" class="btn btn-primary like mr-2">
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import users from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
      favoritedId: [],
      isProcessing: false
    }
  },
  methods: {
    async addFavorite(restatuantId) {
      try {
        this.isProcessing = true
        const { data } = await users.addFavorite(restatuantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
          this.restaurant = {
            ...this.restaurant,
            isFavorited: true,
          }
          this.isProcessing = false
        } catch (error) {
          console.log('error', error)
          this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restatuantId) {
      try {
        this.isProcessing = true
        const { data } = await users.deleteFavorite(restatuantId)
          if (data.status !== 'success') {
            throw new Error(data.message)
          }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
        this.isProcessing = false
      } catch (error) {
        console.log('error', error)
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
    },
    async addLike(restatuantId) {
      try {
        this.isProcessing = true
        const { data } = await users.addLike(restatuantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        }
        this.isProcessing = false
      } catch (error) {
        console.log('error', error)
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法將餐廳點讚，請稍後再試'
        })
      }
    },
    async deleteLike(restatuantId) {
      try {
        this.isProcessing = true
        const { data } = await users.deleteLike(restatuantId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
        this.isProcessing = false
      } catch (error) {
        console.log('error', error)
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法將餐廳取消讚，請稍後再試'
        })
      }
    },
  }
}
</script>
<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>