<template>
  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
      <h3 class="title">系统登录</h3>
      <el-form-item prop="email">
        <span class="svg-container">
          <!--<wscn-icon-svg icon-class="jiedianyoujian" />-->
        </span>
        <el-input name="email" type="text" v-model="loginForm.email" autoComplete="on" placeholder="请输入有效邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <!--<wscn-icon-svg icon-class="mima" />-->
        </span>
        <el-input name="password" type="password" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
      <div class='tips' v-show="false">admin账号为:admin@infore.com 密码随便填</div>
      <div class='tips' v-show="false">editor账号:editor@infore.com 密码随便填</div>
      <router-link to="/sendpwd" class="forget-pwd">
        忘记密码?(或首次登录)
      </router-link>
    </el-form>

  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import { isEmail } from '../utils/validate';
// import { getQueryObject } from 'utils';

export default {
  name: 'login',
  data() {
    const validateEmail = (rule, value, callback) => {
      if (!isEmail(value)) {
        callback(new Error('请输入正确的合法邮箱'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: 'admin@infore.com',
        password: '123456'
      },
      loginRules: {
        email: [
          { required: true, trigger: 'blur', validator: validateEmail }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePass }
        ]
      },
      loading: false,
      showDialog: false
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          this.$router.push({path:'/'});
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          // this.$store.dispatch('LoginByEmail', this.loginForm).then(() => {
          //   this.loading = false;
          //   this.$router.push({ path: '/' });
          //   // this.showDialog = true;
          // }).catch(err => {
          //   this.$message.error(err);
          //   this.loading = false;
          // });
        } else {
          console.log('error submit!!');
          this.$message.error('登录失败');
          return false;
        }
      });
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1);
      // const hashObj = getQueryObject(hash);
      // const originUrl = window.location.origin;
      // history.replaceState({}, '', originUrl);
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // };
      // const codeName = hashObj[codeMap[this.auth_type]];
      // if (!codeName) {
      //   alert('第三方登录失败');
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' });
      //   });
      // }
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan);
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan);
  }
}
</script>

<style>
.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
}

.login-container {
  height: 100vh;
  background-color: #2d3a4b;
}

.login-container>input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
  -webkit-text-fill-color: #fff !important;
}

.login-container>input {
  background: transparent;
  border: 0px;
  -webkit-appearance: none;
  border-radius: 0px;
  padding: 12px 5px 12px 15px;
  color: #eeeeee;
  height: 47px;
}

.login-container>.el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
}

.login-container>.svg-container {
  padding: 6px 5px 6px 15px;
  color: #889aa4;
}

.login-container .title {
  font-size: 26px;
  font-weight: 400;
  color: #eeeeee;
  margin: 0px auto 40px auto;
  text-align: center;
  font-weight: bold;
}

.login-container .login-form {
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}

.login-container .el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}

.login-container .forget-pwd {
  color: #fff;
}
</style>
