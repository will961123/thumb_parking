<template>
	<view class="myCarView">
		<view class="topBox"><navgater title="我的车辆"></navgater></view>
		<view class="content flex">
			<view v-for="(item, index) in list" :key="index" class="item">
				<view class="bg flex align-center justify-center"><image src="/static/img11.png" mode="aspectFill"></image></view>
				<view class="name text-center">{{ item.plateNumber }}</view>
			</view>
			<view class="item add">
				<view @click="showAdd = true" class="bg add flex align-center justify-center"><image src="/static/img12.png" mode="aspectFill"></image></view>
				<view class="name text-center">添加车辆</view>
			</view>
		</view>

		<view v-if="showAdd" class="mc">
			<view class="mcContent">
				<view class="title">请输入您的车牌号</view>
				<plate @listenPlateChange="plateChange" :defaultPlate="plateNumber" />
				<button @click="save" class="btn cu-btn">立即添加</button>
			</view>
			<view @click="showAdd = false" class="cuIcon cuIcon-roundclose"></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [{ plateNumber: '苏A25658' }],
			plateNumber: [],
			stringNumber: '',
			showAdd: false
		};
	},
	methods: {
		plateChange(val) {
			this.stringNumber = val.join('');
		},
		save() {
			if (this.stringNumber.length < 7) {
				this.showToast('请输入正确的车牌号');
				return false;
			}
			console.log(this.stringNumber);
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #fff;
}
.myCarView {
	.topBox {
		background: linear-gradient(90deg, #15a2a3, #5dbfbe);
		padding-top: 38rpx;
		padding-bottom: 54rpx;
	}
	.content {
		padding: 0 26rpx;
		flex-wrap: wrap;
		.item {
			margin-top: 27rpx;
			width: calc(33% - 16rpx);
			margin-right: 24rpx;
			border-radius: 10rpx;
			.bg {
				height: 346rpx;
				background-image: linear-gradient(to bottom, #ffccba, #ffe9e0);
			}
			.name {
				font-size: 28rpx;
				font-family: PingFang;
				font-weight: 500;
				color: rgba(0, 0, 0, 1);
				line-height: 30rpx;
				margin-top: 28rpx;
			}
			image {
				width: 140rpx;
				height: 254rpx;
			}
			&.add {
				.bg {
					background-image: linear-gradient(to bottom, #a5dbdb, #b8f4f4);
				}
				.name {
					color: rgba(153, 153, 153, 1);
				}
				image {
					width: 88rpx;
					height: 88rpx;
				}
			}
			&:nth-child(3n) {
				margin-right: 0;
			}
		}
	}

	.mc {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		left: 0;
		top: 0;
		padding: 0 10rpx;
		text-align: center;
		.mcContent {
			width: 100%;
			background-color: #fff;
			border-radius: 20rpx;
			margin-top: 350rpx;
			padding: 42rpx 0 53rpx 0;
			.title {
				font-size: 36rpx;
				font-family: PingFang;
				font-weight: bold;
				color: rgba(0, 0, 0, 1);
				line-height: 30rpx;
				border-bottom: 1rpx solid #eeeeee;
				position: relative;
				padding-bottom: 46rpx;
				margin-bottom: 46rpx;
				&::after {
					width: 70rpx;
					height: 5rpx;
					content: '';
					position: absolute;
					left: 50%;
					margin-left: -35rpx;
					bottom: 0;
					background-color: #1ba1a2;
				}
			}
			.btn {
				padding: 0;
				width: 558rpx;
				height: 92rpx;
				line-height: 92rpx;
				background: rgba(26, 160, 161, 1);
				border-radius: 10rpx;
				color: #fff;
				margin-top: 42rpx;
			}
		}
		.cuIcon {
			color: rgba(255, 255, 255, 0.6);
			font-size: 60rpx;
			margin-top: 24px;
		}
	}
}
</style>
