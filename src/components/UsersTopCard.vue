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
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.prevent.stop="deleteFollowed()"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.prevent.stop="addFollowed()"
          >
            追蹤
          </button>
        </p>
      </div>
</template>

<script>
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
    addFollowed() {
      this.user.isFollowed = true
      this.user.FollowerCount++
    },
    deleteFollowed(){
      this.user.isFollowed = false
      this.user.FollowerCount--
    },
  }
}
</script>