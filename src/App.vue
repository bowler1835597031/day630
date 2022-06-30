<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select>
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click.prevent="addFn">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="obj in arr" :key="obj.id">
          <td>{{ obj.id }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.age }}</td>
          <td>{{ obj.sex }}</td>
          <td>
            <button>删除</button>
            <button>编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          name: '孙悟空',
          age: '18',
          sex: '男',
        },
        {
          id: 2,
          name: '白骨精',
          age: '22',
          sex: '女',
        },
      ],
      name: '',
      age: 0,
      sex: '男',
    };
  },
  methods: {
    addFn() {
      if (this.name.trim().length == 0 || this.age == 0) {
        this.name = '';
        this.age = 0;
        return alert('请输入完整的信息');
      }
      this.arr.push({
        id: this.arr[this.arr.length - 1].id + 1,
        name: this.name,
        age: this.age,
      });
      // 清空输入的值
      this.name = '';
      this.age = 0;
    },
  },
};
</script>
