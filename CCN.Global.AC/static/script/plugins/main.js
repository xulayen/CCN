require.config({
    paths: {
        jquery: 'jquery-1.10.2.min',
        broswerutil:'BroswerUtil',
        nav:'nav',
        slick:'slick.min',
        common:'common',
        //slider:'Slider'
    },
    shim:{
    	nav:{
    		 deps:['jquery','slick'],  
              exports: 'nav'
    	},
    	slider:{
              deps:['jquery','broswerutil'],  
              exports: 'Slider'
    	},
    	common:{
    		deps:['jquery'],
    		exports:'common'
    	}
    }
    
})

require(['slider','nav','common','slick'], function(slider) {
	var slider1 = new slider();
	slider1.Init();
	$(window).resize(function () {
	    slider1.HanderIn();
	    slider1.HanderOut();
	})
	slider1.SliderCallBack(foo,'33');
});