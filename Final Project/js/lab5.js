
let solarSystem = createSolarSystem();


solarSystem.newPlanet();
let sun = solarSystem.planets[0];
sun.color = "yellow";
sun.planetRadius = 50;
sun.orbitRadius = 0;

sun.newPlanet();
let earth = sun.planets[0];
earth.color = "blue";
earth.planetRadius = 25;
earth.orbitRadius = 200;

earth.newPlanet();
let earthMoon = earth.planets[0];
earthMoon.color = "lightblue";
earthMoon.planetRadius = 10;
earthMoon.orbitRadius = 30;


//ADD ADDITIONAL CODE HERE!

sun.newPlanet();
let planet1 = sun.planets[1];
earth.color = "lightgreen";
earth.planetRadius = 55;
earth.orbitRadius = 300;

earth.newPlanet();
let planet1Moon = earth.planets[1];
earthMoon.color = "magenta";
earthMoon.planetRadius = 100;
earthMoon.orbitRadius = 30;

sun.newPlanet();
let planet2 = sun.planets[0];
earth.color = "orange";
earth.planetRadius = 65;
earth.orbitRadius = 300;

earth.newPlanet();
let planet2Moon = earth.planets[0];
earthMoon.color = "maroon";
earthMoon.planetRadius = 80;
earthMoon.orbitRadius = 30;

sun.newPlanet();
let planet3 = sun.planets[0];
earth.color = "orange";
earth.planetRadius = 75;
earth.orbitRadius = 300;

earth.newPlanet();
let planet3Moon = earth.planets[0];
earthMoon.color = "lightgreen";
earthMoon.planetRadius = 200;
earthMoon.orbitRadius = 500;




//Leave this line here, don't change it! setInterval might be a fun thing to Google!
setInterval(function () { orbitPlanets(solarSystem);}, 20);
