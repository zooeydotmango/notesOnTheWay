function createCheckbox(strId,arr) {
    var div=document.querySelector("#" + strId);
    for (let i in arr){
        div.appendChild(makeCheckbox(arr[i]));
        div.appendChild(makeLabel(arr[i]));
    }
    var span = document.createElement('span');
    span.appendChild(makeCheckbox({value:'all', id: strId +'all'}));
    span.appendChild(makeLabel({text:'全选'}));
    div.appendChild(span);
    return div;
}
function makeCheckbox(obj) {
    var checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.value=obj.value;
    checkbox.defaultChecked=true;
    if (obj.id){
        checkbox.id =obj.id ;
    } 
    return checkbox
}
function makeLabel(obj) {
    var label=document.createElement('label');
    label.innerText=obj.text;
    return label;
}

