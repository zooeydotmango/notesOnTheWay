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
    //根据数据最大值计算柱的高度
    let radio=axisHeight/Math.max(...barData[0]);
    let barHeight=barData[0].map(n=>n*radio);
    
    //插入xy轴
    let y=makeTag('line',{x1:0,y1:0,x2:0,y2:axisHeight,style:"stroke: black;stroke-width: 2px"});
    let x=makeTag('line',{x1:0,y1:axisHeight,x2:axisWidth,y2:axisHeight,style:"stroke: black;stroke-width: 2px"});
    svg.appendChild(x);
    svg.appendChild(y);
    //插入柱，需要柱间隔，柱宽高
    const barGap=0.3;
    let gap=axisWidth/barHeight.length*barGap;
    let barWidth=axisWidth/barHeight.length-gap;
    for (let i in barHeight){
        svg.appendChild(makeTag('rect',{x:gap,y:axisHeight-barHeight[i],width:barWidth,height:barHeight[i],style:'fill:black;'}));
        gap=gap+(axisWidth/barHeight.length);
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
