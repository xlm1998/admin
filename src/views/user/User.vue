<template>
  <div class="user">
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" class="addbtn">添加用户</el-button>
    </div>
  <el-table
    border
    stripe
    :data="userList"
   >
    <el-table-column
      label="#"
      width="50">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      >
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      >
    </el-table-column>
     <el-table-column
      prop="tel"
      label="电话"
      >
    </el-table-column>
     <el-table-column
      prop="role_name"
      label="角色"
      >
    </el-table-column>
     <el-table-column
      label="状态"
     >
     <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state"></el-switch>
          </template>
    </el-table-column>
     <el-table-column
      label="操作"
      >
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userList: []
    }
  }
}
</script>

<style lang="scss" scoped>
.user{
    margin-top: 20px;
    padding: 15px;
    background: #fff;
}
.el-input {
  width: 300px;
}
.addbtn{
 margin-left: 30px;
}
.el-table{
    margin-top: 20px;
}
</style>
