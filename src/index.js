import "./styles.css";
import banner from "./banner/banner.html";
import services from "./services/services.html";
import serviceStats from "./serviceStats/serviceStats.html";
import links from "./links/links.html";
import subscribe from "./subscribe/subscribe.html";
import bestPackages from "./bestPackages/bestPackages.html";
import popularDestinations from "./popularDestinations/popularDestinations.html";

var modules = [
    banner, 
    services, 
    serviceStats, 
    bestPackages,
    popularDestinations, 
    subscribe,
    links
];

var allSections = "";
for(var i = 0 ; i < modules.length ; i++)
    allSections += modules[i];

document.getElementsByTagName("body")[0].innerHTML = allSections;
