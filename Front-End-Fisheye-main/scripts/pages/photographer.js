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

