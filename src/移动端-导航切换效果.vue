<template>
  <div class="wrap">
    <div class="nav_left" id="navLeft">
      <div class="nav_content">
        <span
          :class="{ active: obj.first_id === currentIndex }"
          v-for="obj in arr"
          :key="obj.first_id"
          @click="toggle(obj.first_id)"
          >{{ obj.first_name }}</span
        >
      </div>
    </div>
    <div class="down">
      <i class="iconfont icon-xiajiantoubeifen gray"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          first_id: '0',
          first_name: '热门',
        },
        {
          first_id: '1',
          first_name: '咖啡',
        },
        {
          first_id: '2',
          first_name: '饮食',
        },
        {
          first_id: '3',
          first_name: '男装',
        },
        {
          first_id: '4',
          first_name: '女装',
        },
        {
          first_id: '5',
          first_name: '眼镜',
        },
        {
          first_id: '6',
          first_name: '内衣配饰',
        },
        {
          first_id: '7',
          first_name: '母婴',
        },
        {
          first_id: '8',
          first_name: '鞋靴',
        },
        {
          first_id: '9',
          first_name: '运动',
        },
        {
          first_id: '10',
          first_name: '箱包',
        },
        {
          first_id: '11',
          first_name: '美妆个护',
        },
        {
          first_id: '12',
          first_name: '家纺',
        },
        {
          first_id: '13',
          first_name: '餐厨',
        },
        {
          first_id: '14',
          first_name: '电器',
        },
        {
          first_id: '15',
          first_name: '家装',
        },
        {
          first_id: '16',
          first_name: '家具',
        },
        {
          first_id: '17',
          first_name: '数码',
        },
        {
          first_id: '18',
          first_name: '汽配',
        },
        {
          first_id: '19',
          first_name: '健康保健',
        },
        {
          first_id: '20',
          first_name: '定制',
        },
      ],
      currentIndex: 0,
    };
  },
  methods: {
    toggle(id) {
      this.currentIndex = id;
    },
  },
};
</script>

<style>
.wrap {
  width: 100%;
  display: flex;
  margin: 0.2rem 0 0 0;
  position: relative;
}

/*左侧的导航样式*/
.nav_left {
  width: 21.1875rem;
  overflow: scroll;
}

.nav_left::-webkit-scrollbar {
  display: none;
}

.nav_content {
  white-space: nowrap;
  padding: 0 0.7rem;
}

.nav_content span {
  display: inline-block;
  padding: 0.4rem 0.6rem;
  font-size: 0.875rem;
}

.nav_content .active {
  border-bottom: 2px solid #7f4395;
  color: #7f4395;
}

.nav_left,
.down {
  float: left;
}

/*右侧导航部分*/
.down {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gray {
  color: gray;
  display: inline-block;
  vertical-align: middle;
}
</style>
