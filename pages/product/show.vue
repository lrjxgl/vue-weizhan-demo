<template>
	<div>
		<div class="header">
			<div class="header-back" @click="goBack">返回</div>
			<div class="header-title">详情</div>
		</div>
		<div class="header-row"></div>
		<div class="main-body" v-if="pageLoad">
			<img class="d-img" :src="pageData.data.imgurl" />
				
	 
			<div class="d-title">{{pageData.data.title}}</div>
			<div class="d-row d-row-border">
				<div class="d-price">￥{{pageData.data.price}}</div>
			</div>
			<div class="d-content" v-html="pageData.data.content"></div>
		</div>
	</div>
	
</template>

<script>
	var id;
	export default{
		
		data(){
			return {
				pageLoad:false,
				pageData:{}
			}
		},
		created:function(e){
			id=this.$route.params.id; 
			this.getPage();
		},
		methods:{
			getPage:function(){
				var that=this;
				this.axios.get(this.$app.apiHost+"?m=product&a=show&ajax=1&id="+id)
					.then(function(res){
						that.pageLoad=true;
						that.pageData=res.data.data;					 
					})
			},
			goBack:function(){
				  this.$router.go(-1);
			}
		}
	}
</script>

<style>
</style>