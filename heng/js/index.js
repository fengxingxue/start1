var width = window.screen.width
var height =window.screen.height
var screen_width = width; //屏幕宽度
var contentDOM = document.getElementById('all');//最大那个层转换
var contentDOM1 = document.getElementById('all1');
window.onload=function(){

    if(width>height){
        screen_width = width; //如果 是竖屏，灵感的宽度就等于屏高
        contentDOM.style.width = width + 'px';
        contentDOM.style.height = (height-0) + 'px';
        contentDOM.style.top =  '0px';
        contentDOM.style.left = '0px';
        //contentDOM.style.transform = 'rotate(90deg)';

        contentDOM1.style.width = width + 'px';
        contentDOM1.style.height = (height-0)  + 'px';
        contentDOM1.style.top = '0px';
        contentDOM1.style.left =  '0px';

    }


    if (width < height) {
        screen_width = height; //如果 是竖屏，灵感的宽度就等于屏高
        contentDOM.style.width = height + 'px';
        contentDOM.style.height = (width) + 'px';
        contentDOM.style.top =  '0px';
        contentDOM.style.left = '0px';
        //contentDOM.style.transform = 'rotate(90deg)';

        contentDOM1.style.width = height + 'px';
        contentDOM1.style.height = (width)  + 'px';
        contentDOM1.style.top = '0px';
        contentDOM1.style.left =  '0px';
    }




    var jiabg=document.querySelector('#all1')
    if(document.querySelector('.auction')){
        var bighome=document.querySelector('.auction .table-body')
        var bao=document.querySelector('.bao')
        var recordleft=document.querySelector('.recordleft')
        var recordright=document.querySelector('.recordright')
        var recordbtn=document.querySelector('.recordbtn');
        var recordbtn1=document.querySelector('.recordbtn1');
        var auction=document.querySelector('.auction');
        bighome.style.height=Number(jiabg.offsetHeight-180)+'px';
        bao.style.height=Number(jiabg.offsetHeight-230)+'px';
        recordleft.style.height=Number(jiabg.offsetHeight-170)+'px';
        recordright.style.height=Number(jiabg.offsetHeight-170)+'px';
        recordbtn.style.height=Number(jiabg.offsetHeight-210)+'px';
        recordbtn1.style.height=Number(jiabg.offsetHeight-210)+'px';
        if(window.innerHeight==812||window.innerWidth==812){
            if(window.innerWidth==375 || window.innerHeight==375){
                auction.style.width='60%'
                auction.style.left='20%'
            }
        }
        if(window.innerWidth<411||window.innerHeight<411){
            bao.style.height=Number(jiabg.offsetHeight-180)+'px';
            bighome.style.height=Number(jiabg.offsetHeight-150)+'px';
            recordleft.style.height=Number(jiabg.offsetHeight-130)+'px';
            recordright.style.height=Number(jiabg.offsetHeight-130)+'px';
            recordbtn.style.height=Number(jiabg.offsetHeight-170)+'px';
            recordbtn1.style.height=Number(jiabg.offsetHeight-170)+'px';
        }
    }



    if(document.querySelector('.chong')){
        if(window.innerHeight<820&&window.innerHeight>750&&window.innerWidth==375|| window.innerHeight==375){
            document.querySelector('.chong').style.width='60%'
            document.querySelector('.chong').style.left='20%'
        }
    }
    if(document.querySelector('.diao')){
        if(window.innerHeight<820&&window.innerHeight>750&&window.innerWidth==375|| window.innerHeight==375){
            document.querySelector('.diao').style.width='60%'
            document.querySelector('.diao').style.left='20%'
        }
    }

    if(document.querySelector('.home')){
        if(window.innerHeight<820&&window.innerHeight>750&&window.innerWidth==375|| window.innerHeight==375){
            document.querySelector('.home').style.width='60%'
            document.querySelector('.home').style.left='20%'
        }
        var bighome=document.querySelector('.bighome')
        bighome.style.height=Number(jiabg.clientHeight-120)+'px';
    }



    if(document.querySelector('.king')){
        var tablebody=document.querySelector('.king .table-body')
        var kkright=document.querySelector('.kkright')
        var kinghome=document.querySelector('.kinghome')
        if(window.innerHeight==812||window.innerWidth==812){
            if(window.innerWidth==375 || window.innerHeight==375){
                document.querySelector('.king').style.width='60%'
                document.querySelector('.king').style.left='20%'
                tablebody.style.height=Number(jiabg.clientHeight-190)+'px';
                kkright.style.height=Number(jiabg.clientHeight-125)+'px';
                kinghome.style.height=Number(jiabg.clientHeight-200)+'px';
                $('.king .tishi').css('height','47%')
                document.querySelector('.king .tui').style.marginLeft='18%'
                document.querySelector('.king .tui').style.marginTop='-2px'
                document.querySelector('.king .sheng').style.marginTop='-2px'
            }
        } else if(window.innerHeight==667||window.innerWidth==667){
            if(window.innerWidth==375 || window.innerHeight==375){
                tablebody.style.height=Number(jiabg.clientHeight-190)+'px';
                kkright.style.height=Number(jiabg.clientHeight-125)+'px';
                kinghome.style.height=Number(jiabg.clientHeight-200)+'px';
                $('.king .tishi').css('height','47%')
                document.querySelector('.king .tui').style.marginLeft='18%'
                document.querySelector('.king .tui').style.marginTop='-2px'
                document.querySelector('.king .sheng').style.marginTop='-2px'
            }
        } else if(window.innerHeight<330||window.innerWidth<330){
                tablebody.style.height=Number(jiabg.clientHeight-160)+'px';
                kkright.style.height=Number(jiabg.clientHeight-110)+'px';
                kinghome.style.height=Number(jiabg.clientHeight-185)+'px';
                $('.king .tishi').css('height','47%')
                document.querySelector('.king .tui').style.marginLeft='13%'
                document.querySelector('.king .tui').style.marginTop='12px'
                document.querySelector('.king .sheng').style.marginTop='12px'

        }else{
            tablebody.style.height=Number(jiabg.clientHeight-220)+'px';
            kkright.style.height=Number(jiabg.clientHeight-160)+'px';
            kinghome.style.height=Number(jiabg.clientHeight-234)+'px';
        }

    }

    if(document.querySelector('.Indianaleft')){
        var Indianaright=document.querySelector('.Indianaright')
        var Indiana=document.querySelector('.Indiana')
        var duo=document.querySelectorAll('.duo')
        var Indianatop=document.querySelector('.Indianatop')
        Indianaright.style.height=Number(jiabg.offsetHeight-80)+'px';
        if(window.innerHeight==812||window.innerWidth==812){
            if(window.innerWidth==375 || window.innerHeight==375){
                Indiana.style.width='60%'
                Indiana.style.left='20%'
                for(var i=0;i<duo.length;i++){
                    duo[i].style.margin='2% 4px'
                }
                Indianatop.style.margin='12% 0'
            }
        }
        if(window.innerHeight<820&&window.innerHeight>750&&window.innerWidth==414|| window.innerHeight==414){
            for(var i=0;i<duo.length;i++){
                duo[i].style.margin='1% 4px'
            }
        }
    }

    if(document.querySelector('.Recharge')){
        var Recharge=document.querySelector('.Recharge')

        if(window.innerHeight==812||window.innerWidth==812){
            if(window.innerWidth==375 || window.innerHeight==375){
                Recharge.style.width='55%'
                Recharge.style.left='22.5%'
                $('.tibi label button').css('width','25%')
                $('.chongj').css('height','155px')
                $('.chongjz').css('height','110px')
                $('.tij').css('height','155px')
            }
        }

    }
    if(document.querySelector('.task')){
        var tasktop=document.querySelector('.tasktop')
        var taskbtn=document.querySelector('.taskbtn')
        tasktop.style.height=Number(jiabg.clientHeight-220)+'px';
        taskbtn.style.height=Number(jiabg.clientHeight-220)+'px';
        if(window.innerHeight<820&&window.innerHeight>750&&window.innerWidth==375|| window.innerHeight==375){
            document.querySelector('.task').style.width='60%'
            document.querySelector('.task').style.left='22.5%'
        }
        if(window.innerWidth<600){
            tasktop.style.height=Number(jiabg.clientHeight-190)+'px';
            taskbtn.style.height=Number(jiabg.clientHeight-190)+'px';
        }
    }



}

$('input').click(function() {
    contentDOM.style.height =Number(window.screen.height) + 'px';
    contentDOM1.style.height = Number(window.screen.heigh) + 'px';
});

















//判断手机重力和是否开启竖屏锁定

// function orientationHandler(event) {
//     var num=event.gamma.toFixed(6)
//     var reg = new RegExp("^-?[0-9]*.?[0-9]*$");
//     if ( reg.test(num) ) {
//         var absVal = Math.abs(num);
//         screen_width = height;
//         var contentDOM = document.getElementById('all');
//         var contentDOM1 = document.getElementById('all1');
//         var contentDOM2 = document.getElementById('all2');
//         if(num==absVal && num>10){
//             const evt = "onorientationchange" in window ? "orientationchange" : "resize"; //旋转事件
//             //window.addEventListener(evt, function () { //事件监听
//                 var contentDOM = document.getElementById('all');
//                 if (window.orientation) { //旋转到 90 或 -90 度，即竖屏到横屏
//                     screen_width = height; //横屏，灵感的宽度就等于屏高
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = '0px';
//                     contentDOM.style.left = '0px';
//                     contentDOM.style.transform = 'none'; //不旋转；
//                 }else{ //旋转到 180 或 0 度，即横屏到竖屏
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = (height - width) / 2 + 'px';
//                     contentDOM.style.left = 0 - (height - width) / 2 + 'px';
//                     contentDOM.style.transform = 'rotate(-90deg)';
//                     contentDOM.style.transition='.5s'
//
//                     contentDOM1.style.width = height + 'px';
//                     contentDOM1.style.height = width + 'px';
//                     contentDOM1.style.top = (height - width) / 2 + 'px';
//                     contentDOM1.style.left = 0 - (height - width) / 2 + 'px';
//
//
//                     contentDOM2.style.width = height + 'px';
//                     contentDOM2.style.height = width + 'px';
//                     contentDOM2.style.top = (height - width) / 2 + 'px';
//                     contentDOM2.style.left = 0 - (height - width) / 2 + 'px';
//                 }
//             //}, false);
//
//
//         }else if(num!=absVal && num<-10){
//             const evt = "onorientationchange" in window ? "orientationchange" : "resize"; //旋转事件
//             //window.addEventListener(evt, function () { //事件监听
//                 var contentDOM = document.getElementById('all');
//                 if (window.orientation) { //旋转到 90 或 -90 度，即竖屏到横屏
//                     screen_width = height; //横屏，灵感的宽度就等于屏高
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = '0px';
//                     contentDOM.style.left = '0px';
//                     contentDOM.style.transform = 'none'; //不旋转；
//                 }else{ //旋转到 180 或 0 度，即横屏到竖屏
//                     contentDOM.style.width = height + 'px';
//                     contentDOM.style.height = width + 'px';
//                     contentDOM.style.top = (height - width) / 2 + 'px';
//                     contentDOM.style.left = 0 - (height - width) / 2 + 'px';
//                     contentDOM.style.transform = 'rotate(90deg)';
//                     contentDOM.style.transition='.5s'
//
//                     contentDOM1.style.width = height + 'px';
//                     contentDOM1.style.height = width + 'px';
//                     contentDOM1.style.top = (height - width) / 2 + 'px';
//                     contentDOM1.style.left = 0 - (height - width) / 2 + 'px';
//
//
//                     contentDOM2.style.width = height + 'px';
//                     contentDOM2.style.height = width + 'px';
//                     contentDOM2.style.top = (height - width) / 2 + 'px';
//                     contentDOM2.style.left = 0 - (height - width) / 2 + 'px';
//                 }
//            // }, false);
//
//         }
//     }
// }
// if (window.DeviceOrientationEvent) {
//     window.addEventListener("deviceorientation", orientationHandler, false);
// }