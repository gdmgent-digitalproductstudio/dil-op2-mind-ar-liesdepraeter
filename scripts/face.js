const brushToggle = document.querySelector("#toggleBrush");
const brushEntity = document.querySelector("#brushEntity");

brushToggle.addEventListener("change", () => {
brushEntity.setAttribute("visible", brushToggle.checked);
});

// Hoed selecteren
const leatherCapModel = document.querySelector("#leatherCapModel");
const beanieModel = document.querySelector("#beanieModel");
const hatSelect = document.querySelector("#hatSelect");

hatSelect.addEventListener("change", () => {
  const value = hatSelect.value;

  if(value === "none"){
    leatherCapModel.setAttribute("visible", false);
    beanieModel.setAttribute("visible", false);
  } 
  else if(value === "leatherCap"){
    leatherCapModel.setAttribute("visible", true);
    beanieModel.setAttribute("visible", false);
  }
  else if(value === "beanie"){
    leatherCapModel.setAttribute("visible", false);
    beanieModel.setAttribute("visible", true);
  }
});