
var scrollTriggerLarge = document.getElementById('header-collapse').scrollHeight;

var dimensionTrigger = 768;
var windowWidth = window.innerWidth;

console.log("ciao");
window.addEventListener('scroll', function(e) {
    console.log(window.innerWidth);
    if(windowWidth >= dimensionTrigger){
        if(document.documentElement.scrollTop > scrollTriggerLarge) {
            document.getElementById('fix-header').classList.remove('hidden');
            document.getElementById('fix-header').classList.add('show');
            console.log('entro');

        }
        if(document.documentElement.scrollTop < scrollTriggerLarge) {
            document.getElementById('fix-header').classList.remove('show');
            document.getElementById('fix-header').classList.add('hidden');
            console.log('entro2');

        }
    }else{

    }

});

window.addEventListener('resize', function(e) {
    windowWidth = window.innerWidth;
    if(windowWidth < dimensionTrigger){
        document.getElementById('fix-header').classList.remove('show');
        document.getElementById('fix-header').classList.add('hidden');
        console.log('entro3');
    }
});



