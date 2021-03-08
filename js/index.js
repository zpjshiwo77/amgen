$(document).ready(function () {

	//-----------------------------------------定义和初始化变量----------------------------------------
	var loadBox = $('aside.loadBox');
	var articleBox = $('article');
	var windowScale = window.innerWidth / 750;

	//----------------------------------------页面初始化----------------------------------------
	icom.init(init);//初始化
	icom.screenScrollUnable();//如果是一屏高度项目且在ios下，阻止屏幕默认滑动行为

	function init() {
		requestAnimationFrame(function () {
			if (os.screenProp < 0.54) articleBox.addClass("screen189");
			if (os.screenProp <= 0.64 && os.screenProp >= 0.54) articleBox.addClass("screen169");
			if (os.screenProp > 0.64) articleBox.addClass("screen159");
			if (os.ios) articleBox.addClass("screenIOS");
			load_handler();
		});
		wxUser.init();
	}//edn func


	//----------------------------------------加载页面图片----------------------------------------
	function load_handler() {
		var loader = new PxLoader();
		loader.addImage('images/share.jpg');
		loader.addImage('images/intro/11.jpg');
		loader.addImage('images/intro/12.jpg');
		loader.addImage('images/intro/21.jpg');
		loader.addImage('images/intro/22.jpg');
		loader.addImage('images/common/bgm_off.png');
		loader.addImage('images/common/bgm_on.png');
		loader.addImage('images/common/close.png');
		loader.addImage('images/common/turn_lock.png');
		loader.addImage('images/common/turn_no.png');
		loader.addImage('images/common/turn_phone.png');
		loader.addImage('images/common/turn_unlock.png');
		loader.addImage('images/common/turn_yes.png');
		loader.addImage('images/bg/bg.jpg');
		loader.addImage('images/bg/bg2.jpg');
		loader.addImage('images/bg/code.jpg');
		loader.addImage('images/bg/info1.jpg');
		loader.addImage('images/bg/info2.jpg');
		loader.addImage('images/bg/info3.jpg');
		loader.addImage('images/bg/info4.jpg');
		loader.addImage('images/bg/info5.jpg');
		loader.addImage('images/bg/title.jpg');

		loader.addCompletionListener(function () {
			icom.fadeIn(articleBox);
			pageInit();
			//			load_timer(50);//模拟加载进度
			loader = null;
		});
		loader.start();
	}//end func

	//模拟加载进度
	function load_timer(per) {
		per = per || 0;
		per += imath.randomRange(1, 3);
		per = per > 100 ? 100 : per;
		loadPer.html(per + '%');
		if (per == 100) setTimeout(pageInit, 200);
		else setTimeout(load_timer, 33, per);
	}//edn func

	//----------------------------------------页面逻辑代码----------------------------------------
	var indexBox = $('#indexBox');

	var indexScroll = new IScroll('#indexBox', {
		bounce: true,
		click: true,
	});

	/**
	 * 页面初始化
	 */
	function pageInit() {
		indexScroll.refresh();
		eventInit();
		// DevelopTest();
		monitor_handler();
	}//end func

	/**
	 * 开发测试使用
	 */
	function DevelopTest() {
		choseBox.hide();
		resultBox.show();

		resultScroll.refresh();
	}

	/**
	 * 事件初始化
	 */
	function eventInit() {
		$(".limitBtn").on("touchend", limitClick);

		$(".introBox").on("click",changeImg);
	}

	/**
	 * 修改图片
	 */
	function changeImg(){
		$(this).children().each(function(){
			var img = $(this);
			if(img.hasClass("hide")) img.removeClass("hide");
			else img.addClass("hide");
		})
	}

	/**
	 * 限制点击
	 */
	function limitClick() {
		$(".limitBtn").addClass('noPointer');
		setTimeout(function () { $(".limitBtn").removeClass('noPointer') }, 500);
	}//end func

	//----------------------------------------页面监测代码----------------------------------------
	function monitor_handler() {
		//		imonitor.add({obj:$('a.btnTest'),action:'touchstart',category:'default',label:'测试按钮'});
	}//end func
});//end ready
