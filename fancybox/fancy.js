// JavaScript Document

$(document).ready( function(){

			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox({
				'padding' : '0',
				'height' : 'auto',
				'autoScale' : 'true'
			});

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".fancybox-effects-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 56
					}
				}
			});
			$('.fancybox-thumbs2').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 56
					}
				}
			});
			$('.fancybox-thumbs3').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 56
					}
				}
			});


			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			/*
			 *  Open manually
			 */

			$("#fancybox-manual-a").click(function() {
				$.fancybox.open('.jpg');
			});

			
			
			// galery
			$("#galery-1").click(function() {
				$.fancybox.open({
					href : 'galery/galery-1.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-2").click(function() {
				$.fancybox.open({
					href : 'galery/galery-2.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-3").click(function() {
				$.fancybox.open({
					href : 'galery/galery-3.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-4").click(function() {
				$.fancybox.open({
					href : 'galery/galery-4.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-5").click(function() {
				$.fancybox.open({
					href : 'galery/galery-5.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-6").click(function() {
				$.fancybox.open({
					href : 'galery/galery-6.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-7").click(function() {
				$.fancybox.open({
					href : 'galery/galery-7.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-8").click(function() {
				$.fancybox.open({
					href : 'galery/galery-8.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-9").click(function() {
				$.fancybox.open({
					href : 'galery/galery-9.html',
					type : 'iframe',
					padding : 5
				});
			});
			$("#galery-10").click(function() {
				$.fancybox.open({
					href : 'galery/galery-10.html',
					type : 'iframe',
					padding : 5
				});
			});

			
			

});//end ready