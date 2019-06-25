    
    var table_wrapper=document.querySelector('#table-wrapper');
    var regionDiv=document.querySelector('#region-radio-wrapper');
    var productDiv=document.querySelector('#product-radio-wrapper');
    
    //监控checkbox变化
    regionDiv.addEventListener("change", changeTable);
    productDiv.addEventListener("change", changeTable);

    createCheckbox('region-radio-wrapper',regionArray);
    createCheckbox('product-radio-wrapper',productArray);
    createCheckbox('region-radio-wrapper',[{value:'all',text:'全选'}]);
    createCheckbox('product-radio-wrapper',[{value:'all',text:'全选'}]);
    changeTable();
    
    function changeTable(e) {
        if (e!=null){
            isLastOne(e);
        } 
        table_wrapper.innerHTML='';
        var table=document.createElement('table');
        table.border='1px solid';
        table_wrapper.appendChild(appendTable(table));
    }

    //如果当前选中的地区或产品是最后一个，则不允许改为未选中状态
    function isLastOne(e) {
        var thisInput=e.target;
        var id=thisInput.parentElement.id;
        var inputs=document.querySelectorAll("#" + id + " input");
        var uncheckNum=inputs.length;
        for (let i in inputs){
            if (inputs[i].checked === false){
                uncheckNum--;
            }
        } 
        if (uncheckNum === 0){
            thisInput.checked=true;
        } 
        ifAll(id,inputs);
    }

    //如果全选中则全选，有一个没选中则取消全选
    function ifAll(id, inputs) {
        var all = document.getElementById(id + 'all');
        var checked=0;
        for(let i in inputs){
            if (inputs[i].checked === true){
                checked++;
            } else if (inputs[i].id !== (id + 'all') ){
                all.checked === false;
            } 
        }
        if (all.checked === true){
            for (let i in inputs){inputs[i].checked === true; } 
        } else if ((checked === inputs.length-1) && all.checked === false){
            all.checked === true;
        } 
        
    }
    
    
    
    
