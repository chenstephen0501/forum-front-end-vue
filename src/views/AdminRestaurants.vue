<template>
  <div class="container py-5">
    <!-- 後台導覽頁籤 AdminNav -->
    <AdminNav />

    <router-link :to="{ name: 'admin-restaurant-new' }" class="btn btn-primary mb-4">
      New Restaurant
    </router-link>

    <!-- 後台餐廳列表 AdminRestaurantsTable -->
    <AdminRestaurantsTable :restaurants="restaurants" @after-delete-restaurant="afterDeleteRestaurant" />
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';
import AdminRestaurantsTable from '@/components/AdminRestaurantsTable.vue';

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
      "viewCounts": 2,
      "createdAt": "2025-07-21T13:58:12.000Z",
      "updatedAt": "2025-07-26T03:37:28.000Z",
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
    },
    {
      "id": 11,
      "name": "Tracey Bailey MD",
      "tel": "(011) 860-3320 x780",
      "address": "605 Emery Tunnel",
      "opening_hours": "08:00",
      "description": "Vero beatae quo doloremque.\nNulla consectetur quia velit dignissimos.\nVero nam nihil id.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.612387636967554",
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
      "id": 12,
      "name": "Hershel Kuvalis",
      "tel": "1-956-533-5293",
      "address": "370 Gislason Haven",
      "opening_hours": "08:00",
      "description": "Alias similique error culpa. Ut omnis possimus vel dolorem rerum. Nemo omnis qui ut labore sint sed esse omnis. Explicabo qui aliquam sunt nemo. Voluptatem dolore vitae necessitatibus minus quam quas exercitationem doloremque sed. Omnis autem minus pariatur placeat assumenda necessitatibus in eaque.\n \rNeque qui qui distinctio. Veniam cumque veritatis qui minus autem accusantium voluptas quo. Sunt atque assumenda quibusdam incidunt. Neque tempora laudantium. Dicta et corrupti libero perferendis in id aut impedit.\n \rEx soluta explicabo quas quod. Aut quo qui nobis placeat aut. Dolorem voluptas dolor est quod eius quo. Eum tempora et debitis sit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=9.49928780071685",
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
      "id": 13,
      "name": "Alexis Sipes",
      "tel": "1-019-458-6612 x913",
      "address": "88806 Keeley Passage",
      "opening_hours": "08:00",
      "description": "qui",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=18.23308144149305",
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
      "id": 14,
      "name": "John Langworth",
      "tel": "1-625-080-6385 x59581",
      "address": "019 Chandler Pines",
      "opening_hours": "08:00",
      "description": "Et qui labore molestias. Dolorem nihil nulla nam velit. Quis accusamus quo facilis maiores numquam inventore omnis inventore voluptate. Totam laudantium recusandae. Rerum nostrum magni et ut a corrupti mollitia. Et et minus ea ab earum.\n \rMollitia tempora ut modi qui consequatur alias deleniti rerum unde. In sint vitae facere earum enim numquam dolores reprehenderit iusto. Aut odit nostrum. Alias fuga recusandae quam consequuntur provident beatae ut. Et non dolores adipisci dolor cumque dicta voluptatibus quia adipisci. Aliquam illo dolorum et rerum blanditiis soluta eaque.\n \rVelit quidem tempore et quia. Sunt dolore eius et eos labore. Est magni eius velit consectetur sunt eos rem. Ducimus et mollitia ut animi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.47776192615129",
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
      "id": 15,
      "name": "Jalen Grimes",
      "tel": "(856) 382-7915",
      "address": "6400 Russel Trail",
      "opening_hours": "08:00",
      "description": "Ipsam quia nulla vero velit voluptas facere dolore natus.\nId beatae nobis necessitatibus veritatis id numquam.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=70.69338646663238",
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
      "id": 16,
      "name": "Syble Walker Jr.",
      "tel": "(786) 296-0460 x5668",
      "address": "555 Callie Ridges",
      "opening_hours": "08:00",
      "description": "Facilis eius et minus maxime nulla in quia ut dignissimos. Provident quae sunt architecto labore. Nihil autem sint provident qui sed itaque soluta aut. Id aut ipsum.\n \rEos voluptatem alias nesciunt aliquid ut provident hic itaque dolorem. Earum aut magni eum laboriosam provident iusto rerum quia. Non molestiae qui consequuntur quod commodi pariatur.\n \rOfficiis qui dicta ipsam dolorum odit. Architecto amet inventore qui a tempora. Et inventore voluptas sint aut quod dignissimos non. Dolorem itaque est. Consequatur nam qui consequatur veritatis quidem sed fugit. Voluptatem quaerat dolorem minus et nemo vel neque rerum sunt.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=19.131704885467336",
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
      "id": 17,
      "name": "Jazmyne Davis",
      "tel": "1-709-427-8623 x59152",
      "address": "376 Gabrielle Crest",
      "opening_hours": "08:00",
      "description": "Provident eum itaque non est dolores animi neque. Incidunt quo ea. Animi eum rerum fugiat. Tenetur distinctio non vitae culpa blanditiis tenetur.\n \rRepellat ut voluptatem maiores maxime voluptatem. Sed optio sed pariatur voluptas totam nulla commodi similique. Fugit et hic quia eum. Labore eligendi cupiditate maxime eos quis eum est hic. Quis minima aut voluptates dolor a voluptatum cumque sed qui.\n \rNesciunt ducimus nihil non. Necessitatibus et explicabo unde quod deleniti voluptatem. Nihil dicta a. Earum quo fuga. Atque ut earum quo dicta iusto sed nostrum. Impedit veniam quisquam consequatur necessitatibus eius maiores fugiat.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.718071178356212",
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
      "id": 18,
      "name": "Magnolia Cummings",
      "tel": "1-707-102-8224",
      "address": "60452 Schultz Inlet",
      "opening_hours": "08:00",
      "description": "Voluptatibus sed et est commodi modi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=30.379492548875508",
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
      "id": 19,
      "name": "Abbey Hilll",
      "tel": "445-035-1021",
      "address": "6610 Thompson Expressway",
      "opening_hours": "08:00",
      "description": "Quis labore officia quaerat quis dolor qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.309222246875727",
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
      "id": 20,
      "name": "Drake Boyer",
      "tel": "1-814-937-9059 x98767",
      "address": "853 Runolfsdottir Brooks",
      "opening_hours": "08:00",
      "description": "maiores ut sed",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.557184628219459",
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
      "id": 21,
      "name": "Linwood Satterfield",
      "tel": "905.503.9255 x23864",
      "address": "440 Monica Garden",
      "opening_hours": "08:00",
      "description": "Enim ullam aut commodi omnis animi voluptatem qui. Quo aspernatur officiis vel ipsam. Et fuga autem quaerat aperiam eius amet voluptatum est. Eaque amet ex nobis amet ut sit ut ducimus.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.518630052185802",
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
      "id": 22,
      "name": "Mrs. Sigurd Mayer",
      "tel": "915.135.3816 x4553",
      "address": "9288 Betty Springs",
      "opening_hours": "08:00",
      "description": "voluptatem",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.537160348712696",
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
      "id": 23,
      "name": "Mrs. Ron Stoltenberg",
      "tel": "(197) 036-3314 x3240",
      "address": "81463 Kari Spur",
      "opening_hours": "08:00",
      "description": "Nisi atque laboriosam modi minus rerum et eius.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.57037626686688",
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
      "id": 24,
      "name": "Ruthie Kunde",
      "tel": "732-655-9172 x5471",
      "address": "253 Bechtelar Shoals",
      "opening_hours": "08:00",
      "description": "Sunt facilis hic.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.19132145449858",
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
      "id": 25,
      "name": "Miss Cletus Lockman",
      "tel": "1-972-468-7415",
      "address": "398 Ahmad Drive",
      "opening_hours": "08:00",
      "description": "Quibusdam perferendis voluptatibus repellat distinctio quia necessitatibus ab laudantium animi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.10018653451606",
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
      "id": 26,
      "name": "Ada Hessel",
      "tel": "075.101.2132",
      "address": "20049 Caterina Loaf",
      "opening_hours": "08:00",
      "description": "possimus assumenda itaque",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.45590379785402",
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
      "id": 27,
      "name": "Orval Gerlach DVM",
      "tel": "753.195.2736 x3105",
      "address": "898 Harris Fords",
      "opening_hours": "08:00",
      "description": "est",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.94423189153362",
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
      "id": 28,
      "name": "Estell Casper",
      "tel": "135.427.6316",
      "address": "41545 Rossie Centers",
      "opening_hours": "08:00",
      "description": "Vel dolorem quis quidem vero quis veritatis dolor et officia. Velit et quia labore hic. Vel distinctio facilis dignissimos iusto quis atque exercitationem. Non in eaque ex magni ullam eveniet beatae commodi.\n \rBlanditiis minus quos sint reiciendis velit possimus enim consequuntur veritatis. Ad atque fugit doloremque officia consequuntur ut. Reiciendis veniam voluptatem quis. Quo accusantium nam optio.\n \rNam magni quas qui tempora necessitatibus culpa est distinctio tempore. Eos nisi non consequuntur. Voluptatem officia corrupti. Autem dolor odit minus at quaerat. Consequatur quia magnam voluptatum laboriosam qui quo. Molestias eaque iste eos repudiandae ipsa aut qui.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.7766540675803624",
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
      "id": 29,
      "name": "Kylie Kub",
      "tel": "1-509-630-2623",
      "address": "910 Felicia Spurs",
      "opening_hours": "08:00",
      "description": "Fugit enim consectetur saepe hic debitis. Non culpa qui repudiandae sint dignissimos reiciendis sed. Error quae porro ut in rerum eum. Dolorem sit ipsa error saepe et non ullam aut laborum. Nihil asperiores corporis officia sed dignissimos ex.\n \rUt fugit nihil suscipit. Labore ut cupiditate quaerat consequuntur dolor sed id et quia. Vero quam facere velit quia delectus et. Adipisci voluptatem omnis soluta explicabo aut repellendus ea.\n \rAut qui placeat. Qui nemo sunt et id sunt amet. At aliquam id aut ea esse atque incidunt.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.81175410587817",
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
      "id": 30,
      "name": "Fabiola Koss DVM",
      "tel": "1-881-178-2658",
      "address": "99990 Welch Rapid",
      "opening_hours": "08:00",
      "description": "Quam vel eos sit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.13561409975949",
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
      "id": 31,
      "name": "Anastacio Grady",
      "tel": "1-726-850-3773 x2367",
      "address": "670 Jude Mission",
      "opening_hours": "08:00",
      "description": "nostrum ducimus qui",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=27.39923325343694",
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
      "id": 32,
      "name": "Oscar Schiller",
      "tel": "1-928-628-6727",
      "address": "419 Franecki Shores",
      "opening_hours": "08:00",
      "description": "Laborum illum eum in. Est est perspiciatis facilis quos labore. Sed accusamus et qui facilis. Animi similique minus est deleniti omnis minus.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=39.293875756354744",
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
      "id": 33,
      "name": "Aubree Reilly",
      "tel": "720.099.9336",
      "address": "54419 Turcotte Pike",
      "opening_hours": "08:00",
      "description": "qui consectetur laudantium",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=77.78112143476719",
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
      "id": 34,
      "name": "Maurice Christiansen",
      "tel": "(347) 616-4658",
      "address": "7993 Pat Corner",
      "opening_hours": "08:00",
      "description": "Est eum commodi eveniet atque occaecati aut soluta reiciendis ad. Aut illum voluptatibus nihil nostrum fugit et ad dolores quasi. Repellendus consequatur aut molestias.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=51.28402711045208",
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
      "id": 35,
      "name": "Rashad Wilderman",
      "tel": "205.716.2748 x1922",
      "address": "4382 Eugene Mission",
      "opening_hours": "08:00",
      "description": "Dolores neque molestias dolorum ullam voluptas mollitia occaecati atque voluptas. Voluptas enim repudiandae ut. Esse qui dolor neque ut. Nemo et omnis aut quas rerum.\n \rEst est exercitationem et iste nihil. Dolorem ipsum iure laborum ea quis recusandae blanditiis nesciunt laborum. Aliquid non nesciunt ex sapiente aspernatur labore. Adipisci labore assumenda est aut velit rem mollitia rerum. Omnis quaerat voluptas numquam ab architecto minima. Est nesciunt rerum nemo quidem temporibus.\n \rNam consequatur vitae sapiente eum est cupiditate. Saepe beatae neque non ducimus inventore. Quia dolores ea ratione nam sunt aut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.07350751339678",
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
      "id": 36,
      "name": "Jacky Koepp V",
      "tel": "136-313-1812 x7011",
      "address": "52988 Jacquelyn Run",
      "opening_hours": "08:00",
      "description": "Quia aut laboriosam. Aut quibusdam non. Sit aliquam quia excepturi cupiditate. Molestiae numquam et eos.\n \rSuscipit cupiditate at id aliquam ab tempore fugit corrupti. Iste laboriosam illum provident voluptatum itaque qui aut enim. Facilis aliquam molestiae debitis tempore delectus in. Accusantium cumque possimus voluptatem enim et quia ab aut et.\n \rNon enim eveniet a illo et aut et reprehenderit iusto. Quia magnam repellendus quae veritatis a. Aut consequatur sunt similique assumenda.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.10314321847073",
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
      "id": 37,
      "name": "Sid Torp",
      "tel": "1-359-162-3894",
      "address": "090 Berenice Expressway",
      "opening_hours": "08:00",
      "description": "Exercitationem saepe neque ut nisi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.79136521360758",
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
      "id": 38,
      "name": "Berniece Feest",
      "tel": "513-032-3684 x798",
      "address": "216 Grayson Throughway",
      "opening_hours": "08:00",
      "description": "qui",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.432637068211402",
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
      "id": 39,
      "name": "Kaia Schimmel",
      "tel": "191.502.7547",
      "address": "607 Schuyler Stream",
      "opening_hours": "08:00",
      "description": "Quia est repudiandae mollitia excepturi repellendus. Architecto quam placeat. Explicabo est nobis cupiditate voluptas sed quia. Nihil hic asperiores enim nobis. Voluptatem eos et optio minus harum sit. Deserunt placeat odio aut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.65586164011582",
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
      "id": 40,
      "name": "Antonetta Schamberger Sr.",
      "tel": "386-468-8246 x0077",
      "address": "5629 Beer Pike",
      "opening_hours": "08:00",
      "description": "Veritatis autem veniam exercitationem odio rem labore vel doloribus.\nPerspiciatis dicta quasi amet numquam consequatur.\nModi aut in atque dolorum veritatis officiis.\nQuia atque blanditiis enim nisi ut nisi voluptatem magnam et.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=90.07280346448138",
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
      "id": 41,
      "name": "Emery Altenwerth",
      "tel": "1-454-532-2892",
      "address": "49243 Harber Village",
      "opening_hours": "08:00",
      "description": "Laboriosam qui ab animi ut rerum. Voluptatem sapiente at voluptas inventore possimus est. Ea et sunt. Id accusamus incidunt amet fugit voluptatem enim.\n \rDicta minima omnis. Sunt ratione sit eligendi ut. Ad facere et sapiente est sint.\n \rRepudiandae harum quis ut quos. Deleniti aperiam praesentium esse harum. Soluta cumque consequatur sed consequatur porro neque. Expedita est iusto voluptatem quis ut. Neque at non qui voluptate.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.76615519379344",
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
      "id": 42,
      "name": "Brock Conroy",
      "tel": "1-704-716-6342 x5134",
      "address": "5829 Verner Mill",
      "opening_hours": "08:00",
      "description": "Laudantium qui qui reprehenderit sequi eos voluptates velit.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.03609771750659",
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
      "id": 43,
      "name": "Marcelo Crist",
      "tel": "1-550-595-8719 x53327",
      "address": "393 Evert Hollow",
      "opening_hours": "08:00",
      "description": "Dolorum et porro tenetur assumenda ut unde ut quasi sunt.\nTenetur dolorum placeat non cum voluptatem sunt maiores eius.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=76.52764648855126",
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
      "id": 44,
      "name": "Bryce Considine",
      "tel": "1-144-457-1573 x162",
      "address": "01985 Langworth Court",
      "opening_hours": "08:00",
      "description": "fugiat dolore quam",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=40.204277243246935",
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
      "id": 45,
      "name": "Elza Bradtke",
      "tel": "(284) 884-0299 x91914",
      "address": "68139 Stamm Island",
      "opening_hours": "08:00",
      "description": "Omnis iusto asperiores quisquam sequi.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=62.68570969696772",
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
      "id": 46,
      "name": "Matilda O'Kon",
      "tel": "966.090.9979 x79935",
      "address": "30749 Margarita Points",
      "opening_hours": "08:00",
      "description": "Tenetur officiis voluptatum dolores inventore repellendus itaque voluptas facilis architecto. Impedit qui eligendi. Ducimus harum ut minima nihil ad atque reprehenderit. Dolor nobis asperiores. Cupiditate rerum nobis reprehenderit.\n \rUt maiores provident aperiam sit ducimus ut labore. Sequi quae tempora vero aliquid porro voluptatibus. Eum quasi voluptatem sapiente. Laborum neque voluptatem et sed repudiandae id est. Harum doloremque voluptatum magnam ex enim. Amet exercitationem perferendis.\n \rAut rerum commodi ducimus recusandae maxime. Eligendi accusamus omnis placeat architecto. Quae impedit nemo. Enim in porro aliquid.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=29.235306086336664",
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
      "id": 47,
      "name": "Flavie Padberg",
      "tel": "(186) 489-7948",
      "address": "282 Zachery Lake",
      "opening_hours": "08:00",
      "description": "Laudantium beatae nobis officia assumenda facere laudantium. Facere deserunt molestias molestiae consequatur.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.43922629902118",
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
      "id": 48,
      "name": "London Feeney",
      "tel": "1-523-890-2965 x19789",
      "address": "948 Johnathan Terrace",
      "opening_hours": "08:00",
      "description": "Incidunt veniam natus iusto dolor. Eveniet placeat dolor quia. Fugiat voluptatem quaerat eum nostrum magnam architecto sunt sed omnis. Corporis voluptatibus magnam. Rerum nesciunt itaque qui. Voluptas et doloremque.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.3645251404941448",
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
      "id": 49,
      "name": "Maxie Grant",
      "tel": "1-716-743-4031 x6586",
      "address": "365 Joelle Flat",
      "opening_hours": "08:00",
      "description": "Ducimus voluptates assumenda culpa ex quia non ut.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.389867664345246",
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
      "id": 50,
      "name": "Carley Ortiz",
      "tel": "524.656.8733 x140",
      "address": "4421 Annamae Courts",
      "opening_hours": "08:00",
      "description": "Porro atque illo veniam deleniti sunt numquam rem cumque. Sint ullam praesentium. Odio aut non ut tempora aut vitae est perspiciatis. Et consectetur et necessitatibus et. Laudantium amet cumque rerum numquam animi atque ut dolore.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=4.8830927441068095",
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
    }
  ]
}

export default {
  name: 'AdminRestaurants',
  components: {
    AdminNav,
    AdminRestaurantsTable,
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    afterDeleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter((rest) => rest.id !== restaurantId)
    }
  }
}
</script>