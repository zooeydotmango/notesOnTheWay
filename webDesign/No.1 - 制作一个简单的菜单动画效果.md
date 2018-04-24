<!-- 日期、学习用时、学习目标、是否达成 -->
2018.04.24|用时3H|css过渡元素|达成
---
<!-- 学的哪些比较透彻，说说自己的理解 -->
- transition过渡属性
本次demo把动画分成两个部分：   
先在p和span中都要加上transition的属性   

 "前端学院"的背景色过渡成蓝色：
 ```
 p.active{
          color: cornflowerblue;
      }
  ```  
 文字下的线条从中间延伸至两边：  
```
 p span{
        width: 0;
        left: 50%;
        }
 p.active span{
        width: 80%;
        left:10%;    /*宽度是80所以左边是(100-80)/2*/
        }
```
- span加背景做成线条
因为线条出现就是蓝色，因此事先设定背景是蓝色，给绝对位置以显示，线条高度，bottom为0

- Js实现css过渡
在onclick上绑定函数，当button被点击，给p加上active的类，当此类已存在，则把它删除
classList.toggle就完美符合我们的要求：  
```
    // 如果visible被设置则删除它，否则添加它
    div.classList.toggle("visible");
```
因此onclick中只需写op.classList.toggle('active');即可

---
<!-- 哪些了解了一些，还需要继续深入阅读 -->
- `classList`

`classList.add(class1, class2, ...)`如果指定的类名已存在，则不会添加  

`classList.contains(class)`	返回布尔值，判断指定的类名是否存在。  

`classList.item(index)`	返回类名在元素中的索引值。索引值从 0 开始。如果索引值在区间范围外则返回 null  

`classList.remove(class1, class2, ...)`	移除元素中一个或多个类名。  

`classList.toggle(class, true|false)`在元素中切换类名。  

    toggle第一个参数为要在元素中移除的类名，并返回 false。 
    如果该类名不存在则会在元素中添加类名，并返回 true。 

    第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。
    例如：移除一个 class: element.classList.toggle("classToRemove", false); 
               添加一个 class: element.classList.toggle("classToAdd", true);
               // 添加/删除 visible，取决于测试条件，i小于10
               div.classList.toggle("visible", i < 10);
               
---
<!-- 哪些学习了之后还有疑问，记录下问题，待解决 -->