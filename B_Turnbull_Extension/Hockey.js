console.log('Hello There');

let filenames = [
  'hockey1.jpg', 'hockey2.jpg', 'hockey3.jpg', 'hockey4.jpg', 'hockey5.jpg'
];

let imgs = document.getElementsByTagName('img');

for (let imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = 'hockey/' + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
