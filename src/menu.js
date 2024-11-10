
const menuPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("h1");
    header.textContent = "Menu";
    pageContent.appendChild(header);

    content.appendChild(pageContent);
}

export default menuPage;