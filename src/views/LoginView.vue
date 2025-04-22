<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <!-- Tabs -->
      <div class="mb-4 border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          <li class="me-2" :class="{ 'border-b-2 border-blue-500': activeTab === 'login' }">
            <button
              class="text-gray-600 hover:text-blue-600 px-4 py-2"
              :class="{ 'text-blue-600': activeTab === 'login' }"
              @click="activeTab = 'login'"
            >
              Đăng nhập
            </button>
          </li>
          <li class="me-2" :class="{ 'border-b-2 border-blue-500': activeTab === 'register' }">
            <button
              class="text-gray-600 hover:text-blue-600 px-4 py-2"
              :class="{ 'text-blue-600': activeTab === 'register' }"
              @click="activeTab = 'register'"
            >
              Đăng ký
            </button>
          </li>
        </ul>
      </div>

      <!-- Login Form -->
      <div v-if="activeTab === 'login'" class="space-y-4">
        <fwb-input v-model="loginForm.email" type="email" placeholder="Email" />
        <fwb-input v-model="loginForm.password" type="password" placeholder="Mật khẩu" />

        <fwb-button color="blue" @click="handleLogin" class="w-full">Đăng nhập</fwb-button>

        <div class="text-center text-sm text-gray-500">hoặc đăng nhập với</div>
        <div class="flex gap-4">
          <fwb-button color="blue" outline class="flex-1" @click="loginWithFacebook">
            Facebook
          </fwb-button>
          <fwb-button color="red" outline class="flex-1" @click="loginWithGoogle">
            Google
          </fwb-button>
        </div>
      </div>

      <!-- Register Form -->
      <div v-if="activeTab === 'register'" class="space-y-4">
        <FwbInput v-model="registerForm.name" type="text" placeholder="Họ tên" />
        <FwbInput v-model="registerForm.email" type="email" placeholder="Email" />
        <FwbInput v-model="registerForm.password" type="password" placeholder="Mật khẩu" />

        <fwb-button color="green" class="w-full" @click="handleRegister">
          Tạo tài khoản
        </fwb-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FwbButton, FwbInput } from 'flowbite-vue'

const activeTab = ref('login')

const loginForm = ref({
  email: '',
  password: '',
})

const registerForm = ref({
  name: '',
  email: '',
  password: '',
})

const handleLogin = () => {
  console.log('Login', loginForm.value)
}

const handleRegister = () => {
  console.log('Register', registerForm.value)
}

const loginWithFacebook = () => {
  console.log('Login with Facebook')
}

const loginWithGoogle = () => {
  console.log('Login with Google')
}
</script>

<style scoped>
.input-style {
  @reference w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300;
}
</style>
