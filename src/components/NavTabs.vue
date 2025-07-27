<template>
  <ul class="nav nav-tabs mb-4">
    <li v-for="tab in tabs" :key="tab.id" class="nav-item">
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
// import uuid4 from 'uuid4';
import { v4 as uuid4 } from 'uuid';

export default {
  data() {
    return {
      tabs: [
        {
          id: uuid4(),
          title: '首頁',
          path: '/restaurants',
        },
        {
          id: uuid4(),
          title: '最新動態',
          path: '/restaurants/feeds',
        },
        {
          id: uuid4(),
          title: '人氣餐廳',
          path: '/restaurants/top',
        },
        {
          id: uuid4(),
          title: '美食達人',
          path: '/users/top',
        },
      ]
    }
  }
}
</script>