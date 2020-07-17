var controller = new ScrollMagic.Controller();


var storm1 = new TweenMax.to('#Storm1', 5, {x:2000});
var storm3 = new TweenMax.to('#Storm3', 5, {x:2000});
var storm5 = new TweenMax.to('#Storm5', 5, {x:2000});
var storm2 = new TweenMax.to('#Storm2', 5, {x:2000});
var storm13 = new TweenMax.to('#Storm13', 5, {x:2000});
var storm12 = new TweenMax.to('#Storm12', 5, {x:2000});
var storm4 = new TweenMax.to('#Storm4', 5, {x:-2000});
var storm10 = new TweenMax.to('#Storm10', 5, {x:-2000});
var storm6 = new TweenMax.to('#Storm6', 5, {x:-2000});
var storm7 = new TweenMax.to('#Storm7', 5, {x:-2000});
var storm8 = new TweenMax.to('#Storm8', 5, {x:-2000});
var storm9 = new TweenMax.to('#Storm9', 5, {x:-2000});
var storm11 = new TweenMax.to('#Storm11', 5, {x:-2000});







var plane = new TweenMax.to('#Plane', 4, {x:-2250, y:-700, z:-800}, "1");
var cloud1 = new TweenMax.to('#Cloud1', 3, {x:100});
var cloud2 = new TweenMax.to('#Cloud2', 4, {x:100});
var cloud3 = new TweenMax.to('#Cloud3', 3, {x:100});
var cloud4 = new TweenMax.to('#Cloud4', 3, {x:100});
var cloud5 = new TweenMax.to('#Cloud5', 3, {x:100});

var sunBox = new TweenMax.to('#sunBox', 1.5, {x:300, y:-200}, "-1");
var sonnet = new TweenMax.from('#box', 1.5, {x:200, y:200, opacity:0, scale:0})

var tl = new TimelineMax();

tl.from("#stormBox", 1, {opacity:0, scale:0});

var containerScene5 = new ScrollMagic.Scene({triggerElement: '#stormBox', triggerHook:'onEnter'})
.setTween(tl)
.addTo(controller);

var tl2 = new TimelineMax();
tl2.from("#Box2", 1, {opacity:0, scale:0});
tl2.from("#Box3", 1, {opacity:0, scale:0}, "2");
var containerScene6 = new ScrollMagic.Scene({triggerElement: "#Box2", triggerHook:"onEnter"})
.setTween(tl2)
.addTo(controller);

var tl3 = new TimelineMax();
tl3.from("#OneTeamBox", 2, {opacity:0, scale:0} )
var containerScene7 = new ScrollMagic.Scene({triggerElement:"#OneTeamBox", triggerHook:"onEnter"})
.setTween(tl3)
.addTo(controller);


var containerScene = new ScrollMagic.Scene({triggerElement:'#Sun'})
.setTween([plane, cloud1, cloud2, cloud3, cloud4, cloud5])

.addTo(controller);

var containerScene2 = new ScrollMagic.Scene({triggerElement:'#Storm3', triggerHook:'onEnter'})
.setTween([storm1, storm2, storm3, storm4, storm5, storm6, storm7, storm8, storm9, storm10, storm11, storm12, storm13])

.addTo(controller);

var containerScene3 = new ScrollMagic.Scene({triggerElement:'#sunBox', triggerHook:'onEnter'})
.setTween(sunBox)
.setPin("#sticktome")

.addTo(controller);

var containerScene4 = new ScrollMagic.Scene({triggerElement:'#poemSection', trigerHook:'onEnter'})
.setTween(sonnet)

.addTo(controller);



