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
            case 7:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.toUpperCase();
                        }
                    }
                };
                break;
            case 8:
                aBtnStr[i].onclick = function () {
                    for (let i = 0; i < aRadioStr.length; i++) {
                        if (aRadioStr[i].checked === true) {
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.toLowerCase();
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
                            pStr.innerText = aRadioStr[i].parentNode.nextSibling.nextSibling.value.replace(/\s/g, '');
                        }
                    }
                };
                break;
            case 11:
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
        let result = "";
        let arr= str.split('');
        while(arr[0] ==' '||arr[0]=='　'){
            arr.shift();
        }
        while (arr[arr.length-1] ==' '||arr[arr.length-1]=='　'){
            arr.pop();
        }
        result=arr.join('');
        return result
    }

// 测试用例
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
        let result = "";
        let arr=str.split('');
        for (let i=1;i<arr.length;i++){
            while(arr[i]===arr[i-1]){
                arr.splice(i,1);
            }
        }
        result=arr.join('');
        return result;
    }

// 测试用例
    console.log(removeRepetition("aaa")); // ->a
    console.log(removeRepetition("abbba")); // ->aba
    console.log(removeRepetition("aabbaabb")); // ->abab
    console.log(removeRepetition("")); // ->
    console.log(removeRepetition("abc")); // ->abc
};
