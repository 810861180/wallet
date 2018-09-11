<template>
    <div>
        <div class="main_bg test_color">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">通讯录</h1>
                </div>
                <div class="topNav_div_son"></div>
            </div>
            <div class="search">
                <Input v-model="searchValue" prefix="ios-search" placeholder="搜索联系人..." style="width: 100%" />
            </div>
            <div class="addressList">
                <ul class="address_ui">
                    <li class="address_li" v-for="item in addressInfo" :key="item.id">
                        <img src="@/assets/addressInfo.svg" alt="" class="img_1" v-show="item.img === '' ">
                        <img :src="item.img" v-show="item.img !== '' " class="img_1 img2">
                        <span class="span_1">{{ item.name }}</span>
                        <span class="span_2">{{ item.phone }}</span>
                    </li>
                </ul>
            </div>
            <div class="addressBtn">
                <img src="@/assets/addContacts.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            searchValue:'',
            addressInfo:[
                {id:1, img:'../../.././static/hdPhoto.jpg', name:'张三', phone:'l21j3l123lnln13'},
                {id:2, img:'', name:'李四', phone:'khkh12hkh312l3l'},
                {id:3, img:'../../.././static/hdPhoto.jpg', name:'王五', phone:'phgug21g3k1h232'},
                {id:4, img:'', name:'二蛋', phone:'shgll131lhfoh1o'},
                {id:5, img:'../../.././static/hdPhoto.jpg', name:'老马', phone:'shgll131lhfoh1o'},
                {id:6, img:'../../.././static/hdPhoto.jpg', name:'香油', phone:'shgll131lhfoh1o'},
                {id:7, img:'../../.././static/hdPhoto.jpg', name:'鸡蛋', phone:'shgll131lhfoh1o'},
                {id:8, img:'../../.././static/hdPhoto.jpg', name:'葱花', phone:'shgll131lhfoh1o'},
                {id:9, img:'../../.././static/hdPhoto.jpg', name:'酥皮', phone:'shgll131lhfoh1o'}
            ]
        }
    }
}
</script>

<style scoped>
    .search{
        width: 90%;
        margin: 1.875rem auto 0 auto;
        background: #353544;
    }
    .address_ui{
        margin-top: 1.25rem;
    }
    .img_1{
        width: 3rem;
    }
    .img2{
        overflow: hidden;
        border-radius: 1.5rem;
    }
    .address_li{
        position: relative;
        height: 4.375rem;
    }
    .address_li:hover{
        background: #393949;
    }
    .address_li img{
        position: absolute;
        top: .6875rem;
        left: 1.25rem;
    }
    .span_1{
        font-size: 1rem;
        color: white;
        font-weight: 500;
        display: inline-block;
        position: absolute;
        top: .75rem;
        left: 5rem;
    }
    .span_2{
        font-size: .8125rem;
        color: #8a8a8a;
        display: inline-block;
        position: absolute;
        bottom: .75rem;
        left: 5rem;
    }
    .addressBtn{
        position: fixed;
        bottom: 1.25rem;
        right: 1.25rem;
        z-index: 10;
        height: 4.375rem;
        width: 4.375rem;
        background: linear-gradient(-45deg, rgb(140, 60, 243), rgb(227, 130, 121));
        border-radius: 2.1875rem;
        text-align: center;
    }
    .addressBtn img{
        width: 1.875rem;
        margin-top: 1.25rem;
    }
</style>