
const clearPage = () => {
    const content = document.getElementById("content");

    if (content.innerHTML !== "") {
        content.innerHTML = "";
    }
};

export default clearPage;