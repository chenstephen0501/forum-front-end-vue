<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard :user="user" :isFollowed="isFollowed" :current-user="currentUser" @after-add-following="afterAddFollowing" @after-delete-following="afterDeleteFollowing"/>
    <div class="row">
      <div class="col-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard :followings="followings" />
        <!-- UserFollowersCard -->
        <UserFollowersCard :followers="followers" />
      </div>
      <div class="col-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard :comments="comments" />
        <!-- UserFavoriteRestaurantsCard -->
        <UserFavoritedRestaurantsCard :favoritedRestaurants="favoritedRestaurants" />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from '@/components/UserProfileCard.vue';
import UserFollowingsCard from '@/components/UserFollowingsCard.vue';
import UserFollowersCard from '@/components/UserFollowersCard.vue';
import UserFavoritedRestaurantsCard from '@/components/UserFavoritedRestaurantsCard.vue';
import UserCommentsCard from '@/components/UserCommentsCard.vue';

import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers';
import { mapState } from 'vuex';

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserFavoritedRestaurantsCard,
    UserCommentsCard,
  },
  data() {
    return {
      user: {
        id: '',
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      isFollowed: false,
      followings: [],
      followers: [],
      favoritedRestaurants: [],
      comments: [],
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  beforeRouteUpdate(to, form, next) {
    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await usersAPI.get(userId)
        const { profile, isFollowed } = data
        const {
          id,
          image,
          name,
          email,
          Followings,
          Followers,
          Comments,
          FavoritedRestaurants
        } = profile
        this.user = {
          id,
          image,
          name,
          email,
          followersLength: Followers.length,
          followingsLength: Followings.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }
        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants
        this.comments = Comments
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取得個人資訊，請稍候再試'
        })
      }
    },
    async afterAddFollowing(currentUserId) {
      try {
        const { data } = await usersAPI.addFollowing(currentUserId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.followers.push(this.currentUser)
        this.user.followersLength++
        this.isFollowed = true
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法追蹤，請稍候再試'
        })
      }
    },
    async afterDeleteFollowing(currentUserId) {
      try {
        const { data } = await usersAPI.deleteFollowing(currentUserId)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.followers = this.followers.filter(user => user.id !== currentUserId)
        this.user.followersLength--
        this.isFollowed = true
      } catch (error) {
        console.log('error', error)

        Toast.fire({
          icon: 'error',
          title: '無法取追蹤，請稍候再試'
        })
      }
    },
  }
}
</script>