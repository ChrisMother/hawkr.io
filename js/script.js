var box_items = ["flexibility-box", "apitech-box", "webconsole-box"];
var box_item_index = 0;
var box_item = box_items[box_item_index ];
var owl = null;
jQuery(document).ready(function(){
	$("#feature-slider").owlCarousel({navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      pagination : false,
      navigation: false,
      autoHeight : true,
      afterMove: function(data){
      	jQuery(".feature-section").removeClass(box_item );
      	box_item_index = this.currentItem;
      	box_item = box_items[box_item_index ];
      	jQuery(".feature-section").addClass(box_item );

      	jQuery(".feature-category .category-item").removeClass("active");
      	jQuery(".feature-category .category-item:nth-child(" + parseInt(box_item_index + 1 ) + ")").addClass("active");

      }});
	owl = $("#feature-slider").data('owlCarousel');
      jQuery(".navbar-nav a").click(function(){
            $.scrollTo(document.getElementById(jQuery(this).attr("data-href")), 1500 );
      });

      $("#feature-slider-2").owlCarousel({navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      pagination : false,
      navigation: false,
      autoHeight : true,
      afterMove: function(data){
            jQuery(".feature-section").removeClass(box_item );
            box_item_index = this.currentItem;
            box_item = box_items[box_item_index ];
            jQuery(".feature-section").addClass(box_item );

            jQuery(".feature-category .category-item").removeClass("active");
            jQuery(".feature-category .category-item:nth-child(" + parseInt(box_item_index + 1 ) + ")").addClass("active");

      }});
      owl2 = $("#feature-slider-2").data('owlCarousel');
      jQuery(".navbar-nav a").click(function(){
            $.scrollTo(document.getElementById(jQuery(this).attr("data-href")), 1500 );
      });

       jQuery(".contactus-item input, .contactus-item textarea").keypress(function(){
            jQuery(this).parent().find(".contact-form-alert").css("display", "none" );
       });

      jQuery("#contact-form-submit").click(function(){
            // validation
            if (jQuery("#contact-name").val() == "" ){
                  jQuery("#contact-name").parent().find(".contact-form-alert").css("display", "block" );
                  return;
            }
            if (jQuery("#contact-address").val() == "" ){
                  jQuery("#contact-address").parent().find(".contact-form-alert").css("display", "block" );
                  return;
            }

            if (jQuery("#contact-mobile").val() == "" ){
                  jQuery("#contact-mobile").parent().find(".contact-form-alert").css("display", "block" );
                  return;
            }

            if (jQuery("#contact-message").val() == "" ){
                  jQuery("#contact-message").parent().find(".contact-form-alert").css("display", "block" );
                  return;
            }

            jQuery("#contactus-form").submit();
      });

      jQuery(".contact-us-btn").click(function(){
            jQuery(".modal-back").css("display", "block" );
            //jQuery(".contactus-form").css("bottom", "initial" );
            //jQuery(".contactus-form").css("top", "100px" );
            jQuery(window).scrollTo(0 );
            jQuery(".contactus-form").css("display", "block" );
            jQuery(".modal-back").animate({opacity: 1}, 500, function(){});
            jQuery(".contactus-form").animate({opacity: 1}, 500, function(){});
      });

      jQuery(".enquery-section").click(function(){
            jQuery(".modal-back").css("display", "block" );
            //jQuery(".contactus-form").css("bottom", (-1) * parseInt(parseInt(jQuery("body").height()) - parseInt(jQuery(".contactus-form").height())  - 50) + "px" );
            //jQuery(".contactus-form").css("top", "initial" );
            jQuery(window).scrollTo(0 );
            jQuery(".contactus-form").css("display", "block" );
            jQuery(".modal-back").animate({opacity: 1}, 500, function(){});
            jQuery(".contactus-form").animate({opacity: 1}, 500, function(){});
      });

      jQuery(".close-btn").click(function(){
            jQuery(".modal-back").animate({opacity: 0}, 500, function(){
                  jQuery(".modal-back").css("display", "none" );
            });
            jQuery(".contactus-form").animate({opacity: 0}, 500, function(){
                  jQuery(".contactus-form").css("display", "none" );
            });
      });

      jQuery(".modal-back").click(function(event){
            event.stopPropagation() ;
            if (jQuery(event.target).hasClass("modal-back" )){
                  jQuery(".modal-back").animate({opacity: 0}, 500, function(){
                        jQuery(".modal-back").css("display", "none" );
                  });
                  jQuery(".contactus-form").animate({opacity: 0}, 500, function(){
                        jQuery(".contactus-form").css("display", "none" );
                  });
            }
      });
});

function gotoFeature(ind ){
	owl.goTo(ind );
      owl2.goTo(ind );
}

function nextFeature(){
	owl.next();
      owl2.next();
}

function prevFeature(){
	owl.prev();
      owl2.prev();
}
