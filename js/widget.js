import "./widget.css";

function render({ model, el }) {
  let selectElement = document.createElement("select");

  function addOptions(options, container) {
    options.forEach((opt) => {
      if (opt.group) {
        const group = document.createElement("optgroup");
        group.label = opt.group;
        addOptions(opt.options, group);
        container.appendChild(group);
      } else {
        const option = document.createElement("option");
        option.value = opt.value;
        option.textContent = opt.text;
        option.disabled = opt.disabled;
        container.appendChild(option);
      }
    });
  }

  function setOptions(options) {
    // Clear existing options
    selectElement.innerHTML = "";
    addOptions(options, selectElement);
    // Reset selected index to the first option
    selectElement.selectedIndex = 0;
  }

  setOptions(model.get("options"));

  model.on("change:options", () => {
    setOptions(model.get("options"));
  });

  selectElement.addEventListener("change", function (event) {
    model.set("selected_value", event.target.value);
    model.save_changes();
  });

  model.on("change:selected_value", () => {
    selectElement.value = model.get("selected_value");
    // Trigger change event manually
    const event = new Event("change");
    selectElement.dispatchEvent(event);
  });

  el.classList.add("widget_dropdown_extended");
  el.appendChild(selectElement);
}

export default { render };
