/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

    /**
     * 内容JSON
     */
    var demoContent = [{
        demo_link: 'https://waxun.github.io/jd-index/',
        img_link: 'https://ooo.0o0.ooo/2016/08/16/57b32d762f916.png',
        code_link: 'https://github.com/waxun/jd-index',
        title: '京东首页',
        core_tech: 'HTML CSS',
        description: '仿照京东网站<a href ="http://www.jd.com/">http://www.jd.com/</a> 的活动主题页。'
    }, {
        demo_link: 'https://waxun.github.io/movement/Seamlessrolling.html',
        img_link: 'https://ooo.0o0.ooo/2016/08/16/57b33c11684d7.png',
        code_link: 'https://github.com/waxun/movement',
        title: 'Seamlessrolling',
        core_tech: 'JavaScript CSS',
        description: '无间隙滚动，可支持正反方向控制'
    }, {
        demo_link: 'https://waxun.github.io/movement/many-pic-show.html',
        img_link: 'https://ooo.0o0.ooo/2016/08/16/57b33776c156b.png',
        code_link: 'https://github.com/waxun/movement',
        title: 'many-pic-show',
        core_tech: 'HTML CSS JavaScript',
        description: '了解层级关系'
    }, {
        demo_link: '',
        img_link: 'https://ooo.0o0.ooo/2016/08/16/57b340407981b.png',
        code_link: 'https://github.com/waxun/Ajax',
        title: 'Ajax',
        core_tech: 'Ajax JavaScript',
        description: 'Ajax接口调用、数据处理、下拉加载下页数据'
    },{
        demo_link: 'https://waxun.github.io/html5/canvas/the-mouse-line.html',
        img_link: 'https://ooo.0o0.ooo/2016/08/17/57b476a2d7bb4.png',
        code_link: 'https://github.com/waxun/html5',
        title: 'HTML5',
        core_tech: 'HTML5 canvas',
        description: '初学canvas，做个鼠标划线的demo'
    }];

    contentInit(demoContent) //内容初始化
    waitImgsLoad() //等待图片加载，并执行布局初始化
}());



/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
    // var htmlArr = [];
    // for (var i = 0; i < content.length; i++) {
    //     htmlArr.push('<div class="grid-item">')
    //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
    //     htmlArr.push('<img src="'+content[i].img_link+'">')
    //     htmlArr.push('</a>')
    //     htmlArr.push('<h3 class="demo-title">')
    //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
    //     htmlArr.push('</h3>')
    //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
    //     htmlArr.push('<p>'+content[i].description)
    //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
    //     htmlArr.push('</p>')
    //     htmlArr.push('</div>')
    // }
    // var htmlStr = htmlArr.join('')
    var htmlStr = ''
    for (var i = 0; i < content.length; i++) {
        htmlStr +=
            '<div class="grid-item">' +
            '   <a class="a-img" href="' + content[i].demo_link + '">' +
            '       <img src="' + content[i].img_link + '">' +
            '   </a>' +
            '   <h3 class="demo-title">' +
            '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' +
            '   </h3>' +
            '   <p>主要技术：' + content[i].core_tech + '</p>' +
            '   <p>' + content[i].description +
            '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' +
            '   </p>' +
            '</div>'
    }
    var grid = document.querySelector('.grid')
    grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
    var imgs = document.querySelectorAll('.grid img')
    var totalImgs = imgs.length
    var count = 0
        //console.log(imgs)
    for (var i = 0; i < totalImgs; i++) {
        if (imgs[i].complete) {
            //console.log('complete');
            count++
        } else {
            imgs[i].onload = function() {
                // alert('onload')
                count++
                //console.log('onload' + count)
                if (count == totalImgs) {
                    //console.log('onload---bbbbbbbb')
                    initGrid()
                }
            }
        }
    }
    if (count == totalImgs) {
        //console.log('---bbbbbbbb')
        initGrid()
    }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
    var msnry = new Masonry('.grid', {
        // options
        itemSelector: '.grid-item',
        columnWidth: 250,
        isFitWidth: true,
        gutter: 20,
    })
}
