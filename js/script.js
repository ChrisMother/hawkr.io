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