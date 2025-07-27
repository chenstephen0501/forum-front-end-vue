<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
          <NewesRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewesComments :comments="comments"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '@/components/NavTabs.vue';
import NewesRestaurants from '@/components/NewesRestaurants.vue';
import NewesComments from '@/components/NewesComments.vue';

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
            }
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
            }
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
            }
        },
        {
            "id": 4,
            "name": "Albina Okuneva",
            "tel": "288.529.4465 x260",
            "address": "0859 Lempi Dam",
            "opening_hours": "08:00",
            "description": "Placeat quisquam voluptatum voluptatum omnis commodi minus nostrum.",
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
            }
        },
        {
            "id": 5,
            "name": "Hosea Gulgowski",
            "tel": "1-528-778-6601",
            "address": "64168 Kohler Greens",
            "opening_hours": "08:00",
            "description": "Dolorem vel mollitia dolor odio eius in ea necessitatibus deserunt. Est ut officia. Aspernatur eum et. Illum sit et.\n \rQuas vitae occaecati numquam aut. Illo omnis laborum non inventore. Ut sapiente alias officiis et. Nam earum ab nulla voluptates sit occaecati dolorem voluptatem. Saepe non voluptates distinctio fugiat et eos voluptatem. Blanditiis sed adipisci.\n \rMinima neque dolorem explicabo vel voluptatum aliquid et animi. Perspiciatis ea aut sunt. Est vel qui. Eveniet illo ipsum autem ex asperiores et sed. Autem aut rerum et et ut dolorum voluptate ut.",
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
            }
        },
        {
            "id": 6,
            "name": "Miss Margarett Jaskolski",
            "tel": "396.466.8520 x413",
            "address": "8046 Marquis Mountain",
            "opening_hours": "08:00",
            "description": "Facilis perferendis placeat qui est ducimus fugiat quaerat ipsum. Tempore quia ex natus. Omnis et ut ducimus.",
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
            }
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
            }
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
            }
        },
        {
            "id": 9,
            "name": "Miss Jaylin Schamberger",
            "tel": "1-963-278-0076",
            "address": "1240 Howard Ridges",
            "opening_hours": "08:00",
            "description": "Tempore ea autem voluptas et rerum at voluptates. Libero assumenda voluptatem aut. Pariatur autem dolor doloribus dolor. Occaecati commodi dolor omnis quia quia. Vel in et voluptatem dolorem. Repellat blanditiis voluptates.\n \rPossimus et qui dolorem minima mollitia est rerum et. Tempore in voluptatem dolor sed excepturi. Voluptatem error possimus. Sed laboriosam non ducimus. Vero et culpa sit.\n \rVoluptas quo vitae qui est autem perferendis unde. Repellendus nobis debitis quae autem numquam adipisci omnis aspernatur quia. Aliquid quas iusto doloribus ratione veniam dolores nisi. Ea odio sequi eos ut.",
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
            }
        },
        {
            "id": 10,
            "name": "Corbin Schumm",
            "tel": "837-572-0440 x06291",
            "address": "6492 Graham Roads",
            "opening_hours": "08:00",
            "description": "Aspernatur a veritatis similique est. Aut maiores aut eos doloremque. Omnis officiis sit nobis atque et eos non recusandae porro.\n \rSint sequi ullam cupiditate dolor sint impedit nulla ex qui. Ex qui molestias totam. Quasi non eum numquam fuga eos molestiae minus. Voluptate deleniti cum qui aut qui vel doloremque commodi quibusdam.\n \rEt culpa doloremque iusto quia. Illo odio quam consequatur et. Ut voluptatem nisi magni quia quae voluptatem nam quas nostrum. Eos eveniet non eius rerum.",
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
            }
        }
    ],
    "comments": [
        {
            "id": 1,
            "text": "Ipsum eum quis est aut vero molestiae qui voluptatem optio.",
            "UserId": 3,
            "RestaurantId": 1,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 2,
            "text": "Molestiae deserunt iste eligendi.",
            "UserId": 3,
            "RestaurantId": 2,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 4
            }
        },
        {
            "id": 3,
            "text": "Perspiciatis et quis pariatur illo accusamus possimus rem.",
            "UserId": 3,
            "RestaurantId": 3,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 2
            }
        },
        {
            "id": 4,
            "text": "Ea debitis blanditiis quia praesentium vel nesciunt.",
            "UserId": 1,
            "RestaurantId": 4,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$k4ty8W0Nip0Zi1wLOjPL4OIzvnFuWAc4Butn7zi5GqXlixncVLuhi",
                "isAdmin": true,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
                "id": 4,
                "name": "Albina Okuneva",
                "tel": "288.529.4465 x260",
                "address": "0859 Lempi Dam",
                "opening_hours": "08:00",
                "description": "Placeat quisquam voluptatum voluptatum omnis commodi minus nostrum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.3436296343602336",
                "viewCounts": 0,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 5,
            "text": "Consequatur enim et placeat molestias quaerat.",
            "UserId": 3,
            "RestaurantId": 5,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
                "id": 5,
                "name": "Hosea Gulgowski",
                "tel": "1-528-778-6601",
                "address": "64168 Kohler Greens",
                "opening_hours": "08:00",
                "description": "Dolorem vel mollitia dolor odio eius in ea necessitatibus deserunt. Est ut officia. Aspernatur eum et. Illum sit et.\n \rQuas vitae occaecati numquam aut. Illo omnis laborum non inventore. Ut sapiente alias officiis et. Nam earum ab nulla voluptates sit occaecati dolorem voluptatem. Saepe non voluptates distinctio fugiat et eos voluptatem. Blanditiis sed adipisci.\n \rMinima neque dolorem explicabo vel voluptatum aliquid et animi. Perspiciatis ea aut sunt. Est vel qui. Eveniet illo ipsum autem ex asperiores et sed. Autem aut rerum et et ut dolorum voluptate ut.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.72084687985765",
                "viewCounts": 0,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 6,
            "text": "Saepe dolorum ut sint veritatis qui.",
            "UserId": 3,
            "RestaurantId": 6,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
                "id": 6,
                "name": "Miss Margarett Jaskolski",
                "tel": "396.466.8520 x413",
                "address": "8046 Marquis Mountain",
                "opening_hours": "08:00",
                "description": "Facilis perferendis placeat qui est ducimus fugiat quaerat ipsum. Tempore quia ex natus. Omnis et ut ducimus.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.2860755522551965",
                "viewCounts": 0,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z",
                "CategoryId": 5
            }
        },
        {
            "id": 7,
            "text": "Ad eum in dolor maxime aperiam nemo porro est fugit.",
            "UserId": 3,
            "RestaurantId": 7,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$25pVxv//FHxtMdFOIfPK5uEjVOsZeEQQL2XEI/3GcpZ.NIff3DhdS",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 5
            }
        },
        {
            "id": 8,
            "text": "Et hic sequi nemo ea voluptas fuga voluptatem illum.",
            "UserId": 2,
            "RestaurantId": 8,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$QdVtXT6hbOije6fHPLPYmeTPE6fTvglOoNlgf0bwy0Wixem45uSp.",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
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
                "CategoryId": 3
            }
        },
        {
            "id": 9,
            "text": "Quo dolores ex quos facere optio dolores.",
            "UserId": 2,
            "RestaurantId": 9,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$QdVtXT6hbOije6fHPLPYmeTPE6fTvglOoNlgf0bwy0Wixem45uSp.",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
                "id": 9,
                "name": "Miss Jaylin Schamberger",
                "tel": "1-963-278-0076",
                "address": "1240 Howard Ridges",
                "opening_hours": "08:00",
                "description": "Tempore ea autem voluptas et rerum at voluptates. Libero assumenda voluptatem aut. Pariatur autem dolor doloribus dolor. Occaecati commodi dolor omnis quia quia. Vel in et voluptatem dolorem. Repellat blanditiis voluptates.\n \rPossimus et qui dolorem minima mollitia est rerum et. Tempore in voluptatem dolor sed excepturi. Voluptatem error possimus. Sed laboriosam non ducimus. Vero et culpa sit.\n \rVoluptas quo vitae qui est autem perferendis unde. Repellendus nobis debitis quae autem numquam adipisci omnis aspernatur quia. Aliquid quas iusto doloribus ratione veniam dolores nisi. Ea odio sequi eos ut.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.55527389657869",
                "viewCounts": 0,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z",
                "CategoryId": 1
            }
        },
        {
            "id": 10,
            "text": "Quidem recusandae qui quis ut fuga.",
            "UserId": 2,
            "RestaurantId": 10,
            "createdAt": "2025-07-21T13:58:12.000Z",
            "updatedAt": "2025-07-21T13:58:12.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$QdVtXT6hbOije6fHPLPYmeTPE6fTvglOoNlgf0bwy0Wixem45uSp.",
                "isAdmin": false,
                "image": null,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z"
            },
            "Restaurant": {
                "id": 10,
                "name": "Corbin Schumm",
                "tel": "837-572-0440 x06291",
                "address": "6492 Graham Roads",
                "opening_hours": "08:00",
                "description": "Aspernatur a veritatis similique est. Aut maiores aut eos doloremque. Omnis officiis sit nobis atque et eos non recusandae porro.\n \rSint sequi ullam cupiditate dolor sint impedit nulla ex qui. Ex qui molestias totam. Quasi non eum numquam fuga eos molestiae minus. Voluptate deleniti cum qui aut qui vel doloremque commodi quibusdam.\n \rEt culpa doloremque iusto quia. Illo odio quam consequatur et. Ut voluptatem nisi magni quia quae voluptatem nam quas nostrum. Eos eveniet non eius rerum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.093032534671634",
                "viewCounts": 0,
                "createdAt": "2025-07-21T13:58:12.000Z",
                "updatedAt": "2025-07-21T13:58:12.000Z",
                "CategoryId": 1
            }
        }
    ]
}

export default {
  components: {
    NavTabs,
    NewesRestaurants,
    NewesComments,
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchRestaurantsFeeds()
  },
  methods: {
    fetchRestaurantsFeeds() {
      const { restaurants, comments } = dummyData
      this.restaurants = restaurants,
      this.comments = comments
    }
  }
}
</script>