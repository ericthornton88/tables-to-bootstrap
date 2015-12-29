$(function() {

	var cols = 0 
	function columns (cols) {
		var text = ""
		for (i = 0; i < cols; i++) {
		    text += "<br><input class='type-of-bootstrap-" + i + "' type='text' placeholder='bootstrap for column'>"
		}
		text += "<br><textarea name='' id='commaStuff' cols='80' rows='10'></textarea><button class='make-magic'>Make Magic</button>"
		return text
	}

	function pull_input_text (cols) {
		//col-span-sm
		for (var i = 0; i < cols; i++) {
			Things[i]
		};
	}



	$('.next').on('click', function() {
	  	cols = $('#how-many-columns').val()
	  	$('#how-many-columns').remove()
	  	$('button').remove()
	  	$('body').append(columns(cols))
	})

	$('body').on('click', '.make-magic', function() {
		var text = ""
		var textArea = $('#commaStuff').val()
		var textSplit = textArea.split(',')
		console.log(textSplit)
		masterI = 0
		console.log(textSplit.length)

		for (var i = 0; i < textSplit.length; i++) {
			if (masterI == 0) {
				text += "<tr>"
			}
			text += "<td>" + textSplit[i] + "</td>"
			masterI++
			if (masterI > cols -1) {
				masterI = 0
				text += "</tr>"
			}
		};
		
		console.log(text)

	})

})