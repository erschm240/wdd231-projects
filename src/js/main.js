import { getInfoLinks, getParkData } from "./parkService.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";
import { mediaCardTemplate, parkIntroTemplate } from "./templates.mjs";

function setParkIntro(parkData) {
    const introSection = document.querySelector(".intro");
    introSection.innerHTML = parkIntroTemplate(parkData);
};

function setParkInfo(data) {
    const infoSection = document.querySelector(".info");
    const html = data.map(mediaCardTemplate);
    infoSection.innerHTML = html.join("");
};

async function initialize() {
    const parkData = await getParkData();
    const infoLinks = getInfoLinks(parkData.images);
    setHeaderFooter(parkData);
    setParkIntro(parkData);
    setParkInfo(infoLinks);
}

initialize();