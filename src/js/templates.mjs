export function parkInfoTemplate(parkData) {
return `<a class="hero-banner__title" href="#">${parkData.name}</a>
        <p class="hero-banner__subtitle">
            <span>${parkData.designation}</span>
            <span>${parkData.states}</span>
        </p>`;
}

export function parkIntroTemplate(info) {
    return `<h1>${info.fullName}</h1>
            <p>${info.description}</p>`;
    }

export function mediaCardTemplate(info) {
    return `<div class="media-card">
                <a href="${info.link}">
                    <img src="${info.image}" alt="${info.name}" class="media-card__img">
                    <h2 class="media-card__title">${info.name}</h2>
                </a>
                <p class="card-info">${info.description}</p>
            </div>`;
};

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
}

function getVoicePhone(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

export function parkFooterTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers);

    return `<h3>Contact Info</h3>
        <div>
            <h4>Mailing Address:</h4>
            <p>${mailing.line1}</p>
            <p>${mailing.city}, ${mailing.stateCode}, ${mailing.postalCode}</p>
        </div>
        <div>
            <h4>Phone:</h4>
            <p>${voice}</p>
        </div>`;
};