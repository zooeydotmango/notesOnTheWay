## CSS布局(CSS layout mode)
我们已经讨论过浮动，这里主要讨论定位，后面补充其他的布局。主要布局如下：

---
### 正常布局流(basic document flow)
默认的布局模式。特征1：块状元素占行；特征2：行内元素从左往右水平分布显示。

---
### 浮动(floats)

---
### CSS表格

---
### 定位(position)
四种主要定位类型：
- `static`：默认属性
- `relative`：设置了这个属性之后，通过left/right/top/bottom确定元素在文档流中偏移的位置。也常用于父元素来使子元素的定位生效。
- `absolute`：将元素从页面布局中移出，类似于单独放在一个图层里。它相对于最近的被定位的元素。  
  绝对定位的元素，在文档流中不占据空间，所以有时它能覆盖其他元素
- `fixed`：将元素相对于浏览器视口固定，而不是相对另一个元素。常用于滚动页面时不会移动的元素。
### 补充：z-index
定位后的元素有可能覆盖其他元素，我们用z-index来改变堆叠顺序，默认定位的元素z-index都为auto，实际上为0。
较大的值会使元素高于其他元素。
- 只对定位元素有效
- 如果父元素z-index有效，那么子元素无论是否设置z-index或和父元素一致，都会在父元素上方。如果父元素z-index失效，那么定位子元素的z-index有效
- z-index相同：如果都没有设置z-index，一个有定位一个没有，定位元素在上面；如果都定位了或者都没定位，按文档顺序，后面覆盖前面。

---
### 弹性盒子(flexbox)
flexbox能够方便灵活的实现floats和positioning难以实现的：
- 在父容器里面垂直居中一块内容
- 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用
- 使多列布局中的所有列采用相同的高度，即使他们包含的内容量不同
#### felx模型
在父容器中设置`display:flex;`，会对父容器按两个轴来布局：

![flex模型](https://developer.mozilla.org/files/3739/flex_terms.png)
- 主轴(main axis),通俗的来说是我们常用的xy轴中的x轴，但是这个轴可以是往不同方向的，父容器中的元素沿着这个轴放置。该轴的开始和结束被称为main start和main end
- 交叉轴(cross axis)，垂直于主轴的轴。该轴的开始和结束被称为cross start和cross end
- 设置`display:flex;`的父容器成为flex container
- 父容器中的flex盒子称为flex item
#### flex父容器的属性
##### `flex-direction`:`row`|`column`|`row-reverse`|`column-reverse`主轴的方向
##### `flex-wrap`:`nowrap`|`wrap`|`wrap-reverse`容器是否换行
##### `flex-flow`:flex-direction和flex-wrap的缩写，默认`row nowrap`
##### `justify-content`:对于主轴
- `flex-start`默认值，items处于x轴的开始处
- `flex-end`items处于x轴结尾
- `center`items沿x轴居中
- `space-between`items沿x轴平均分布，第一项在开端，最后一项在末端
- `space-around`items之间两个单位，items与端之间一个单位
- `space-evenly`items之间、items与端之间的距离都平等

![justify-content](https://cdn.css-tricks.com/wp-content/uploads/2013/04/justify-content-2.svg)
##### `align-items`:对于交叉轴
- `flex-start`items向y轴起点对齐
- `flex-end`items向y轴终点对齐
- `center`items沿着y轴居中
- `baseline`向y轴上的基线对齐
- `stretch`默认值，所有items和父容器的高度一样

![align-items](https://cdn.css-tricks.com/wp-content/uploads/2014/05/align-items.svg)
##### `align-content`:对于多行在交叉轴上的排列
- `stretch`默认值，items会拉伸填满父容器
- `flex-start`对齐y轴起点
- `flex-end`对齐y轴终点
- `center`沿y轴居中
- `space-around`列之间两个单位，与端之间一个单位
- `space-between`列之间、与端之间距离相等

![align-content](https://css-tricks.com/wp-content/uploads/2013/04/align-content.svg)
#### flex items属性
##### `order`默认为0，值为整数，可以是负数，，order可以通过设置数字改变顺序

![flex items - order](https://css-tricks.com/wp-content/uploads/2013/04/order-2.svg)
##### `flex-grow`
- 值为整数，不可以是负数，默认为0，0表示不会自己增长来填满父容器
- 设置为1表示，会尽可能拉伸来填满容器
- 如果items全部为1，均分，如果有一个设置为2，会占据两倍于其他的宽

![flex items - flex grow](https://css-tricks.com/wp-content/uploads/2014/05/flex-grow.svg)
##### `flex shrink`默认值为1，表示必要情况下会缩小
>更多grow和shrink的参考：[flex计算](https://www.w3cplus.com/css3/flexbox-adventures.html)
##### `flex-basis`
- 用于指定items的初始大小，在flex-grow和flex-shrink之前的大小，默认值auto
- 可取任何用于width属性的值：%|em|rem|px等，即使是0也需要单位

##### `flex`缩写：`flex-grow`、`flex-shrink`、`flex-basis`的缩写
- `flex:0 1 auto;`grow关闭shrink打开
- `flex:0 0 auto;`grow关闭shrink关闭，相当于`flex:none;`
- `flex:1 1 auto;`相当于`flex:auto;`
- `flex:正数 1 0;`相当于`flex:正数;`这个正数是当前item占据比例
##### `align-self` 和`align-content`类似，但只影响一个item
- 值：`auto`| `flex-start` | `flex-end` | `center` | `baseline` | `stretch`

![flex items - align-self](https://css-tricks.com/wp-content/uploads/2014/05/align-self.svg)
#### 绝对和相对flex items
假设同一个父容器下，一个item内容很多，另一个很少，在items的css设置`flex:auto`(相当于`flex:1 1 auto;`)，那么item的宽度就不等，这是相对items  
如果设置`flex:1;`(相当于`flex:1 1 0`)，两个item的宽度就会相等，这是绝对items  
绝对flex items的宽度只基于flex属性，相对flex items的宽度基于内容大小

#### 更多参考
[flex使用误区](https://medium.com/@ohansemmanuel/flexbox-is-awesome-but-its-not-welcome-here-a90601c292b6)  
[guide to flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
[everything you need to know about flexbox](https://www.w3cplus.com/css3/understanding-flexbox-everything-you-need-to-know.html)

---
### 网格(Grid)

### “display”属性
`display`是css中最重要的控制布局的属性。每个元素都有一个默认的display值，这与元素的类型有关。我们随时都可以重写这个值，比如把`li`修改成inline制作成水平菜单。
#### block
div就是一个标准的block（块级）元素。一个块级元素会新开始一行并尽可能撑满容器。其他常见块级容器包括`p`、`form`和HTML5的新元素：`header`、`footer`、`section`等
#### inline
`span`就是一个标准的inline（行内）元素。一个行内元素可以在段落中包裹一些文字而不会打乱段落的布局。`a`是最常用的行内元素。
#### none
另一个常用的display值是`none`。一些特殊元素的默认值是它，例如`script`。`display：none`常被JS用来在不删除元素的情况下隐藏或显示元素。
它和`visibility`不一样，设置`display：none`不会占据它本来应该显示的空间，`visibility：hidden`会占据空间。
#### 其他display值
还有其他有意思的display值，例如`list-item`和`table`，之后我们会讨论`inline-block`和`flex`。