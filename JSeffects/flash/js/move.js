function startMove(obj,attr,iTarget){
				clearInterval(obj.timer);
				
				obj.timer=setInterval(function(){
//问题之一: opacity的oaserInt后为0
					// var iCur = parseInt(getStyle(obj,attr));//替换obj.offsetWidth
					var iCur=0;
					if(attr=="opacity"){
						//外面又加一个parseInt是为了处理小数出现的问题
						iCur=parseInt(parseFloat(getStyle(obj,attr))*100);//因为下面ceil都是处理整数的，所有需要兼容一下*100
					}else{
						iCur = parseInt(getStyle(obj,attr));
					}
					var iSpeed=(iTarget-iCur)/8;//目标点-div的当前的宽
					iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);

					if(iCur==iTarget){//如果oDiv的可见宽=目标，则清除定时器
						clearInterval(obj.timer);
					}else{
						//问题之二: opacity=100px？？？
						if(attr=="opacity"){
							obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
							obj.style.opacity=(iCur+iSpeed)/100;

							//输出一下透明度
							// txt1.value=obj.style.opacity;
						}else{
							obj.style[attr]=iCur+iSpeed+'px';//设置div的宽为当前的宽+速度
						}
						
					}
				},30);
			}
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle( obj )[attr];
}