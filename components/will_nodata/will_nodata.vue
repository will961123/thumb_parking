<template>
	<view class="nodataBox">
		<image src="/static/img15.png" mode="widthFix" class="icon"></image>
		<view class="tittle">{{ tittle ? tittle : '暂无数据' }}</view>
	</view>
</template>

<script>
export default {
	props: {
		tittle: {
			type: String
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.nodataBox {
	text-align: center;
	font-size: 32upx;
	padding-top: 30upx;
	color: #333;
	image {
		background-color: transparent;
	}
	.icon {
		width: 300rpx;
	}
	.tittle {
		// margin-top: 30upx;
		font-size:28rpx;
		font-family:PingFang;
		font-weight:500;
		color:rgba(153,153,153,1);
		line-height:30rpx;
	}
}
</style>
