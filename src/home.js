
const homePage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("h1");
    header.textContent = "Welcome to Hibiscus Cafe"
    pageContent.appendChild(header);
    const hibiscus = document.createElement("img");
    hibiscus.src = "../src/assets/yellow-hibiscus.jpg";
    pageContent.append(hibiscus);

    const div1 = document.createElement("div");
    const paragraph1 = document.createElement("p");
    paragraph1.textContent = "Experience local flavors with limitless servings"
    div1.appendChild(paragraph1)
    const image1 = document.createElement("img");
    image1.src = "../src/assets/hawaii-pool.jpg";
    div1.appendChild(image1);

    content.appendChild(pageContent);
    content.appendChild(div1);
}

export default homePage;