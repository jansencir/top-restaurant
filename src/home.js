
const homePage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("h1");
    header.textContent = "Home"
    pageContent.appendChild(header);

    content.appendChild(pageContent);
}

export default homePage;