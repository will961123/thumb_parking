<template>
	<view class="buyMcardView">
		<view class="topBox text-white"><navgater title="购买"></navgater></view>

		<view class="searvhBox bg-white">
			<view class="iptBox flex align-center">
				<text class="cuIcon cuIcon-search"></text>
				<input type="text" v-model="searchStr" placeholder="请输入" />
			</view>
		</view>

		<view  v-for="(item,index) in McardList" :key="index" class="item">
			<view class="cardType">{{item.type}}</view>
			<view class="parkingName">{{item.name}}</view>
			<view class="parkingDetail flex justify-between align-center">
				<view>
					<text class="cuIcon cuIcon-location"></text>
					<text>{{item.address}}</text>
				</view>
				<button @click="gotoDetail(item.id)" class="btn cu-btn">详情</button>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			searchStr: '',
			McardList:[
				{name:'老滨湖提车场',type:'停车月卡',address:'江苏省无锡市滨湖区老滨湖路'},
				{name:'老滨湖提车场',type:'停车月卡',address:'江苏省无锡市滨湖区老滨湖路'},
				{name:'老滨湖提车场',type:'停车月卡',address:'江苏省无锡市滨湖区老滨湖路'},
				{name:'老滨湖提车场',type:'停车月卡',address:'江苏省无锡市滨湖区老滨湖路'},
			]
		};
	},
	methods:{
		gotoDetail(id){
			uni.navigateTo({
				url:"/pages/my/buyMcardDetail?id="
			})
		}
	}
};
</script>

<style lang="scss">
.buyMcardView {
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
	.item {
		width: 698rpx;
		height: 294rpx;
		background-image: url(../../static/img16.png);
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
			margin-top: 66rpx;
			margin-left: 36rpx;
		}
		.parkingDetail {
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 82rpx;
			padding: 0 34rpx;
			color: rgba(153, 153, 153, 1);
			font-size: 24rpx;
			.cuIcon{
				margin-right: 10rpx;
			}
			.btn{
				background-color: #fff;
				padding: 0;
				width:100rpx;
				height:40rpx;
				border-radius: 20rpx;
				line-height: 40rpx;
				border:1rpx solid rgba(238,238,238,1);
				font-size:24rpx;
				font-family:PingFang;
				font-weight:500;
				color:rgba(153,153,153,1); 
			}
		}
	}
}
</style>
