var dt = document.querySelector('.dt');
var dd = document.querySelector('.dd');
var flag = 0
dt.onclick = function () {
    if (flag == 0) {
        dd.style.visibility = 'visible';
        flag = 1;
    } else {
        dd.style.visibility = 'hidden';
        flag = 0;
    }
}

// 注册页部分
var ipt = document.querySelector('input');
var span = document.querySelector('.message');

ipt.onblur = function() {
    if (ipt.value.length != 13) {
        span.className = 'wrong';
        span.innerText = '请确保输入13位数字电话号码';
    } else {
        span.className = 'right';
        span.innerHTML = '输入正确';
    }
}
// -------------------------------
var ipt1 = document.getElementsByTagName('input')[1];
var span1 = document.getElementsByTagName('span')[1];
ipt1.addEventListener('blur', function (e) {
    if (ipt1.value.length == 6) {
        if (e.keycode > 47 && e.keycode < 58) {
            span1.className = 'right';
            span1.innerHTML = '输入正确';
        } else {
            span.className = 'wrong';
            span.innerText = '请确保输入6位数字验证码';
        }
    } else {
        span.className = 'wrong';
        span.innerText = '请确保输入6位数字验证码';
    }
})

// ---------------------------------------
var ipt2 = document.getElementsByTagName('input')[2];
var span2 = document.getElementsByTagName('span')[2];

ipt2.onkeyup = function () {
    if (ipt2.value.length < 6 || ipt2.value.length > 13) {
        span2.className = 'wrong';
        span2.innerHTML = '请确保输入6~13位数字或字母及组合';
    } else {
        span2.className = 'right';
        span2.innerHTML = '输入正确';
    }
}

var ipt3 = document.getElementsByTagName('input')[3];
var span3 = document.getElementsByTagName('span')[3];
ipt3.onblur = function () {
    if (ipt2.value === ipt3.value) {
        span2.className = 'right';
        span2.innerHTML = '输入正确，完成';   
    } else {
        span2.className = 'wrong';
        span2.innerHTML = '请确保输入密码一致';
    }
}