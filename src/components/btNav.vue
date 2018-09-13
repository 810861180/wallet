<template>
    <div>
        <div class="nav">
            <router-link class="div" :to="{name:'Index'}">
                <img src="@/assets/property.svg" v-show="'/index' !== $route.path">
                <img src="@/assets/propertyC.svg" v-show="'/index' === $route.path">
                <p :class="{colors: '/index' === $route.path}">资产</p>
            </router-link>
            <router-link class="div" :to="{name:'Wallet'}">
                <img src="@/assets/wallet.svg" v-show="'/wallet' !== $route.path">
                <img src="@/assets/walletC.svg" v-show="'/wallet' === $route.path">
                <p :class="{colors: '/wallet' === $route.path}">锁仓钱包</p>
            </router-link>
            <router-link class="div" :to="{name:'Info'}">
                <img src="@/assets/information.svg" v-show="'/info' !== $route.path">
                <img src="@/assets/informationC.svg" v-show="'/info' === $route.path">
                <p :class="{colors: '/info' === $route.path}">资讯</p>
            </router-link>
            <router-link class="div" :to="{name:'My'}">
                <img src="@/assets/my.svg" v-show="'/my' !== $route.path">
                <img src="@/assets/myC.svg" v-show="'/my' === $route.path">
                <p :class="{colors: '/my' === $route.path}">我的</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .nav{
        background: rgb(57, 57 ,73);
        width: 92%;
        height: 3.4375rem;
        position: fixed;
        bottom: 1.25rem;
        left: 4%;
        z-index: 999;
        border-radius: .625rem;
        display: flex;
        text-align: center;
    }
    .div{
        color: #8a8a8a;
        font-size: .75rem;
        flex: 1;
    }
    .div img{
        display: inline-block;
        width: 1.875rem;
        padding-top: .125rem;
    }
    .colors{
        color: #A7529B;
    }
</style>

