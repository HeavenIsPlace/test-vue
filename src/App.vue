<template>
  <div id="app">
    <!-- <div class="header">
      <div class="headerContent">XXX系统</div>
    </div>
    <div class="main">
      <div class="leftPanel">
        <ul>
          <li><router-link to="/">用户统计</router-link></li>
          <li><router-link to="/clockDetails">打卡明细</router-link></li>
          <li><router-link to="/slide">轮播图</router-link></li>
          <li><router-link to="/paomadeng">走马灯</router-link></li>
        </ul>
      </div>
      <div class="rightPanel">
        <router-view></router-view>
      </div>
    </div> -->
    <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <Menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    导航一
                </Menu-item>
                <Menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    导航二
                </Menu-item>
                <Menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    导航三
                </Menu-item>
                <Menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    导航四
                </Menu-item>
            </div>
        </Menu>
        <Menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <Menu-item name="1">二级导航</Menu-item>
                <Menu-item name="2">二级导航</Menu-item>
                <Menu-item name="3">二级导航</Menu-item>
            </div>
        </Menu>
        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </template>
                            <Menu-item name="1-1"><router-link to="/">用户统计</router-link></Menu-item>
                            <Menu-item name="1-2"><router-link to="/clockDetails">打卡明细</router-link></Menu-item>
                            <Menu-item name="1-3"><router-link to="/paomadeng">走马灯</router-link></Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                  <router-view></router-view>
                </i-col>
            </Row>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
