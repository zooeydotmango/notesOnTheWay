window.onload=function () {
        let aBtn=document.getElementsByTagName('div')[1].getElementsByTagName('button');
        let numA=document.getElementById('num-a');
        let numB=document.getElementById('num-b');
        let p=document.getElementById('result');
        let aRadio=document.querySelectorAll('input[type="radio"][name="math-obj"]');
        //Number
        numA.onclick=function(){
            aRadio[0].checked=true;
        };
        numB.onclick=function(){
            aRadio[1].checked=true;
        };
        aBtn[0].onclick=function () {
            for (let i=0;i<aRadio.length;i++){
                if (aRadio[i].checked === true){
                    if(!isNaN(aRadio[i].parentNode.nextSibling.value)){
                        p.innerText="当前输入的内容为数字。";
                    }else{
                        p.innerText="请输入数字！";
                    }
                }
            }
        };
        aBtn[1].onclick=function () {
            if (!isNaN(numA.value)&&!isNaN(numB.value)){
                p.innerText=Math.round(numA.value * Math.pow(10, numB.value))/Math.pow(10, numB.value);
            }
        };
        aBtn[2].onclick=function () {
            for (let i=0;i<aRadio.length;i++){
                if (aRadio[i].checked === true){
                    if (!isNaN(aRadio[i].parentNode.nextSibling.value)){
                        p.innerText="当前选中数字的绝对值为："+Math.abs(aRadio[i].parentNode.nextSibling.value);
                    }else{
                        p.innerText="请输入数字！";
                    }
                }
            }
        };
        aBtn[3].onclick=function () {
            for (let i=0;i<aRadio.length;i++){
                if (aRadio[i].checked === true){
                    if (!isNaN(aRadio[i].parentNode.nextSibling.value)){
                        p.innerText="当前选中数字的上舍："+Math.ceil(aRadio[i].parentNode.nextSibling.value);
                    }else{
                        p.innerText="请输入数字！";
                    }
                }
            }
        };
        aBtn[4].onclick=function () {
            for (let i=0;i<aRadio.length;i++){
                if (aRadio[i].checked === true){
                    if (!isNaN(aRadio[i].parentNode.nextSibling.value)){
                        p.innerText="当前选中数字的绝对值为："+Math.floor(aRadio[i].parentNode.nextSibling.value);
                    }else{
                        p.innerText="请输入数字！";
                    }
                }
            }
        };
        aBtn[5].onclick=function () {
            for (let i=0;i<aRadio.length;i++){
                if (aRadio[i].checked === true){
                    if (!isNaN(aRadio[i].parentNode.nextSibling.value)){
                        p.innerText="当前选中数字的绝对值为："+Math.round(aRadio[i].parentNode.nextSibling.value);
                    }else{
                        p.innerText="请输入数字！";
                    }
                }
            }
        };
        aBtn[6].onclick=function () {
            if (!isNaN(numA.value)&&!isNaN(numB.value)){
                p.innerText=Math.max(numA.value ,numB.value);
            }
        };
        aBtn[7].onclick=function () {
            if (!isNaN(numA.value)&&!isNaN(numB.value)){
                p.innerText=Math.min(numA.value ,numB.value);
            }
        };
        //Number重构
        // for (let i=0;i<aRadio.length;i++){
        //     if (aRadio[i].checked === true){
        //         if(!isNaN(aRadio[i].parentNode.nextSibling.value)){
        //             let curValue=aRadio[i].parentNode.nextSibling.value;
        //         }else{
        //             p.innerText="请输入数字！";
        //         }
        //     }
        // }
        //String
        let aRadioStr=document.querySelectorAll('input[type="radio"][name="str-obj"]');
        let aBtnStr=document.getElementsByTagName('div')[3].getElementsByTagName('button');
        let numAStr=document.getElementById('num-a-str');
        let numBStr=document.getElementById('num-b-str');
        let areaAStr=document.getElementById('str-a');
        let areaBStr=document.getElementById('str-b');
        let pStr=document.getElementById('result-str');
        areaAStr.onclick=function () {
            aRadioStr[0].checked=true;
        };
        areaBStr.onclick=function () {
            aRadioStr[1].checked=true;
        };
        for (let i=0;i<aBtnStr.length;i++){
            switch (i){
                case 0:
                    aBtnStr[i].onclick=function () {
                        for (let i=0;i<aRadioStr.length;i++){
                            if (aRadioStr[i].checked===true){
                                pStr.innerText= aRadioStr[i].parentNode.nextSibling.nextSibling.value.length;
                            }
                        }
                    };
                    break;
                case 1:
                    aBtnStr[i].onclick=function () {
                        for (let i=0;i<aRadioStr.length;i++){
                            if (aRadioStr[i].checked===true){
                                pStr.innerText= aRadioStr[i].parentNode.nextSibling.nextSibling.value.split('')[2];
                            }
                        }
                    };
                    break;
                case 2:
                    aBtnStr[i].onclick=function () {
                        pStr.innerText=areaAStr.value.concat(areaBStr.value);
                    };
                    break;
                case 3:
                    aBtnStr[i].onclick=function () {
                        if (areaBStr.value && areaAStr.value){
                            if (areaAStr.value.indexOf(areaBStr.value)!== -1){
                                console.log(typeof areaAStr.value.indexOf(areaBStr.value));
                                pStr.innerText="StringB在StringA中的位置：第"+ areaAStr.value.indexOf(areaBStr.value) + 10+"位";//数字
                            } else {
                                pStr.innerText="StringB在StringA中找不到";
                            }
                        } else {
                            pStr.innerText="请输入字符串";
                        }
                    };
                    break;
            }

        }

    }
