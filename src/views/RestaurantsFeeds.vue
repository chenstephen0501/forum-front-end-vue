<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading"/>
    <template v-else>
      <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewesRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewesComments :comments="comments" />
      </div>
    </div>
    </template>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue';
import NewesRestaurants from '@/components/NewesRestaurants.vue';
import NewesComments from '@/components/NewesComments.vue';
import restaurantsAPI from '@/apis/restaurants'
import Spinner from '@/components/Spinner.vue';
import { Toast } from '@/utils/helpers';

export default {
  components: {
    NavTabs,
    NewesRestaurants,
    NewesComments,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true,
    }
  },
  created() {
    this.fetchRestaurantsFeeds()
  },
  methods: {
    async fetchRestaurantsFeeds() {
      try {
        this.isLoading = true
        const resp = await restaurantsAPI.getFeeds()
        const { restaurants, comments } = resp.data
        this.restaurants = restaurants,
        this.comments = comments
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>