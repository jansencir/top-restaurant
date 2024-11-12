
const infoPage = () => {
    const content = document.getElementById("content");

    const header = document.createElement("h1");
    header.textContent = "Info";
    content.appendChild(header);

    const div1 = document.createElement("div");
    div1.setAttribute("id", "hours");
    const hours = document.createElement("h2");
    hours.textContent = "Hours of Operation:";
    div1.appendChild(hours);
    const hoursMondayFriday = document.createElement("p");
    hoursMondayFriday.textContent = "Monday to Friday: 12pm-10pm";
    div1.appendChild(hoursMondayFriday);

    const hoursSatSun = document.createElement("p");
    hoursSatSun.textContent = "Saturday to Sunday: 2pm-10pm";
    div1.appendChild(hoursSatSun);

    const div2 = document.createElement("div");
    div2.setAttribute("id", "attire");
    const attire = document.createElement("h2");
    attire.textContent = "Attire:";
    div2.appendChild(attire);
    const attireRule1 = document.createElement("p");
    attireRule1.textContent = "Wear whatever you like."
    div2.appendChild(attireRule1);
    const attireRule2 = document.createElement("p");
    attireRule2.textContent = "But please be decent and remember:"
    div2.appendChild(attireRule2);
    const attireRule3 = document.createElement("p");
    attireRule3.textContent = "No shoes, no shirt, no service";
    div2.appendChild(attireRule3);

    const div3 = document.createElement("div");
    const rainbow = document.createElement("img");
    rainbow.src = "../src/assets/rainbow.jpg";
    div3.appendChild(rainbow);

    const div31 = document.createElement("div");
    const directions = document.createElement("h2");
    directions.textContent = "Directions:"
    div31.appendChild(directions);
    const directions1 = document.createElement("p");
    directions1.textContent = "Just follow the rainbow...";
    div31.appendChild(directions1);
    const directions2 = document.createElement("p");
    directions2.textContent = "(We are not a real place by the way. You WILL get lost trying to find this fictional place.)"
    div31.appendChild(directions2);
    div3.appendChild(div31);

    div1.classList.add("column");
    div2.classList.add("column");
    div3.classList.add("row");

    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);
}

export default infoPage;