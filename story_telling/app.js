const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

let story_text =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

let btn_delete;

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

randomize.addEventListener("click", result);

/*
This function delete the custom name.
Auto focus on the custom name field.
Delete the button.
*/
function delete_name() {
  customName.focus();
  if (customName.value !== "") customName.value = "";

  if (document.querySelector("#name").contains(btn_delete))
    document.querySelector("#name").removeChild(btn_delete);
}

function result() {
  let new_story = story_text;

  /*
  Replace the default name Bob
  */
  if (customName.value !== "") {
    const name = customName.value;
    new_story = new_story.replaceAll(
      "Bob",
      name[0].toUpperCase() + name.slice(1).toLowerCase(),
    );

    /*
    Add a new button for deleting the custom name
    */
    if (!document.querySelector("#name").contains(btn_delete)) {
      btn_delete = document.createElement("button");
      btn_delete.textContent = "Detele";
      btn_delete.className = "btn-delete";
      btn_delete.addEventListener("click", delete_name);
      document.querySelector("#name").appendChild(btn_delete);
    }
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14);
    const temperature = Math.round(((94 - 32) * 5) / 9);
    new_story = new_story.replace("94 fahrenheit", `${temperature} centigrade`);
    new_story = new_story.replace("300 pounds", `${weight} stone`);
  }

  let xitem = randomValueFromArray(insertX);
  let yitem = randomValueFromArray(insertY);
  let zitem = randomValueFromArray(insertZ);

  new_story = new_story.replaceAll(":insertx:", xitem);
  new_story = new_story.replaceAll(":inserty:", yitem);
  new_story = new_story.replaceAll(":insertz:", zitem);

  story.textContent = new_story;
  story.style.visibility = "visible";
  customName.focus();
}
