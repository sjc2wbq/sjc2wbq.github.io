function isMobile() { //现在只是声明了一个函数在这里，只有调用到它的时候它才会被执行。
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
      return true;
    }else{
      return false;
    }
}
