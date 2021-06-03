const appStyle = `
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const app = document.getElementById("app");
app.style = appStyle;

//create elements
const textArea = createTextArea(); 
const button = createButton("save note");
const list = createList();//<ul> list

//display elements
app.appendChild(textArea);
app.appendChild(button);
app.appendChild(list);

//
function countNotes() {
    return list.querySelectorAll("li").length;
}

//event listeners
button.addEventListener("click", function(event) {
    const textValue = textArea.value;//get userinput value from textArea
    const count = countNotes();
    const color = COLORS[count % COLORS.length];

    const li = createLi(textValue, color);//<li>
    list.appendChild(li);

    
    textArea.value = "";
});