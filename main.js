// Kung Fu Panda Character Look Up

// Event Listener
document.getElementById('search').addEventListener('click', searchClicked);

// Event Function
function searchClicked() {
  // Get Input Value (what character to look for?)
  let name = document.getElementById('input-name').value;
  name = name.toLowerCase();

  // Test Input Variable and update the page
  if (name === 'po' || name === 'dragon warrior') {
    // Update page to Po
    changeCharacter("Po", "po", "Buddy, I am the Dragon Warrior.");
  } else if (name === 'tigress' || name === 'master tigress') {
    // Update page to Tigress
    changeCharacter("Tigress", "tigress", "That was pretty hardcore");
  } else if (name === 'mantis' || name === 'master mantis') {
    // Update page to Mantis
    changeCharacter("Master Mantis", "mantis", "Fear the bug!");
  } else if (name === 'monkey' || name === 'master monkey') {
    // Update page to Monkey
    changeCharacter("Master Monkey", "monkey", "We should hang out.");
  } else if (name === 'crane' || name === 'master crane') {
    // Update page to Crane
    changeCharacter("Master Crane", "crane", "You can chain my body, but you will  never chain my warrior spirit");
  } else if (name === 'viper' || name === 'master viper') {
    // Update page to Viper
    changeCharacter("Master Viper", "viper", "I don't need to bite to fight");
  } else if (name === 'shifu' || name === 'master shifu') {
    // Update page to Master Shifu
    changeCharacter("Master Shifu", "shifu", "There is now a Level Zero.")
  } else if (name === 'ping' || name === 'mr. ping') {
    // Update page to Mr. Ping
    changeCharacter("Mr. Ping", "mr-ping", "We are noodle folk, broth runs through our veins!");
  } else {
    // Update page to Question Mark
    changeCharacter("?????", "question-mark", "Character Not Found")
  }
}

function changeCharacter(name, image, quote) { 
  document.getElementById('character-name').innerHTML = name;
  document.getElementById('main-img').src = `img/${image}.png`
  document.getElementById('quote').innerHTML = quote;
}
