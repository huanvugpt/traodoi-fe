<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Logo" image-url="/images/logo.svg" link="/">
        TraoDoiLinhKien
      </fwb-navbar-logo>
    </template>

    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <fwb-navbar-link link="/" is-active>Trang chủ</fwb-navbar-link>
        <fwb-navbar-link link="/san">Sàn</fwb-navbar-link>
        <fwb-navbar-link link="/blog">Blog</fwb-navbar-link>
        <fwb-navbar-link link="/my-products">Sản phẩm của tôi</fwb-navbar-link>
      </fwb-navbar-collapse>
    </template>

    <template #right-side>
      <fwb-button @click="router.push('/login')">Đăng nhập</fwb-button>
    </template>
  </fwb-navbar>
</template>

<script setup lang="ts">
import { FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo, FwbButton } from 'flowbite-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
