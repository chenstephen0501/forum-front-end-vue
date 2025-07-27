<template>
    <div class="container py-5">
        <NavTabs />
        <!-- 餐廳類別標籤 RestaurantsNavPills -->
        <RestaurantsNavPills :categories="categories" />

        <div class="row">
            <!-- 餐廳卡片 RestaurantCard-->
            <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" />
        </div>

        <!-- 分頁標籤 RestaurantPagination -->
        <RestaurantPagination :current-page="currentPage" :total-page="totalPage" :next-page="nextPage" :previous-page="previousPage" :category-id="categoryId" />
    </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue';
import RestaurantCard from '@/components/RestaurantCard.vue';
import RestaurantsNavPills from '@/components/RestaurantsNavPills.vue';
import RestaurantPagination from '@/components/RestaurantPagination.vue';

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Luella Hammes",
            "tel": "606-136-5201 x07112",
            "address": "2408 Kelsie Ville",
            "opening_hours": "08:00",
            "description": "Eveniet et veritatis et aspernatur sed non.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.337587170916876",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Mr. Daniella Blanda",
            "tel": "655-463-3288",
            "address": "5795 Johnson Hill",
            "opening_hours": "08:00",
            "description": "Doloribus qui voluptatum ut.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.55362418935439",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Timothy Waters",
            "tel": "530-909-0724 x413",
            "address": "5196 Kathleen Stravenue",
            "opening_hours": "08:00",
            "description": "quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.27603651632434",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Albina Okuneva",
            "tel": "288.529.4465 x260",
            "address": "0859 Lempi Dam",
            "opening_hours": "08:00",
            "description": "Placeat quisquam voluptatum voluptatum omnis commo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.3436296343602336",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Hosea Gulgowski",
            "tel": "1-528-778-6601",
            "address": "64168 Kohler Greens",
            "opening_hours": "08:00",
            "description": "Dolorem vel mollitia dolor odio eius in ea necessi",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.72084687985765",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Miss Margarett Jaskolski",
            "tel": "396.466.8520 x413",
            "address": "8046 Marquis Mountain",
            "opening_hours": "08:00",
            "description": "Facilis perferendis placeat qui est ducimus fugiat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.2860755522551965",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Elnora Crist",
            "tel": "(551) 484-8523 x1981",
            "address": "3544 Weimann Shoal",
            "opening_hours": "08:00",
            "description": "Nihil voluptates molestiae rem eos.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.685531357749014",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Camryn Reynolds",
            "tel": "130.691.4262 x5467",
            "address": "87256 Sharon Streets",
            "opening_hours": "08:00",
            "description": "Soluta veniam aperiam at possimus.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=56.50304361193539",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Miss Jaylin Schamberger",
            "tel": "1-963-278-0076",
            "address": "1240 Howard Ridges",
            "opening_hours": "08:00",
            "description": "Tempore ea autem voluptas et rerum at voluptates. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.55527389657869",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Corbin Schumm",
            "tel": "837-572-0440 x06291",
            "address": "6492 Graham Roads",
            "opening_hours": "08:00",
            "description": "Aspernatur a veritatis similique est. Aut maiores ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.093032534671634",
            "viewCounts": 0,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
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
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}


export default {
    name: 'Restaurants',
    components: {
        NavTabs,
        RestaurantCard,
        RestaurantsNavPills,
        RestaurantPagination,
    },
    data() {
        return {
            restaurants: [],
            categories: [],
            categoryId: -1,
            currentPage: 1,
            totalPage: [],
            previousPage: -1,
            nextPage: -1
        }
    },
    created() {
        this.fetchRestaurants()
    },
    methods: {
        fetchRestaurants() {
            const { restaurants, categories, categoryId, page, totalPage, prev, next } = dummyData
            this.restaurants = restaurants
            this.categories = categories
            this.categoryId = categoryId
            this.currentPage = page
            this.totalPage = totalPage
            this.previousPage = prev
            this.nextPage = next
        }
    }
}
</script>