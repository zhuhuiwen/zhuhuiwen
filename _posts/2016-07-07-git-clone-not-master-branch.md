---
layout: post
title:  "Git 如何 clone 非 master 分支的代码"
categories: GitHub
tags:  Git GitHub 分支
---

* content
{:toc}

## 问题描述

我们每次使用命令

```
git clone git@gitlab.xxx.com:xxxxx.git
```

默认 clone 的是这个仓库的 master 分支。如果最新的代码不在 master 分支上，该如何拿到呢？如下图所示，最新的代码可能在`daily/1.4.1`分支上，我们希望拿到这个分支上的代码。




![7f07c8f6deef169ef6be5103bbd3e932f8676bb1.png](https://ooo.0o0.ooo/2016/07/07/577e349ab42ed.png)

## 解决方法

直接使用命令

```
git branch -r #查看远程分支
```
或

```
git branch -a #查看所有分支
```

会显示

```
origin/HEAD -> origin/master
origin/daily/1.2.2
origin/daily/1.3.0
origin/daily/1.4.1
origin/develop
origin/feature/daily-1.0.0
origin/master
```

然后直接

```
git checkout origin/daily/1.4.1
```