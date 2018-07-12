<template>
  <div id="app">
     <transition :name="transitionName"> 
    <router-view class="child-view" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		transitionName: 'slide-left' 
  	}
  },
  watch: {
	  '$route' (to, from) {
	    const toDepth = to.path.split('/').length
	    const fromDepth = from.path.split('/').length
	    if(to.path=="/"){
	    	this.transitionName =  'slide-right'
	    }else{
	    	this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
	    }
	    
	  }
	}
}
</script>
<style scoped>
	.child-view {
 position: absolute;
 width:100%;
 transition: all .8s cubic-bezier(.55,0,.1,1);
}
	.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}
</style>

 