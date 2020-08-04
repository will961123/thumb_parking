<template>
	<view class="navgaterBox">
		<text @click="back" v-if="showBack" class="cuIcon cuIcon-back"></text>
		<text class="title">{{ title }}</text>
	</view>
</template>

<script>
export default {
	props: {
		showBack: {
			type: Boolean,
			default: true
		},
		title: {
			type: String,
			default: ''
		}
	},
	data() {
		return {};
	},
	methods: {
		back() { 
			uni.navigateBack({
			 delta:1
			});
		}
	}
};
</script>

<style lang="scss">
.navgaterBox {
	font-size: 36rpx;
	font-family: PingFang;
	color: rgba(255, 255, 255, 1);
	line-height: 43rpx;
	padding-left: 26rpx;
	.cuIcon {
		margin-right: 30rpx;
	}
	.title {
		font-weight: 700;
	}
}
</style>
