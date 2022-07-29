function photographerFactory(data) {
    const { id, name, portrait, city, country, tagline, tags, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture )

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement("h3");
        h3.textContent = `${city}, ${country}`;

        const h4 = document.createElement("h4");
        h4.textContent = tagline;

        const p = document.createElement("p");
        p.textContent = `${price}€/jour`;

        const span = document.createElement("span")
        span.textContent = tags;

        // const ahref = document.createElement("a")
        // ahref.textContent = tags;

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
        article.appendChild(span);

        return (article);
    }
    return { id, name, picture, city, country, tagline, tags, price, getUserCardDOM }
 
}