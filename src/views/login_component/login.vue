<template>
    <div class="main_bg">
        <div class="div">
            <div class="top">
                <p class="log_in" @click="loginfn" :style="{ color:login.color1}">登陆</p>
                <p class="sign_in" @click="singinfn" :style="{ color:login.color2}">注册</p>
                <p class="centre"></p>
            </div>
            <div class="main">
                <!-- 登陆 -->
                <div v-show="login.condition">
                    <div class="main_top">
                        <input type="text" class="login_input" placeholder="账号：" v-model="loginData.username">
                        <input type="password" class="login_input" placeholder="密码：" v-model="loginData.password">
                    </div>
                    <div class="main_chx">
                        <div class="main_chx_left">
                            <Radio v-model="loginRadio">记住密码</Radio>
                        </div>
                        <div class="main_chx_right" v-show="login.condition_p">
                            <p>忘记密码？</p>
                        </div>
                    </div>
                    <div class="footer" @click="logins">
                        <div class="footer_i">
                            <Icon type="md-arrow-round-forward" color="white" size="40" />
                        </div>
                        <p class="footer_p">点击登录</p>
                    </div>
                </div>
                <!-- 注册 -->
                <div v-show="singin.condition">
                    <div class="main_top">
                        <input type="text" class="login_input" placeholder="手机号：" v-model="singinData.newUsername">
                        <input type="text" class="login_input" placeholder="验证码：">
                        <input type="password" class="login_input" placeholder="密码：" v-model="singinData.newPassword">
                        <input type="password" class="login_input" placeholder="重复密码：">
                    </div>
                    <div class="main_chx">
                        <div class="main_chx_left">
                            <Radio v-model="singinRadio">我已经仔细阅读并同意 服务与隐私条款</Radio>
                        </div>
                    </div>
                    <div class="footer" @click="singins">
                        <div class="footer_i">
                            <Icon type="md-arrow-round-forward" color="white" size="40" />
                        </div>
                        <p class="footer_p">点击注册</p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
            return {
                login:{
                    condition: true,
                    color1: 'white',
                    color2: 'grey'
                },
                singin:{
                    condition: false,
                    color1: 'grey',
                    color2: 'white'
                },
                loginRadio:null,
                singinRadio:null,
                test: null,
                loginData:{
                    username:'',
                    password:''
                },
                singinData:{
                    newUsername:'',
                    newPassword:''
                },
                userInfo: {
                    user:null,
                    password:null
                }
            }
    },
    methods: {
        // 切换为登录
        loginfn() {
            this.login = this.singin
            this.singin = this.test
        },
        // 切换为注册
        singinfn() {
            this.test = this.singin
            this.singin  = this.login
            this.login = this.test
        },
        // 注册方法
        singins() {
            if (this.singinData.newUsername != '' && this.singinData.newPassword != '') {
                if (this.singinRadio === true) {
                    this.userInfo.user = this.singinData.newUsername
                    this.userInfo.password = this.singinData.newPassword
                    this.singinData.newUsername = ''
                    this.singinData.newPassword = ''
                    this.$Message.success('注册成')
                    this.loginfn()
                }else{
                    this.$Message.warning('请同意用户协议')
                }
            }else{
                this.$Message.warning('请填写手机号或密码')
            }
        },
        // 登陆方法
        logins() {
            if(this.loginData.username != '' && this.loginData.password != ''){
                if (this.loginData.username === this.userInfo.user && this.loginData.password === this.userInfo.password) {
                    this.$router.push('/index')
                    this.$Message.success('登录成功')
                    let token = 123456
                    this.$store.commit('token', {user: token})
                }else{
                    this.$Message.error('用户名或密码错误')
                }
            }else{
                this.$Message.warning('用户名或者密码不能为空')
            }
        }
    }
}
</script>

<style scoped>

</style>
