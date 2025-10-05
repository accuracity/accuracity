// Add radio buttons for map selection
let map_selector_wrapper = document.getElementById("map-selector");
let is_first = true;

for (let key in maps) {
    let input = document.createElement("input");
    input.type = "radio";
    input.name = "map";
    input.id = "option-map-" + key;
    input.value = key;
    if (is_first) {
        input.checked = true;
        is_first = false;
    }
    map_selector_wrapper.appendChild(input);

    let label = document.createElement("label");
    label.setAttribute("for", "option-map-" + key);
    label.className = "option";
    let dot = document.createElement("span");
    dot.className = "dot";
    let option_name = document.createElement("span");
    option_name.className = "option-name";
    option_name.innerText = maps[key].name
    label.appendChild(dot);
    label.appendChild(option_name);
    map_selector_wrapper.appendChild(label);
}
