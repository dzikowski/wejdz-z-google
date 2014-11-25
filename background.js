
// button clicked
chrome.browserAction.onClicked.addListener( function( tab ) { 
    openGoogle( tab.id, tab.url );
} );

// context menu
chrome.contextMenus.create( { 
    "title": chrome.i18n.getMessage( "extName" ), 
    "contexts": ["link"], 
    "onclick": function( info, tab ) {
        if ( info.linkUrl ) {
            openGoogle( tab.id, info.linkUrl );
        }
} } );

function openGoogle( tabId, url ) {
    var google = 'https://www.google.pl/#q=' + encodeURIComponent( url )
    console.log( 'Opening ' + google );
    chrome.tabs.executeScript(tabId, { 
        code: 'window.open( "' + google + '", "_self");'
    } );
    listen( tabId, url );
}

function listen( tabId, url ) {
    var limit = 100;
    function check() {
        chrome.tabs.get( tabId, function(tab) {
            if ( tab.status === 'complete' ) {
                console.log('Completed ' + tab.url + ' rdir to ' + url);
                chrome.tabs.executeScript(tab.id, { 
                    code: 'if ( document.URL !== "' + url + '" ) window.open( "' + url + '", "_self");' 
                } );
                limit = 0;
            }
            if ( limit > 0 ) {
                limit = limit - 1;
                setTimeout( check, 10000 / limit );
            }
        } );
    }
    setTimeout( check, 100 );
}

