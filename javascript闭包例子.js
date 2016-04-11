/*
 * 本例有助于node.js异步事件和javascript闭包特性
 **/


function myApp(){
  var value1 = 0, value2 = 0, value3 = 0;
  for ( var i = 1; i <= 3; i++) {
    var i2 = i;
    (function() {                               //函数A
      var i3 = i;
      setTimeout(function() {                   //函数B
        value1 += i;
        value2 += i2;
        value3 += i3;
      }, 1);
    })();
  }
  setTimeout(function() {
    console.log(value1, value2, value3);
  }, 100);
}

myApp();      //输出value1，value2，value3：12，9，6

/*
此段程序可以这样理解：
1、匿名函数A的声明了i3变量，i值从1递增到3，3次调用函数A，
每次A都开辟新栈存入新的i3值，对应3次i3的值分别为1，2，3，
所以即使setTimeout延时回调，但每次i3都为新值，所以value3为1+2+3=6；

2、i2值在for循环里面声明，其作用域生命周期为for完成一次循环，
而函数B直接对i2进行闭包引用，函数B3次调用，value2引用的是同一个i2，
由于setTimeout延时回调，所以引用的是最后一个i2的值3，所以value2为3+3+3=9；

3、同2，value引用的是i的最后一个值，for循环完成后，i的值为4，所以value1为4+4+4=12；

以上。
*/
