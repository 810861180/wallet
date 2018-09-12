<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son">
                    <h1 class="topNav_h1">修改名称</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="alter_name">
                <p>名称：</p>
                <input type="text" class="alter_name_input" id="inputs" v-model="walletNames">
            </div>
            <div class="strip_btn location" @click="affirm">
                <p>确 认</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            walletNames:'',
        }
    },
    mounted() {
        document.getElementById('inputs').setAttribute('placeholder', this.$store.state.walletName)
    },
    methods:{
        affirm() {
            this.$store.commit('altername', this.walletNames)
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    
</style>
