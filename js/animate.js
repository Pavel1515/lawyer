function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".call");
for (let elm of elements) {
  observer.observe(elm);
}

function onEntrySpecial(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show_special");
    }
  });
}

let observerSpecial = new IntersectionObserver(onEntrySpecial, options);
let elementsSpecial = document.querySelectorAll(".specialization");
for (let elm of elementsSpecial) {
  observerSpecial.observe(elm);
}

function onEntryServise(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show_special");
    }
  });
}

let observerServise = new IntersectionObserver(onEntryServise, options);
let elementsServise = document.querySelectorAll(".servise");

for (let elm of elementsServise) {
  observerServise.observe(elm);
}

function onEntryInfo(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show_special");
    }
  });
}

let observerInfo = new IntersectionObserver(onEntryInfo, options);
let elementsInfo = document.querySelectorAll(".info");

for (let elm of elementsInfo) {
  observerInfo.observe(elm);
}
function onEntryServiseItem(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show_special");
    }
  });
}

let observerServiseItem = new IntersectionObserver(onEntryServiseItem, options);
let elementsServiseItem = document.querySelectorAll(".specialization_item");

for (let elm of elementsServiseItem) {
  observerServiseItem.observe(elm);
}
