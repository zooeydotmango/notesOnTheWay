function drawBar(data) {
    let svg=document.createElementNS ('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('version','1.1');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('style','width:500px;height:300px;')
    let axisWidth=500;
    let axisHeight=300;
    let barData=data.map(function (e) {
        if (e.product ==='手机'&& e.region ==='华东'){
            return e.sale;
        }
    }).filter(e=>e);
    // svg.setAttribute('width',axisWidth);
    // svg.setAttribute('height',axisHeight);
    let columColor='black';
    //根据数据最大值计算柱的高度
    let max=Math.max(...barData[0]);
    let radio=max/axisHeight;
    let barHeight=barData[0].map(n=>n*radio);
    
    //插入xy轴
    let y=makeTag('line',{x1:0,y1:0,x2:0,y2:axisHeight,style:"stroke: black;stroke-width: 1px"});
    let x=makeTag('line',{x1:0,y1:axisHeight,x2:axisWidth,y2:axisHeight,style:"stroke: black;stroke-width: 1px"});
    svg.appendChild(x);
    svg.appendChild(y);
    //插入柱，需要柱间隔，柱宽高
    let f=10;
    for (let i in barHeight){
        svg.appendChild(makeTag('rect',{x:f,y:axisHeight-barHeight[i],width:20,height:barHeight[i],style:'fill:black;'}));
        f=f+30;
    } 
    return svg;
}
function makeTag(tag,attrs) {
    let element=document.createElementNS('http://www.w3.org/2000/svg',tag);
    for (let k in attrs){
        element.setAttribute(k,attrs[k]);
    } 
    return element;
}
function makeColumn(arr) {
    let gap;
}