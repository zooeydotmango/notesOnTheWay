## CSS布局(CSS layout mode)
我们已经讨论过浮动，这里主要讨论定位，后面补充其他的布局。主要布局如下：
#### 正常布局流(basic document flow)
默认的布局模式。特征1：块状元素占行；特征2：行内元素从左往右水平分布显示。
#### 浮动(floats)
#### CSS表格
#### 定位(position)
四种主要定位类型：
- `static`：默认属性
- `relative`：设置了这个属性之后，通过left/right/top/bottom确定元素在文档流中偏移的位置。也常用于父元素来使子元素的定位生效。
- `absolute`：将元素从页面布局中移出，类似于单独放在一个图层里。它相对于最近的被定位的元素。  
  绝对定位的元素，在文档流中不占据空间，所以有时它能覆盖其他元素
- `fixed`：将元素相对于浏览器视口固定，而不是相对另一个元素。常用于滚动页面时不会移动的元素。
#### 补充：z-index
定位后的元素有可能覆盖其他元素，我们用z-index来改变堆叠顺序，默认定位的元素z-index都为auto，实际上为0。
较大的值会使元素高于其他元素。
- 只对定位元素有效
- 如果父元素z-index有效，那么子元素无论是否设置z-index或和父元素一致，都会在父元素上方。如果父元素z-index失效，那么定位子元素的z-index有效
- z-index相同：如果都没有设置z-index，一个有定位一个没有，定位元素在上面；如果都定位了或者都没定位，按文档顺序，后面覆盖前面。
#### 弹性盒子(flexbox)

#### 网格(Grid)

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