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
          <button @click.stop.prevent="addCategory" type="button" class="btn btn-primary">
            新增
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
            <button @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
              v-show="category.isEditing" type="button" class="btn btn-link mr-2">
              Save
            </button>

            <button @click.stop.prevent="deleteCategory(category.id)" type="button" class="btn btn-link mr-2">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';
import uuid4 from 'uuid4';

const dummyData = {
  "categories": [
    {
      "id": 1,
      "name": "中式料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 2,
      "name": "日本料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 4,
      "name": "墨西哥料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 5,
      "name": "素食料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 6,
      "name": "美式料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 7,
      "name": "複合式料理",
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    }
  ]
}

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: '',
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      const { categories } = dummyData
      this.categories = categories.map(category => ({ ...category, isEditing: false, nameCatchd: '' }))
    },
    addCategory() {
      this.categories.push({ id: uuid4(), name: this.newCategoryName })
    },
    deleteCategory(categoryId) {
      this.categories = this.categories.filter((category) => category.id !== categoryId)
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
    updateCategory({ categoryId, name }) {
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