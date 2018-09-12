<template>
    <div>
        <div class="main_bg">
            <div class="topNav_div">
                <div class="topNav_div_son">
                    <img src="@/assets/nav/left.svg" alt="" class="img1" @click="$router.go(-1)">
                </div>
                <div class="topNav_div_son key_white">
                    <h1 class="topNav_h1">导出KeyStore</h1>
                </div>
                <div class="topNav_div_son">
                    <!-- <img src="@/assets/nav/camera.svg" alt="" class="img2"> -->
                </div>
            </div>
            <div class="derive_main">
                <div class="derive_main_span">
                    <Icon type="ios-alert" size="20" color="#F56D6D" />
                    <span>安全提示：私钥未经加密，导出存在风险。</span>
                </div>
                <div class="derive_main_div">
                    <textarea class="derive_main_text" contenteditable="true" v-model="text"></textarea>
                </div>
            </div>
            <div class="strip_btn location" @click="$router.go(-1)">
                <p>复制KeyStore</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text:'{ haksdhkahsdk1hkhkjhakjhkjhakjhakjhjk14479874927497219847192847921874ljalkjl  aljdl jal lafl lfjlakjflkj l'
        }
    }
}
</script>

<style scoped>
    .key_white{
        width: 12.5rem;
        white-space: nowrap;
    }
</style>
