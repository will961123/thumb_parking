<template>
	<view class="myView">
		<view class="topBox text-white"> 
			<navgater title="个人中心"></navgater>
			<view class="userBox flex align-center">
				<image src="/static/img1.png" mode="aspectFill"></image>
				<view class="infoBox flex flex-direction justify-around">
					<view class="name">李先生</view>
					<view class="login">欢迎登录</view>
				</view>
			</view>
		</view>

		<view class="buyMcard flex align-center justify-between">
			<view class="flex align-center">
				<image src="/static/img3.png" mode="aspectFill"></image>
				<text>停车月卡</text>
			</view>
			<button class="cu-btn btn">购买</button>
		</view>

		<view style="padding-left: 43rpx;">
			<view @click="navgater(item.path)" v-for="(item, index) in navgaterList" :key="index" class="item flex justify-between align-center">
				<view class="flex align-center">
					<image :style="{ width: item.w }" class="icon" :src="item.icon" mode="widthFix"></image>
					<text>{{ item.name }}</text>
				</view>
				<image src="/static/img2.png" mode="widthFix"></image>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			navgaterList: [
				{ icon: '/static/img4.png', name: '订单', path: '/pages/my/myOrder', w: '28rpx' },
				{ icon: '/static/img5.png', name: '卡卷', path: '', w: '32rpx' },
				{ icon: '/static/img6.png', name: '车辆', path: '/pages/my/myCar', w: '33rpx' },
				{ icon: '/static/img7.png', name: '发票', path: '', w: '32rpx' }
			]
		};
	},
	methods:{
		navgater(url){
			uni.navigateTo({
				url
			})
		}
	}
};
</script>

<style lang="scss">
.myView {
	background-color: #fff;
	.topBox {
		
		padding-top: 37rpx;
		padding-bottom: 120rpx;
		background-color: #53baba;
		border-bottom-left-radius: 36rpx;
		border-bottom-right-radius: 36rpx;
		
		.userBox {
			margin-top: 56rpx;
			padding-left: 58rpx;
			image {
				width: 104rpx;
				height: 104rpx;
				border-radius: 50%;
				margin-right: 20rpx;
			}
			.infoBox {
				height: 104rpx;
				flex: 1;
				.name {
					font-size: 30rpx;
					font-weight: 700;
				}
			}
		}
	}

	.buyMcard {
		margin: -60rpx 0 20rpx 25rpx;
		width: calc(100% - 50rpx);
		height: 140rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 0px 10px 4px rgba(168, 183, 213, 0.22);
		border-radius: 16rpx;
		font-size: 28rpx;
		font-family: PingFang;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
		line-height: 30px;
		padding: 0 34rpx;
		font-weight: 700;
		image {
			width: 80rpx;
			height: 80rpx;
			margin-right: 26rpx;
		}
		.btn {
			padding: 0;
			width: 120rpx;
			height: 54rpx;
			line-height: 54rpx;
			color: #fff;
			font-size: 28rxp;
			border-radius: 28rpx;
			background-color: #eb8f69;
			font-weight: 500;
		}
	}

	.item {
		padding: 0 43rpx 0 0rpx;
		height: 106rpx;
		border-bottom: 1rpx solid #f7f7f7;
		font-size: 28rpx;
		font-family: PingFang;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		&:last-child {
			border-bottom: none;
		}
		.icon {
			width: 28rpx;
			margin-right: 32rpx;
		}
		image {
			width: 7px;
			height: 8px;
		}
	}
}
</style>
