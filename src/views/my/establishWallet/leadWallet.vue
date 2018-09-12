<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">导入钱包</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="leadCut">
                <div class="leadCut_1" :class="{color: infoData.show1}" @click="key_1">私钥导入</div>
                <div class="leadCut_2" :class="{color: infoData.show2}" @click="key_2">keystore导入</div>
            </div>
            <div class="leadHint" v-show="infoData.show1">
                <div class="derive_main_span">
                    <Icon type="ios-alert" size="20" color="#F56D6D" />
                    <span>安全提示：请妥善保管你的明文私钥。</span>
                </div>
            </div>
            <div class="leadHint" v-show="infoData.show2">
                <div class="derive_main_span">
                    <Icon type="ios-alert" size="20" color="#F56D6D" />
                    <span>安全提示：请妥善保管你的keystore。</span>
                </div>
            </div>

            <div class="main" v-show="infoData.show1">
                <div class="main_top leadTop">
                    <textarea type="text" class="login_input leadHe" placeholder="请输入明文密钥："></textarea>
                    <input type="text" class="login_input" placeholder="请输入密码：">
                    <input type="password" class="login_input" placeholder="重复密码：">
                </div>
                <div class="main_chx">
                    <div class="main_chx_left">
                        <Radio v-model="radio">我已经仔细阅读并同意 服务与隐私条款</Radio>
                    </div>
                </div>

                <div class="footer">
                    <div class="footer_i">
                        <Icon type="md-arrow-round-forward" color="white" size="40" />
                    </div>
                    <p class="footer_p foots11">点击导入</p>
                </div>
            </div>
            
            <div class="main leadHd" v-show="infoData.show2">
                <div class="main_top leadTop">
                    <textarea type="text" class="login_input leadHe" placeholder="请输入keystore文本："></textarea>
                    <input type="text" class="login_input" placeholder="请输入keystore密码：">
                </div>
                <div class="main_chx">
                    <div class="main_chx_left">
                        <Radio v-model="radio">我已经仔细阅读并同意 服务与隐私条款</Radio>
                    </div>
                </div>

                <div class="footer">
                    <div class="footer_i">
                        <Icon type="md-arrow-round-forward" color="white" size="40" />
                    </div>
                    <p class="footer_p foots11">点击导入</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infoData:{
                show1:true,
                show2:false
            },
            radio: true,
        }
    },
    methods:{
        cut() {
            this.infoData.show1 = !this.infoData.show1
            this.infoData.show2 = !this.infoData.show2
        },
        key_1() {
            this.cut()
        },
        key_2() {
            this.cut()
        }
    }
}
</script>

<style scoped>
    .leadCut{
        width: 80%;
        height: 2.5rem;
        margin: 1.875rem auto 0 auto;
        border-radius: .625rem;
        background: #393949;
        box-shadow: #22222C 0px 0px 10px;
        display: flex;
    }
    .leadCut_1, .leadCut_2{
        font-size: .875rem;
        height: 1.25rem;
        text-align: center;
        margin-top: .625rem;
        color: #999999;
    }
    .leadCut_1{
        flex: 1;
        border-right: 1px solid #999999;
    }
    .leadCut_2{
        flex: 1;
    }
    .color{
        color: white;
    }

    .leadHint{
        width: 80%;
        margin: 1.25rem auto 0 auto;
    }
    .leadHe{
        height: 10.625rem;
        border-radius: .625rem;
        padding: 1.25rem;
    }
    .leadTop{
        padding: 0;
    }
    .leadHd{
        height: 21.5625rem;
    }
</style>