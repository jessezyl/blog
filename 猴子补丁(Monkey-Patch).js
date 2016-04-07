/** 
 *  猴子补丁(Monkey-Patch):在运行时动态修改对象属性。
 */

function monkey(){
    console.log("i am a monkey.");
}

var monkey_patch = monkey;
monkey = function(){
    monkey = monkey_patch;
    monkey();
    console.log("i eat banana!");
};

monkey();   //i am a monkey.
            //i eat banana!

monkey();   //i am monkey.


//end
