---
layout: post
title:  "本地绑定两个域名-->html5跨文档消息通信准备工作"
categories: HTML5
tags:  HTML5
---

* content
{:toc}

##  html5跨文档消息通信

    之前是jsonp实现的跨域访问资源,html5要实现两个域名之间的通信,环境准备~~

  ### 准备工作

  需要apache服务器，本章这里使用集成环境的wamp,配置www.a.com  www.b.com


*  步骤一:
	
      1. wamp安装目录下找到httpd.conf配置文件

        D:\wamp\bin\apache\Apache2.2.21\conf\httpd.conf

	开启Virtual hosts，将下面inculue注释去掉即可

		Include conf/extra/httpd-vhosts.conf

      2 . 进行改变httpd-vhosts.conf绑定两个域名

       D:\wamp\bin\apache\Apache2.2.21\conf\extra\httpd-vhosts.conf

        <VirtualHost *:80>
    		ServerAdmin webmaster@dummy-host.example.com
    		DocumentRoot "D:/wamp/www/a" 
    		ServerName www.a.com  
    		ServerAlias www.dummy-host.example.com
    		ErrorLog "logs/dummy-host.example.com-error.log"
   		    CustomLog "logs/dummy-host.example.com-access.log" common
	     </VirtualHost>
        <VirtualHost *:80>
    		ServerAdmin webmaster@dummy-host.example.com
    		DocumentRoot "D:/wamp/www/b"  
    		ServerName www.b.com   
    		ServerAlias www.dummy-host.example.com
    		ErrorLog "logs/dummy-host.example.com-error.log"
   		  CustomLog "logs/dummy-host.example.com-access.log" common
	   </VirtualHost>
	   <Directory />     
		  Options FollowSymLinks     
		  AllowOverride None     
		  Order deny,allow     
		  allow from all   #设置无条件允许访问     
		  Satisfy all
	   </Directory>

    3.进行restart wamp

* 步骤二:

       本机host配置
       127.0.0.1 www.a.com
       127.0.0.1 www.b.com

   切换ip使用switchhost软件，可方便操作，不需要去找C.....host配置文件了。

   在Collections目录里列举一些常用的软件和插件，及下载链接，一直在用的。方便

	切换完成后，运行cmd   -----ping   www.a.com进行检测是否切换过来了。是否ping通。

* 步骤三:

       直接访问www.a.com   或  www.a.com 即可(里面各自放个不同的文件看下子，有没有正确)

