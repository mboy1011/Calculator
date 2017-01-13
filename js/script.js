$(document).ready(function() {
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#decimal').click(function(){
		var v = $(this).val();
		$('#answer').val($('#answer').val() + v);	
	});
	$('#C').click(function(){
		$('#answer').val('');
		$('#operation').val('');
		$('#equals').attr('onclick','');
	});
	$('#plus').click(function() { 
		if($('#answer').val() == ''){
			return false;
			$('#equals').attr('onclick','');
		}else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#subtract').click(function() { 
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#divide').click(function() { 
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });
	$('#product').click(function() { 
	
		if($('#answer').val() == ''){
			return false;	
			$('#equals').attr('onclick','');
		}else{
			$('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
			$('#answer').val('');
			$('#equals').attr('onclick','');
		}
    });	
	$('#equals').click(function(){
		if($('#equals').attr('onclick') != 'return false'){
			var a = $('#answer').val();
			var b = $('#operation').val();
			var c = b.concat(a);
			$('#answer').val(eval(c));
			$('#operation').val(eval(c));
			$('#equals').attr('onclick','return false');
		}
	});
});
