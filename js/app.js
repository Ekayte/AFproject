var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({

    triggerElement: '.projet1',
    reverse: false


})

    .setClassToggle('.projet1', 'fade-in')
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({

    triggerElement: '.projet2',
    reverse: false


})

    .setClassToggle('.projet2', 'fade-in')
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({

    triggerElement: '.projet3',
    reverse: false


})

    .setClassToggle('.projet3', 'fade-in')
    .addTo(controller);


    /*annimation page beerPong*/

/*annimation rétrécissement del'image du top */
// build tween

var tween = TweenMax.to("#animate", 0.5, {scale: 0.5, ease: Linear.easeNone});

// build scene
var scene4 = new ScrollMagic.Scene({triggerElement: "#multiDirect", duration: 800, offset: 150})
                .setTween(tween)
                .setPin("#animate")
                //.addIndicators({name: "resize"}) // add indicators (requires plugin)
                .addTo(controller);


/*annimation rétrécissement de l'image du top */               

var scene6 = new ScrollMagic.Scene({triggerElement: '.disparition', offset: 480 })
    .setClassToggle('.disparition', 'fade-out')
    //.addIndicators({name: "resize"})
    .addTo(controller);


/* gestion de l'opacité des modèles 3d */

const modelViewer = document.querySelector("model-viewer");
          
            window.switchSrc = (element, name) => {
              const base = "https://cdn.glitch.me/" + name;
              
              modelViewer.src = base ;
              const slides = document.querySelectorAll(".slide");
              slides.forEach((element) => {element.classList.remove("selected");});
              element.classList.add("selected");
            };
          
            document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
              // Keep slider interactions from affecting the XR scene.
              ev.preventDefault();
            });
  

    /*scroll image bp éclaté*/

$(function () { // wait for document ready
    // build scene
    var mooveScroll = new ScrollMagic.Scene({triggerElement: "#triggerMooveScroll", duration: 3000,  offset: 700})
                    .setPin("#mooveScroll")
                    //.addIndicators({name: "1 (duration: 1000)"}) // add indicators (requires plugin)
                    .addTo(controller);
});
 
                                    /*PIR*/

$(function () { 
var scenePIR = new ScrollMagic.Scene({triggerElement: "#triggerPIR", offset: 1000})
                // trigger a velocity opaticy animation
                .setVelocity("#animatePIR", {opacity: 0}, {duration: 400, easing: "linear"})
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);

            });
      


$(function () { // wait for document ready
    // build scene
    var scrollPIR = new ScrollMagic.Scene({triggerElement: '.triggerScrollPIR', duration: 300,  offset: 650})
                    .setPin('.mooveScrollPIR')
                    //.addIndicators({name: "ScrollPIR (duration: 500)"}) // add indicators (requires plugin)
                    .addTo(controller);
});

                                    /*Bouton ON/OFF*/

// opacité 1 
$(function () { 
    var sceneBOF = new ScrollMagic.Scene({triggerElement: "#triggerBOF", offset: -200})
                    // trigger a velocity opaticy animation
                    .setVelocity("#animateBOF", {opacity: 1}, {duration: 400, easing: "linear"})
                    //.addIndicators({name: "OpacityBOF 1 (duration: 400)"}) // add indicators (requires plugin)
                    .addTo(controller);
    
                });
                
//stop mouvement  
$(function () { // wait for document ready
    // build scene
    var scrollBOF = new ScrollMagic.Scene({triggerElement: '.triggerScrollBOF', duration: 200,  offset: 200})
                    .setPin('.mooveScrollBOF')
                    //.addIndicators({name: "ScrollBOF (duration: 500)"}) // add indicators (requires plugin)
                    .addTo(controller);
                });
// opacité 0
$(function () { 
    var sceneBOF2 = new ScrollMagic.Scene({triggerElement: '.triggerBOF2', offset: 400})
                    // trigger a velocity opaticy animation
                    .setVelocity('.animateBOF2', {opacity: 0}, {duration: 400, easing: "linear"})
                    //.addIndicators({name: "OpacityBOF 0 (duration: 400)"}) // add indicators (requires plugin)
                    .addTo(controller);
    
                });
            
                                    /*Arduino Mega */

// opacité 1                                  
$(function () { 
    var sceneAR = new ScrollMagic.Scene({triggerElement: "#triggerArduino", offset: 50})
                    // trigger a velocity opaticy animation
                    .setVelocity("#animateArduino", {opacity: 1}, {duration: 400, easing: "linear"})
                    //.addIndicators({name: "OpacityArduino 1 (duration: 400)"}) // add indicators (requires plugin)
                    .addTo(controller);
    
                });

//stop mouvement
$(function () { // wait for document ready
    // build scene
    var scrollAR = new ScrollMagic.Scene({triggerElement: '.triggerScrollArduino', duration: 600,  offset: 250})
                    .setPin('.mooveScrollArduino')
                    //.addIndicators({name: "ScrollArduino (duration: 500)"}) // add indicators (requires plugin)
                    .addTo(controller);
                });
//opacité 0
$(function () { 
var sceneAR2 = new ScrollMagic.Scene({triggerElement: '.triggerArduino2', offset: 950})
                    // trigger a velocity opaticy animation
                    .setVelocity('.animateArduino2', {opacity: 0}, {duration: 400, easing: "linear"})
                    //.addIndicators({name: "OpacityAR 0 (duration: 400)"}) // add indicators (requires plugin)
                    .addTo(controller);
    
                });

                                /*Alimentation*/
// opacité 1                                  
$(function () { 
    var sceneAl = new ScrollMagic.Scene({triggerElement: "#triggerAlim", offset: -175})
                    // trigger a velocity opaticy animation
                    .setVelocity("#animateAlim", {opacity: 1}, {duration: 400, easing: "linear"})
                    //.addIndicators({name: "OpacityAlim 1 (duration: 400)"}) // add indicators (requires plugin)
                    .addTo(controller);
                });

//stop mouvement
$(function () { // wait for document ready
    // build scene
    var scrollAl = new ScrollMagic.Scene({triggerElement: '.triggerScrollAlim', duration: 400,  offset: 150})
            .setPin('.mooveScrollAlim')
            //.addIndicators({name: "ScrollAlim (duration: 500)"}) // add indicators (requires plugin)
            .addTo(controller);
        });
        
//opacité 0
$(function () { 
    var sceneAl2 = new ScrollMagic.Scene({triggerElement: '.triggerAlim2', offset: 600})
                    // trigger a velocity opaticy animation
                    .setVelocity('.animateAlim2', {opacity: 0}, {duration: 400, easing: "linear"})
                    //.addIndicators({name: "OpacityAlim 0 (duration: 400)"}) // add indicators (requires plugin)
                    .addTo(controller);
    
                });

                                /*Alimentation*/
// opacité 1                                  
$(function () { 
    var sceneNeo = new ScrollMagic.Scene({triggerElement: "#triggerNeo", offset: -175})
                    // trigger a velocity opaticy animation
                    .setVelocity("#animateNeo", {opacity: 1}, {duration: 400, easing: "linear"})
                    //.addIndicators({name: "OpacityNeo 1 (duration: 400)"}) // add indicators (requires plugin)
                    .addTo(controller);
                });


/* slide projet bp*/

$(function () { // wait for document ready
    // init
    var controller = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        // animate to second panel
        .to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
        .to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
        .to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
        // animate to third panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-50%"})
        .to("#slideContainer", 0.5, {z: 0})
        // animate to forth panel
        .to("#slideContainer", 0.5, {z: -150, delay: 1})
        .to("#slideContainer", 1,   {x: "-75%"})
        .to("#slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: "#pinContainer",
            triggerHook: "onLeave",
            duration: "500%"
        })
        .setPin("#pinContainer")
        .setTween(wipeAnimation)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
});