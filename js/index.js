//百度统计代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b317e59739625098d523322182eba4cf";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
//百度统计代码结束
/*<![CDATA[*/

function initCSS() {
  var cookie = readCookie("style");
  var title = cookie ? cookie : "default";
  setActiveStyle(title);
}

function setActiveStyle(title) {
  var j = document.getElementsByTagName("style");
  for(var i=1; i < j.length; i++) { // bypass the first (main) style
    j[i].disabled = true;
    if(j[i].getAttribute("title") == title) {
        j[i].disabled = false;
    }
  }
}

/* Only create a cookie when the link is clicked */
function setActiveStyleLink(title) {
  setActiveStyle(title)
  createCookie("style", title, 365);
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = initCSS();

/*]]>*/