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
      
      jQuery(".contact-us-btn").click(function(){
            jQuery(".modal-back").css("display", "block" );
            jQuery(".contactus-section").css("display", "block" );
            jQuery(".modal-back").animate({opacity: 1}, 500, function(){
            });
            jQuery(".contactus-section").animate({opacity: 1}, 500, function(){                  
            });
      });

      jQuery(".close-btn").click(function(){
            jQuery(".modal-back").animate({opacity: 0}, 500, function(){
                  jQuery(".modal-back").css("display", "none" );
            });
            jQuery(".contactus-section").animate({opacity: 0}, 500, function(){
                  jQuery(".contactus-section").css("display", "none" );
            });
      });

      jQuery(".contactus-section").click(function(event){
            event.stopPropagation() ;
            if (jQuery(event.target).hasClass("contactus-section" )){
                  jQuery(".modal-back").animate({opacity: 0}, 500, function(){
                        jQuery(".modal-back").css("display", "none" );
                  });
                  jQuery(".contactus-section").animate({opacity: 0}, 500, function(){
                        jQuery(".contactus-section").css("display", "none" );
                  });
            }            
      });
});

function gotoFeature(ind ){
	owl.goTo(ind );
}

function nextFeature(){
	owl.next();
}

function prevFeature(){
	owl.prev();
}