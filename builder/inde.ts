import Packager from "npm:@turbowarp/packager";

const projectData = await (await fetch('https://packager.turbowarp.org/example.sb3')).arrayBuffer();
console.log(0)
const loadedProject = await Packager.loadProject(projectData,(type,a,b)=>{
  console.log(type,a,b)
});
