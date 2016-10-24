// When ready...
window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 0);
});

 $('#brand, #brand-mobile').hide();
      $("a").smoothscrolling({
         offsetTop:60
      });
      $('#middle').on('inview', function(event, isInView) {
      if (isInView) {
      $( "#nav" ).addClass('fadeIn');
     
      } else {
     
      }
      });
      $('.logo').on('inview', function(event, isInView) {
      if (isInView) {
      $( "#nav" ).removeClass('fadeIn');
      
      } else {
    
      }

      });
       
       $('#tools').on('inview', function(event, isInView) {
      if (isInView) {
       $("#bottom-nav").addClass('whole');
       $('.botIconsList').removeClass('half-pad');
       $('.botIconsList').addClass('whole-pad');
       $('#textOne,#textTwo,#textThree,#textFour').removeClass('text');
       $('#textOne,#textTwo,#textThree,#textFour').addClass('textHover');
       
       $('.icons').addClass('Out');
       $('.icons').removeClass('In');
       $('.brand-bot,.slogan,.copyright').addClass('animated fadeInRight');
       $('.envelope').addClass('animated fadeInLeft');
       $('.mail').addClass('animated fadeInLeft');
       $('.contact').hide(500);
       
       


       


      } else {
      $("#bottom-nav").removeClass('whole');
             $('.botIconsList').removeClass('whole-pad');
             $('.botIconsList').addClass('half-pad');
             $('#textOne,#textTwo,#textThree,#textFour').removeClass('textHover');
             $('#textOne,#textTwo,#textThree,#textFour').addClass('text');
             
             $('.icons').addClass('In');
             $('.icons').removeClass('Out');
             $('.brand-bot,.slogan,.copyright').removeClass('animated fadeInRight');
             $('.envelope').removeClass('animated fadeInLeft');
             $('.mail').removeClass('animated fadeInLeft');
             $('.contact').show(500);
       
      }

      });



      
      $(window).on('scroll', function(){
            var offSetTop = $(this).scrollTop();
            var navHeight = $('#nav, #nav-mobile').height();
            var offSet  = $('#anchorOneTrigger').offset().top;
            // var iD      = $('.sectionOne').attr('id');
            // var anChor  = $('#anchor_'+iD+'');
           
       
           if(offSet <= offSetTop) { 


                   $('#anchor_one, #anchor_one_mobile').removeClass('blank');
                   $('#anchor_one, #anchor_one_mobile').addClass('navigation');
                   $('#anchor_zero, #anchor_zero_mobile').addClass('blank');
                   $('#anchor_zero, #anchor_zero_mobile').removeClass('navigation');

               } 

            
              
              else{
                   $('#anchor_one, #anchor_one_mobile').addClass('blank');
                   $('#anchor_one, #anchor_one_mobile').removeClass('navigation');
                   $('#anchor_zero , #anchor_zero_mobile').removeClass('blank');
                   $('#anchor_zero , #anchor_zero_mobile').addClass('navigation');


               }
            


      });
           $(window).on('scroll', function(){
            var offSetTop = $(this).scrollTop();
            var navHeight = $('#nav, #nav-mobile').height();
            var offSet  = $('#anchorTwoTrigger').offset().top;
            // var iD      = $('.sectionTwo').attr('id');
            // var anChor  = $('#anchor_'+iD+'');
           
       
           if(offSet  <= offSetTop) { 

                   $('#anchor_two, #anchor_two_mobile').removeClass('blank');
                   $('#anchor_two, #anchor_two_mobile').addClass('navigation');
                   $('#anchor_one, #anchor_one_mobile').addClass('blank');
                   $('#anchor_one, #anchor_one_mobile').removeClass('navigation');

               } 

            
              else{
                   $('#anchor_two, #anchor_two_mobile').addClass('blank');
                   $('#anchor_two, #anchor_two_mobile').removeClass('navigation');

               }
                });

            $(window).on('scroll', function() {
            var offSetTop = $(this).scrollTop();
            var navHeight = $('#nav').height();
            var offSet  = $('#delta_down').offset().top;
            if(offSet > offSetTop) { 
       $("#nav" ).removeClass('animated slideOutUp');
       $("#nav" ).addClass('animated slideInDown');
       $("#bottom-nav").addClass('shrink')
       $("#bottom-nav").addClass('animated slideOutDown')
        } 
         
         else{
       $("#nav" ).addClass('animated slideOutUp');
       $("#bottom-nav").removeClass('shrink')
       $("#bottom-nav").addClass('half')
       $("#bottom-nav").removeClass('animated slideOutDown')
       $("#bottom-nav").addClass('animated slideInUp')

         }

      });
             $(window).on('scroll', function() {
            var offSetTop = $(this).scrollTop();
            var offSet  = $('.logo').offset().top;
            if(offSet < offSetTop) { 
       $("#brand, #brand-mobile").fadeIn(700);
 
        } 
         
         else{
       $("#brand, #brand-mobile").fadeOut(700);
     
   

         }

      });
      


      new WOW().init();

      $('#media').addClass('animated slideInLeft');
     

      

      $('#jumbo').hover(function () {
         $('#btnjumbo').css({'background-color':'transparent','color':'#ff3366','border-color':'#979ea4'});
         $('#hover-gray').css({'color':'#979ea4'});
         $('.hover').css({'color':'#979ea4'});
         $('#title').css({'color':'#ff3366'})
      }, function() {
          $('#btnjumbo').css({'background-color':'#ff3366','color':'#ecf0f1','border-color':'#ff3366'});
          $('#hover-gray').css({'color':'#ecf0f1'});
          $('.hover').css({'color':'#ecf0f1'});
          $('#title').css({'color':'#ecf0f1'})
        }
      
      );
      
      $('#jumbo-brands').hover(function () {
      
         $('#brain').addClass('rotateR');
      
         $('#crowd').addClass('rotateL');
      
         $('#chart').addClass('rotateR');
      
      
      
      
         setTimeout(function () {
         $('#brain').attr('src','img/Icon-brain_hover.png');
         }, 500)
      
      
           setTimeout(function () {
         $('#crowd').attr('src','img/Icon-crowd_hover.png');
         }, 500)
      
       
      
           setTimeout(function () {
         $('#chart').attr('src','img/Icon-chart_hover.png');
         },500)
      
      }, function () {
      
      
         $('#brain').removeClass('rotateR');
      
         $('#crowd').removeClass('rotateL');
      
         $('#chart').removeClass('rotateR');
      
         setTimeout(function () {
         $('#brain').attr('src','img/Icon-brain.png');
         }, 500)
      
        
      
         setTimeout(function () {
         $('#crowd').attr('src','img/Icon-crowd.png');
         }, 500)
      
         
      
         setTimeout(function () {
         $('#chart').attr('src','img/Icon-chart.png');
         }, 500)
      }
      
      );
      

      $(document).ready(function() { setTimeout(function () {
       $('#nav').addClass('show');
      }, 2600)})
      
      $(document).ready(function() { setTimeout(function () {
       $('#loader').fadeOut();
      }, 1500)})
      
      $(document).ready(function() { setTimeout(function () {
      
       $('.page-loader-left').addClass('left-loaded');
       $('.page-loader-right').addClass('right-loaded');
       $('#loader').fadeOut();
      }, 2100)})
      
      
      window.onbeforeunload = function(){
      window.scrollTo(0,0);
      }
      
      $('#btn-three').click(function () {
      $('#nav, #nav-mobile, .navbar-nav,.navbar-brand').addClass('fade');
      $('.brand').fadeOut(500);
      })
      $('#bot2,#bot3,#bot4').click(function () {
      $('.brand').fadeIn(2000);
      $('#nav, #nav-mobile, .navbar-nav,.navbar-brand').fadeIn(500);
      $('#nav, #nav-mobile, .navbar-nav,.navbar-brand').removeClass('fade');
      })
      $( '#bot1,#bot5').click(function() {
      $( ".navbar" ).removeClass('shrink');
      $('#nav, #nav-mobile, .navbar-nav,.navbar-brand').show(500);
      $('#nav, #nav-mobile, .navbar-nav,.navbar-brand').removeClass('fade');
      })
      $( '#bot6').click(function() {
      $('#nav, #nav-mobile, .navbar-nav,.navbar-brand').removeClass('fade');
      $('#nav, #nav-mobile, .navbar-nav,.navbar-brand').show(500);
      $('.brand').fadeIn(500);
      })
      $( '#scroll,#scroll2,#scroll3,#btn').click(function() {
      $( ".top" ).addClass('fadeIn');
      })
      $( '#scrollup,#btn-two').click(function() {
      $( ".top" ).removeClass('fadeIn');})
      
      $( '#scroll,#scroll2,#scroll3,#btn').click(function() {
      $( ".subnav" ).addClass('fadeIn , expand');
      })
      $( '#scrollup,#btn-two').click(function() {
      $( ".subnav" ).removeClass('fadeIn , expand');})
      
      $( '#scroll,#scroll2,#scroll3,#btn').click(function() {
      $( ".bgnav" ).addClass('fadeIn , .right');
      })
      
      
      $('#scroll,#scroll2,#scroll3,#btn').click(function(){
       $('.brand').fadeIn(2000);
      })
      $( '#scrollup,#btn-two').click(function() {
      $( ".brand" ).fadeOut(500);})
      
 particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#2980b9"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#2980b9"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 100,
          "color": "#2980b9",
          "opacity": 0.5,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2.5,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": true,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 100,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
      });
      

      var PARTICLE_QUANT = 80;
      var FPS = 60;
      var BOUNCE = -5;
      var PARTICLE_COLOR = 'rgb(52, 152, 219)';
      var ARC_RADIUS = 2;
      
      /**
      * Particles lib class
      *
      * @class Particles
      * @constructor
      */
      var Particles = function($element) {
       // if element doesnt exist in the DOM return early
       if ($element.length === 0) { return; }
      
           /**
            * A reference to the containing DOM element.
            *
            * @default null
            * @property {jQuery} $element
            * @public
            */
           this.$element = $element;
      
           /**
            * Initial timestamp use to for baseline of animation loop
            *
            * @default null
            * @property lastTimeStamp
            * @type {number}
            * @public
            */
           this.lastTimeStamp = null;
      
           /**
            * array representing particles
            *
            * @default empty array
            * @property lastTimeStamp
            * @type {array}
            * @public
            */
           this.particles = [];
      
           this.init();
      };
      
      var proto = Particles.prototype;
      
      /**
      * Initializes the class.
      * Runs a single setupHandlers call, followed by createChildren and layout.
      * Exits early if it is already initialized.
      *
      * @method init
      * @private
      */
      proto.init = function() {
       this.createChildren()
         .layout()
         .enable();
      };
      
       /**
        * Create any child objects or references to DOM elements.
        * Should only be run on initialization of the view.
        *
        * @method createChildren
        * @returns {Particles}
        * @private
        */
       proto.createChildren = function() {
           this.canvas = this.$element[0];
           this.context = this.canvas.getContext('2d');
           this.canvasWidth = this.canvas.width;
           this.canvasHeight = this.canvas.height;
           this.lastTimeStamp = new Date().getTime();
      
           return this;
       };
      
       /**
        * handles layout of DOM elements
        *
        * @method layout
        * @returns {ParticlesController}
        * @private
        */
       proto.layout = function() {
           window.requestAnimFrame = (function() {
               return  window.requestAnimationFrame       ||
               window.webkitRequestAnimationFrame         ||
               window.mozRequestAnimationFrame;
           })();
      
           return this;
       };
      
       /**
        * Remove any child objects or references to DOM elements.
        *
        * @method removeChildren
        * @returns {Particles}
        * @public
        */
       proto.removeChildren = function() {
           this.context = null;
           this.canvasWidth = null;
           this.canvasHeight = null;
           this.lastTimeStamp = null;
      
           return this;
       };
      
       /**
        * Enables the component.
        * Performs any event binding to handlers.
        * Exits early if it is already enabled.
        *
        * @method enable
        * @public
        */
       proto.enable = function() {
           this.createParticleData();
           this.renderLoop();
       };
      
       //////////////////////////////////////////////////////////////////////////////////
       // HELPER METHODS
       //////////////////////////////////////////////////////////////////////////////////
      
       /**
        * Creates particle data objects
        *
        * @method createParticleData
        * @private
        */
       proto.createParticleData = function() {
           var i = 0;
           var l = PARTICLE_QUANT;
      
           for(; i < l; i++) {
               this.particles[i] = {};
               this.setParticleData(this.particles[i]);
           }
       };
      
       /**
        * Sets the base particle data
        *
        * @method setParticleData
        * @private
        */
       proto.setParticleData = function(particle) {
           particle.x = Math.random() * this.canvasWidth;
           particle.y = Math.random() * this.canvasHeight;
           particle.vx = (Math.random()) - 0.5;
           particle.vy = (Math.random()) - 0.5;
       };
      
       /**
        * Updates the particle data object
        *
        * @method update
        * @private
        */
       proto.update = function() {
           var i = 0;
           var l = PARTICLE_QUANT;
         
           for (; i < l; i++) {
               var particle = this.particles[i];
      
               particle.x += particle.vx;
               particle.y += particle.vy;
      
               if (particle.x > this.canvasWidth) {
                   particle.x = this.canvasWidth;
                   particle.vx *= BOUNCE;
               } else if (particle.x < 0) {
                   particle.x = 0;
                   particle.vx *= BOUNCE;
               }
      
               if (particle.y > this.canvasHeight) {
                   particle.y = this.canvasHeight;
                   particle.vy *= BOUNCE;
               } else if (particle.y < 0) {
                   particle.y = 0;
                   particle.vy *= BOUNCE;
               }
           }
       };
      
       /**
        * Renders the particle on the canvas
        *
        * @method draw
        * @private
        */
       proto.draw = function() {
           var i = 0;
      
           if (!this.context) {
               return;
           }
      
           this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
           this.context.strokeStyle = PARTICLE_COLOR;
         
           for(; i < PARTICLE_QUANT; i++) {
               var particle = this.particles[i];
               this.context.save();
               this.context.beginPath();
               this.context.arc(particle.x, particle.y, ARC_RADIUS, 0, Math.PI * 2);
               this.context.stroke();
               this.context.restore();
           }
       };
      
       /**
        * Creates the animation loop
        *
        * @method renderLoop
        * @private
        */
       proto.renderLoop = function() {
           requestAnimationFrame(this.renderLoop.bind(this));
           this.update();
           this.draw();
       };
      
      var particles = new Particles($('#js-particles'));

      var PARTICLE_QUANT = 80;
      var FPS = 60;
      var BOUNCE = -5;
      var PARTICLE_COLOR = 'rgb(52, 152, 219)';
      var ARC_RADIUS = 2;
      
      /**
      * Particles lib class
      *
      * @class Particles
      * @constructor
      */
      var Particles = function($element) {
      // if element doesnt exist in the DOM return early
      if ($element.length === 0) { return; }
      
          /**
           * A reference to the containing DOM element.
           *
           * @default null
           * @property {jQuery} $element
           * @public
           */
          this.$element = $element;
      
          /**
           * Initial timestamp use to for baseline of animation loop
           *
           * @default null
           * @property lastTimeStamp
           * @type {number}
           * @public
           */
          this.lastTimeStamp = null;
      
          /**
           * array representing particles
           *
           * @default empty array
           * @property lastTimeStamp
           * @type {array}
           * @public
           */
          this.particles = [];
      
          this.init();
      };
      
      var proto = Particles.prototype;
      
      /**
      * Initializes the class.
      * Runs a single setupHandlers call, followed by createChildren and layout.
      * Exits early if it is already initialized.
      *
      * @method init
      * @private
      */
      proto.init = function() {
      this.createChildren()
        .layout()
        .enable();
      };
      
      /**
       * Create any child objects or references to DOM elements.
       * Should only be run on initialization of the view.
       *
       * @method createChildren
       * @returns {Particles}
       * @private
       */
      proto.createChildren = function() {
          this.canvas = this.$element[0];
          this.context = this.canvas.getContext('2d');
          this.canvasWidth = this.canvas.width;
          this.canvasHeight = this.canvas.height;
          this.lastTimeStamp = new Date().getTime();
      
          return this;
      };
      
      /**
       * handles layout of DOM elements
       *
       * @method layout
       * @returns {ParticlesController}
       * @private
       */
      proto.layout = function() {
          window.requestAnimFrame = (function() {
              return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame         ||
              window.mozRequestAnimationFrame;
          })();
      
          return this;
      };
      
      /**
       * Remove any child objects or references to DOM elements.
       *
       * @method removeChildren
       * @returns {Particles}
       * @public
       */
      proto.removeChildren = function() {
          this.context = null;
          this.canvasWidth = null;
          this.canvasHeight = null;
          this.lastTimeStamp = null;
      
          return this;
      };
      
      /**
       * Enables the component.
       * Performs any event binding to handlers.
       * Exits early if it is already enabled.
       *
       * @method enable
       * @public
       */
      proto.enable = function() {
          this.createParticleData();
          this.renderLoop();
      };
      
      //////////////////////////////////////////////////////////////////////////////////
      // HELPER METHODS
      //////////////////////////////////////////////////////////////////////////////////
      
      /**
       * Creates particle data objects
       *
       * @method createParticleData
       * @private
       */
      proto.createParticleData = function() {
          var i = 0;
          var l = PARTICLE_QUANT;
      
          for(; i < l; i++) {
              this.particles[i] = {};
              this.setParticleData(this.particles[i]);
          }
      };
      
      /**
       * Sets the base particle data
       *
       * @method setParticleData
       * @private
       */
      proto.setParticleData = function(particle) {
          particle.x = Math.random() * this.canvasWidth;
          particle.y = Math.random() * this.canvasHeight;
          particle.vx = (Math.random()) - 0.5;
          particle.vy = (Math.random()) - 0.5;
      };
      
      /**
       * Updates the particle data object
       *
       * @method update
       * @private
       */
      proto.update = function() {
          var i = 0;
          var l = PARTICLE_QUANT;
        
          for (; i < l; i++) {
              var particle = this.particles[i];
      
              particle.x += particle.vx;
              particle.y += particle.vy;
      
              if (particle.x > this.canvasWidth) {
                  particle.x = this.canvasWidth;
                  particle.vx *= BOUNCE;
              } else if (particle.x < 0) {
                  particle.x = 0;
                  particle.vx *= BOUNCE;
              }
      
              if (particle.y > this.canvasHeight) {
                  particle.y = this.canvasHeight;
                  particle.vy *= BOUNCE;
              } else if (particle.y < 0) {
                  particle.y = 0;
                  particle.vy *= BOUNCE;
              }
          }
      };
      
      /**
       * Renders the particle on the canvas
       *
       * @method draw
       * @private
       */
      proto.draw = function() {
          var i = 0;
      
          if (!this.context) {
              return;
          }
      
          this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
          this.context.strokeStyle = PARTICLE_COLOR;
        
          for(; i < PARTICLE_QUANT; i++) {
              var particle = this.particles[i];
              this.context.save();
              this.context.beginPath();
              this.context.arc(particle.x, particle.y, ARC_RADIUS, 0, Math.PI * 2);
              this.context.stroke();
              this.context.restore();
          }
      };
      
      /**
       * Creates the animation loop
       *
       * @method renderLoop
       * @private
       */
      proto.renderLoop = function() {
          requestAnimationFrame(this.renderLoop.bind(this));
          this.update();
          this.draw();
      };
      
      var particles = new Particles($('#js-particles-two'));