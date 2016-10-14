!function($) {

	var mode_className = 'is-shinji-mode';

	// load時
	chrome.storage.local.get('checked', function(result) {
		if ( result.checked == true ) {
			$('body').addClass(mode_className);
		} else {
			$('body').removeClass(mode_className);
		}
	});

	// checkbox変更時
	chrome.storage.onChanged.addListener(function(changes, namespace) {
		if ( namespace == "local" ) {
			var storageChange = changes['checked'];

			if ( storageChange.newValue == true ) {
				$('body').addClass(mode_className);
			} else {
				$('body').removeClass(mode_className);
			}
		}
	});


}(jQuery);