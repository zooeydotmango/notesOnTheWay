    
    var table_wrapper=document.querySelector('#table-wrapper');
    var regionDiv=document.querySelector('#region-radio-wrapper');
    var productDiv=document.querySelector('#product-radio-wrapper');
    
    //监控checkbox变化
    regionDiv.addEventListener("change", changeTable);
    productDiv.addEventListener("change", changeTable);

    createCheckbox('region-radio-wrapper',regionArray);
    createCheckbox('product-radio-wrapper',productArray);
    changeTable();
    allSelected('region-radio-wrapper');
    allSelected('product-radio-wrapper');
    
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
        if (thisInput.parentNode.id){
            var id=thisInput.parentNode.id;
            //当前操作的不是全选框
        }else{
            var id=thisInput.parentNode.parentNode.id;
            //当前操作的框是全选框
        }
        let all = document.getElementById(id + 'all');
        let inputs=document.querySelectorAll("#" + id + ">input");
        let uncheckNum=inputs.length;
        for (let i in inputs){
            if (inputs[i].checked === false){
                uncheckNum--;
                all.checked = false;
            }
        } 
        if (uncheckNum === 0){
            thisInput.checked=true;
        }else if (uncheckNum === inputs.length){
            all.checked = true;
        } 
        
    }

    // //如果全选中则全选
    function allSelected(id) {
        let all=document.querySelector('#' + id +'all');
        all.addEventListener('change',function () {
            if (all.checked === true){
                let inputs=document.querySelectorAll('#' + id + '>input');
                for (let i in inputs){
                    inputs[i].checked = true;
                } 
            } 
        })
    }
    
    
    
    
