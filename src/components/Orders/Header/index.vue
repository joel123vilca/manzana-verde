<template>
  <div class="orders__header">
    <div class="header__profile">
      <div class="profile__avatar">
        <img :src="require('@/assets/logo.png')" />
      </div>
      <div class="profile__title">Mis Pedidos</div>
      <div class="profile__count">
        <el-progress
          type="circle"
          :percentage="50"
          :width="30"
          :show-text="false"
          color="#35B266"
        ></el-progress>
      </div>
      <div class="profile__status">
        <img :src="require('@/assets/status.svg')" />
      </div>
      <div class="profile__notification">
        <img :src="require('@/assets/notification.svg')" />
      </div>
    </div>
    <div class="header__info">
      <span>0kal</span>
      <span>22000kcal</span>
    </div>
    <el-progress
      :percentage="calories"
      color="#FFD538"
      :format="format"
      class="progress"
    ></el-progress>
  </div>
</template>
<script src="./header.js"></script>
<style src="./header.scss" scoped lang="scss"></style>
