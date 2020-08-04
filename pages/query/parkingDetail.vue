<template>
	<view class="parkingDetailView">
		<view class="topBox"><navgater title="停车场详情"></navgater></view>
		<view class="content bg-white">
			<view class="title flex align-center">
				<image src="/static/img10.png" mode="aspectFill"></image>
				<text>老湖滨路停车场</text>
			</view>
			<view class="numBox flex align-center justify-around text-center">
				<view class="numItem">
					<view class="num">{{ parkingInfo.tot }}</view>
					<view class="desc">车位</view>
				</view>
				<view class="numItem">
					<view class="num text-orange">{{ parkingInfo.surplus }}</view>
					<view class="desc">空位</view>
				</view>
				<view class="numItem">
					<view class="num">{{ parkingInfo.free }}分钟</view>
					<view class="desc">免费</view>
				</view>
			</view>

			<view class="box flex flex-wrap">
				<view v-for="(item, index) in parkingInfo.tot" :key="index" :class="index > parkingInfo.use - 1 ? 'canUse' : ''" class="item"></view>
			</view>

			<button class="btn cu-btn">预约</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			parkingInfo: {
				tot: 81,
				use: 60,
				surplus: 21,
				free: 15
			}
		};
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}
.parkingDetailView {
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 54rpx;
	}
	.content {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-top: -15rpx;
		padding: 35rpx 25rpx;
		border-bottom: 14rpx solid #f7f7f7;
		.title {
			font-size: 34rpx;
			font-family: PingFang;
			font-weight: 700;
			color: rgba(0, 0, 0, 1);
			line-height: 30rpx;
			padding-bottom: 30rpx;
			border-bottom: 1rpx solid #eee;
			image {
				width: 30rpx;
				height: 30rpx;
				margin-right: 12rpx;
			}
		}
		.numBox {
			padding: 28rpx 0;
			.num {
				font-size: 36rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
				margin-bottom: 6rpx;
				&.text-orange {
					color: #ea8e69;
				}
			}
			.desc {
				font-size: 24rpx;
				color: #999;
			}
		}
		.box {
			margin-left: 5rpx;
			.item {
				background-color: #eb8f69;
				width: calc(5% - 10rpx);
				height: 44rpx;
				margin-right: 10rpx;
				margin-bottom: 10rpx;
				border-radius: 4rpx;
				&.canUse {
					background-color: #dbdbdb;
				}
				&:nth-child(20) {
					margin-right: 0;
				}
			}
		}
		.btn {
			padding: 0;
			width: 163rpx;
			height: 58rpx;
			line-height: 58rpx;
			border-radius: 29rpx;
			display: block;
			margin: 0 auto;
			color: #fff;
			margin-top: 42rpx;
			background: rgba(234, 142, 105, 1);
		}
	}
}
</style>
