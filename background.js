
chrome.browserAction.onClicked.addListener( function(tab) {
    var google = 'https://www.google.pl/#q=' + encodeURIComponent( tab.url )
    console.log( 'Opening ' + google );
    chrome.tabs.executeScript(tab.id, { 
        code: 'window.open( "' + google + '", "_self");'
    } );
    listen( tab.id, tab.url );
} );


function listen( tabId, url ) {
    var limit = 100;
    function check() {
        chrome.tabs.get( tabId, function(tab) {
            if ( tab.status === 'complete' ) {
                console.log('Completed ' + tab.url + ' rdir to ' + url);
                chrome.tabs.executeScript(tab.id, { 
                    code: 'if ( document.URL !== "' + url + '" ) window.open( "' + url + '", "_self");' 
                } );
            }
            if ( limit > 0 ) {
                limit = limit - 1;
                setTimeout( check, 10000 / limit );
            }
        } );
    }
    setTimeout( check, 100 );
}

