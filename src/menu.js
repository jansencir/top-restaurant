
const menuPage = () => {
    const content = document.getElementById("content");

    const header = document.createElement("h1");
    header.textContent = "Menu";
    content.appendChild(header);

    const div1 = document.createElement("div");
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Prime rib cooked to a perfect medium rare with a flavorful sear";
    div1.appendChild(paragraph1);
    const image1 = document.createElement("img");
    image1.src = "../src/assets/prime-rib.jpg";
    div1.appendChild(image1);

    const div2 = document.createElement("div");
    const image2 = document.createElement("img");
    image2.src = "../src/assets/crab-legs.jpg";
    div2.appendChild(image2);
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Endless snow crab legs that will have you clawing for more";
    div2.appendChild(paragraph2);

    const div3 = document.createElement("div");
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "Get a taste of our carefully crafted drinks";
    div3.appendChild(paragraph3);
    const image3 = document.createElement("img");
    image3.src = "../src/assets/cocktail.jpg";
    div3.appendChild(image3);

    const div4 = document.createElement("div");
    const div41 = document.createElement("div");
    const paragraph41 = document.createElement("p");
    paragraph41.textContent = "Yes, we have a sushi bar";
    div41.appendChild(paragraph41);
    const image41 = document.createElement("img");
    image41.src = "../src/assets/sashimi.jpg";
    div41.appendChild(image41);
    const div42 = document.createElement("div");
    const paragraph42 = document.createElement("p");
    paragraph42.textContent = "Your sweet tooth will thank you";
    div42.appendChild(paragraph42);
    const image42 = document.createElement("img");
    image42.src = "../src/assets/desserts.jpg";
    div42.appendChild(image42);
    div4.appendChild(div41);
    div4.appendChild(div42);

    div1.classList.add("row");
    div2.classList.add("row");
    div3.classList.add("row");
    div4.classList.add("space-evenly");

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
    content.appendChild(div4);
}

export default menuPage;