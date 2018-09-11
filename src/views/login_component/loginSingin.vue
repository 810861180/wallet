<template>
    <div class="main_bg">
        <div class="div">
            <div class="top">
                <p class="log_in" @click="login">登陆</p>
                <p class="sign_in" @click="singin">注册</p>
                <p class="centre"></p>
            </div>
            <div class="main">
                <div class="main_top">
                    <div class="mian_input">
                        <input type="text" class="login_input" placeholder="手机号：">
                        <!-- <span class="main_account">账号:</span> -->
                    </div>
                    <div class="mian_input">
                        <input type="text" class="login_input" placeholder="验证码：">
                        <!-- <span class="main_password">密码:</span> -->
                    </div>
                    <div class="mian_input">
                        <input type="text" class="login_input" placeholder="密码：">
                        <!-- <span class="main_password">密码:</span> -->
                    </div>
                    <div class="mian_input">
                        <input type="text" class="login_input" placeholder="重复密码：">
                        <!-- <span class="main_password">密码:</span> -->
                    </div>
                </div>
                <div class="main_chx">
                    <div class="main_chx_left left">
                        <Radio v-model="single">我已经仔细阅读并同意 服务与隐私条款</Radio>
                    </div>
                </div>
                <div class="footer">
                    <div class="footer_i">
                        <Icon type="md-arrow-round-forward" color="white" size="40" />
                    </div>
                    <p class="footer_p">点击注册</p>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
            return {
                single: false,
                isActive: true,
            }
    },
    methods: {
        login() {
            this.$router.push('/login')   
        },
        singin() {
            this.$router.push('/loginSingin')
        }
    }
}
</script>

<style scoped>
    .left{
        margin-bottom: 1.25rem;
    }
    .log_in{
        color: grey;
    }
</style>