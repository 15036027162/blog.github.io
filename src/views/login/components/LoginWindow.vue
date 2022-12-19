<template>
  <div>
    <!-- 登录框 -->
    <div class="login-wrapper">
      <div :class="['login-container', data.type == 'login' ? 'active' : '']">
        <div class="switch-wrapper row aCenter jCenter">
          <div class="title-wrapper">Vue3-Admin</div>
          <div class="btn-wrapper  aCenter jCenter">
            <div v-if="data.type == 'login'" class="txt row aCenter jCenter btn-login" @click="data.type = 'register'">去注册</div>
            <div v-else class="txt row aCenter jCenter btn-login" @click="data.type ='login'">去登录</div>
          </div>
        </div>
        <div :class="['outerBox', data.type == 'login' ? 'active' : '']">
          <div class="container row aCenter jCenter">
            <div class="login" v-show="data.type == 'login'">
              <div class="title">登录</div>
              <a-form :model="loginUser" @submit="handleSubmit">
                <a-form-item field="username" label="账号" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
                  <a-input v-model="loginUser.username" placeholder="请输入账号 / 手机号 / 邮箱...">
                    <template #prefix>
                      <icon-user />
                    </template>
                  </a-input>
                </a-form-item>
                <a-form-item field="password" label="密码" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
                  <a-input-password v-model="loginUser.password" placeholder="请输入密码..." allow-clear autocomplete>
                    <template #prefix>
                      <icon-lock />
                    </template>
                  </a-input-password>
                </a-form-item>
                <div class="login-btn">
                  <a-space>
                    <a-button type="primary" html-type="submit" :loading="loading1">登录</a-button>
                    <a-button type="outline" long class="login-form-register-btn" @click="data.type = 'register'">注册</a-button>
                  </a-space>
                </div>
              </a-form>
            </div>
            <div class="register" v-show="data.type == 'register'">
              <div class="title">注册</div>
              <a-form :model="registerUser" @submit="handleRegister">
                <a-form-item field="username" label="账号" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
                  <a-input v-model="registerUser.username" placeholder="请输入账号 / 手机号 / 邮箱..." />
                </a-form-item>
                <a-form-item field="password" label="密码" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
                  <a-input v-model="registerUser.password" placeholder="请输入邮箱地址..." />
                </a-form-item>
                <a-form-item field="email" label="邮箱" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
                  <a-input v-model="registerUser.email" placeholder="请输入邮箱地址..." />
                </a-form-item>
                <a-form-item field="mobile" label="手机号" :rules="[{required:true,message:'这是必填的'}]" :validate-trigger="['change','input']">
                  <a-input v-model="registerUser.mobile" placeholder="请输入手机号..." />
                </a-form-item>
                <div class="login-btn">
                  <a-space>
                    <a-button type="primary" html-type="submit" :loading="loading2">确认注册</a-button>
                    <a-button type="outline" long class="login-form-register-btn" @click="data.type = 'login'">返回登录</a-button>
                  </a-space>
                </div>
              </a-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Message } from '@arco-design/web-vue';
import { ValidatedError } from '@arco-design/web-vue/es/form/interface';
import { userStore } from '@/store'

const errorMessage = ref('');
const loading1 = ref(false);
const loading2 = ref(false);

const router = useRouter()
const Appuser = userStore()

const loginUser = reactive({
  username: '',
  password: ''
})

const registerUser = reactive({
  username: '',
  password: '',
  email: '',
  mobile: ''
})

const data = reactive({
  type: 'login',		// 类型判断
})

// 登录
const handleSubmit = async ({errors}: {
  errors: Record <string, ValidatedError> | undefined;
}) => {
  if (!errors) {
    loading1.value = true
    setTimeout(() => {
      try {
        Appuser.LoginUser('110120119').then((res) => {
          router.push('/home')
          Message.success('登录成功');
          loading1.value = false
        })
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        loading1.value = false
      }
    }, 1000);
  }
}

// 注册
const handleRegister = async ({errors}: {
  errors: Record <string, ValidatedError> | undefined;
}) => {
  if (!errors) {
    loading2.value = true
    setTimeout(() => {
      try {
        Message.success('注册成功');
        loading2.value = false
      } catch (err) {
        errorMessage.value = (err as Error).message;
      } finally {
        loading2.value = false
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.login-wrapper {
  position: absolute;
  width: 900px;
  left: 50%;
  top:50%;
  transform:translate(-50%,-50%);
  box-shadow: 0 0 30px #07589b;
}
.login-container{background-color: #fff;position: relative;width: 900px;height: 500px;margin: auto;overflow: hidden;border-radius: 5px; background-image: url('../../../assets/image/login-bg.jpg');background-size: cover;}
.switch-wrapper{position: absolute;z-index: 99;left: 0;overflow: hidden;width: 40%;height: 100%;transition: transform 1s ease-in-out;}
.switch-wrapper::after {content: '';display: block;background-image: url('../../../assets/image/login-bg-3.jpg');background-size: cover;background-position: top left;width: 100%;height: 100%;overflow: hidden;transition: all 1s ease-in-out;}
.active .switch-wrapper {transform: translateX(calc(900px - 100%));}
.active .switch-wrapper::after {background-position: top right;}
.txt{width: 100%;height: 100%;transition: all 1s ease-in-out;}
.top-wrapper{position: absolute;width: 260px;height: 168px;top: 50px;background-color: rgba(255, 255, 255,.7);padding: 10px;border-radius: 5px;}
.btn-wrapper{position: absolute;width: 100px;height: 36px;color: #fffffe;background-color: #6689e2;font-size: 15px;border-radius: 30px;cursor: pointer;flex-wrap: wrap;overflow: hidden;}
.outerBox {position: absolute;z-index: 3;left: 35%;overflow: hidden;width: 65%;height: 100%;transition: all 1s ease-in-out;}
.container {
  width: 100%;
  height: 100%;
  background-color: #fffffe;
}
.login {
  width: 400px;
  margin-right: 80px;
}
.register {
  width: 400px;
}
.login-btn {
  width: 100%;
  text-align: center;
}
.active .outerBox {transform: translateX(calc(-900px + 100%));}
.ld{width: 200px;height: 40px;position: absolute;right: 16px;top: 16px;}
.title{font-size: 36px;line-height: 1.5;text-align: center;margin-bottom: 30px;color: #666;}
.btn-login{width: 100%;}
.row{display: flex;display: -webkit-flex;flex-direction: row;}
.column{display: flex;display: -webkit-flex;flex-direction: column;}
.aCenter{align-items: center;}
.jCenter{justify-content: center;}
.btn-login{color: #fff; background-color: #165DFF;}
.title-wrapper {
  position: absolute;
  top: 30%;
  height: 36px;
  color: #fffffe;
  font-size: 30px;
  cursor: pointer;
  flex-wrap: wrap;
  overflow: hidden;
  text-align: center;
  font-weight: 700;
}
</style>
