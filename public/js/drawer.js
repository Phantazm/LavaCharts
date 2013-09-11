var drawer = {
    status : "closed",
    close : function()
    {
	$('#slideout').animate({left:'-303px'}, {queue:false, duration: 250});
	this.status = "closed";
    },
    open : function()
    {
	$('#slideout').animate({left:'0px'}, {queue:false, duration:400});
	this.status = "open";
    }
};


$(function(){
    //Open & close drawer
    $('#clickme').click(function() {
        if(drawer.status == "closed") {
            drawer.open();
        } else {
            drawer.close();
        }
    });

    //Close drawer if click outside
    $(document).click(function(event) {
        if($(event.target).parents().index($('#slideout')) == -1) {
            if($('#slideout').is(":visible")) {
                drawer.close();
            }
        }
    });
});