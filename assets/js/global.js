'use strict';

// add event on multiple elements

const addEventOnElements = (elements, event, callback) => {
    for (const elem of  elements) elem.addEventListener(event, callback);
};

// Toggle search box in movile device || small screen

const searchBox = document.querySelector("[search-box]");
const searchTogglers = document.querySelectorAll("[search-toggler]");

addEventOnElements(searchTogglers, "click", () => {
    searchBox.classList.toggle('active');
});