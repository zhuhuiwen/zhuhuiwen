---
layout: post
title:  "JavaScript基础回顾2"
categories: JavaScript
tags:  JavaScript
---

## Math对象 ##
- Math.ceil(x) 对数字进行向上舍入[天花板函数]
	- 注意:  
		- 该放大返回的一个整数
		- 返回的数字是大于当前数字，最接近的一个整数
		- 例子
			- 鸡蛋需要篮子数量使用向上取整




- Math.floor(x) 对数字进行向下舍入[地板函数]
	- 注意
		- 返回小于当前数字并且最接近的一份整数
- Math.max(x,y,z) 返回一个最大值
- Math.min(x,y)返回一个最小值 
- Math.pow(x,y)  返回x值的y次方
- Math.random()  返回大于0 小于1之间的随机数
	- 注意
		- 返回的是一个大于0，小于1的数字
- Math.round() 返回一个四舍五入值
	- 	注意： 该方法返回的结果是一个整数。
- Math.abs(x)   返回一个值的绝对值

##数据类型转化##

### 隐式类型转换 ###

- 变量在参与运算的过程中发生的数据类型的转换

### 强制类型转换 ###

	- 使用对应的函数进行转化
	- 方法
		- 将数字类型转换为字符串类型
		- 将字符串转换为数字类型
		- 将其他数据类型转换为布尔类型

### 将数字类型转换为字符串类型 ###

- String() `n1=String(n1)`
- .toString() `n1.toString`

###将字符串转换为数字类型###

- Number(值)
	- 特点： 通过方该法，可以将字符串转换为数字，保留原来变量值的内容(如果是小数，结果还是小数)
- parseInt(值)
	- 通过该方法，可以将字符串转换为数字，但是转换后只能保留整数部分。
	- 如果在一个数字后加上字母，可以转换成功。(因为只会保留整数部分...)
	- parseInt 可以将非数字的字符串转换为数字，保留整数部分
		- `var  s1=parseInt("123abc"); alert(s1);//123`
	
- parseFloat（值）
	- 通过该方法可以将字符串转换成字符串类型，得到的值也会保留原来只的内容

###将其他数据类型转化为布尔类型###

-  Boolean(变量)
	-  注意
		-  除0，NaN，undefiend以外的所有数据都转换为布尔类型的true
		-  0 NaN，undefiend 可以转换为false
		-  一般情况下，通过数据类型转化后，数字1代表true
			   数字0代表false
		- 将布尔类型转化为数字只能通过Number()将布尔类型转换成数字类型
- 可以通过Number()类型

###逻辑运算符###

- 或   || 条件满足一个
	- 只要有一个为true,通过或运算后的结果为true
	- 只有结果都为false,,通过或运算后结果为false
- 与  && 条件必须同时满足
	- 只要有一个结果为false ,最后的结果都为false
	- 只有条件同时为true,结果才为true
- 非  ! 取反面
-  注意
	- 通过三个运算符链接的是两个布尔类型的表达式

###等号运算符###

- =   赋值运算符
- ==  判断是否相等
		- 只考虑内容是否相等，不管数据类型
- === 判断是否相等
		- 同时判断内容和数据类型  
- !=   不等于
	    -  判断内容不相等
- !==  不等于
		- 判断数据类型和内容

### 逗号运算度 ###

- 通过逗号运算符可以一次定义多个变量


## 条件判断 ##

    if（条件表达式）{
		    代码1；
		 }else{
			  代码2；
		 }
-  执行顺序：
	-  如果条件满足（true），程序只执行if中的代码语句
	-  如果条件不满足（false）,程序只执行else中的代码

----------
## 代码调试 ##

- 先运行程序到结束
- F12===>
- 设置断点，调试程序
- 在查看变量的鼠标选中或是watch可以查看

### 条件判断嵌套 ###

 `if(条件表达式){`
		  代码1；
		 }else if(条件表达式){
		   代码2;
  ` }else if(条件表达式){`
		   代码3;
		 }else{
		   代码4;
		 }

### 三元运算符 ###

- 条件表达式?  为true执行代码1 : 执行代码2；
- 执行顺序:
	- 如果条件表达式为true,执行冒号前面的代码，否则执行冒号后面的代码。