<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="currentUser.name" id="name" type="text" name="name" class="form-control" placeholder="Enter Name" required>
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="currentUser.image" :src="currentUser.image" alt="" width="200" height="200" class="d-block img-thumbnail mb-3">
        <input @change="handleFileChange" :src="currentUser.image" id="image" type="file" name="image" accept="image/*" class="form-control-file">
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { emptyUserImageFilter } from '@/utils/mixins'

const dummyUser = {
  currentUser: {
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": "",
    "isAdmin": true
  }
}

export default {
  name: 'UserEdit',
  mixins: [emptyUserImageFilter],
  data() {
    return {
      currentUser: {
        "id": -1,
        "name": "",
        "email": "",
        "image": "",
      }
    }
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  methods: {
    fetchUser(userId) {
      console.log('userId', userId)
      const { id , name, email, image } = dummyUser.currentUser
      this.currentUser = {
        id, name, email, image
      }
    },
    handleFileChange(e) {
      const { files } = e.target
      const imgUrl = window.URL.createObjectURL(files[0])
      this.currentUser.image = imgUrl
    },
    handleSubmit(e) {
      const form = e.target
      const formData = new FormData(form)
      for (const [key, value] of formData.entries()) {
        console.log(key, ":", value)
      }
    }
  }
}
</script>