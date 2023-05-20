import banner from "./banner/banner.html";
import services from "./services/services.html";
import serviceStats from "./serviceStats/serviceStats.html";
import links from "./links/links.html";
import subscribe from "./subscribe/subscribe.html";
import bestPackages from "./bestPackages/bestPackages.html";
import popularDestinations from "./popularDestinations/popularDestinations.html";
import nextTrip from "./nextTrip/nextTrip.html"

import "./styles.css";
import "./banner/banner.css";
import "./services/services.css";
import "./serviceStats/serviceStats.css";
import "./links/links.css";
import "./subscribe/subscribe.css";
import "./bestPackages/bestPackages.css";
import "./popularDestinations/popularDestinations.css";
import "./nextTrip/nextTrip.css"

var modules = [
    // banner, 
    // services, 
    // serviceStats, 
    // bestPackages,
    // popularDestinations, 
    nextTrip,
    // subscribe,
    // links
];

var allSections = "";
for(var i = 0 ; i < modules.length ; i++)
    allSections += modules[i];

document.getElementsByTagName("body")[0].innerHTML = allSections;
