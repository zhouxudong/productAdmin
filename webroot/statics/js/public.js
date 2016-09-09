var Ztil = {
    runAnim: (selector,x,callback) => {
        $(selector).addClass(x + " animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',function(){
            $(this).removeClass(x + " animated")
            if(callback) callback();
        })
    }
}
export default Ztil;