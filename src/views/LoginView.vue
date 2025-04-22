<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
      <div class="mb-4 border-b border-gray-200">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
          <li class="me-2">
            <button @click="activeTab = 'login'" :class="tabClass('login')" role="tab">
              Đăng nhập
            </button>
          </li>
          <li class="me-2">
            <button @click="activeTab = 'register'" :class="tabClass('register')" role="tab">
              Đăng ký
            </button>
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 'login'" class="space-y-4">
        <input v-model="loginForm.email" type="email" placeholder="Email" class="input-style" />
        <input
          v-model="loginForm.password"
          type="password"
          placeholder="Mật khẩu"
          class="input-style"
        />
        <button @click="handleLogin" class="btn-primary w-full">Đăng nhập</button>
        <div class="text-center text-sm text-gray-500">hoặc đăng nhập với</div>
        <div class="flex gap-4">
          <button class="btn-social bg-blue-600" @click="loginWithFacebook">Facebook</button>
          <button class="btn-social bg-red-500" @click="loginWithGoogle">Google</button>
        </div>
      </div>

      <div v-if="activeTab === 'register'" class="space-y-4">
        <input v-model="registerForm.name" type="text" placeholder="Họ tên" class="input-style" />
        <input v-model="registerForm.email" type="email" placeholder="Email" class="input-style" />
        <input
          v-model="registerForm.password"
          type="password"
          placeholder="Mật khẩu"
          class="input-style"
        />
        <button @click="handleRegister" class="btn-primary w-full">Tạo tài khoản</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
  // call API login
}

const handleRegister = () => {
  console.log('Register', registerForm.value)
  // call API register
}

const loginWithFacebook = () => {
  console.log('Login with Facebook')
  // redirect to Facebook login
}

const loginWithGoogle = () => {
  console.log('Login with Google')
  // redirect to Google login
}

const tabClass = (tab) => {
  return [
    'inline-block p-4 border-b-2',
    activeTab.value === tab
      ? 'text-blue-600 border-blue-600'
      : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300',
  ].join(' ')
}
</script>

<style scoped></style>
