<template>
  <el-container style="height:500px;border: 1px solid #eee">
    <el-header>
  <el-row :gutter="24">
  <el-col :span="22"><span class="i-title">电商后台管理系统</span></el-col>
  <el-col :span="2"><el-button @click='logOut'>退出</el-button></el-col>
</el-row>
    </el-header>
  <el-container>
    <el-aside width="200px"
    style="background-color:#333744"
    >
    <el-menu
    class="el-menu-vertical-demo"
     background-color="#333744"
     text-color="#fff"
     active-text-color="#ffd04b"
     router="true">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item index="/user">
            <i class="el-icon-menu"></i>
            <span>用户列表</span></el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item index="2-1">
            <i class="el-icon-menu"></i>
            <span>用户列表</span></el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item index="3-1">
            <i class="el-icon-menu"></i>
            <span>用户列表</span></el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
    <el-main>
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item  :to="{ path: '/user' }">用户列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
  <router-view />
    </el-main>
  </el-container>
</el-container>

</template>

<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
    logOut () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}

</script>
<style lang="scss">
   .el-header {
    background-color: #373F41;
    color: #B8B9BC;
    line-height: 60px;
    .i-title{
      font-size: 26px;
      font-weight: 600;
    }
  }

  .el-aside {
    color: #333;
  }

  .el-main {
    background-color: #E9EEF3;
  }
</style>
