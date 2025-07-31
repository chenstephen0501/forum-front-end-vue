<template>
  <div class="col-3">
        <!-- <a href="#">
          <img
            src="http://via.placeholder.com/300x300?text=No+Image"
            width="140px"
            height="140px"
          >
        </a> -->
        <a href="#">
          <img
            :src="`https://picsum.photos/300/300?random=${Math.floor(Math.random() * 1000)}`"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.followerCount}}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.prevent.stop="deleteFollowed(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.prevent.stop="addFollowed(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
  name: 'UsersTopCard',
  props: {
    initialUser: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      user: this.initialUser
    }
  },
  methods: {
    async addFollowed(userId) {
      try {
        const { data } = await usersAPI.addFollowing(userId)
      if (data.status !== 'success') {
        throw new Error(data.message)
      }
      this.user.isFollowed = true
      this.user.followerCount++
      } catch(error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法加入追蹤，請稍後再試'
        })
      }
    },
    async deleteFollowed(userId){
      try {
        const { data } = await usersAPI.deleteFollowing(userId)
      if (data.status !== 'success') {
        throw new Error(data.message)
      }
      this.user.isFollowed = false
      this.user.followerCount--
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    },
  }
}
</script>