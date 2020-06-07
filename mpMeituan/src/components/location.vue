<template>
    <div class="location">
        <div class="loca_left">
            <text>{{city}}</text>
            <text class="iconfont2 icon-xiangxia"></text>
        </div>
        <div class="loca_right">
            <text class="iconfont2 icon-sousuo"></text>
            <input type="text"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        city: {
            type: String,
            default: '获取中'
        }
    }
}
</script>

<style lang="scss">
.location {
    display: flex;
    .loca_left {
        flex: 1;
        font-size: 14px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .iconfont {
            font-size: 24rpx;
        }
    }
    .loca_right {
        flex: 5;
        position: relative;
        ._input {
            background-color: #f4f4f4;
            border-radius: 15px;
        }
        .iconfont2 {
            position: absolute;
            top: 5px;
            left: 15px;
            font-size: 24rpx;
        }
    }
}

</style>
