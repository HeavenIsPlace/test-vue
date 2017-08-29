<template>
  <div id="countTotal">
    <div lclass="searchDiv">
      <div class="searchLabel">
        <Input v-model="value1" placeholder="请输入..." style="width: 200px"></Input>
      </div>
      <div class="searchLabel">
        <Input v-model="value2" placeholder="请输入..." style="width: 200px"></Input>
      </div>
      <div class="searchLabel">
        <Select v-model="select1">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="" style="margin-top:20px">
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Text</Button>
        <Button type="info">信息按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="error">错误按钮</Button>
      </div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  Vue.use(VueResource);
  export default {
    name: 'total',
    data () {
      return {
        cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    { 
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
        value1: '123',
        value2: '456',
        select1: '',
      }
    }
  }
</script>
