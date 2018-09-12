<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">通知公告</h1>
                </div>
                <div class="topNav_div_son"></div>
            </div>

            <div class="addressList">
                <ul class="address_ui">
                    <li class="address_li" v-for="item in addressInfo" :key="item.id">
                        <img src="@/assets/addressInfo.svg" alt="" class="addressList_img_1" v-show="item.img === '' ">
                        <img :src="item.img" v-show="item.img !== '' " class="addressList_img_1 addressList_img2">
                        <span class="addressList_span_1">{{ item.name }}</span>
                        <span class="addressList_span_2">{{ item.phone }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            addressInfo:[
                {id:1, img:'../../.././static/system.svg', name:'系统通知', phone:'欢迎使用此产品'},
                {id:2, img:'../../.././static/news.svg', name:'客服消息', phone:'有什么地方需要帮助吗'},
                {id:3, img:'../../.././static/hdPhoto.jpg', name:'葱花', phone:'在不？'},
                {id:4, img:'../../.././static/after.svg', name:'售后服务', phone:'你的问题会尽快解决'}
            ]
        }
    }
}
</script>

<style>

</style>