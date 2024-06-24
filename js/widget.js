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
    model.set("value", event.target.value);
    model.set("index", event.target.selectedIndex);
    model.save_changes();
  });

  model.on("change:value", () => {
    selectElement.value = model.get("value");
    // Trigger change event manually
    const event = new Event("change");
    selectElement.dispatchEvent(event);
  });

  model.on("change:index", () => {
    selectElement.selectedIndex = model.get("index");
    // Trigger change event manually
    const event = new Event("change");
    selectElement.dispatchEvent(event);
  });

  model.on("change:disabled", () => {
    selectElement.disabled = model.get("disabled");
  });

  el.classList.add("widget_dropdown");
  el.appendChild(selectElement);
}

export default { render };
