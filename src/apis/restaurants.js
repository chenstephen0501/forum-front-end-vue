import { apiHelper } from "@/utils/helpers";

export default {
  getRetaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top')
  },
  getRestaurant(restId) {
    return apiHelper.get(`/restaurants/${restId}`)
  },
}