import { parkInfoTemplate, parkFooterTemplate } from "./templates.mjs";

    function setHeaderInfo(parkData) {
        // Insert data into disclaimer section
        const disclaimer = document.querySelector(".disclaimer > a");
        disclaimer.href = parkData.url;
        disclaimer.innerHTML = parkData.fullName;

        // Update the title of the site
        const siteTitle = document.querySelector("title");
        siteTitle.innerHTML = parkData.fullName;

        const heroBannerContent = document.querySelector(".hero-banner__content");
        heroBannerContent.innerHTML = parkInfoTemplate(parkData);

        const heroImg = document.querySelector(".hero-img");
        heroImg.src = parkData.images[0].url;
        heroImg.alt = parkData.images[0].altText;
    };

    function setParkFooter(data) {
        const parkFooter = document.querySelector("#park-footer");
        parkFooter.innerHTML = parkFooterTemplate(data);
    };

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setParkFooter(parkData);
}