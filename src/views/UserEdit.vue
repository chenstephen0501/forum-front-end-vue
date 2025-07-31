<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="updateUser.name" id="name" type="text" name="name" class="form-control" placeholder="Enter Name"
          required>
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img v-if="updateUser.image" :src="updateUser.image | emptyUserImage" alt="" width="200" height="200"
          class="d-block img-thumbnail mb-3">
        <input @change="handleFileChange" :src="updateUser.image" id="image" type="file" name="image" accept="image/*"
          class="form-control-file">
      </div>

      <button :disabled="isProcessing" type="submit" class="btn btn-primary">
        {{ isProcessing ? '處理中...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

import { emptyUserImageFilter } from '@/utils/mixins'
import { mapState } from 'vuex'

export default {
  name: 'UserEdit',
  mixins: [emptyUserImageFilter],
  data() {
    return {
      updateUser: {
        "id": -1,
        "name": "",
        "email": "",
        "image": "",
      },
      isProcessing: false,
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params
    this.setUser(userId)
    next()
  },
  created() {
    const { id: userId } = this.$route.params
    this.setUser(userId)
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    setUser(userId) {
      if (userId.toString() !== this.currentUser.id.toString()) {
        this.$router.push({ name: 'not-found' })
      }
      this.updateUser = {
        ...this.updateUser,
        ...this.currentUser
      }
    },
    handleFileChange(e) {
      const { files } = e.target
      const imgUrl = window.URL.createObjectURL(files[0])
      this.updateUser.image = imgUrl
    },
    async handleSubmit(e) {
      try {
        this.isProcessing = true
        const form = e.target
        const formData = new FormData(form)

        const { data } = await usersAPI.update({ userId: this.updateUser.id, formData })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push(`/users/${this.updateUser.id}`)
      } catch (error) {
        this.isProcessing = false
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法編輯使用者資料,請稍候再試'
        })
      }
    }
  }
}
</script>