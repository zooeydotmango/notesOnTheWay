window.onload = function () {
    //Number
    let aBtn = document.getElementsByTagName('div')[1].getElementsByTagName('button');
    let numA = document.getElementById('num-a');
    let numB = document.getElementById('num-b');
    let p = document.getElementById('result');
    let aRadio = document.querySelectorAll('input[type="radio"][name="math-obj"]');
    numA.onclick = function () {
        aRadio[0].checked = true;
    };
    numB.onclick = function () {
        aRadio[1].checked = true;
    };
    for (let i = 0; i < aBtn.length; i++) {
        switch (i) {
            case 0:
                aBtn[i].onclick = function () {
                    for (let j = 0; j < aRadio.length; j++) {
                        if (aRadio[j].checked === true) {
                            if (!isNaN(aRadio[j].parentNode.nextSibling.value)) {
                                p.innerText = "当前输入的内容为数字。";
                            } else {
                                p.innerText = "请输入数字！";
                            }
                        }
                    }
                };
                break;
            case 1:
                aBtn[i].onclick = function () {
                    if (!isNaN(numA.value) && !isNaN(numB.value)) {
                        p.innerText = Math.round(numA.value * Math.pow(10, numB.value)) / Math.pow(10, numB.value);
                    }
                };
                break;
            case 2:
                aBtn[i].onclick = function () {
                    for (let j = 0; j < aRadio.length; j++) {
                        if (aRadio[j].checked === true) {
                            if (!isNaN(aRadio[j].parentNode.nextSibling.value)) {
                                p.innerText = "当前选中数字的绝对值为：" + Math.abs(aRadio[j].parentNode.nextSibling.value);
                            } else {
                                p.innerText = "请输入数字！";
                            }
                        }
                    }
                };
                break;
            case 3:
                aBtn[i].onclick = function () {
                    for (let j = 0; j < aRadio.length; j++) {
                        if (aRadio[j].checked === true) {
                            if (!isNaN(aRadio[j].parentNode.nextSibling.value)) {
                                p.innerText = "当前选中数字的上舍：" + Math.ceil(aRadio[j].parentNode.nextSibling.value);
                            } else {
                                p.innerText = "请输入数字！";
                            }
                        }
                    }
                };
                break;
            case 4:
                aBtn[i].onclick = function () {
                    for (let j = 0; j < aRadio.length; j++) {
                        if (aRadio[j].checked === true) {
                            if (!isNaN(aRadio[j].parentNode.nextSibling.value)) {
                                p.innerText = "当前选中数字的绝对值为：" + Math.floor(aRadio[j].parentNode.nextSibling.value);
                            } else {
                                p.innerText = "请输入数字！";
                            }
                        }
                    }
                };
                break;
            case 5:
                aBtn[i].onclick = function () {
                    for (let j = 0; j < aRadio.length; j++) {
                        if (aRadio[j].checked === true) {
                            if (!isNaN(aRadio[j].parentNode.nextSibling.value)) {
                                p.innerText = "当前选中数字的绝对值为：" + Math.round(aRadio[j].parentNode.nextSibling.value);
                            } else {
                                p.innerText = "请输入数字！";
                            }
                        }
                    }
                };
                break;
            case 6:
                aBtn[i].onclick = function () {
                    if (!isNaN(numA.value) && !isNaN(numB.value)) {
                        p.innerText = Math.max(numA.value, numB.value);
                    }
                };
                break;
            case 7:
                aBtn[i].onclick = function () {
                    if (!isNaN(numA.value) && !isNaN(numB.value)) {
                        p.innerText = Math.min(numA.value, numB.value);
                    }
                };
                break;
        }
    }

    //String
    let aRadioStr = document.querySelectorAll('input[type="radio"][name="str-obj"]');
    let aBtnStr = document.getElementsByTagName('div')[3].getElementsByTagName('button');
    let numAStr = document.getElementById('num-a-str');
    let numBStr = document.getElementById('num-b-str');
    let areaAStr = document.getElementById('str-a');
    let areaBStr = document.getElementById('str-b');
    let pStr = document.getElementById('result-str');
    areaAStr.onclick = function () {
        aRadioStr[0].checked = true;
    };
    areaBStr.onclick = function () {
        aRadioStr[1].checked = true;
    };
    for (let i = 0; i < aBtnStr.length; i++) {
        switch (i) {
            case 0:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.length;
                        }
                    }
                };
                break;
            case 1:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.split('')[2];
                        }
                    }
                };
                break;
            case 2:
                aBtnStr[i].onclick = function () {
                    pStr.innerText = areaAStr.value.concat(areaBStr.value);
                };
                break;
            case 3:
                aBtnStr[i].onclick = function () {
                    if (areaBStr.value && areaAStr.value) {
                        if (areaAStr.value.indexOf(areaBStr.value) !== -1) {
                            let a = areaAStr.value.indexOf(areaBStr.value);
                            a++;
                            pStr.innerText = "StringB在StringA中的位置：第" + a + "位";//直接+1会变成字符串相连，待解决
                        } else {
                            pStr.innerText = "StringB在StringA中找不到";
                        }
                    } else {
                        pStr.innerText = "请输入字符串";
                    }
                };
                break;
            case 4:
                aBtnStr[i].onclick = function () {
                    if (areaBStr.value && areaAStr.value) {
                        if (areaBStr.value.lastIndexOf(areaAStr.value) !== -1) {
                            let a = areaBStr.value.lastIndexOf(areaAStr.value);
                            a++;
                            pStr.innerText = "StringA在StringB中最后出现的位置：第" + a + "位";//数字
                        } else {
                            pStr.innerText = "StringA在StringB中找不到";
                        }
                    } else {
                        pStr.innerText = "请输入字符串";
                    }
                };
                break;
            case 5:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.slice(numAStr.value, numBStr.value);
                        }
                    }
                };
                break;
            case 6:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.rows;
                        }
                    }
                };
                break;
            case 7:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.substr(numAstr.value, numBStr.value);
                        }
                    }
                };
                break;
            case 8:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.toUpperCase();
                        }
                    }
                };
                break;
            case 9:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.toLowerCase();
                        }
                    }
                };
                break;
            case 10:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.toLowerCase();
                        }
                    }
                };
                break;
            case 11:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.replace(/\s/g, '');
                        }
                    }
                };
                break;
            case 12:
                aBtnStr[i].onclick = function () {
                    if (aRadioStr[0].checked === true) {
                        pStr.innerText = areaAStr.value.replace(/a/g, areaBStr.value);
                    } else if (aRadioStr[1].checked === true) {
                        pStr.innerText = areaBStr.value.replace(/a/g, areaAStr.value);
                    } else {
                        pStr.innerText = "请选择并输入";
                    }
                };
                break;


        }

    }

    /*
    实现一个字符串头尾去除空格的函数
    注意需要去除的空格，包括全角、半角空格
    暂时不需要学习和使用正则表达式的方式
    */
    function diyTrim(str) {
        let arr = str.split('');
        while (arr[0] == ' ' || arr[0] == '　') {
            arr.shift();
        }
        while (arr[arr.length - 1] == ' ' || arr[arr.length - 1] == '　') {
            arr.pop();
        }
        result = arr.join('');
        return result
    }

    // 测试用例
    console.log("测试用例：");
    console.log(diyTrim(' a f b    ')); // ->a f b
    console.log(diyTrim('    ffdaf    ')); // ->ffdaf
    console.log(diyTrim('1    ')); // ->1
    console.log(diyTrim('　　f')); // ->f
    console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
    console.log(diyTrim(' ')); // ->
    console.log(diyTrim('　')); // ->
    console.log(diyTrim('')); // ->

    /*
    去掉字符串str中，连续重复的地方
    */
    function removeRepetition(str) {
        let arr = str.split('');
        for (let i = 1; i < arr.length; i++) {
            while (arr[i] === arr[i - 1]) {
                arr.splice(i, 1);
            }
        }
        result = arr.join('');
        return result;
    }

    // 测试用例
    console.log("测试用例：");
    console.log(removeRepetition("aaa")); // ->a
    console.log(removeRepetition("abbba")); // ->aba
    console.log(removeRepetition("aabbaabb")); // ->abab
    console.log(removeRepetition("")); // ->
    console.log(removeRepetition("abc")); // ->abc


//Object
    let tree = {
        "id": 0,
        "name": "root",
        "left": {
            "id": 1,
            "name": "Simon",
            "left": {
                "id": 3,
                "name": "Carl",
                "left": {
                    "id": 7,
                    "name": "Lee",
                    "left": {
                        "id": 11,
                        "name": "Fate"
                    }
                },
                "right": {
                    "id": 8,
                    "name": "Annie",
                    "left": {
                        "id": 12,
                        "name": "Saber"
                    }
                }
            },
            "right": {
                "id": 4,
                "name": "Tony",
                "left": {
                    "id": 9,
                    "name": "Candy"
                }
            }
        },
        "right": {
            "id": 2,
            "name": "right",
            "left": {
                "id": 5,
                "name": "Carl",
            },
            "right": {
                "id": 6,
                "name": "Carl",
                "right": {
                    "id": 10,
                    "name": "Kai"
                }
            }
        }
    };

// 假设id和name均不会重复，根据输入name找到对应的id
    function findIdByName(name) {
        let find = function (obj) {
            if (!obj) {
                return;
            }
            if (obj.name === name) {
                return obj.id;
            }
            return find(obj.left) || find(obj.right);
        };
        return find(tree);
    }

    console.log("假设id和name均不会重复，根据输入name找到对应的id:");
    console.log("root", "id:", findIdByName("root"));
    console.log("Carl", "id:", findIdByName("Carl"));
    console.log("Kai", "id:", findIdByName("Kai"));


// 假设id和name均不会重复，根据输入id找到对应的name
    function findNameById(id) {
        let find = function (obj) {
            if (!obj) {
                return;
            }
            if (obj.id === id) {
                return obj.name;
            }
            return find(obj.left) || find(obj.right);
        };
        return find(tree);
    }

    console.log("假设id和name均不会重复，根据输入id找到对应的name:");
    console.log("id:0", ":", findNameById(0));
    console.log("id:11", ":", findNameById(11));
    console.log("id:10", ":", findNameById(10));

// 把这个对象中所有的名字以“前序遍历”的方式全部输出到console中
    function getListWithDLR() {
        //前序遍历，根节点，左子树，右子树
        let loopDLR = function (obj) {
            if (!obj) {
                return;
            }
            console.log(obj.name);
            loopDLR(obj.left);
            loopDLR(obj.right);
        };
        loopDLR(tree);
    }

// 把这个对象中所有的名字以“中序遍历”的方式全部输出到console中
    function getListWithLDR() {
        //中序遍历，左子树，根节点，右子树
        let loopLDR = function (obj) {
            if (!obj) {
                return;
            }
            loopLDR(obj.left);
            console.log(obj.name);
            loopLDR(obj.right);
        };
        loopLDR(tree);
    }

// 把这个对象中所有的名字以“后序遍历”的方式全部输出到console中
    function getListWithLRD() {
        //后序遍历，左子树，右子树，根节点
        let loopLRD = function (obj) {
            if (!obj) {
                return;
            }
            loopLRD(obj.right);
            console.log(obj.name);
            loopLRD(obj.left);
        };
        loopLRD(tree);
    }

    console.log("前序遍历：");
    getListWithDLR();
    console.log("中序遍历：");
    getListWithLDR();
    console.log("后序遍历：");
    getListWithLRD();

//Queue
    let queue = ["apple", "pear"];
    let queueInput = document.getElementById('queue-input');
    let queueCont = document.getElementById('queue-cont');
    let oSec5 = document.querySelector('.section5');

    oSec5.addEventListener('click', function (e) {
        e = e || window.event;
        let queueInputValue = queueInput.value;
        let target = e.target || e.srcElement;
        switch (target.id) {
            case 'in-btn':
                queue.push(queueInputValue);
                queueCont.innerText = `队列内容：${queue.join('->')}`;
                break;
            case 'out-btn':
                queue.shift();
                queueCont.innerText = `队列内容：${queue.join('->')}`;
                break;
            case 'font-btn':
                queueCont.innerText = `队头元素：${queue[0]}`;
                break;
            case 'empty-btn':
                queueCont.innerText = queue.length ? '队列非空' : '队列为空';
                break;
        }

    });

//Stack
    let stack = ["apple", "pear"];
    let stackInput = document.getElementById('stack-input');
    let stackCont = document.getElementById('stack-cont');
    let oSec6 = document.querySelector('.section6');

    oSec6.addEventListener('click', function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        let stackInputValue = stackInput.value;
        switch (target.id) {
            case 'push-btn':
                stack.push(stackInputValue);
                stackCont.innerText = `栈内容：${stack.join('->')}`;
                break;
            case 'pop-btn':
                stack.pop();
                stackCont.innerText = `栈内容：${stack.join('->')}`;
                break;
            case 'font-btn-stack':
                stackCont.innerText = `栈顶元素：${stack[stack.length - 1]}`;
                break;
            case 'empty-btn-stack':
                stackCont.innerText = stack.length ? '栈非空' : '栈为空';
                break;
        }
    });

//Stack2
    let stackInput2 = document.getElementById('stack-input2');
    let stackCont2 = document.getElementById('stack-cont2');
    let oSec7 = document.querySelector('.section7');

    oSec7.addEventListener('click', function (e) {
        e = e || window.event;
        let target = e.target || e.srcElement;
        let stackInputValue2 = stackInput2.value;
        switch (target.id) {
            case 'push-btn2':
                stack.unshift(stackInputValue2);
                stackCont2.innerText = `栈内容：${stack.join('<-')}`;
                break;
            case 'pop-btn2':
                stack.shift();
                stackCont2.innerText = `栈内容：${stack.join('<-')}`;
                break;
            case 'font-btn-stack2':
                stackCont2.innerText = `栈顶元素：${stack[0]}`;
                break;
            case 'empty-btn-stack2':
                stackCont2.innerText = stack.length ? '栈非空' : '栈为空';
                break;
        }
    });
    
    
//排序
    let arr1 = [43, 54, 4, -4, 84, 100, 58, 27, 140];
    let arr2 = ['apple', 'dog', 'cat', 'car', 'zoo', 'orange', 'airplane'];
    let arr3=[[10, 14], [16, 60], [7, 44], [26, 35], [22, 63]];
    let arr4=[
        {
            id: 1,
            name: 'candy',
            value: 40
        }, {
            id: 2,
            name: 'Simon',
            value: 50
        }, {
            id: 3,
            name: 'Tony',
            value: 45
        }, {
            id: 4,
            name: 'Annie',
            value: 60
        }
    ];
    console.log('\n\n排序 \n\n');
    console.log(`原数组：`);
    console.log(arr1);
    console.log(`arr1从小到大排序:${arr1.sort((a,b)=>a-b)}`);
    console.log(`arr1从大到小排序:${arr1.sort((a,b)=>b-a)}`);
    console.log(`原数组：`);
    console.log(arr2);
    console.log(`arr2从a-z排序：${arr2.sort()}`);
    console.log(`arr2从z-a排序：${arr2.sort((a,b)=>{
        if(a<b){
            return 1;
        }
        else if (a>b){
            return -1;
        }else return 0;
    })}`);
    console.log(`原数组：`);
    console.log(arr3);
    console.log(`arr3按照每个元素中第二个数从大到小的顺序进行排序：`);
    console.log(arr3.sort((a,b)=>b[1]-a[1]));
    console.log(`原数组：`);
    console.log(arr4);
    console.log(`arr4按元素对象的value值从小到大进行排序:`);
    console.log(arr4.sort((a,b)=>a.value-b.value));
    
    //转换
    //对象转换为数组
    let scoreObject = {
        "Tony": {
            "Math": 95,
            "English": 79,
            "Music": 68
        },
        "Simon": {
            "Math": 100,
            "English": 95,
            "Music": 98
        },
        "Annie": {
            "Math": 54,
            "English": 65,
            "Music": 88
        }
    };
    let scoreArr=[];
    for (x in scoreObject){
        let temp=[];
        temp.push(x);
        for (y in scoreObject[x]){
            temp.push(scoreObject[x][y]);
        } 
        scoreArr.push(temp);
    }
    console.log('\n\n转换 \n\n');
    console.log(`对象score：`);
    console.log(scoreObject);
    console.log(`转换成数组score：`);
    console.log(scoreArr);

    let menuArr = [
        [1, "Area1", -1],
        [2, "Area2", -1],
        [3, "Area1-1", 1],
        [4, "Area1-2", 1],
        [5, "Area2-1", 2],
        [6, "Area2-2", 2],
        [7, "Area1-2-3", 4],
        [8, "Area2-2-1", 6],
    ];
    let menuObject={};
    // menuObject

    menuArr.map((value)=>{
       let keyDad= value[2].toString();
       let keySelf=value[0].toString();
       //根据数组中的父级key查找父级
       let objDad=findObjDad(menuObject,keyDad);
       //如果没有找到父级就在根生成
        if (!objDad){
            menuObject[keySelf]={name:value[1]};
        }else {
            //有父级，父级下没有subMenu，生成subMenu
            if (!objDad.subMenu){
                objDad.subMenu={};
            } 
            objDad.subMenu[keySelf]={name:value[1]};
        }

    });
    function findObjDad(obj,key){
        let dad=null;
        for (x in obj){
            if (x ===key){
                //查找到有对应父级则生成
                if (!obj[x]){
                    obj[key]={};
                } 
                dad=obj[key];
                break;
            }else if(obj[x].subMenu){
                dad= findObjDad(obj[x].subMenu,key);
                if (dad){break;} 
            }
        } 
        return dad;
    }
    console.log(menuObject);
};