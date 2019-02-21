const os = require('os');
const nativefier = require('nativefier').default;

var nfopts = {
	"name": "DIM",
	"targetUrl": "https://app.destinyitemmanager.com/",
	"overwrite": true,
	"out": "build",
	"icon": "icons/DIM-Flat",
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
    process.exit(1);
}else{
    console.log("`" + process.argv[2] + "` is not a recognized command.");
    process.exit(1);
}

if(process.argv[3] == "beta"){
    nfopts.name += " Beta"
    nfopts.targetUrl = "https://beta.destinyitemmanager.com/";
    nfopts.icon = "icons/DIMBeta-Flat";
}

if(os.platform() == "win32"){
    nfopts.icon += ".ico"
}else{
    nfopts.icon += ".png"
}

//console.log(nfopts);

nativefier(nfopts, function(error, appPath) {
    if (error) {
	console.error(error);
	return;
    }
    console.log('App has been nativefied to', appPath);
});
