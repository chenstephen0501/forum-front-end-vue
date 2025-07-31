import { apiHelper } from "@/utils/helpers";

export default {
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
    toggleUserRole({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, {
        isAdmin
      })
    }
  },
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', {
        name
      })
    },
    delete(categoryId) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({categoryId, name}) {
      return apiHelper.put(`/admin/categories/${categoryId}`, {
        name,
      })
    },
  },
  restaurants: {
    getDetail(restId) {
      return apiHelper.get(`/admin/restaurants/${restId}`)
    },
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    delete(restId) {
      return apiHelper.delete(`/admin/restaurants/${restId}`)
    },
    update({ restId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restId}`, formData)
    },
  }
}