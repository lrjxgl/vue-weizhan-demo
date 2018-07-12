<template>
	<div class="page">
		<div class="header">
			<div class="header-back" @click="goBack">返回</div>
			<div class="header-title">产品</div>
		</div>
		<div class="header-row"></div>
	 	<div v-if="ajaxLoad" class="ajaxload" ><mt-spinner type="triple-bounce"></mt-spinner></div>
		<div class="main-body" v-if="pageLoad">
			<div class="tabs-border">
				<div v-bind:class="[catid==0?'tabs-border-item tabs-border-active':'tabs-border-item']"  @click="setCat" data-catid="0">全部</div>
				<div v-for="(item,key) in pageData.catlist" 
					@click="setCat" 
					:data-catid="item.id" 
					:key="item.id" 
					v-bind:class="[catid==item.id?'tabs-border-item tabs-border-active':'tabs-border-item']">
					{{item.title}}
				</div>
			</div> 
			<mt-loadmore 
				:top-method="loadTop" 
				 
				@top-status-change="handleTopChange"
				 
				ref="loadmore" >
   
 			<div class="flexlist"  
 				v-infinite-scroll="loadBottom"
  				infinite-scroll-disabled="loading"
  				infinite-scroll-distance="20">
				<router-link :to="'product/show/'+item.id" class="flexlist-item" v-for="(item,key) in pageData.data">
					<img class="flexlist-img" :src="item.imgurl+'.100x100.jpg'">
					<div class="flexlist-flex-1">
						<div class="flexlist-title">{{item.title}}</div>
						<div class="flexlist-row">
							<div class="flexlist-price">
								￥ {{item.price}}
							</div>
						</div>
					</div>
					
				</router-link>
			</div>
			</mt-loadmore>	 
   
 			 
			 
		</div>
		
	</div>
	
</template>

<script>
	 
	var per_page=0;
	var isfirst=true;
	var catid=0;
	export default{
		 
		data(){
			return {
				pageLoad:false,
				loading:false,
				topStatus: '',
				catid:0,
				ajaxLoad:false,
				pageData:{}
			}
		},
		created:function(){
			this.getPage();
		},
		methods:{
			getPage:function(){
				var that=this;
				that.ajaxLoad=true;
				this.axios.get(this.$app.apiHost+"?m=product&ajax=1")
					.then(function(res){
						that.ajaxLoad=false;
						that.pageData=res.data.data;
						that.pageLoad=true;	
						isfirst=false;
						per_page=res.data.data.per_page;
				})
			},
			setCat:function(e){
				 
				this.catid=catid=e.target.dataset.catid;
				isfirst=true;
				per_page=0;
				this.ajaxLoad=true;
				this.getList();
			},
			getList:function(){
				if(per_page==0 && !isfirst) return false;
				var that=this;
				this.axios.get(this.$app.apiHost+"?m=product&ajax=1&per_page="+per_page,{
					params:{
						shop_cid:catid
					}
				})
					.then(function(res){
						that.ajaxLoad=false;
						console.log("loaded");
						per_page=res.data.data.per_page;
						
						
						if(isfirst){
							isfirst=false;
							that.pageData=res.data.data;
						}else{
							var pageData=res.data.data;
  							that.pageData.data=that.$app.json_add(that.pageData.data,pageData.data);
						}
						setTimeout(function(){
							that.loading=false;
						},1000);
						 
				})
			},
			goBack:function(){
				  this.$router.go(-1);
			},
		 

			handleTopChange:function(status) {
		        this.topStatus = status;
		    },
			loadTop:function(){
				this.getPage();
				console.log("刷新");
				this.$refs.loadmore.onTopLoaded();
			},
			loadBottom:function(){				
				if(isfirst || this.loading) return ;
				this.loading=true;
				this.getList();				
			}
		}
	}
</script>

 