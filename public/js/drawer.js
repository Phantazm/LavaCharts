var drawer = {
    status : "closed",
    close : function()
    {
	$('#slideout').animate({top:'-352px'}, {queue:false, duration: 250});
	drawer.status = "closed";
    },
    open : function()
    {
	$('#slideout').animate({top:'0px'}, {queue:false, duration:400});
	drawer.status = "open";
    },
    bindTabClick : function() { //Open & close drawer
            $('#clickme').click(function() {
            if(drawer.status == "closed") {
                drawer.open();
            } else {
                drawer.close();
            }
        });
    },
    bindOutsideClick : function() { //Close drawer if click outside
        $(document).click(function(event) {
            if($(event.target).parents().index($('#slideout')) == -1) {
                if($('#slideout').is(":visible")) {
                    drawer.close();
                }
            }
        });
    }
};