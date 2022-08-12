function photographerFactory(data) {
    const {
        id,
        name,
        portrait,
        city,
        country,
        tagline,
        price
    } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');

        const img = document.createElement('img');
        img.setAttribute("src", picture)
        img.setAttribute("class", "card-img")

        const h2 = document.createElement('h2');
        h2.textContent = name;

        const h3 = document.createElement("h3");
        h3.textContent = `${city}, ${country}`;

        const h4 = document.createElement("h4");
        h4.textContent = tagline;

        const p = document.createElement("p");
        p.textContent = `${price}€/jour`;

        const ahref = document.createElement("a");
        ahref.setAttribute("class", "link");
        ahref.setAttribute("aria-label", `${name}`);
        ahref.setAttribute("href", `photographer.html?id=${id}`);

        ahref.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(h4);
        article.appendChild(p);

        return ahref;
    }

    function getProfilePage() {
        const photographHeader = document.createElement("div");
        photographHeader.setAttribute("class", "photograph-header");

        const mainInfos = document.createElement("div");
        mainInfos.setAttribute("class", "photograph-infos");
        mainInfos.setAttribute("tabindex", "0");

        const fullname = document.createElement("h1");
        fullname.setAttribute("class", "names");
        fullname.textContent = name;

        const location = document.createElement("div");
        location.setAttribute("class", "location");
        const villePays = document.createElement("span");
        villePays.textContent = city.concat(", ", country);
        const bio = document.createElement("p");
        bio.textContent = tagline;

        const contactButton = document.createElement("button");
        contactButton.setAttribute("id", "contact_button");
        contactButton.setAttribute("class", "contact_button");
        contactButton.setAttribute("onclick", "displayModal()");
        contactButton.textContent = "Contactez-moi";

        const profileImg = document.createElement("img");
        profileImg.setAttribute("src", `assets/photographers/${portrait}`);
        profileImg.setAttribute("class", "photographImg");
        profileImg.setAttribute("alt", name);
        profileImg.setAttribute("tabindex", "0");

        const priceLikes = document.createElement("div");
        priceLikes.setAttribute("class", "price");
        const likesSpan = document.createElement("span");
        likesSpan.setAttribute("class", "compteurLikeTotal");

        const heart = document.createElement("span");
        heart.setAttribute("aria-label", "likes");
        heart.setAttribute("class", "fas fa-heart");
        const priceDay = document.createElement("span");
        priceDay.textContent = `${price}€ /jour`;

        photographHeader.appendChild(mainInfos);
        mainInfos.appendChild(fullname);
        mainInfos.appendChild(location);
        location.appendChild(villePays);
        location.appendChild(bio);
        photographHeader.appendChild(contactButton);
        photographHeader.appendChild(profileImg);

        photographHeader.appendChild(priceLikes);
        priceLikes.appendChild(likesSpan);
        likesSpan.appendChild(heart);
        priceLikes.appendChild(priceDay);
        return photographHeader;
    }
    return {
        id,
        name,
        picture,
        city,
        country,
        tagline,
        price,
        getUserCardDOM,
        getProfilePage,
    }

}