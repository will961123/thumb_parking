<template>
	<view class="cardDetailView">
		<view class="topBox"><navgater title="卡卷"></navgater></view>
		<view class="imgBox">
			<view class="maker">商家优惠卷</view>
			<view class="infoBox">
				<view class="cardName">大萨达所</view>
				<view class="address">
					<text class="cuIcon cuIcon-location"></text>
					区位：短视的骄傲
				</view>
				<view class="numBox">
					<text>
						剩余次数：
						<text class="num">2次</text>
					</text>
					<text>
						剩余次数：
						<text class="num orange">2元</text>
					</text>
				</view>
			</view>
			<image class="qrCode" src="/static/img20.png" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.cardDetailView {
	min-height: 100vh;
	background: linear-gradient(180deg, #15a2a3, #fff 80%);
	.topBox {
		padding-top: 38rpx;
		padding-bottom: 54rpx;
	}
	.imgBox {
		background-image: url(../../static/img19.png);
		background-repeat: no-repeat;
		background-size: cover;
		width: 682rpx;
		height: 933rpx;
		margin: 0 auto;
		position: relative;
		overflow: hidden;
		.maker {
			display: inline-block;
			background: linear-gradient(90deg, #f0ae92, #eb8f69 90%);
			color: #fff;
			font-size: 22rpx;
			line-height: 1.8em;
			padding: 0 20px;
			transform: rotateZ(45deg) translate(50%, 50%);
			position: absolute;
			right: 0;
			top: -54rpx;
		}
		.infoBox { 
			width: calc(100% - 48rpx);
			margin-left: 24rpx;
			padding-left: 25rpx;
			height: 232rpx;
			border-bottom: 1rpx dashed #eee;
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
				margin-top: 20rpx;
				padding-bottom: 16rpx;
			}
			.numBox {
				font-size: 22rpx;
				color: #999999; 
				.num {
					color: #1aa0a1;
				}
				.orange{
					color:#eb8f69 ;
				}
			}
		}
		.qrCode{
			width: 482rpx;
			display: block;
			margin: 0 auto;
			margin-top: 55rpx;
		}
	}
}
</style>
