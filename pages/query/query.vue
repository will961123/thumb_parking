<template>
	<view class="queryView">
		<view class="topBox"><navgater title="查询"></navgater></view>

		<view class="searvhBox bg-white">
			<view class="iptBox flex align-center">
				<text class="cuIcon cuIcon-search"></text>
				<input type="text" v-model="searchStr" placeholder="请输入" />
			</view>
		</view>

		<view style="padding: 0 26rpx;">
			<view @click="gotoDetail(item.id)" v-for="(item,index) in list" :key="index" class="item bg-white flex  ">
				<view class="infoBox">
					<view class="title flex align-center">
						<image src="/static/img10.png" mode="aspectFill"></image>
						<text>{{item.name}}</text>
					</view>
					<view class="desc">地址: {{item.address}}</view>
					<view class="desc">车位: {{item.tot}} <text style="color: #ededed;margin: 0 14rpx;"> | </text> 距离: {{item.km}}</view>
				</view>
				<view class="numBox">
					<view class="num">{{item.nowNum}}</view>
					<view class="desc">空位</view>
					<button class="btn cu-btn">
						<image src="/static/img9.png" mode="aspectFill"></image>
						导航
					</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			searchStr: '',
			list: [
				{ name: '老湖滨路停车场', address: '江苏无锡市滨湖区老湖滨路', tot: 145, km: '2.7km', nowNum: 58 },
				{ name: '老湖滨路停车场', address: '江苏无锡市滨湖区老湖滨路', tot: 145, km: '2.7km', nowNum: 58 },
				{ name: '老湖滨路停车场', address: '江苏无锡市滨湖区老湖滨路', tot: 145, km: '2.7km', nowNum: 58 },
				{ name: '老湖滨路停车场', address: '江苏无锡市滨湖区老湖滨路', tot: 145, km: '2.7km', nowNum: 58 }
			]
		};
	},
	methods:{
		gotoDetail(id){
			uni.navigateTo({
				url:"/pages/query/parkingDetail"
			})
		}
	}
};
</script>

<style lang="scss">
.queryView {
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 54rpx;
	}
	.searvhBox {
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-top: -15rpx;
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

	.item {
		padding: 24rpx 28rpx;
		border-radius: 10rpx;
		margin-top: 18rpx;
		.infoBox {
			flex: 1;
			.title {
				font-size: 34rpx;
				font-family: PingFang;
				font-weight: 700;
				color: rgba(0, 0, 0, 1);
				line-height: 30rpx;
				margin-top: 5rpx;
				image {
					width: 30rpx;
					height: 30rpx;
					margin-right: 12rpx;
				}
			}
			.desc {
				font-size: 24rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
				line-height: 30rpx;
				margin-top: 28rpx;
			}
		}
		.numBox {
			padding: 0 0 0 28rpx;
			border-left: 1rpx solid #eee;
			text-align: center;
			.num {
				font-size: 36rpx;
				font-family: PingFang;
				font-weight: bold;
				color: rgba(234, 142, 105, 1);
			}
			.desc {
				font-size: 24rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
				line-height: 30rpx;
			}
			.btn {
				padding: 0;
				width: 99rpx;
				height: 37rpx;
				line-height: 37rpx;
				background: rgba(234, 142, 105, 1);
				color: #fff;
				border-radius: 19rpx;
				font-size: 24rpx;
				margin-top: 30rpx;
				image {
					width: 21rpx;
					height: 21rpx;
					margin-right: 6rpx;
				}
			}
		}
	}
}
</style>
