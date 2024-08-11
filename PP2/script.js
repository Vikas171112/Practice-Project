// console.log("Welcome to my site");
// let audioElement = new Audio("1.mp3");
// audioElement.play();
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("song-item"));
let play = Array.from(document.getElementsByClassName("songitemplay"));
let next = document.getElementById("next");
let previous = document.getElementById("previous");

let songs = [
  { songName: "Song1", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song2", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song3", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song4", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song5", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song6", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song7", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song8", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
  { songName: "Song9", filepath: "song/1.mp3", coverpath: "covers/1.jpg" },
];

// Listen to Events
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
songItems.map((e, i) => {
  e.getElementsByClassName("songname")[0].textContent = songs[i].songName;
});

const makeallPlay = () => {
  play.map((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  });
};

play.map((element) => {
  element.addEventListener("click", (e) => {
    makeallPlay();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove("fa-play");
    e.target.classList.add("fa-pause");
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  });
});

next.addEventListener("click", () => {
  if (songIndex >= 8) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
previous.addEventListener("click", () => {
  if (songIndex <= 0) {
    alert("please press next tro enjoy");
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
});
