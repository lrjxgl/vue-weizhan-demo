<template>
	<div class="page">
		<div class="header">
			<div class="header-title">微站云</div>
		</div>
		<div class="header-row"></div>
	 
		<div class="main-body" v-if="pageLoad">
			<div style="margin-bottom: 10px;">
			  <mt-swipe :auto="4000"  >
			  	
				  <mt-swipe-item v-for="(item,key) in pageData.flashlist">
				  	<img class="swipe-img" :src="item.imgurl" />
				 </mt-swipe-item>
				   
				</mt-swipe>
			</div>
			
			<div class="flexlist">
				<router-link :to="'product/show/'+item.id" class="flexlist-item" v-for="(item,key) in pageData.productlist">
					<img class="flexlist-img" :src="item.imgurl+'.100x100.jpg'">
					<div class="flexlist-flex-1">
						<div class="flexlist-title">{{item.title}}</div>
						<div class="flexlist-row">
							<div class="flexlist-price">￥{{item.price}}</div>
						</div>
					</div>
					
				</router-link>
			</div>
			
			<div class="md-abc">
				<div class="md-abc-a">
					<img class="md-abc-img" src="http://img.deitui.com/?w=100&h=210&text=A">
				</div>
				<div class="md-abc-bc">
					<div class="md-abc-b">
						<img class="md-abc-img" src="http://img.deitui.com/?w=100&h=70&text=B&bgcolor=f60">
					</div>
					<div  class="md-abc-b">
						<img class="md-abc-img" src="http://img.deitui.com/?w=100&h=70&text=C&bgcolor=f90">
					</div>
					<div  class="md-abc-c">
						<img class="md-abc-img" src="http://img.deitui.com/?w=100&h=70&text=D&bgcolor=f60">
					</div>
					
				</div>
			</div>
   
 			<div class="flexlist">
				<router-link :to="'article/show/'+item.id" class="flexlist-title-one" v-for="(item,key) in pageData.articlelist">
					 {{item.title}} 
					
				</router-link>
			</div>
			
			<div class="aboutus">
				<div class="d-content" v-html="pageData.shop.content"></div>
			</div>
			<div class="mfooter-row"></div>
			<div class="mfooter">
				<router-link to="" class="mfooter-item">
					<i class="iconfont icon-home mfooter-icon"></i>
					首页
				</router-link>
				<router-link to="product" class="mfooter-item">
					<i class="iconfont icon-goods mfooter-icon"></i>
					产品
				</router-link>
				<router-link to="article" class="mfooter-item">
					<i class="iconfont icon-news mfooter-icon"></i>
					资讯
				</router-link>
				<router-link to="user" class="mfooter-item">
					<i class="iconfont icon-user mfooter-icon"></i>
					我的
				</router-link>
			</div>
			 
		</div>
		
	</div>
	
</template>

<script>
	 

	export default{
		 
		data(){
			return {
				pageLoad:false, 
				pageData:{}
			}
		},
		created:function(){
			this.getPage();
		},
		methods:{
			getPage:function(){
				var that=this;
				this.axios.get(this.$app.apiHost+"?ajax=1")
					.then(function(res){
						that.pageData=res.data.data;
						that.pageLoad=true;		 
				})
			}
		}
	}
</script>

<style scoped="">
.mint-swipe{
	height: 200px;
}
.swipe-img{
	height: 200px;
}
.mint-tab-container-item{
	height: 200px;
}
.md-abc{
	display: flex; 
	 
 	position: relative;
 	padding: 5px;
}
.md-abc-a,.md-abc-bc{
	flex: 1;
}
.md-abc-a{
	 
	background-color: #aaa;
}
.md-abc-bc{
	padding-left: 5px; 
	background-color: #eee;
}
.md-abc-img{
	width: 100%;
	float: left;
}
.md-abc-b{
	align-self:flex-start;
	 
}
.md-abc-c{
	align-self: flex-end;
	 
}
</style>