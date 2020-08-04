<template>
	<view class="indexView">
		<view class="banner"><image src="../../static/index1.png" mode="aspectFill"></image></view>
		<view class="placeholder">请输入您的车牌号</view>
		<plate @listenPlateChange="plateChange" :defaultPlate="plateNumber" />
		<button @click="query" class="btn cu-btn ">查询停车费</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			plateNumber: [],
			stringNumber: ''
		};
	},
	onLoad() {},
	methods: {
		plateChange(val) {
			this.stringNumber = val.join('');
		},
		query() {
			if (this.stringNumber.length < 7) {
				this.showToast('请输入正确的车牌号');
				return false;
			}
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}
.indexView {
	.banner {
		width: 100%;
		// height: 360rpx;
		image {
			width: 100%;
			// height: 100%;
		}
	}
	.placeholder {
		text-align: center;
		color: #0E0E0E;
		font-size: 32rrpx;
		font-family: PingFang;
		font-weight: bold;
		margin: 10px 0 50rpx 0;
	}
	.btn {
		width: calc(100% - 60rpx);
		margin: 0 auto;
		display: block;
		padding: 0;
		background: linear-gradient(90deg, rgba(25, 161, 161, 1) 0%, rgba(95, 191, 189, 1) 100%);
		border-radius: 10px;
		height: 92rpx;
		line-height: 92rpx;
		margin-top: 45rpx;
		color: #fff;
		font-size: 32rpx;
	}
}
</style>
