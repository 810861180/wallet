<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/qrCode.svg" alt="" class="img1"> -->
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">我的</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div>
                <ul class="my_ul">
                    <li class="my_li" v-for="item in myData" :key="item.id" :class="{hr:item.show === ''}" @click="$router.push({name:item.path})">
                        <div class="my_letf">
                            <img :src="item.srcs" class="my_img">
                            <span class="my_span">{{ item.name }}</span>
                        </div>
                        <div class="my_right">
                            <Icon type="ios-arrow-forward" color="#8a8a8a" size="20" />
                        </div>
                    </li>
                </ul>
            </div>
            <bt-nav></bt-nav>
        </div>
    </div>
</template>

<script>
export default {
    components:{
        btNav: (resolve) => { require(['@/components/btNav.vue'], resolve)}
    },
    data() {
        return{
            myData:[
                {id:1, srcs:'../../.././static/my/wallet.svg', name:'管理钱包', show:'', path:'ManageWallet'},
                {id:2, srcs:'../../.././static/my/addressBook.svg', name:'通讯录', show:'', path:'AddressBook'},
                {id:3, srcs:'../../.././static/my/inform.svg', name:'通知公告', show:'', path:'Inform'},
                {id:4, srcs:'../../.././static/my/AboutUS.svg', name:'关于我们', show:'', path:'AboutUS'},
                {id:5, srcs:'../../.././static/my/quit.svg', name:'退出登录', show:true, path:'login'}
            ]
        }
    }
}
</script>

<style scoped>
    .hr{
        border-bottom: 1px solid #999999;
    }
    .my_ul{
        margin-top: 1.25rem;
    }
    .my_li{
        height: 3.75rem;
    }
    .my_letf{
        display: inline-block;
        height: 50%;
        width: 40%;
        margin-top: .9375rem;
    }
    .my_right{
        display: inline-block;
        height: 50%;
        width:50%;
        float: right;
        text-align: right;
        margin: .9375rem 1.25rem 0 0;
    }
    .my_img{
        width: 1.5rem;
        display: inline-block;
        margin-left: 1.25rem;
    }
    .my_span{
        font-size: 1rem;
        color: #8a8a8a;
        display: inline-block;
        vertical-align: top;
        margin-left: 1.25rem;
    }
</style>
