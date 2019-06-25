function createCheckbox(str,arr) {
    var div=document.querySelector("#"+str);
    for (let i in arr){
        div.appendChild(makeCheckbox(str,arr[i]));
        div.appendChild(makeLabel(arr[i]));
    }
    
}
function makeCheckbox(str,obj) {
    var checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.value=obj.value;
    if (checkbox.value === 'all'){
        checkbox.id = str +'all';
        var span=document.createElement('span');
        span.appendChild(checkbox);
        return span;
    } 
    checkbox.defaultChecked=true;
    return checkbox
}
function makeLabel(obj) {
    var label=document.createElement('label');
    label.innerText=obj.text;
    return label;
}

