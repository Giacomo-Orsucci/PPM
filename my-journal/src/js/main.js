
var scrollTriggerLarge = document.getElementById('header-collapse').scrollHeight;
var scrollTriggerSmall = document.getElementById('mobile-header').scrollHeight;

var dimensionTrigger = 768;
var windowWidth = window.innerWidth;

window.addEventListener('scroll', function() {
    if(windowWidth >= dimensionTrigger){
        if(document.documentElement.scrollTop > scrollTriggerLarge) {
            document.getElementById('fix-header').classList.remove('hidden');
            document.getElementById('fix-header').classList.add('show');
        }
        if(document.documentElement.scrollTop < scrollTriggerLarge) {
            document.getElementById('fix-header').classList.remove('show');
            document.getElementById('fix-header').classList.add('hidden');
        }
    }else{
        if(document.documentElement.scrollTop > scrollTriggerSmall) {
            document.getElementById('mobile-scroll-header').classList.remove('hidden');
            document.getElementById('mobile-scroll-header').classList.add('show');
        }
        if(document.documentElement.scrollTop < scrollTriggerSmall) {
            document.getElementById('mobile-scroll-header').classList.remove('show');
            document.getElementById('mobile-scroll-header').classList.add('hidden');
        }
    }
});

window.addEventListener('resize', function() {
    windowWidth = window.innerWidth;
    if(windowWidth < dimensionTrigger){
        document.getElementById('fix-header').classList.remove('show');
        document.getElementById('fix-header').classList.add('hidden');
    }
    if(windowWidth > dimensionTrigger){
        document.getElementById('mobile-scroll-header').classList.remove('show');
        document.getElementById('mobile-scroll-header').classList.add('hidden');
    }
});



