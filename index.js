const nativefier = require('nativefier').default;

var nfopts = {
	"name": "DIM",
	"targetUrl": "https://app.destinyitemmanager.com/",
	"overwrite": true,
	"out": "build",
	"icon": "icons/release/android-chrome-512x512-6-2018.png",
	"XXsingleInstance": true,
	"internalUrls": ".*?\\.(google|googleusercontent|destinyitemmanager|bungie)\\.*?",
	"electronVersion": "4.0.5",
	"inject": ["inject.css", "inject.js"],
	"XXhideWindowFrame": true,
	"disableContextMenu": true
}

if(process.argv[2] == "build"){
}else if(process.argv[2] == "build"){
    console.log("Installation is not yet supported.");
    process.exit(0);
}else{
    console.log("`" + process.argv[2] + "` is not a recognized command.");
}

if(process.argv[2] == "beta"){
    nfopts.targetUrl = "https://beta.destinyitemmanager.com/";
    nfopts.icon = "icons/beta/android-chrome-512x512-6-2018.png";
}

nativefier(nfopts, function(error, appPath) {
    if (error) {
	console.error(error);
	return;
    }
    console.log('App has been nativefied to', appPath);
});
