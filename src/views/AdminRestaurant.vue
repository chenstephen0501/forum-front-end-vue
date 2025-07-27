<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px;margin-bottom: 25px;"
        >
        <div class="well">
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
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr>
    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >回上一頁</button>
  </div>
</template>

<script>
import { emptyImageFilter } from '@/utils/mixins'

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
        }
    }
}

export default {
  name: 'AdminRestaurant',
  mixins: [emptyImageFilter],

  data() {
    return {
      restaurant: {
        "id": -1,
        "name": "",
        "tel": "",
        "address": "",
        "openingHours": "",
        "description": "",
        "image": "",
        "viewCounts": 0,
        "createdAt": "",
        "categoryName": ""
      }
    }
  },
  mounted () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('restaurantId', restaurantId)
      const { restaurant } = dummyData
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours ,
        description,
        image,
        viewCounts,
        createdAt,
        Category,
      } = restaurant
      console.log('Category', Category)
      this.restaurant = {
        id,
        name,
        tel,
        address,
        openingHours,
        description,
        image,
        viewCounts,
        createdAt,
        categoryName: Category.name,
      }
      console.log('this', this.reataurant)
    }
  }
}
</script>