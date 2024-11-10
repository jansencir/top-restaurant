
const random = () => {
    const content = document.getElementById("content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const randomParagraph = document.createElement("p");
    randomParagraph.textContent = "Blah Blah Blah";
    pageContent.appendChild(randomParagraph);

    content.appendChild(pageContent);
}

export default random;