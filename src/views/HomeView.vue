<template>
  <section class="max-w-6xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-4">Chào mừng đến với Trao Đổi Linh Kiện</h1>
    <p class="text-gray-600 text-lg">
      Đây là nơi bạn có thể đăng tải và tìm kiếm linh kiện để trao đổi với cộng đồng.
    </p>

    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="card in features"
        :key="card.title"
        class="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
      >
        <h2 class="text-xl font-semibold mb-2">{{ card.title }}</h2>
        <p class="text-gray-600">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Tìm kiếm linh kiện',
    description: 'Khám phá các linh kiện mà người dùng khác đang muốn trao đổi.',
  },
  {
    title: 'Đăng món đồ của bạn',
    description: 'Tạo bài đăng nhanh chóng, đơn giản để tìm người trao đổi.',
  },
  {
    title: 'Hệ thống đánh giá',
    description: 'Vote cho các đề xuất chất lượng, tránh giao dịch không an toàn.',
  },
]
</script>
