// const kittyPictures = [
//   'pictures/istockphoto-1250103329-612x612.jpg',
//   'pictures/depositphotos_1178129-stock-photo-kitten.jpg',
//   'pictures/istockphoto-937809006-612x612.jpg'
// ];

// const kittyPicture = document.querySelector('.kittyPicture');
// let currentKittyIndex = 0;

// kittyPicture.addEventListener('click', () => {
//   currentKittyIndex = (currentKittyIndex + 1) % kittyPictures.length;
//   kittyPicture.src = kittyPictures[currentKittyIndex];
// });
const kittyPictures = [
  'pictures/four-cute-cats-20650677.jpg',
  'pictures/istockphoto-1250103329-612x612.jpg',
  'pictures/shelterkitties.jpg',
  'pictures/istockphoto-937809006-612x612.jpg'
];

const kittyPicture = document.querySelector('.kittyPicture');
let currentKittyIndex = 0;

function showNextKitty() {
  currentKittyIndex = (currentKittyIndex + 1) % kittyPictures.length;
  
  // Add the "hidden" class to the image element to fade it out
  kittyPicture.classList.add('hidden');
  
  // Wait for the fade-out transition to finish
  setTimeout(() => {
    // Update the "src" attribute of the image element
    kittyPicture.src = kittyPictures[currentKittyIndex];
    
    // Remove the "hidden" class to fade the image back in
    kittyPicture.classList.remove('hidden');
  }, 500);
}

// Change the kitty picture every 3 seconds
setInterval(showNextKitty, 6000);