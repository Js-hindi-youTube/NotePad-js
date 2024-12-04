const container = document.querySelector("#container");
const cross = document.querySelector(".cross")
const btns = document.querySelector("#btn");

const saveNote = () => {
    let text = document.querySelectorAll(".textarea");

    let dataArray = [];

    text.forEach(
        (thisNote) => dataArray.push(thisNote.value)
    );
    localStorage.setItem("Notes", JSON.stringify(dataArray));
    console.log(dataArray);

};

// function addNotesFromLs(data="No data save") {}

// following code is rendring html on DOM and 
btns.addEventListener(
    "click",
    function () {
        addNotesFromLs();
    })

function addNotesFromLs(data = "") {
    const dynamicDiv = document.createElement("div");
    dynamicDiv.classList.add("notes");
    dynamicDiv.innerHTML = `
        <div class="note">
            <div class="tools">
                <div class="cross delete"><span>×</span></div>
                <div class="save download"><span>⬇️</span></div>
            </div><!--Tools div end here-->
            <textarea class="textarea">${data}</textarea>
        </div><!--Note div end here-->
        `;
    container.appendChild(dynamicDiv);

    dynamicDiv.querySelector(".delete").addEventListener(
        "click",
        () => {
            dynamicDiv.remove();
            localStorage.removeItem("Notes")
        }
    );

    dynamicDiv.querySelector(".download").addEventListener(
        "click",
        () => saveNote()

    )
};

// console.log(localStorage.getItem("Notes"));

(
    function () {
        // for (let i = 0; i <= localStorage.length - 1; i++) {
        //     const key = localStorage.key(i);
        //     const thisValue = localStorage.getItem(key);
        // });
        
let lsNots = JSON.parse(localStorage.getItem("Notes"))

console.log(lsNots);


        if (lsNots.length === 0) {
            localStorage.removeItem("Notes")
            
        } else {
            addNotesFromLs()
        }

    }
)()
localStorage.clear();
