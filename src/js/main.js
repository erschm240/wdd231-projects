import { getParkData, parkInfoLinks } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate, parkIntroTemplate } from "./templates.mjs";

const parkData = getParkData();

function setParkIntro() {
    const introSection = document.querySelector(".intro");
    introSection.innerHTML = parkIntroTemplate(parkData);
};

function setParkInfo(data) {
    console.log("parkInfoLinks data:", data);
    const infoSection = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    console.log("Generated HTML:", html);
    infoSection.innerHTML = html.join("");
};

setHeaderFooter(parkData);
setParkIntro(parkData);
setParkInfo(parkInfoLinks);