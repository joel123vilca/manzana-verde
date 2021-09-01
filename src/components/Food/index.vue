<template>
  <div class="food">
    <div class="food__head">
      <a @click="$router.go(-1)" class="back__button">Atras</a>
      <h2 class="title">Detalle</h2>
      <div class="icon" @click="changeLike"><img :src="require(`@/assets/${icon}`)" /></div>
    </div>
    <div class="food__info">
      <div class="food__image">
        <img :src="require('@/assets/food.png')" alt="food image" />
      </div>
      <div class="food__data">
        <div class="food__name">
          <h3>{{ food.name }}</h3>
        </div>
        <div class="food__recomend">
          <button class="button__recomend">Recomendado</button>
        </div>
        <p class="food__description">
          <span>Ingredientes:</span>
          {{ food.ingredients }}
        </p>
      </div>
      <div class="food__values">
        <div>
          <span>Kcal</span>
          <h3>{{ food.kcal }}</h3>
        </div>
        <div>
          <span>Grasa</span>
          <h3>{{ food.fat }}g</h3>
        </div>
        <div>
          <span>Carbo</span>
          <h3>{{ food.carbo }}g</h3>
        </div>
        <div>
          <span>Prote</span>
          <h3>{{ food.prote }}g</h3>
        </div>
      </div>
      <div class="food__detail">
        <div v-for="(item, index) in food.detail" :key="index" class="item">
          <img :src="require(`@/assets/${item.icon}`)" alt="item icon" />
          <label>{{ item.name }}</label>
        </div>
      </div>
    </div>
    <div class="food__additional">
      <div class="additional">
        <img :src="require('@/assets/food.png')" alt="lunch image" />
        <div class="additional__description">
          <span>Ensalada sasa</span>
          <button>Recomendado</button>
          <p>200 kcal</p>
        </div>
        <div class="additional__action">
          <button class="add">Agregar</button>
        </div>
      </div>
    </div>
    <div class="food__select">
      <el-checkbox-group v-model="checkList" class="checks">
        <el-checkbox
          v-for="(offer, index) in food.offers"
          :key="index"
          :label="offer"
          class="el-checkbox"
        ></el-checkbox>
      </el-checkbox-group>
    </div>
    <el-checkbox label="Incluir picante" class="el-checkbox-2"></el-checkbox>
    <div class="food__action">
      <button class="add__order" @click="add">Agregar al pedido</button>
    </div>
    <el-dialog :visible.sync="dialog" width="90%" center>
      <img class="dialog__image" :src="require('@/assets/food.png')" alt="food image" />
    </el-dialog>
  </div>
</template>
<script src="./food.js"></script>
<style src="./food.scss" scoped lang="scss"></style>
