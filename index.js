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
    "hideWindowFrame": true,
    "disableContextMenu": true,
    "XXsingleInstance": true,
    "platform": os.platform()
}

if(process.argv[2] == "build"){
}else if(process.argv[2] == "build"){
    console.log("Installation is not yet supported.");
    process.exit(1);
}else{
    console.log("`" + process.argv[2] + "` is not a recognized command.");
    process.exit(1);
}

for(var i = 3; i < process.argv.length; i++){
    if(process.argv[i] == "beta"){
	nfopts.name += " Beta"
	nfopts.targetUrl = "https://beta.destinyitemmanager.com/";
	nfopts.icon = "icons/DIMBeta-Flat";
    }else if(["linux", "windows", "osx", "mas", "win32", "darwin", "mac"].includes(process.argv[i])){
	if(process.argv[2] == "install"){
	    console.log("You can't install a different platofrom's build.")
	    process.exit(2);
	}
	nfopts.platform = process.argv[i];
    }
}

if(["windows", "win32"].includes(process.argv[i])){
    nfopts.icon += ".ico";
}else if(["osx", "mas", "darwin", "mac"].includes(process.argv[i])){
    nfopts.icon += ".icns";
}else{
    nfopts.icon += ".png";
}

//console.log(nfopts);

nativefier(nfopts, function(error, appPath) {
    if (error) {
	console.error(error);
	return;
    }
    console.log('App has been nativefied to', appPath);
});
