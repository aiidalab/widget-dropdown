import "./widget.css";

function setStyles(element, styles) {
  Object.keys(styles).forEach((style) => {
    element.style[style] = styles[style];
  });
}

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

  setOptions(model.get("_options_js"));
  setStyles(selectElement, model.get("styles"));

  model.on("change:_options_js", () => {
    setOptions(model.get("_options_js"));
  });

  model.on("change:styles", () => {
    setStyles(selectElement, model.get("styles"));
  });

  selectElement.addEventListener("change", function (event) {
    model.set("index", event.target.selectedIndex);
    model.save_changes();
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
