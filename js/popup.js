!function($) {


	// Link Button
	// --------------------

	var nicoURL = 'http://www.nicovideo.jp/watch/';

	var shinji_video_list = [
		{ id: 'sm27310398', title: '夢列車' },
		{ id: 'sm27199525', title: 'ふたり旅 / 父ちゃん星' },
		{ id: 'sm27199815', title: 'シンジースマイルBB' }
	];

	// create links
	var ele_list = document.getElementById('video-list');

	for ( var i = 0; i < shinji_video_list.length; i++ ) {

		var link_url  = nicoURL + shinji_video_list[i].id;
		var link_text = document.createTextNode(shinji_video_list[i].title);

		var ele_item  = document.createElement('li');
		var ele_link  = document.createElement('a');

		ele_list.appendChild(ele_item).appendChild(ele_link).appendChild(link_text);
		ele_link.setAttribute('href', link_url);
		ele_link.setAttribute('target', '_blank');
	}


	// Shinji Mode
	// --------------------

	var shinji_mode;
	var checkbox = document.getElementById('shinji_mode');

	load_state();

	// click event
	checkbox.addEventListener( 'click', function() {
		save_state();
		// window.close();
	});

	// checkboxが有効なら chrome.Storageに true / 無効なら false
	function save_state() {
		if ( checkbox.checked ) {
			chrome.storage.local.set({ 'checked': true } , function() {});
		} else {
			chrome.storage.local.set({ 'checked': false } , function() {});
		}
	}

	// popup起動時にlocalStorageの値を取得し、checkboxの有効/無効を切替
	function load_state() {
		chrome.storage.local.get('checked', function(result) {
			if ( result.checked == true ) {
				checkbox.checked = true;
			} else {
				checkbox.checked = false;
			}
		});
	}


}(jQuery);