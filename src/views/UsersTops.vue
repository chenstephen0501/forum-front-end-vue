<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UsersTopCard v-for="user in users" :key="user.id" :initial-user="user"/>
    </div>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue';
import UsersTopCard from '@/components/UsersTopCard.vue';

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
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$QdVtXT6hbOije6fHPLPYmeTPE6fTvglOoNlgf0bwy0Wixem45uSp.",
            "isAdmin": false,
            "image": null,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
            "isAdmin": false,
            "image": null,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default {
  name: 'UserTops',
  components: {
    NavTabs,
    UsersTopCard,
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsersTop()
  },
  methods: {
    fetchUsersTop() {
      const { users } = dummyData
      this.users = users
    },
  },
}
</script>