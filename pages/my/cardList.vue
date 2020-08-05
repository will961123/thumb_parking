<template>
	<view class="cardListView " :class="list[cardListType].length == 0 ? 'bg-white' : ''">
		<view class="topBox"><navgater title="卡卷"></navgater></view>
		<view class="titleBox bg-white flex align-center">
			<view @click="changeType('mCard')" :class="cardListType === 'mCard' ? 'select' : ''" class="item">月卡</view>
			<view @click="changeType('cardVoucher')" :class="cardListType === 'cardVoucher' ? 'select' : ''" class="item">卡卷</view>
		</view>

		<view v-show="cardListType === 'mCard'" class="cardVoucherList"><will-nodata v-if="list['mCard'].length == 0" tittle="您还没有购买过月卡"></will-nodata></view>

		<view v-show="cardListType === 'cardVoucher'" class="cardVoucherList">
			<will-nodata v-if="list['cardVoucher'].length == 0" tittle="您还没有卡卷"></will-nodata>
			<view v-for="(item, index) in list['cardVoucher']" :key="index" class="item flex">
				<view style="width: 204rpx;">
					<view class="cardType">{{ item.cardType }}</view>
					<view class="moneyBox text-center">
						￥
						<text class="money">{{ item.money }}</text>
					</view>
					<view class="desc text-center">{{ item.desc }}</view>
				</view>
				<view class="infoBox">
					<view class="cardName">{{ item.cardName }}</view>
					<view class="address">
						<text class="cuIcon cuIcon-location"></text>
						区位：{{ item.address }}
					</view>
					<view class="numBox">
						剩余次数：
						<text class="num">{{ item.surplus }}次</text>
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
			cardListType: 'cardVoucher',
			list: {
				mCard: [],
				cardVoucher: [
					{
						cardType: '商家优惠卷',
						desc: '抵扣金额',
						money: '20',
						cardName: '清二客诉优惠券20200601',
						address: '清二大厦停车场 ',
						surplus: 2
					},
					{
						cardType: '商家优惠卷',
						desc: '抵扣金额',
						money: '20',
						cardName: '清二客诉优惠券20200601',
						address: '清二大厦停车场 ',
						surplus: 2
					}
				]
			}
		};
	},
	methods: {
		changeType(type) {
			if (type === this.cardListType) {
				return;
			}
			this.cardListType = type;
		}
	}
};
</script>

<style lang="scss">
.cardListView {
	min-height: 100vh;
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 54rpx;
	}
	.titleBox {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-top: -15rpx;
		.item {
			line-height: 104rpx;
			flex: 1;
			text-align: center;
			font-size: 28rpx;
			font-family: PingFang;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);
			border-bottom: 0px solid #1aa0a1;
			&.select {
				color: #1aa0a1;
				font-size: 32rpx;
				font-weight: 700;
				border-width: 1px;
			}
		}
	}

	.cardVoucherList {
		.item {
			background-image: url(../../static/img18.png);
			background-size: cover;
			background-repeat: no-repeat;
			width: 698rpx;
			height: 224rpx;
			margin: 0 auto;
			margin-top: 24rpx;
			.cardType {
				font-size: 20rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				margin-top: 20rpx;
				margin-left: 22rpx;
			}
			.moneyBox {
				font-size: 28rpx;
				font-family: PingFang;
				font-weight: bold;
				color: rgba(241, 49, 26, 1);
				margin-top: 25rpx;
				.money {
					font-size: 58rpx;
				}
			}
			.desc {
				font-size: 22rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(230, 65, 0, 1);
				margin-top: 15rpx;
			}
			.infoBox {
				flex: 1;
				padding-right: 30rpx;
				padding-left: 28rpx;
				.cardName {
					font-size: 32rpx;
					font-family: PingFang;
					font-weight: bold;
					color: rgba(0, 0, 0, 1);
					margin-top: 38rpx;
				}
				.address {
					font-size: 22rpx;
					font-family: PingFang;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					margin-top: 28rpx;
					padding-bottom: 26rpx;
					border-bottom: 1rpx dashed #eee;
				}
				.numBox {
					font-size: 22rpx;
					color: #999999;
					margin-top: 16rpx;
					.num {
						color: #1aa0a1;
					}
				}
			}
		}
	}
}
</style>
