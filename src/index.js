/**
 * we have a webpage that has 3 buttons, home, menu, and info
 * we need to load an initial webpage with the homepage content
 * it should load the webpage initially upon opening
 * hold event listeners for each of the buttons
 * when the buttons are clicked, it should clear the content BELOW the tabs (in the content id div?)
 * then load the content associated with that tab in the content id div
 */


// pageLoad();

// add event listener to buttons
// each should first clear the tabs of the content div


import initialLoad from "./pageLoad";
import homePage from "./home";
import menuPage from "./menu";
import infoPage from "./info";

const homeBtn = document.getElementById("home-button");
const menuBtn = document.getElementById("menu-button");
const infoBtn = document.getElementById("info-button");

initialLoad();

homeBtn.addEventListener("click", () => {
    homePage();
})

menuBtn.addEventListener("click", () => {
    menuPage();
})

infoBtn.addEventListener("click", () => {
    infoPage();
})