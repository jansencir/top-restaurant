
const infoPage = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const header = document.createElement("h1");
    header.textContent = "Info";
    pageContent.appendChild(header);

    content.appendChild(pageContent);
}

export default infoPage;