<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
      <li v-for="(item, index) in arr" :key="index">
        {{ item }}-----{{ index }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['小明', '小欢欢', '大黄'],
    };
  },
};
</script>

<style></style>
