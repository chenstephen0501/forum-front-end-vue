<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th scope="col" width="140">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin }}</td>
          <td>
            <button v-if="user.id !== currentUser.id" @click.stop.prevent="toggleUserRole(user.id)" type="button" class="btn btn-link">
              set as {{ user.isAdmin === true ? 'user' : 'admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';

const dummyData = {
  "users": [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$k4ty8W0Nip0Zi1wLOjPL4OIzvnFuWAc4Butn7zi5GqXlixncVLuhi",
      "isAdmin": true,
      "image": null,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$QdVtXT6hbOije6fHPLPYmeTPE6fTvglOoNlgf0bwy0Wixem45uSp.",
      "isAdmin": false,
      "image": null,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
      "isAdmin": false,
      "image": null,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-21T13:58:12.000Z"
    }
  ]
}

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
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {
        "id": -1,
        "name": "",
        "email": "",
        "image": null,
        "isAdmin": true
      }
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
      this.currentUser = dummyUser.currentUser
    },
    toggleUserRole(userId) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>