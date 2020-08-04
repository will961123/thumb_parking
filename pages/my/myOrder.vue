<template>
	<view class="myOrderView">
		<view class="topBox text-white"><navgater title="订单"></navgater></view>
		<view class="content bg-white ">
			<view class="titBox flex align-center">
				<view @click="changeType('parkingOrder')" :class="orderType === 'parkingOrder' ? 'select' : ''" class="item">停车订单</view>
				<view @click="changeType('mCardOrder')" :class="orderType === 'mCardOrder' ? 'select' : ''" class="item">月卡订单</view>
			</view>
		</view>


		<will-nodata v-if="orderList[this.orderType].length ===0" ></will-nodata>
		
		<view class="listBox">
			<view v-for="(item, index) in orderList[this.orderType]" :key="index" class="item bg-white">
				<view class="title flex align-center justify-between">
					<view class="flex align-center">
						<image src="/static/img13.png" mode="aspectFill"></image>
						<text>{{ item.name }}</text>
					</view>
					<view class="money">{{ item.money }}元</view>
				</view>
				<view class="infoBox flex align-center justify-between">
					<view class="info">
						<view v-if="orderType == 'parkingOrder'" class="desc">
							停车时长：
							<text style="color:#000">{{ item.uration }}</text>
						</view>
						<view v-else class="desc">
							停车时长：
							<text style="color:#000">{{ item.cardName }}</text>
						</view>
						<view class="desc">
							支付时间：
							<text>{{ item.payTime }}</text>
						</view>
					</view>
					<image v-if="item.payTime" src="/static/img14.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderType: 'parkingOrder',
			orderList: {
				parkingOrder: [
					{ name: '苏B0BN58', money: '2.00', uration: '26分53秒', payTime: '2020-02-08 15:32:31' },
					{ name: '苏B0BN58', money: '2.00', uration: '26分53秒', payTime: '2020-02-08 15:32:31' },
					{ name: '苏B0BN58', money: '2.00', uration: '26分53秒', payTime: '2020-02-08 15:32:31' },
					{ name: '苏B0BN58', money: '2.00', uration: '26分53秒', payTime: '2020-02-08 15:32:31' }
				],
				mCardOrder: [
					{ name: '苏B0BN58', money: '2.00', cardName: '老湖滨路封闭式车场月卡', payTime: '2020-02-08 15:32:31' },
					{ name: '苏B0BN58', money: '2.00', cardName: '老湖滨路封闭式车场月卡', payTime: '2020-02-08 15:32:31' },
					{ name: '苏B0BN58', money: '2.00', cardName: '老湖滨路封闭式车场月卡', payTime: '2020-02-08 15:32:31' },
					{ name: '苏B0BN58', money: '2.00', cardName: '老湖滨路封闭式车场月卡', payTime: '2020-02-08 15:32:31' }
				]
			}
		};
	},
	methods: {
		changeType(type) {
			if (type === this.orderType) {
				return false;
			}
			this.orderType = type;
		}
	}
};
</script>

<style lang="scss">
.myOrderView {
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 54rpx;
	}
	.content {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-top: -15rpx;
		.titBox {
			.item {
				padding: 25rpx 0;
				flex: 1;
				text-align: center;
				border-bottom: 0px solid #1aa0a1;
				font-size: 28rpx;
				color: rgba(102, 102, 102, 1);
				font-weight: 500;
				&.select {
					color: #1aa0a1;
					font-size: 36rpx;
					font-weight: 700;
					border-width: 1px;
				}
			}
		}
	}
	.listBox {
		padding: 0 26rpx;
		.item {
			border-radius: 10rpx;
			margin-top: 18rpx;
			.title {
				font-size: 32rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(1, 1, 1, 1);
				line-height: 30rpx;
				padding: 30rpx 44rpx;
				border-bottom: 1rpx solid #f7f7f7;
				image {
					width: 26rpx;
					height: 32rpx;
					margin-right: 14rpx;
				}
				.money {
					font-size: 28rpx;
					font-family: PingFang;
					font-weight: bold;
					color: rgba(234, 142, 105, 1);
					line-height: 30rpx;
				}
			}
			.infoBox {
				padding: 30rpx 28rpx 16rpx 40rpx;
				.info {
					.desc {
						font-size: 24rpx;
						font-family: PingFang;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
						line-height: 30rpx;
						margin-bottom: 22rpx;
					}
				}
				image {
					width: 112rpx;
					height: 89rpx;
				}
			}
		}
	}
}
</style>
