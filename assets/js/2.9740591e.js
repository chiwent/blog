(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{76:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"简单的图像处理-matlab版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单的图像处理-matlab版","aria-hidden":"true"}},[t._v("#")]),t._v(" 简单的图像处理-matlab版")]),a("h2",{attrs:{id:"查看图片的基本信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看图片的基本信息","aria-hidden":"true"}},[t._v("#")]),t._v(" 查看图片的基本信息")]),a("p",[t._v("使用到的工具箱函数有"),a("code",[t._v("imfinfo")]),t._v("，它会返回一连串的内容，有关图片的尺寸、图片类型等等。在使用的时候要注意，不能通过"),a("code",[t._v("imread")]),t._v("打开图片后直接调用它，调用它的时候需要传入文件名，而不是一个变量"),a("br"),t._v("\n在所有的返回信息中，有一个最近常用到的，就是色彩信息(BitDepth)，如果是普通的彩色图，返回的是"),a("code",[t._v("unit24")]),t._v("，如果是灰度图，返回的是"),a("code",[t._v("unit8")]),a("br"),t._v("\n当然，检验图片是否是灰度图不仅是这种方法（事实上，也不推荐使用这个函数来判断是否为灰度图）"),a("br")]),a("h3",{attrs:{id:"判断一张图片是否为灰度图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#判断一张图片是否为灰度图","aria-hidden":"true"}},[t._v("#")]),t._v(" 判断一张图片是否为灰度图")]),a("p",[t._v("可以根据用户的自己选择，有多个方法："),a("br")]),a("ul",[a("li",[a("p",[t._v("工具箱函数\n这里用到的工具箱函数有"),a("code",[t._v("isrgb(arg)")]),t._v("：假如arg是RGB图像就返回1；"),a("code",[t._v("isgray(arg)")]),t._v("：类似前面那个"),a("br")])]),a("li",[a("p",[t._v("直接判断imread返回的变量\n通过"),a("code",[t._v("imread")]),t._v("读取图后，会显示读取的图像的矩阵，如果是灰度图，那么就是"),a("code",[t._v("a*b")]),t._v("，彩色图是"),a("code",[t._v("a*b*3")]),a("br")])]),a("li",[a("p",[t._v("自定义方法")])])]),a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("rgb"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("imread")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("%读入图像")]),t._v("\nmysize"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("size")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("numel")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mysize"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n  A"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("rgb2gray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rgb"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("%将彩色图像转换为灰度图像")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\nA"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("rgb"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])]),a("p",[t._v("上述内容参考自：http://www.cnblogs.com/wxl845235800/p/7488482.html"),a("br")]),a("h2",{attrs:{id:"图片的基本处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片的基本处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片的基本处理")]),a("h4",{attrs:{id:"读取一张图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取一张图","aria-hidden":"true"}},[t._v("#")]),t._v(" 读取一张图")]),a("p",[a("code",[t._v("pic = imread('test.jpg')")]),a("br")]),a("h4",{attrs:{id:"彩色图转为灰度图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#彩色图转为灰度图","aria-hidden":"true"}},[t._v("#")]),t._v(" 彩色图转为灰度图")]),a("ul",[a("li",[a("p",[t._v("工具箱函数\n"),a("code",[t._v("gray = rgb2gray('test.jpg')")]),a("br")])]),a("li",[a("p",[t._v("自定义函数\n彩色图转灰度图有基本的公式："),a("code",[t._v("gray = R*0.299 + G*0.587 + B*0.114")]),t._v("，这也就是"),a("code",[t._v("rgb2gray")]),t._v("内部实现的算法。"),a("br")])])]),a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" gray"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("rgbtogray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("m"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("h"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("size")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" h "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n    gray "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\ngray "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("zeros")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("i")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("m\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("j")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v("n\n        "),a("span",{attrs:{class:"token function"}},[t._v("gray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("j")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.299")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("img")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("j")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.587")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("img")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("j")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0.114")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token function"}},[t._v("img")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("i")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("j")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\ngray "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("uint8")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gray"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])]),a("h4",{attrs:{id:"显示直方图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示直方图","aria-hidden":"true"}},[t._v("#")]),t._v(" 显示直方图")]),a("p",[a("code",[t._v("imhist(gray)")])]),a("h4",{attrs:{id:"直方图均衡化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直方图均衡化","aria-hidden":"true"}},[t._v("#")]),t._v(" 直方图均衡化")]),a("p",[a("code",[t._v("eqImage = histeq(gray)")]),a("br"),t._v("\n在这里说明一下直方图均衡化的概念"),a("br")]),a("p",[t._v("有一些图像的对比度不高，灰度分布不均匀，动态范围较低，这时，直方图均衡化可以使图像的灰度比较均衡，对比度能得到一定增强。\n"),a("br"),t._v("\n对于离散的灰度级来说，变换后的图像的灰度其实是变换前图像灰度的密度函数的累积和。这里灰度都预先归一化到范围[0-1]内。因为密度函数的累积和是一个递增的函数并且最后的值是1，所以变换前图像的灰度就被映射到[0,1]内，图像的灰度分布范围就被扩大了。"),a("br")]),a("ul",[a("li",[t._v("数学原理")])]),a("p",[a("img",{attrs:{src:"https://gitlab.com/simonid/imgWithoutBash/raw/master/imgProcess/%E7%9B%B4%E6%96%B9%E5%9B%BE%E5%9D%87%E8%A1%A1%E5%8C%96%E5%8E%9F%E7%90%86.png",alt:"直方图均衡化原理"}})]),a("p",[t._v("上图搬运自："),a("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_14d1511ee0102wwyt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("histeq从用法到原理——Matlab直方图均衡化函数")]),a("br")]),a("h2",{attrs:{id:"二值化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二值化","aria-hidden":"true"}},[t._v("#")]),t._v(" 二值化")]),a("h3",{attrs:{id:"阈值分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阈值分割","aria-hidden":"true"}},[t._v("#")]),t._v(" 阈值分割")]),a("p",[t._v("利用图像中要提取的目标区域与其背景在灰度特性上的差异，把图像看做具有不同灰度级的两类区域（目标区域和背景区域）的组合，选取一个比较合理的阈值，以确定图像中每个像素点应该属于目标区域还是背景区域，从而产生相应的二值图像（0/1或0/255）"),a("br")]),a("p",[t._v("一般地，我们将感兴趣的区域或目标成为前景(foreground)，在分割后的图像中常用白色表示，其他部分成为背景(background)，用黑色表示。图像分割也可以看做是一个二值化过程"),a("br")]),a("p",[t._v("二值化的相关函数："),a("code",[t._v("im2bw(gray,level)")]),a("br"),t._v("\n在做二值化之前，需要传递一个二值化的阈值参数"),a("code",[t._v("level")]),t._v("，对于这个变量"),a("code",[t._v("level")]),t._v("，我们可以通过很多方法来获取，有otsu、最大熵、迭代、自适应、手动迭代、基本全局阈值法。这里我们先介绍otsu算法。"),a("br")]),a("ul",[a("li",[t._v("otsu大津法")])]),a("p",[t._v("otsu的数学原理："),a("br"),t._v("\n阈值T将整幅图像分成前景和背景两部分，当两类的类间方差最大时，此时前景和背景的差别最大，二值化效果最好。因为方差是灰度分布均匀性的一种度量，当部分目标错分为背景或部分背景错分为目标都会导致两部分差别变小，因此使用类间方差最大的分割阈值意味着错分概率最小"),a("br")]),a("p",[t._v("otsu的局限性："),a("br"),t._v("\n它产生的是单一阈值，当物体目标与背景灰度差不明显时，会出现无法忍受的大块黑色区域，甚至丢失整幅图像的信息。\n"),a("br")]),a("p",[t._v("otsu算法有一个固定的公式，用户可以根据公式来实现一个自定义的函数。MATLAB工具箱内有一个自动生成阈值的otsu函数，即为"),a("code",[t._v("graythresh")]),t._v("："),a("code",[t._v("level=graythresh(gray)")]),t._v("。自动生成的阈值并不代表最优解，用户在二值化前选取阈值时，需要根据灰度直方图的波峰来判断最佳阈值。我们一般是去两个波峰之间的波谷作为阈值（im2bw要求传入的阈值是归一化的，所以在读直方图时需要将横坐标的值除以255）。假如有多个波谷，那么我们将多个波谷值作为阈值进行调试，直到测试到最佳的阈值"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("level "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("graythresh")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gray"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBW "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("im2bw")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gray"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("level"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("ul",[a("li",[t._v("局部自适应阈值分割")])]),a("p",[t._v("局部自适应阈值是根据中心像素领域内像素值分布来确定像素位置上的二值化阈值。每个像素的二值化阈值不是固定不变的，而是由周围邻域像素的分布来决定的。亮度较高的图像区域的二值化阈值通常会较高，而亮度较低的图像区域的二值化阈值则会相适应地变小。不同亮度、对比度的局部图像区域将拥有相对应的局部二值化阈值。\n"),a("br")]),a("p",[t._v("matlab的相关工具箱函数："),a("br"),a("code",[t._v("adaptthresh")]),t._v(":详细内容参考官方文档 - "),a("a",{attrs:{href:"https://ww2.mathworks.cn/help/images/ref/adaptthresh.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("adaptthresh")]),a("br")]),a("p",[a("code",[t._v("imbinarize")]),t._v("：详细内容参考官方文档 - "),a("a",{attrs:{href:"https://ww2.mathworks.cn/help/images/ref/imbinarize.html?requestedDomain=zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("imbinarize")]),a("br")]),a("p",[t._v("自己实现的一个局部自适应函数："),a("br")]),a("pre",{pre:!0,attrs:{class:"language-matlab"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("% adaptivethreshold.m")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("% from https://ww2.mathworks.cn/matlabcentral/fileexchange/8647-local-adaptive-thresholding")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" bw"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token function"}},[t._v("adaptivethreshold")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IM"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("ws"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("C"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tm"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nargin "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'You must provide the image IM, the window size ws, and C'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("elseif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nargin "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tm "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("elseif")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tm"),a("span",{attrs:{class:"token operator"}},[t._v("~=")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" tm"),a("span",{attrs:{class:"token operator"}},[t._v("~=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'tm must be 0 or 1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v(" \n\nIM "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("mat2gray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IM"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" tm "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n    mIM "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("imfilter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IM"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("fspecial")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'average'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ws"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'replicate'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" \n    mIM "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("medfilt2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("IM"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ws ws"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v(" \nsIM "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" mIM "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" IM "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" C"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbw "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("im2bw")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sIM"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbw "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("imcomplement")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bw"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("%main.m")]),t._v("\nimg1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("imread")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mg.jpg'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nimg2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("imread")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'mg.jpg'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbwimg1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("adaptivethreshold")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0.03")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("% 自己调参数")]),t._v("\nbwimg2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("adaptivethreshold")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("15")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0.02")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("subplot")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("221")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("imshow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'im1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("subplot")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("222")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("imshow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bwimg1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'bwimg1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("subplot")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("223")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("imshow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'img2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("subplot")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("224")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("imshow")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bwimg2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token function"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'bwimg2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("h2",{attrs:{id:"形态学"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#形态学","aria-hidden":"true"}},[t._v("#")]),t._v(" 形态学")]),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/tornadomeet/archive/2012/03/20/2408086.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("形态学图像处理")]),a("br"),a("a",{attrs:{href:"https://ww2.mathworks.cn/help/images/morphological-filtering.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("mathworks - 形态学处理中常用的工具箱函数")]),a("br")]),a("h4",{attrs:{id:"形态学处理的一些案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#形态学处理的一些案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 形态学处理的一些案例")]),a("p",[t._v("清除图片中的混杂：https://blogs.mathworks.com/steve/2007/12/07/cleaning-up-scanned-text/"),a("br"),t._v("\n取一张图片上的某些特征的文字：https://blogs.mathworks.com/steve/2008/07/14/opening-by-reconstruction/#  "),a("br")])])}],!1,null,null,null);s.default=r.exports}}]);