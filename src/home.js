const homePage = () => {
    const content = document.getElementById("content");

    const header = document.createElement("h1");
    header.textContent = "Welcome to Hibiscus Cafe"
    content.appendChild(header);
    const hibiscus = document.createElement("img");
    hibiscus.src = "../src/assets/yellow-hibiscus.jpg";
    content.append(hibiscus);

    const div1 = document.createElement("div");
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Experience local flavors";
    div1.appendChild(paragraph1)
    const image1 = document.createElement("img");
    image1.src = "../src/assets/hawaii-pool.jpg";
    div1.appendChild(image1);

    const div2 = document.createElement("div");
    const image2 = document.createElement("img");
    image2.src = "../src/assets/hawaii-dusk.jpg";
    div2.appendChild(image2);
    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "with limitless servings";
    div2.appendChild(paragraph2);

    const div3 = document.createElement("div");
    const paragraph3 = document.createElement("p");
    paragraph3.textContent = "in the Heart of Waikiki";
    div3.appendChild(paragraph3);
    const image3 = document.createElement("img");
    image3.src = "../src/assets/waikiki.jpg";
    div3.appendChild(image3);

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
}

export default homePage;