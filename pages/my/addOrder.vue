<template>
	<view class="addOrderView">
		<view class="topBox text-white"><navgater title="提交订单"></navgater></view>

		<view style="padding: 0 28rpx;">
			<view class="item flex align-center ">
				<view class="name">车牌号</view>
				<view class="flex align-center justify-between" style="flex: 1;position: relative;">
					<picker class="picker" mode="selector" range-key="number" :range="orderInfo.plateNumberList" @change="pickerChange($event, 'plateNumber')"></picker>
					<view class="value">{{ formDate.plateNumber > -1 ? orderInfo.plateNumberList[formDate.plateNumber].number : '' }}</view>
					<text class="cuIcon cuIcon-right"></text>
				</view>
			</view>
			<view class="item flex align-center ">
				<view class="name">卡类型</view>
				<view class="flex align-center justify-between" style="flex: 1;position: relative;">
					<picker class="picker" mode="selector" range-key="name" :range="orderInfo.cardTypeList" @change="pickerChange($event, 'cardType')"></picker>
					<view class="value">{{ formDate.cardType > -1 ? orderInfo.cardTypeList[formDate.cardType].name : '' }}</view>
					<text class="cuIcon cuIcon-right"></text>
				</view>
			</view>
			<view class="item flex align-center ">
				<view class="name">单价</view>
				<view class="flex align-center justify-between" style="flex: 1;position: relative;">
					<picker class="picker" mode="selector" range-key="name" :range="orderInfo.moneyList" @change="pickerChange($event, 'money')"></picker>
					<view class="value">{{ formDate.money > -1 ? orderInfo.moneyList[formDate.money].name : '' }}</view>
					<text class="cuIcon cuIcon-right"></text>
				</view>
			</view>
			<view class="item flex align-center ">
				<view class="name">适用停车场</view>
				<view class="flex align-center justify-between" style="flex: 1;">
					<view class="value bg">{{ orderInfo.applyParkingName }}</view>
				</view>
			</view>
			<view class="item flex align-center ">
				<view class="name">描述</view>
				<view class="flex align-center justify-between" style="flex: 1;">
					<view class="value">{{ orderInfo.desc }}</view>
				</view>
			</view>

			<button class="btn cu-btn">提交订单</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderInfo: {
				applyParkingName: '胜利门子停车场',
				desc: '胜利门停车场月卡',
				plateNumberList: [{ number: '京A99999', id: 1 }, { number: '京A00001', id: 2 }],
				cardTypeList: [{ name: '胜利门停车场月卡', id1: 1 }, { name: '胜利门停车场月卡2', id1: 2 }],
				moneyList: [{ name: '1月300元', id: 1 }, { name: '3月800元', id: 2 }]
			},
			formDate: {
				plateNumber: -1,
				cardType: 0,
				money: 0
			}
		};
	},
	methods: {
		pickerChange(e, type) {
			this.formDate[type] = e.detail.value;
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}
.addOrderView {
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 30rpx;
	}
	.item {
		padding: 0 27rpx;
		height: 110rpx;
		border-bottom: 1rpx solid #eeee;
		.name {
			width: 214rpx;
			font-size: 28rpx;
			font-family: PingFang;
			font-weight: 500;
			color: rgba(0, 0, 0, 1);
		}
		.picker {
			width: 100%;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
		.value {
			font-size: 28rpx;
			font-family: PingFang;
			font-weight: 500;
			color: rgba(0, 0, 0, 1);
			line-height: 30px;
			&.bg {
				padding: 0 16rpx;
				background-color: #e0ffff;
				color: #46b4b3;
				line-height: 1.8em;
			}
		}
		.cuIcon {
			color: #b5b5b5;
			font-size: 34rpx;
		}
	}
	.btn {
		width: 100%;
		margin-top: 60rpx;
		height: 105rpx;
		line-height: 105rpx;
		background: rgba(234, 142, 105, 1);
		border-radius: 10rpx;
		font-size: 28rpx;
		font-family: PingFang;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}
}
</style>
