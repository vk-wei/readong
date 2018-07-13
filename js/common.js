var includeLinkStyle = function (url) {
		 var link = document.createElement('link');
		 link.rel = 'stylesheet';
		 link.type = 'text/css';
		 link.href = url;
		 document.getElementsByTagName('head')[0].appendChild(link);
   };
   var browserRedirect = function () {
     /* 判断是pc端还是移动端 */
     var sUserAgent = navigator.userAgent.toLowerCase();
     var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
     var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
     var bIsMidp = sUserAgent.match(/midp/i) == "midp";
     var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
     var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
     var bIsAndroid = sUserAgent.match(/android/i) == "android";
     var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
     var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
     /* 根据不同的客户端引入样以及加载页面 */
     if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
       console.log("phone");
       /*includeLinkStyle("样式地址");*/
       includeLinkStyle("css/mobile.css");
       //$('body').load('mobile-index.html');
     } else {
       console.log("pc");
       includeLinkStyle("css/style.css");
       //$('body').load('pc-index.html');
     }
   };
	browserRedirect();