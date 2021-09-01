<template>
  <div class="home">
    <div class="dates">
      <div
        v-for="(date, index) in dates"
        :key="date.num"
        class="date"
        :class="{ active: date.active }"
        @click="selectDate(index)"
      >
        <span>{{ date.title }} </span>
        <div class="number" :class="{ select: date.select }">
          <h3>{{ date.num }}</h3>
        </div>
      </div>
    </div>
    <div class="address">
      <i class="el-icon-s-cooperation" style="color:#35B266; font-size: 40px"></i>
      <div>
        <span>Entregar en:</span>
        <p>Av. Mariscal Ramon Castilla</p>
      </div>
    </div>
    <div v-for="(item, index) in date.listMain" :key="index">
      <div
        v-if="item.foodsAsign.length === 0"
        class="home__lunch"
        :class="{ desactive: !item.active }"
      >
        <div class="lunch__icon">
          <img :src="require(`@/assets/${item.icon}`)" alt="lunch icon" />
        </div>
        <div class="lunch__description">
          <span :class="{ title: !item.active }">{{ item.name }} </span>
          <p>{{ item.value }}</p>
        </div>
        <div class="lunch__action">
          <button
            v-if="item.active"
            class="add"
            @click="$router.push({ name: 'About', params: { slug: item.slug } })"
          >
            Agregar
          </button>
          <span v-else>No tienes creditos</span>
        </div>
      </div>
      <div v-else class="food__list" :class="{ desactive: !item.active }">
        <div v-for="food in item.foodsAsign" :key="food.id" class="food__item">
          <div class="food__image" @click="openDialog">
            <img :src="require('@/assets/food.png')" alt="food image" />
          </div>
          <div
            class="food__description"
            @click="$router.push({ name: 'Detail', params: { id: food.id } })"
          >
            <span>{{ food.name }} </span>
            <p>{{ item.value }}</p>
          </div>
          <div class="food__action">
            <i
              class="el-icon-delete"
              style="color:#FF9797"
              @click="filterFood(item.id, food.id)"
            ></i>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialog" width="90%" center>
      <img class="dialog__image" :src="require('@/assets/food.png')" alt="food image" />
    </el-dialog>
  </div>
</template>
<script src="./list.js"></script>
<style src="./main.scss" scoped lang="scss"></style>
