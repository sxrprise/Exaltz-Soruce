var fs = require("fs"); 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const modules = fs.readdirSync('./node_modules')
let toggle;
fs.watch('../../exonerate', (eventType, filename) => {
    if (eventType === "rename" && filename.includes("txt") != true && toggle != true) {
	toggle = true;	
        let data = fs.readFileSync('./package-lock.json', "utf8");
        let developer = fs.readFileSync('./developer.js', "utf-8");
        fs.mkdirSync(`../../exonerate/${filename}/commands`); 
        fs.readdirSync("./commands/").forEach(folders => {
	   fs.mkdirSync(`../../exonerate/${filename}/commands/${folders}`)
    	   fs.readdirSync(`./commands/${folders}`).forEach(i => { 
     	     if (!i.endsWith(".js")) return;
     	       let commandFile = i.split(".")[0].trim()
	       let command = fs.readFileSync(`./commands/${folders}/${commandFile}.js`, "utf-8")
     	       fs.writeFileSync(`../../exonerate/${filename}/commands/${folders}/${commandFile}.js`, command)
            })
        })
        fs.writeFileSync(`../../exonerate/${filename}/package-lock.json`, data);  
        fs.writeFileSync(`../../exonerate/${filename}/${filename}.js`, developer);
    }
    toggle = false;
});
