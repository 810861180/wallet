<template>
    <div>
        <div class="main_bg test_color">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.push({name:'Index'})">
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">交易记录</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="trading_div">
                <div class="trading_div_1">
                    <p class="trading_p" @click="all" :class="{color:color1}">全部</p>
                    <p class="trading_p" @click="expend" :class="{color:color2}">支出</p>
                    <p class="trading_p" @click="income" :class="{color:color3}">收入</p>
                </div>
                <ul>
                    <li class="trading_li" v-for="item in dispalyData" :key="item.id" @click="$router.push({name:'Deal'})">
                        <div class="trading_divs">
                            <p class="trading_divs_p1">{{ item.img }}</p>
                        </div>
                        <div class="trading_divs2">
                            <span class="trading_divs_span1">{{ item.title }}</span>
                            <span class="trading_divs_span2">{{ item.text }}</span>
                            <span class="trading_divs_span3" :style="{color:item.color}">{{ item.value }}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="wallet_btn">
                <div class="btn_1" @click="$router.push({name:'transfer'})">
                    转 账
                </div>
                <div class="btn_2" @click="$router.push({name:'gathering'})">
                    收 款
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const initData = [
                {id:1, img:'支', state:1, title:'Ox2759823783', text:'等待确认中', value:'-123.22ETH', color:'#F56D6D'},
                {id:2, img:'支', state:1, title:'Ox2759823783', text:'23小时前', value:'-123.22ETH', color:'#6188D7'},
                {id:3, img:'支', state:1, title:'Ox2759823783', text:'23小时前', value:'-123.22ETH', color:'#6188D7'},
                {id:4, img:'支', state:1, title:'Ox2759823783', text:'23小时前', value:'-123.22ETH', color:'#6188D7'},
                {id:5, img:'收', state:2, title:'Ox2759823783', text:'一天前', value:'+123.22ETH', color:'#5FC267'},
                {id:6, img:'收', state:2, title:'Ox2759823783', text:'一天前', value:'+123.22ETH', color:'#5FC267'},
                {id:7, img:'支', state:1, title:'Ox2759823783', text:'一天前', value:'-123.22ETH', color:'#6188D7'},
                {id:8, img:'支', state:1, title:'Ox2759823783', text:'一天前', value:'-123.22ETH', color:'#6188D7'},
                {id:9, img:'支', state:1, title:'Ox2759823783', text:'一天前', value:'-123.22ETH', color:'#6188D7'},
                {id:10, img:'收', state:2, title:'Ox2759823783', text:'一天前', value:'+123.22ETH', color:'#5FC267'}
            ]
export default {
    data() {
        return{
            dispalyData:initData,
            color1:true,
            color2:false,
            color3:false
        }
    },
    methods:{
        all() {
            this.dispalyData = initData
            this.color1 = true
            if (this.color1) {
                this.color2 = false
                this.color3 = false
            }
        },
        expend() {
            let test = []
            for (let i = 0; i < initData.length; i++) {
                if (initData[i].state === 2) {
                    test.push(initData[i])
                }
            }
            this.dispalyData = test
            this.color2 = true
            if (this.color2) {
                this.color1 = false
                this.color3 = false
            }
        },
        income() {
            let test = []
            for (let i = 0; i < initData.length; i++) {
                if (initData[i].state === 1) {
                    test.push(initData[i])
                }
            }
            this.dispalyData = test
            this.color3 = true
            if (this.color3) {
                this.color1 = false
                this.color2 = false
            }
        }
    }
}
</script>

<style scoped>
    
    .trading_div{
        width: 90%;
        margin: 1.875rem auto 9.375rem auto;
    }
    .trading_div_1{
        width: 94%;
        margin: 0 auto;
        height: 1.875rem;
        display: flex;
        text-align: center;
    }
    .trading_p{
        flex: 1;
        font-size: 1rem;
        color: #999999;
    }
    .trading_li{
        height: 3.75rem;
        width: 100%;
        border-radius: .625rem;
        background: #393949;
        margin-bottom: .625rem;
    }
    .trading_li div, .trading_li p, .trading_li span{
        display: inline-block;
    }
    .trading_divs{
        height: 2.875rem;
        width: 2.875rem;
        border-radius: 1.4375rem;
        border: 1px solid #999999;
        margin: .4375rem 0 0 .625rem;

    }
    .trading_divs_p1{
        width: 100%;
        font-size: 1.125rem;
        text-align: center;
        margin-top: .59375rem;
        color: #999999
        
    }
    .trading_divs2{
        position: relative;
        height: 100%;
        width: 16.25rem;
        vertical-align: top;
    }
    .trading_divs_span1{
        color: white;
        font-size: 1rem;
        position: absolute;
        left: .625rem;
        top: .625rem
    }
    .trading_divs_span2{
        color: #999999;
        position: absolute;
        left: .625rem;
        bottom:.625rem
    }
    .trading_divs_span3{
        font-size: 1rem;
        position: absolute;
        right: 0;
        top: 1.125rem;
    }
    



    .color{
        color: white;
    }
</style>
