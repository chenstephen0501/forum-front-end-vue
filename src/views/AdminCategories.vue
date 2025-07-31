<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input v-model="newCategoryName" type="text" class="form-control" placeholder="新增餐廳類別...">
        </div>
        <div class="col-auto">
          <button :disabled="isProcessing" @click.stop.prevent="addCategory" type="button" class="btn btn-primary">
            {{ isProcessing ? '處理中...' : '新增' }}
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th scope="col" width="210">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>
            <input v-show="category.isEditing" v-model="category.name" type="text" class="form-control">
            <span @click.stop.prevent="handleCelcal(category.id)" v-show="category.isEditing" class="cancel">
              ✕
            </span>
            <!-- <div class="category-name">
              {{ category.name }}
            </div> -->
          </td>
          <td class="d-flex justify-content-between">
            <!-- <button
              type="button"
              class="btn btn-link mr-2"
            > -->
            <button @click="toggleIsEditing(category.id)" v-show="!category.isEditing" type="button"
              class="btn btn-link mr-2">
              Edit
            </button>
            <button :disabled="isProcessing" @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
              v-show="category.isEditing" type="button" class="btn btn-link mr-2">
              {{isProcessing ? '處理中' : 'Save'}}
            </button>

            <button :disabled="deletingId === category.id" @click.stop.prevent="deleteCategory(category.id)"
              type="button" class="btn btn-link mr-2">
              {{ deletingId === category.id ? '處理中' : 'Delete' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';
// import uuid4 from 'uuid4';
import adminAPI from '@/apis/admin'
import { Toast } from '@/utils/helpers';

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false,
      deletingId: null,
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get()
        const { categories } = data
        this.categories = categories.map(category => ({ ...category, isEditing: false, nameCatchd: '' }))
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳類別資料，請稍候再試'
        })
      }
    },
    async addCategory() {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.categories.create({ name: this.newCategoryName })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.categories.push({ id: data.categoryId, name: this.newCategoryName, isEditing: false, nameCatchd: '' })
        this.isProcessing = false
        this.newCategoryName = ''
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法新增類別，請稍候再試'
        })
      }
    },
    async deleteCategory(categoryId) {
      try {
        this.deletingId = categoryId
        const { data } = await adminAPI.categories.delete(categoryId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.categories = this.categories.filter((category) => category.id !== categoryId)
        this.deletingId = null
        Toast.fire({
          icon: 'success',
          title: '成功刪除該餐廳類別'
        })
      } catch (error) {
        this.deletingId = null
        this.isProcessing = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法刪除類別，請稍候再試'
        })
      }
    },
    toggleIsEditing(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCatchd: category.name
          }
        }
        return category
      })
    },
    async updateCategory({ categoryId, name }) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.categories.update({ categoryId, name })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name,
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
      this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        this.isProcessing = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法修改類別，請稍候再試'
        })
      }
    },
    handleCelcal(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCatchd
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scope>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>