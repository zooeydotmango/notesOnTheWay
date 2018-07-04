2018.07.04|用时|JS修改CSS|达成
---

1. obj.style.backgroundColor="black";直接设置style属性

2. obj.style.cssText = "display:block;color:white;";  
多次设置时可以用css累加：obj.style.cssText +="width:200px;";

3. obj.className="style2"; || obj.setAttribute("class","style2");

4. obj.setAttribute("href","css2.css");改变外联css文件，适合整体页面换肤