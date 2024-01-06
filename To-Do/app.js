const submitButton = document.querySelector("form");
submitButton.addEventListener("submit",(e)=>{
      e.preventDefault(); 
      const inputTitle = document.querySelector(".title").value;
      const textareaDes = document.querySelector(".description").value;
      const selectPriority = document.querySelector(".priority").value;
      let listContent = [
            inputTitle,
            textareaDes,
            selectPriority,
      ]
      console.log(listContent);
      let div = document.createElement("div");
      div.classList.add("heading");
      div.classList.add("added");

      let ul = document.createElement("ul");
      ul.classList.add("todolist");


      
      for(let items of listContent){
            let li = document.createElement("li");
            li.classList.add("todolist-items");
            li.textContent = items;
            ul.appendChild(li);
      }
      let button = document.createElement("button");
      button.innerText = "Done!";
      button.classList.add("Done");
      let li = document.createElement("li");
      li.classList.add("todolist-items");
      li.appendChild(button);
      ul.appendChild(li);


      div.appendChild(ul);

      let addlist = document.querySelector(".adding-container");
      addlist.appendChild(div);
});

document.addEventListener("DOMContentLoaded", () => {
      let intervalId = setInterval(() => {
        const done = document.querySelector(".Done");
        if (done) {
          clearInterval(intervalId); // Stop checking
          done.addEventListener("click", () => {
            let adds = document.querySelectorAll(".heading");
            console.log(adds);
            adds.forEach(add=>{
                  if (add.classList.contains("added")) {
                  add.classList.remove("heading");
                }})
            
          });
        }
      }, 100);
    });
    

