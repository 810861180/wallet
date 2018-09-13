<template>
    <div>
        <div class="main_bg">
            <div class="main foundTop">
                <div class="top">
                    <p class="log_in">创建钱包</p>
                    <p class="sign_in foundColor" @click="$router.push({name:'leadWallet'})">导入钱包</p>
                    <p class="centre"></p>
                </div>
                <div>
                    <div class="main_top">
                        <input type="text" class="login_input" placeholder="钱包名称：">
                        <input type="text" class="login_input" placeholder="密码：">
                        <input type="password" class="login_input" placeholder="重复密码：">
                    </div>
                    <div class="main_chx">
                        <div class="main_chx_left">
                            <Radio v-model="radios">我已经仔细阅读并同意 服务与隐私条款</Radio>
                        </div>
                    </div>
                    <div class="footer" @click="$router.push({name:'ManageWallet'})">
                        <div class="footer_i">
                            <Icon type="md-arrow-round-forward" color="white" size="40" />
                        </div>
                        <p class="footer_p foots11">点击创建</p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            radios: true
        }
    }
}
</script>

<style scoped>
    .foundColor{
        color: #999999;
    }
    .foundTop{
        margin-top: 0;
    }
</style>
