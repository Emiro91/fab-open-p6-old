async function getPhotographer() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");

    // Penser à remplacer par les données récupérées dans le json
    const photographerData = await (
        fetch('./data/photographers.json')
        .then((response) => response.json())
    );
    photographerData.photographers = photographerData.photographers.filter(
        (photographer) => photographer.id == id
    )[0];
    photographerData.media = photographerData.media.filter(
        (media) => media.photographerId == id
    );
    return photographerData;

    // et bien retourner le tableau photographers seulement une fois

}

async function displayData(photographer) {
    const photographersSection = document.getElementById("photographeProfile");
    const profileModel = photographerFactory(photographer);
    const profiles = profileModel.getProfilePage();
    photographersSection.appendChild(profiles);
};

async function init() {
    // Récupère les datas des photographes
    const photographer = await getPhotographer();
    displayData(photographer.photographers);
};

init();
(function (root) {
	"use strict";
	if (root.imgLightbox) {
		imgLightbox("img-lightbox-link", {
			onCreated: function () {
				/* show your preloader */
			},
			onLoaded: function () {
				/* hide your preloader */
			},
			onError: function () {
				/* hide your preloader */
			},
			onClosed: function () {
				/* hide your preloader */
			},
			rate: 500 /* default: 500 */ ,
			touch: false /* default: false - use with care for responsive images in links on vertical mobile screens */
		});
	}
})("undefined" !== typeof window ? window : this);