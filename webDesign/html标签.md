<!-- 日期、学习用时、学习目标、是否达成 -->
2018.04.25|用时3.5H|HTML标签|尚未达成
---

HTML头部
---
##### head
头部容器，以下头部标签都放在这里
##### title
必需，定义网页在浏览器工具栏、收藏、搜索引擎中结果的标题
##### base
为页面上所有链接规定默认地址或目标  
`<base href="xx">`|`<base target="_blank">`
##### link
文档于外部资源的关系，常用于连接样式表
##### style
##### script
##### meta
- name/http-equiv/charset
- name和content成对出现，定义页面的表述、关键字、文档作者、最后修改时间及其他元数据
- 标准名称(application-name,author,description,generator,keywords)

链接
---
##### 外部资源链接/超链接
指向用来组成当前文档的外部资源/用来导航到其他资源
##### link
- 元数据，必须包含rel及href属性  
例：`<link rel="author license" href="/about">`
- rel="stylesheet"  
链接到样式表(外部资源)
- rel="alternate"  
链接到当前文档的其他形式(超链接)
- rel="alternate stylesheet"  
链接到可切换的样式表(外部资源)
- rel="prev",rel="next"  
链接到文档的前一篇/后一篇/前一页/后一页(超链接)
- rel="icon"  
当前文档的favicon(外部资源)
##### a
- 存在href时为超链接  
(于link不同，a代表的超链接都是显式的)
- 缺少href时为链接占位符
- rel="prev",rel="next"  
链接到文档的前一篇/后一篇/前一页/后一页(超链接)
- rel="nofollow"  
当前文档的作者并不推荐链接指向的文档
##### area
- 总是嵌套于map标签中

sections区块
----------
##### article
- 独立的文档、页面、应用、站点
- 可以单独发布、重用
##### section
- 按主题将内容分组，通常会有标题(heading)，一般来说如果没有自然标题，不要使用 
##### nav
- 特殊的section，包含 __重要__ 的导航链接
##### aside
- 与周围内容关系不太密切的内容(eg.广告)
- 侧边栏内容、引述内容
##### h1-h6
##### header
- 一组介绍性描述或导航信息(目录/搜索框/logo...)
- 用来描述最近的父级区块
- 通常包含h1-h6
- __不影响__ 文档提纲的生成
##### footer
- 代表最近的父级区块内容的页脚
- 作者信息/相关文档/版权信息
- __不影响__ 文档提纲的生成
```
<footer><!-- site footer -->
  <nav>
    <p>
      <a href="/credits.html">Credits</a> —
      <a href="/tos.html">Terms of Service</a> —
      <a href="/index.html">Blog Index</a>
    </p>
  </nav>
  <p>Copyright © 2009 Gordon Freeman</p>
</footer>
```
##### address
- 代表最近父级article或整个文档关联的联系人信息  
```
<address>
  <a href="../People/Raggett/">Dave Raggett</a>,
  <a href="../People/Arnaud/">Arnaud Le Hors</a>,
  contact persons for the <a href="Activity">W3C HTML Activity</a>
</address>
```
#### 区块语义化标签的误用
- div>section>article,nav是特殊的包含重要导航链接的section
- 如果主要目的是调整样式或js操作，不要使用section而应该使用div
- [避免常见的六种html5错误用法](http://wlog.cn/html/avoiding-common-html5-mistakes.html)

分组
---