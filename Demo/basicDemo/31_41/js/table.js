function appendTable(obj) {
    var selectData=filterSourceData();
    
    //获取selected的地区和产品
    var selectRegionArr=selectData.reduce(function (init,current) {
        if (init.length ===0 || init.indexOf(current.region)===-1){
            init.push(current.region);
        } 
        return init;
    },[]);
    var selectProductArr=selectData.reduce(function (init,current) {
        if (init.length ===0 || init.indexOf(current.product) === -1){
            init.push(current.product);
        } 
        return init;
    },[]);
    
    //创建第一行单元格
    var tbody=document.createElement('tbody');
    obj.appendChild(tbody);
    tbody.insertRow(0);
    
    for (var i=0;i<14;i++){
        tbody.rows[0].insertCell(i);
        if (i>1){
            
            tbody.rows[0].cells[i].appendChild(document.createTextNode(i-1+'月'));
        } 
    }
    //如果只有一个地区，多个产品，第一例是地区，第二列是产品
    //如果有多个地区，不管有几个产品，第一列都是产品
    if (selectRegionArr.length ===1 && selectProductArr.length >1){
        tbody.rows[0].cells[0].appendChild(document.createTextNode('地区'));
        tbody.rows[0].cells[1].appendChild(document.createTextNode('产品'));
        for (var i=0;i<selectData.length;i++){
            tbody.insertRow(i+1);
            for (var j=0;j<14;j++){
                tbody.rows[i+1].insertCell(j);
                if (j===0){
                    tbody.rows[i+1].cells[j].appendChild(document.createTextNode(selectData[i].region));
                } else if (j===1){
                    tbody.rows[i+1].cells[j].appendChild(document.createTextNode(selectData[i].product));
                } else
                    tbody.rows[i+1].cells[j].appendChild(document.createTextNode(selectData[i].sale[j-2]));
            } 
        } 
    } else {
        tbody.rows[0].cells[0].appendChild(document.createTextNode('产品'));
        tbody.rows[0].cells[1].appendChild(document.createTextNode('地区'));
        for (var i=0;i<selectData.length;i++){
            tbody.insertRow(i+1);
            for (var j=0;j<14;j++){
                tbody.rows[i+1].insertCell(j);
                if (j===0){
                    tbody.rows[i+1].cells[j].appendChild(document.createTextNode(selectData[i].product));
                } else if (j===1){
                    tbody.rows[i+1].cells[j].appendChild(document.createTextNode(selectData[i].region));
                } else
                    tbody.rows[i+1].cells[j].appendChild(document.createTextNode(selectData[i].sale[j-2]));
            }
        }
    }
    mergeCell(obj,0,0,0);
    return obj;
}

//根据selected筛选数据
function filterSourceData() {
    var regionInputs=document.querySelectorAll('#region-radio-wrapper input');
    var productInputs=document.querySelectorAll('#product-radio-wrapper input');
    var regionSelectArr=[];
    for (let i in regionInputs){
        if (regionInputs[i].checked){
            regionSelectArr.push(regionInputs[i].nextSibling.innerHTML);
        }
    }
    var productSelectArr=[];
    for (let i in productInputs){
        if (productInputs[i].checked){
            productSelectArr.push(productInputs[i].nextSibling.innerHTML);
        }
    }
    var result = sourceData.filter(function (e) {
        if (regionSelectArr.includes(e.region)&&productSelectArr.includes(e.product)){
            return e;
        }
    });
    console.log(result);
    return result;
}

//合并第一列的相同的单元格
function mergeCell(obj, startRow, endRow, col) {
    var tb = obj;
    if(!tb || !tb.rows || tb.rows.length <= 0) {
        return;
    }
    if(col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) {
        return;
    }
    if(endRow == 0) {
        endRow = tb.rows.length - 1;
    }
    for(var i = startRow; i < endRow; i++) {
        if(tb.rows[startRow].cells[col].innerHTML == tb.rows[i + 1].cells[col].innerHTML) { //如果相等就合并单元格,合并之后跳过下一行
            tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col]);
            tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1;
        } else {
            mergeCell(obj, i + 1, endRow, col);
            break;
        }
    }
}