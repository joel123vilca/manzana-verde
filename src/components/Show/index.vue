<template>
  <div class="detail">
    <div class="detail__head">
      <a @click="$router.go(-1)" class="back__button">Atras</a>
      <h2 class="title">Almuerzo</h2>
      <div class="date">
        <span class="date__day">
          Vie
        </span>
        <span class="date__number">
          27
        </span>
      </div>
    </div>
    <div class="detail__foods">
      <div v-for="(food, index) in foods" :key="index" class="food">
        <div class="food__image">
          <img :src="require('@/assets/food.png')" alt="food" />
        </div>
        <div class="food__info" @click="$router.push({ name: 'Detail', params: { id: food.id } })">
          <h3 class="food__title">{{ food.name }}</h3>
          <button class="recomend">Recomendado</button>
        </div>
        <div class="food__description">
          <div class="count">{{ food.kcal }} kcal</div>
          <div class="icons">
            <img
              v-for="item in food.detail"
              :key="item.name"
              :src="require(`@/assets/${item.icon}`)"
              alt="sugar"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./show.js"></script>
<style src="./show.scss" scoped lang="scss"></style>
