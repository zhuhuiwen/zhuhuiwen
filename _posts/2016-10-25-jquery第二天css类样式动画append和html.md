---
layout: post
title:  "jQuery第二天css样式选择器及常用方法和动画"
categories: jQuery
tags:  jQuery语法
---

* content
{:toc}

10/25/2016 8:40:33 AM

# 案例 #

## 手风琴 ##

1. 思路分析
	1. 页面结构
	-----------
		<ul class="parentWrap">
	   		 <li class="menuGroup">
				<span class="groupTitle">我的好友</span>
				<div>我的好友列表</div>
  			</li>
	</ul>

--------




	2. js思路分析

		<script>
	    	$(document).ready(function(){
	    		/*
	    		思路：
	    			1. 鼠标移到span上，对应的div进行显示
	    			2. 其他的div进行隐藏
	    		 */
	    		$(".list-group").click(function(){
	    			$(this).next("div").show();
	    			$(this).parent().siblings('li').children('div').hide();
	    		});
	    	});
    	</script>

1. 问题： 如何获取到当前元素的下一个元素

	1. $(this).next("div");
	2. 作用： 用来获取当前元素的下一个兄弟元素,如果下一个兄弟元素不是需要的元素，那么就获取不到元素（返回的是一个空的jQuery）

2. .parent() 用来获取指定元素的父元素
	1. `$(this).parent().siblings().children('div').hide();`

3. next 作用
	1. 用来获取指定元素后面紧挨着的一个元素
	2. 参数
		1. 如果参数没有传入，不管后面是什么元素都会被获取到
		2. 如果传入了参数，如果参数能够匹配到下一个元素，就会被获取到，
		3. 但是如果参数无法匹配下一个元素，就返回一个空的jQuery对象
			-  这个空的jQuery对象也可以使用jQuery中的方法，不会报错！

##  css 方法 ##

1. 作用：
	- 可以用来设置或者是获取指定的jQuery对象的样式属性
2. 参数
	- 如果是传入了两个参数：表示设置样式
	- 如果是传入了一个参数：表示获取
3. 注意：
	- 获取样式的时候，不管是行内样式还是通过css来设置的样式都能够获取到
    - 设置样式，是设置的行内样式
    - 设置样式：每次都是设置一个样式

4. 设置样式：一次设置多个样式
	1. 对象的属性可以带有引号，也可以没有
	2. 要么就都带有引号，要么就都不带引号
	
	          $("#wz").css({
    				"color": "yellow",
    				"background": "yellowgreen",
    				"height": "100px"
    			});
5. 获取样式: 只需要传入一个参数即可
	1. 注意：如果获取元素的时候，有多个元素，只会获取第一个元素的样式
	2. var fz = $("li").css("font-size");
			console.log(fz);
6. jQuery中的DOM操作的特点
	1. 获取操作：一般只会把<font color="red">第一个元素</font>的相应的属性获取到，如果没有，也会把当前属性的
	2. 默认值取出！设置操作：会设置获取到的所有元素
7. 注意
	- 规律： 参数少的时候表示获取，参数多的时候表示设置
8. 注意二：
	 - 加px之类的要加引号
	 - 不加引号的时候，不要写px
	
			$("div").css({
				// "font-size":"20px"
				   "font-size":30
			});

## 类样式操作 ##

1. .addClass()
	1. 作用：给匹配到的元素添加类
	2. `$("li").addClass("cloth")`

2. .removeClass()
	1.  作用：给匹配到的元素移除指定的类
	2.  `$("li").removeClass("cloth")`

3. .hasClass()
	1. 作用：用来判断指定的元素中有没有类
	2. 返回：是一个布尔值，如果存在类就返回：true，否则返回：false
	3. 注意：
		- 匹配到的元素中**只要有一个元**素包含了指定的类，返回值就是：true

4. .toggleClass()
	1. 作用：实现类的切换，如果有类，就移除；如果没有就添加
	2. 功能：实现场景的切换
		1. 如果有指定的类，就移除掉
		2. 如果没有指定的类，就添加
5. **场景切换案例**

	----
			//需求： 判断是否有cls类，如果有的话，进行移除
    			//如果没有的话，进行添加
    			$("#btn").click(function(){
    				/*var b = $("div").hasClass("cls");
    				if(b){
    					$("div").removeClass("cls");
    				}else{
    					$("div").addClass("cls");
    				}*/

    				$("div").toggleClass("cls");
    		});

	------

## jquery中的动画 ##

1. 通过JS中能够实现的动画效果，存在的共同点
	1. 样式属性：left / top / width / height / opacity
	2. 这些属性的值
		- 都是数值
		- 属性值只有一个（类比：background 有很多个属性）

10/25/2016 2:28:16 PM 
## jQuery动画 ##
### jQuery动画-显示和隐藏 ###
1. show() 方法
2. 作用
	- 改变的是：高度、宽度以及不透明度
3. 参数
	- 没有参数
		- 不传入参数，表示没有动画效果
		- $("div").show(); 
	- 一个参数
		- 传入数值参数，参数的单位是：毫秒 
			- $("div").show(2000);
			- 作用：让div在2秒钟之内展示出来
		- 传入字符串参数
			- $("div").show("slow");
			- fast: 200ms / normal: 400ms / slow: 600ms
	- 两个参数
		- 第一个参数表示：动画执行的时长
		- 第二个参数表示：动画执行完后，立即执行的回调函数
4. div的显示与隐藏案例
	
		/*
		 需求：点击显示按钮进行显示
		 	点击隐藏进行图片隐藏
		 */
		$("#btn1").click(function(){
				$("div").show(2000);			
		});
		$("#btn2").click(function(){
			    $("div").hide();
		});

### jquery淡入淡出 ###

1. fadeIn()淡入
	- 不传入参数也是有动画效果
	- 参数
		- 不传入参数：默认值为normal，400毫秒
		- $("div").fadeIn();
		- $("div").fadeIn("fast");
		- $("div").fadeIn(3000);
		- $("div").fadeIn(3000,function(){});
		
2. fadeOut()淡出
	- 参数
		- 不传参数表示normal
		- .....一样
3. div淡入淡出
  
		$("#btn1").click(function(){
			$("div").fadeIn();
		});
		$("#btn2").click(function(){
			$("div").fadeOut();
		})

## jquery滑入滑出 ##

1. 滑入
	1. slideDown()

2. 滑出
	1. slideUp()
3. div滑入滑出
	
		$("button:eq(0)").click(function(){
			$("div").slideDown();
		});
		$("button:eq(1)").click(function(){
			$("div").slideUp();
		})

## 各个动画的切换 ##

- toggle()展示和隐藏
	1. 实现 展示和隐藏切换效果
	2. 作用：判断是展示就隐藏
- fadeToggle()淡入淡出
	- fadeToggle()方法
	- 如果是展示就淡淡的隐藏掉(反之亦然)

- slideToggle()滑入滑出
	- slideToggle()
	- 如果是展示，就渐渐的隐藏(反之亦然)

- 案例
	
		$(document).ready(function(){
		/*
		显示与隐藏：可以直接使用toggle()
		淡入与淡出： fadeToggle()
		滑入与滑出:  slideToggle()
		 */
		$("#btn1").click(function(){
				$("div").toggle();
			});
	
			$("#btn2").click(function(){
				$("div").fadeToggle();
			});
	
			$("#btn3").click(function(){
				$("div").slideToggle();
			});
		});

## 不透明度fadeTo() ##


- 作用：用来改变匹配元素的不透明度的值
- 第一个参数：表示动画执行时长
- 第二个参数：表示 指定一个不透明度值
- 不透明度案例
	
		    $(document).ready(function(){
    			$("#btn1").click(function(){
    				$("div").fadeTo(1000,.3);
    			});
    		});

## 自定义动画animate() ##

1. 参数
	 - animate(params,[speed],[easing],[fn])
     - animate(执行动画的属性, 动画时长,回调函数)
2. 让div宽度、高度和透明度变化

		$(document).ready(function(){
			$("#btn1").click(function(){
				$("div").animate({
					"width":50,
					"height":50,
					"opacity":.3
				},3000,function(){
					alert("over");
				});
			});
		});

## 停止动画.stop() ##

1. 作用：用来停止jQuery动画
2. 要让哪个元素停止动画，就在哪个元素的后面调用stop()方法
3. 一般情况，stop()方法会和动画方法一起使用
4. 这时候，一般做法是：
     - 先调用stop()方法，在调用动画方法
5. <font color="red">不懂...这个stop()里面的参数的执行的效果</font>
## .hover()方法 ##
1. .hover() 作用：
	- 无论是鼠标进入还是鼠标离开都会执行这个方法
2. 如果传入两个参数（都是回调函数）
		- 第一个参数表示：mouseenter
		- 第二个参数表示：mouseleave
	- 案例
	
		$(".wrap>ul>li").hover(function(){
            $(this).children('ul').slideDown(1000);
        },function(){
            $(this).children('ul').slideUp(1000);
        });
3. 如果传入的是一个参数，那么不管是鼠标进入还是鼠标离开都会执行这个方法
	- **这边有stop的使用**
		
		$(".wrap>ul>li").hover(function(){
            /*在执行动画之前，进行先直接停止之前的动画，再进行切换自己的*/
            $(this).children('ul').stop().slideToggle();
        });

## 简单轮播图 ##

实现效果：
	鼠标移上去下面的标号，对应的图片进行显示。

	$(document).ready(function(){
        /*
        需求： 1.鼠标移到导航上，当前的进行显示；
            其他的进行移除current类样式
                2. 对应的图片的显示，根据下标进行取值获取
                    让ul的left值进行移动：图片的宽度*当前的下标值
         */
        var w = parseInt($(".slider").css("width"));
        console.log(w);
        $(".slider-nav").children('span').mouseenter(function(){
            $(this).addClass('current').siblings('span').removeClass('current');
            var index = $(this).index();
            $(".slider-main").animate({
                "left":-index*w
            });
        });
    }); 

![slider](https://ooo.0o0.ooo/2016/10/25/580f70ecb6c20.jpg)

## 追加元素.append() ##

1. 语法：$dv.append( $span );
2. 作用
	- 将span元素($span)追加到div($dv)元素中,会将 $span 追加到 $dv的最后一个子节点的后面

3. 注意
	-  会将页面中的元素先移除调用，然后在追加到新的位置去

4. .append()方法有三种参数
	1. jQuery对象
		- var $span = $("span");
		- 这种调用方式 append()方法的参数是：jQuery对象
		- $("div").append( $span );
	2. DOM对象
		- .append() 的参数是：DOM对象
		- var span1 = document.getElementsByTagName('span')[0];
		- $("div").append(span1);
	3. html格式的字符串		
		- .append() 的参数是：html格式的字符串
		- 会在方法的内部去创建标签，然后在追加到指定的元素中去
		- $("div").append("<p>这是p</p>");
5. 其他
	- $() 函数也可以接受 html格式的字符串，也会帮我们创建出元素
	- $p1 也是一个jQuery对象
	- var $p1 = $("<p>这是通过$函数创建的p元素</p>");
	- $("div").append($p1);
6. 代码案例
	1. 样式
	---
	    <button>追加元素</button>
	    <br>
	    <span>这是一个span元素</span>
	    <div>
	    	<h1>这是一个div元素</h1>
	    	这是文本元素
	    </div>
	---

	2. js代码
	---
		<script>
	    	$(document).ready(function(){
	    		$("button:eq(0)").click(function(){
	    			//第一种： 可以添加jQ对象的元素
	    			/*var $span = $("span");
		    		// console.log($span); jQ对象
		    		$("div").append($span);*/

		    		//第二种：可以添加dom元素
		    		/*var span = document.getElementsByTagName("span")[0];
		    		$("div").append(span);*/

		    		//第三种： 可以新增html格式的字符串
		    		//会在方法的内部去创建标签，然后在追加到指定的元素中去
		    		$("div").append("<span>新增的span元素</span>");
		    		//注意：
		    		//$() 函数也可以接受 html格式的字符串，也会帮我们创建出元素
		    		//$p1 也是一个jQuery对象
		    		var $p = $("<p>新增加的p标签</p>");
		    		$("div").append($p);
	    		});
	    	});
    	</script>
	----
7. 城市选择案例：使用append() 将左边的数据添加到右边等等

## .html()方法 ##

1. 作用：
	- 用来获取或者是设置html内容
2. 参数 
	- 没有参数表示：获取内容
	- 有参数表示：设置内容，如果原来已经存在内容，此时，会把原来的内容覆盖
3. 代码案例，进行设置和取值
	
	

		$("#btn1").click(function(){
			/*设置内容*/
			// $("div").html("设置html的内容");
			
			/*取值0*/
			//console.log($("div").html());//这是<span>div000</span>的内容
		});

## 动态创建表格 ##

-  用的append()的方法

		/*
        思路分析：   
        1.点击按钮，
        2.将数组生成数据，新建一个数组，
        3.最后转换到字符串的形式,添加到tbody里面
         */
            var  arr = [];
            $("#j_btnGetData").click(function(){
                for(var i=0;i<data.length;i++){
                        arr.push('<tr>'
                        +'<td>'+data[i].name+'</td>'
                        +'<td>'+data[i].url+'</td>'
                        +'<td>'+data[i].type+'</td>'
                        +'</tr>');
                    }
            var str = arr.join("");
            $("#j_tbData").append(str);
        });

10/26/2016 12:52:17 AM 
10/26/2016 10:47:29 AM 
补充：

案例：
 **tab栏切换**

		$(document).ready(function(){
	    	/*
	    	思路：
	    	鼠标移上去li的时候，进行当前的显示，其他的进行隐藏
	    	根据上面的index值，进行显示对应的main给其selected
	    	 */
	    	$(".tab-item").mouseenter(function(){
	    		$(this).addClass('active').siblings('li').removeClass('active');
	    		var index = $(this).index();
	    			 $(".main").eq(index).addClass('selected').siblings('div').removeClass('selected');
	    	});
	    });

## 动画版下拉菜单.hover()和.stop()的使用 ##

	<script>
        $(document).ready(function(){
            /*
            思路：
            鼠标移上去a的时候，当前的ul进行滑入滑出slideIn()
            其他的ul进行slideOut
             */
            /*$(".wrap>ul>li").mouseenter(function(){
                $(this).children('ul').stop().slideDown();
            });
            $(".wrap>ul>li").mouseleave(function(){
                $(this).children('ul').stop().slideUp();
            });*/

            $(".wrap>ul>li").hover(function(){
                $(this).children('ul').stop().slideToggle();
            });
        });
    </script>

布局

	<div class="wrap">
	    <ul>
	        <li>
	            <a href="javascript:void(0);">一级菜单1</a>
	            <ul>
	                <li><a href="javascript:void(0);">二级菜单1</a></li>
	                <li><a href="javascript:void(0);">二级菜单2</a></li>
	                <li><a href="javascript:void(0);">二级菜单3</a></li>
	            </ul>
	        </li>
	    </ul>
	</div>

10/26/2016 11:03:33 AM 