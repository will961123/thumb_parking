<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
@import 'colorui/main.css';
@import 'colorui/icon.css';
page{
	font-family:PingFang;
}
.textov1 {
	/* display: block; */
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.textov2 {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>
