<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">验证密码</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="verif_div">
                <p>请输入验证密码</p>
                <input type="password" v-model="passwords">
            </div>
            <div class="passwords">
                <p class="password_1" @click="pas1">1</p>
                <p class="password_2" @click="pas2">2</p>
                <p class="password_3" @click="pas3">3</p>
                <p class="password_4" @click="pas4">4</p>
                <p class="password_5" @click="pas5">5</p>
                <p class="password_6" @click="pas6">6</p>
                <p class="password_7" @click="pas7">7</p>
                <p class="password_8" @click="pas8">8</p>
                <p class="password_9" @click="pas9">9</p>
                <p class="password_0" @click="pas0">0</p>
            </div>
            <div class="strip_btn location" @click="verify">
                <p>完 成</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            passwords:'',
        }
    },
    methods:{
        pas1() {
            this.passwords = this.passwords + '1'
        },
        pas2() {
            this.passwords = this.passwords + '2'
        },
        pas3() {
            this.passwords = this.passwords + '3'
        },
        pas4() {
            this.passwords = this.passwords + '4'
        },
        pas5() {
            this.passwords = this.passwords + '5'
        },
        pas6() {
            this.passwords = this.passwords + '6'
        },
        pas7() {
            this.passwords = this.passwords + '7'
        },
        pas8() {
            this.passwords = this.passwords + '8'
        },
        pas9() {
            this.passwords = this.passwords + '9'
        },
        pas0() {
            this.passwords = this.passwords + '0'
        },
        verify() {
            if (this.passwords === '123456') {
                this.$router.push({name:'tradingRecord'})
                this.$Message.success('转账完成')
            }else{
                this.$Message.error('密码错误')
                this.passwords = ''
            }
        }
    }
}
</script>

<style scoped>
    .verif_div{
        width: 80%;
        text-align: center;
        margin: 2.5rem auto;
        border-bottom: .0625rem solid #999999;
    }
    .verif_div p{
        font-size: .9375rem;
        color: white;
    }
    .verif_div input{
        background: #353544;
        text-align: center;
        color: white;
        height: 2.5rem;
        font-size: 1.25rem;
        letter-spacing: .625rem;
        border: 0;
        outline: none;
    }
    .passwords{
        width: 60%;
        height: 300px;
        margin: 2.5rem auto 0 auto;
        position: relative;
    }
    .passwords p{
        position: absolute;
        color: white;
        font-size: 1.25rem;
        height: 3.125rem;
        width: 3.125rem;
        border-radius: 1.5625rem;
        text-align: center;
        line-height: 3.125rem;
    }
    .passwords p:hover{
        background: #22222C;
    }
    .password_1{
        left: 0;
        top: 0;
    }
    .password_2{
        left: 5.46875rem;
        top: 0;
    }
    .password_3{
        right: 0;
        top: 0;
    }
    .password_4{
        left: 0;
        top: 4.375rem;
    }
    .password_5{
        left: 5.46875rem;
        top: 4.375rem;
    }
    .password_6{
        right: 0;
        top: 4.375rem;
    }
    .password_7{
        left: 0;
        top: 8.75rem;
    }
    .password_8{
        left: 5.46875rem;
        top: 8.75rem;
    }
    .password_9{
        right: 0;
        top: 8.75rem;
    }
    .password_0{
        left: 5.46875rem;
        top: 13.125rem;
    }
</style>
