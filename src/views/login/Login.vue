/* eslint-disable no-irregular-whitespace */
<template>
  <div class="login">
    <div class="login-box">
      <div class="headline">
        <h3>后台系统登录</h3>
      </div>
      <div class="from">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name"
             prefix-icon="el-icon-user-solid"
             placeholder="请输入用户名"
             type="text"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input v-model="ruleForm.pass"
             prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

import { login } from '@/http/api'
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 24, message: '长度在 3 到 24 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          const info = {
            username: this.ruleForm.name,
            password: this.ruleForm.pass
          }
          login(info).then(res => {
            console.log(res)
            const { msg, status } = res.meta
            if (status === 200) {
              const token = res.data.token
              localStorage.setItem('token', token)
              this.$message({
                message: msg,
                type: 'success'
              })
              this.$router.push('/home')
            } else {
              this.$message({
                message: msg,
                type: 'warning'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  min-height: 100%;
  background: #2d3a4b;
  .login-box {
    width: 30%;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    .headline {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      h3 {
        width: 80%;
        height: 40px;
        color: #eeeeee;
        font-size: 26px;
        font-weight: 900;
        text-align: center;
      }
    }
  }
  .from{
      /deep/ .el-input__inner{
     background: rgba(0,0,0,0.1);
      border: 1px solid rgba(255,255,255,0.1);
      }
      /deep/ input{
       color: #FFFFFF;
      }
      .el-button{
       width: 100%;
      }
  }
}
</style>
