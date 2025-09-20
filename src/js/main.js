import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const siteTitle = document.querySelector("title");
siteTitle.innerHTML = parkData.fullName;

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function parkInfoTemplate(info) {
    return `<a class="hero-banner__title" href="#">${info.name}</a>
            <p class="hero-banner__subtitle">
                <span>${info.designation}</span>
                <span>${info.states}</span>
            </p>`;
}

const heroBannerContent = document.querySelector(".hero-banner__content");
heroBannerContent.innerHTML = parkInfoTemplate(parkData);

const heroImg = document.querySelector(".hero-img");
heroImg.src = parkData.images[0].url;
heroImg.alt = parkData.images[0].altText;