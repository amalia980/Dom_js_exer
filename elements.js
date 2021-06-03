
function createTextArea() {
    const textArea = document.createElement("textarea");

    textArea.style.display = "block";//pushes button down

    return textArea;
}

function createButton(text) {
    const button = document.createElement("button");
    button.innerText = text;

    button.style.display = "block";
    button.style.marginTop = "1rem";
    return button;
}

//style for ul list
const ulStyle = `
list-style: none;
margin-top: 1rem;
`;

//display userinput value in Ul list
function createList() {
    const list = document.createElement("ul");
    list.style = ulStyle;
    return list;
}

function whenLiClicked(event) {
    event.target.parentNode.removeChild(event.target);
}

function createLi(text, color) {
    const li = document.createElement("li");
    li.innerText = text;
    //style for li elements
    li.style.backgroundColor = color;
    li.style.cursor = "pointer";

    li.addEventListener("click", whenLiClicked);

    return li;
}