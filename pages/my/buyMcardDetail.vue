<template>
	<view class="buyMcardDetailView">
		<view class="topBox text-white"><navgater title="购买"></navgater></view>

		<view class="searvhBox bg-white">
			<view class="iptBox flex align-center">
				<text class="cuIcon cuIcon-search"></text>
				<input type="text" v-model="searchStr" placeholder="请输入" />
			</view>
		</view>

		<view class="parkingDetailBox">
			<view class="cardType">{{ parkingDetail.type }}</view>
			<view class="parkingName">{{ parkingDetail.name }}</view>
			<view class="parkingDetail flex justify-between align-center">
				<view>
					<text class="cuIcon cuIcon-location"></text>
					<text>{{ parkingDetail.address }}</text>
				</view>
			</view>
		</view>

		<view v-for="(item, index) in cardList" :key="index" class="item flex justify-between align-center">
			<view>
				<view class="cardName">{{ item.cardName }}</view>
				<view class="parkingName">停车场：{{ item.parkingName }}</view>
			</view>
			<button @click="showAgreementView(item.id)" class="btn cu-btn">立即抢购</button>
		</view>

		<view v-show="showAgreement" class="mc">
			<view class="mcContent">
				<view class="title">月卡购买协议</view>
				<view class="text">{{ agreement }}</view>
				<view class="menuBox">
					<view @click="showAgreement = false" class="fail">不同意</view>
					<view @click="gotoBuyCard" class="success">同意</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			agreement:
				'尊敬的车主，您好，购买月卡仅从当日00:00开始生效，在月卡生效之前进场的车辆需补交临时停车费用；月卡过期后出场需补交月卡从过期日的00:00开始计算的临时停车费用，请务必确认以上条款，如确认无误请点同意或拒绝进入购买页面！',
			showAgreement: false,
			searchStr: '',
			parkingDetail: { name: '老滨湖提车场', type: '停车月卡', address: '江苏省无锡市滨湖区老滨湖路' },
			cardList: [{ cardName: '胜利门停车场月卡', parkingName: '胜利门停车场' }, { cardName: '胜利门停车场月卡', parkingName: '胜利门停车场' }]
		};
	},
	methods: {
		showAgreementView(id) {
			this.showAgreement = true;
		},
		gotoBuyCard() {
			uni.navigateTo({
				url:"/pages/my/addOrder?id="
			})
		}
	}
};
</script>

<style lang="scss">
.buyMcardDetailView {
	padding-bottom: 20px;
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 30rpx;
	}
	.searvhBox {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		// margin-top: -15rpx;
		padding: 24rpx 25rpx;
		.iptBox {
			background-color: #f7f7f7;
			line-height: 77rpx;
			border-radius: 14rpx;
			.cuIcon {
				margin: 0 12rpx;
				font-size: 30rpx;
				color: #999999;
			}
			input {
				font-size: 28rpx;
				flex: 1;
			}
		}
	}
	.parkingDetailBox {
		width: 698rpx;
		height: 210rpx;
		background-image: url(../../static/img17.png);
		background-size: cover;
		background-repeat: no-repeat;
		margin: 0 auto;
		margin-top: 18rpx;
		position: relative;
		.cardType {
			font-size: 25rpx;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: rgba(104, 29, 0, 1);
			text-align: right;
			padding-top: 20rpx;
			margin-right: 24rpx;
		}
		.parkingName {
			font-size: 36rpx;
			font-family: PingFang;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			margin-top: 34rpx;
			margin-bottom: 16rpx;
			margin-left: 36rpx;
		}
		.parkingDetail {
			color: #fff;
			padding: 0 34rpx;
			font-size: 24rpx;
			.cuIcon {
				margin-right: 10rpx;
			}
			.btn {
				background-color: #fff;
				padding: 0;
				width: 100rpx;
				height: 40rpx;
				border-radius: 20rpx;
				line-height: 40rpx;
				border: 1rpx solid rgba(238, 238, 238, 1);
				font-size: 24rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}
		}
	}

	.item {
		width: 698rpx;
		margin: 0 auto;
		background-color: #fff;
		margin-top: 22rpx;
		border-radius: 10rpx;
		padding: 38rpx 24rpx 40rpx 32rpx;
		overflow: hidden;
		position: relative;
		&::after {
			width: 1px;
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			content: '';
			background-color: #1ba1a2;
		}
		.cardName {
			font-size: 28rpx;
			font-family: PingFang;
			font-weight: bold;
			color: rgba(0, 0, 0, 1);
			line-height: 30rpx;
		}
		.parkingName {
			font-size: 24rpx;
			font-family: PingFang;
			font-weight: 500;
			color: rgba(153, 153, 153, 1);
			line-height: 30rpx;
			margin-top: 21rpx;
		}
		.btn {
			padding: 0;
			width: 175rpx;
			height: 62rpx;
			line-height: 62rpx;
			background: rgba(234, 142, 105, 1);
			border-radius: 31rpx;
			color: #fff;
		}
	}

	.mc {
		width: 100%;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		padding: 220rpx 64rpx 0 64rpx;
		.mcContent {
			background-color: #fff;
			border-radius: 20rpx;
			.title {
				font-size: 36rpx;
				font-family: PingFang;
				font-weight: bold;
				color: rgba(0, 0, 0, 1);
				text-align: center;
				position: relative;
				padding: 42rpx 0 46rpx 0;
				border-bottom: 1rpx solid #eee;
				&::after {
					position: absolute;
					left: 50%;
					margin-left: -35rpx;
					bottom: 0;
					width: 70rpx;
					height: 6rpx;
					content: '';
					background-color: #1ba1a2;
				}
			}
			.text {
				padding: 44rpx 34rpx;
				font-size: 28rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
				line-height: 46rpx;
				border-bottom: 1rpx solid #eee;
			}
			.menuBox {
				height: 124rpx;
				line-height: 124rpx;
				font-size: 32rpx;
				// font-weight: 700;
				view {
					display: inline-block;
					width: 50%;
					text-align: center;
				}
				.success {
					border-left: 1rpx solid #eee;
					color: #1ba1a2;
				}
			}
		}
	}
}
</style>
