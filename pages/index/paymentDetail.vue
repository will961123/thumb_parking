<template>
	<view class="paymentDetailView">
		<view class="topBox"><navgater title="支付"></navgater></view>
		<view class="bg-white">
			<view class="text-center">
				<view class="tit">{{ orderInfo.orderName }}</view>
				<view class="titMoney">￥{{ orderInfo.totMoney }}</view>
				<view class="maker">
					合并支付：
					<text v-for="(item, index) in orderInfo.money" :key="index">
						￥{{ item }}
						<text v-if="index < orderInfo.money.length - 1">+</text>
					</text>
				</view>
			</view>
			<view class="orderInfoBox">
				<view class="item flex align-center justify-between">
					<view class="name">已停时长</view>
					<view class="value">{{ orderInfo.useTime }}</view>
				</view>
				<view class="item flex align-center justify-between">
					<view class="name">入场时间</view>
					<view class="value">{{ orderInfo.enterTime }}</view>
				</view>
				<view class="item flex align-center justify-between">
					<view class="name">车牌号码</view>
					<view class="value">{{ orderInfo.number }}</view>
				</view>
			</view>
		</view>
		<view class="descBox flex align-center justify-between">
			<view class="name">备注</view>
			<view class="value flex align-center ">
				{{ orderInfo.desc }}
				<button @click="showOrderList = true" class="  cu-btn">
					记录
					<text class="cuIcon cuIcon-right"></text>
				</button>
			</view>
		</view>

		<button class="payNow cu-btn">立即支付</button>

		<view v-show="showOrderList" class="mc">
			<view class="mcContent">
				<view class="mcTitle flex align-center justify-between">
					<text>欠费记录</text>
					<text @click="showOrderList=false" class="cuIcon cuIcon-close"></text>
				</view>
				<view v-for="(item,index) in orderList" :key="index" class="item flex">
					<view class="detail">
						<view class="numberBox flex align-center">
							<view class="number">{{item.number}}</view>
							<view class="maker">欠费￥{{item.arrears}}</view>
						</view>
						<view class="li flex align-center">
							<view class="name">入场时间：</view>
							<view class="value">{{item.enterTime}}</view>
						</view>
						<view class="li flex align-center">
							<view class="name">出场时间：</view>
							<view class="value">{{item.appearanceTime}}</view>
						</view>
						<view class="li flex align-center">
							<view class="name">停车时长：</view>
							<view class="value">{{item.useTime}}</view>
						</view>
						<view class="li flex align-center">
							<view class="name">停车地点：</view>
							<view class="value">{{item.address}}</view>
						</view>
					</view>
					<view class="moneyBox">
						<view class="money">￥{{item.orderMoney}}</view>
						<button class="btn cu-btn">立即支付</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showOrderList: false,
			orderInfo: {
				orderName: '停车费',
				totMoney: '1256.00',
				money: ['560.00', '454.00'],
				useTime: '40天6小时13分20秒',
				enterTime: '2020-07-14 08:30:56',
				number: '苏G56563',
				desc: '欠费两次,未支付费用￥560.00'
			},
			orderList: [
				{
					number: '苏G56563',
					arrears: '1005.00',
					orderMoney: '3625.00',
					enterTime: '2020-07-14 08:30:56',
					appearanceTime: '2020-07-14 09:30:56',
					useTime: '40天6小时13分20秒',
					address: '无锡市滨湖区苏宁地下停车场A20'
				},
				{
					number: '苏G56563',
					arrears: '1005.00',
					orderMoney: '3625.00',
					enterTime: '2020-07-14 08:30:56',
					appearanceTime: '2020-07-14 09:30:56',
					useTime: '40天6小时13分20秒',
					address: '无锡市滨湖区苏宁地下停车场A20'
				} 
			]
		};
	}
};
</script>

<style lang="scss">
.paymentDetailView {
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 34rpx;
	}
	.tit {
		font-size: 28rpx;
		font-family: PingFang;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
		padding-top: 60rpx;
		margin-bottom: 28rpx;
	}
	.titMoney {
		font-size: 60rpx;
		font-family: PingFang;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
		line-height: 30px;
	}
	.maker {
		font-size: 24rpx;
		font-family: PingFang;
		font-weight: 500;
		color: rgba(234, 142, 105, 1);
		line-height: 48rpx;
		background-color: #fff0ea;
		display: inline-block;
		padding: 0 26rpx;
		margin-top: 18rpx;
		margin-bottom: 18rpx;
	}
	.orderInfoBox {
		padding: 0 36rpx;
		.item {
			height: 96rpx;
			border-bottom: 1rpx solid #eee;
			&:last-child {
				border-bottom: none;
			}
			.name {
				font-size: 28rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
			.value {
				font-size: 28rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);
			}
		}
	}
	.descBox {
		background-color: #fff;
		margin-top: 14rpx;
		padding: 0 36rpx;
		height: 96rpx;
		.name {
			font-size: 28rpx;
			font-family: PingFang;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
		}
		.value {
			font-size: 28rpx;
			font-family: PingFang;
			font-weight: 500;
			color: rgba(0, 0, 0, 1);
			button {
				padding: 0;
				font-size: 24rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);
				width: 104rpx;
				height: 42rpx;
				border-radius: 21rpx;
				border: 1rpx solid rgba(210, 210, 210, 1);
				background-color: #fff;
				margin-left: 18rpx;
				.cuIcon {
					color: #999999;
				}
			}
		}
	}
	.payNow {
		width: 596rpx;
		height: 105rpx;
		line-height: 105rpx;
		background: rgba(234, 142, 105, 1);
		border-radius: 20rpx;
		font-size: 28rpx;
		font-family: PingFang;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		display: block;
		margin: 0 auto;
		margin-top: 68rpx;
	}

	.mc {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		padding-top: 150rpx;
		.mcContent {
			width: 100%;
			height: 100%;
			overflow-y: auto;
			border-top-left-radius: 20rpx;
			border-top-right-radius: 20rpx;
			background-color: #f7f7f7;
			.mcTitle {
				background-color: #fff;
				padding: 0 32rpx;
				height: 97rpx;
				border-bottom: 1rpx solid #eee;
				font-size: 32rpx;
				font-weight: 700;
				color: #000;
				.cuIcon {
					font-weight: 500;
					font-size: 48rpx;
					color: #999;
				}
			}
			.item {
				background-color: #fff;
				padding: 0 30rpx;
				padding-bottom: 38rpx;
				margin-bottom: 14rpx;
				.detail {
					flex: 1;
					.numberBox {
						margin-top: 37rpx;
						margin-bottom: 30rpx;
						.number {
							font-size: 38rpx;
							font-family: PingFang;
							font-weight: 500;
							color: rgba(0, 0, 0, 1);
						}
						.maker {
							margin: 0;
							background: rgba(27, 160, 161, 0.2);
							height: 40rpx;
							line-height: 40rpx;
							padding: 0 15rpx;
							color: #1aa0a1;
							font-size: 24rpx;
							border-radius: 20rpx 20rpx 20rpx 0;
							margin-left: 28rpx;
						}
					}
					.li {
						margin-top: 24rpx;
						.name {
							font-size: 24rpx;
							font-family: PingFang;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
						.value {
							font-size: 24rpx;
							font-family: PingFang;
							font-weight: 500;
							color: rgba(102, 102, 102, 1);
						}
					}
				}
				.moneyBox {
					text-align: center;
					margin-top: 37rpx;
					.money {
						font-size: 32rpx;
						font-family: PingFang;
						font-weight: 500;
						color: rgba(234, 142, 105, 1);
					}
					.btn {
						width: 133rpx;
						height: 54rpx;
						border-radius: 27rpx;
						line-height: 54rpx;
						padding: 0;
						background: rgba(234, 142, 105, 1);
						font-size: 24rpx;
						font-family: PingFang;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
						margin-top: 23rpx;
					}
				}
			}
		}
	}
}
</style>
