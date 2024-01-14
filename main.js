const audio = document.querySelector("audio");
const Play = document.querySelector("#play");
const putar = document.querySelector("#putar");
const Pause = document.querySelector("#pause");
const main = document.querySelector("#main");
const jalan = document.querySelector("#jalan");
const berhenti = document.querySelector("#berhenti");
const arrow = document.querySelector("#arrow");
const arrowUp = document.querySelector("#arrowUp");
const progressBar = document.getElementById("load");
const durasiLagu = document.querySelector("#durasi");
const durasiLaguGerak = document.querySelector("#durasiGerak");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const judul = document.querySelector("#title");
const vocal = document.querySelector("#name");
const cover = document.querySelector("#cover");
const hai = document.querySelector("#hai");
const lagu = document.querySelector("#lagu");
const nama = document.querySelector("#nama");
const random = document.querySelector(".randoms");
const musicLeft = document.querySelector(".music-left");
const musicCenter = document.querySelector(".music-center");
const musicRight = document.querySelector(".music-right");
const boxTitle = document.querySelector("#box-title");
const boxNumber = document.querySelector("#box-number");
const satu = document.querySelector("#satu");
const dua = document.querySelector("#dua");
const tiga = document.querySelector("#tiga");
const empat = document.querySelector("#empat");
const lima = document.querySelector("#lima");
const enam = document.querySelector("#enam");
const tujuh = document.querySelector("#tujuh");
const delapan = document.querySelector("#delapan");
const sembilan = document.querySelector("#sembilan");
const sepuluh = document.querySelector("#sepuluh");
const sebelas = document.querySelector("#sebelas");
const duabelas = document.querySelector("#duabelas");
const tigabelas = document.querySelector("#tigabelas");
let newAudio = new Audio();
const playList = [
  {
    title: "janji setia",
    vocal: "tiara andini",
    song: "janji-setia",
    cover: "janji-setia",
  },
  {
    title: "bukti",
    vocal: "virgoun",
    song: "bukti",
    cover: "bukti",
  },
  {
    title: "kekasih bayangan",
    vocal: "cakra khan",
    song: "kekasih-bayangan",
    cover: "kekasih-bayangan",
  },
  {
    title: "kenangan terindah",
    vocal: "samsons",
    song: "kenangan-terindah",
    cover: "kenangan-terindah",
  },
  {
    title: "trauma",
    vocal: "elysa",
    song: "trauma",
    cover: "trauma",
  },
  {
    title: "mencari alasan",
    vocal: "exists",
    song: "mencari-alasan",
    cover: "mencari-alasan",
  },
  {
    title: "mesin waktu",
    vocal: "budi doremi",
    song: "mesin-waktu",
    cover: "mesin-waktu",
  },
  {
    title: "mungkinkah",
    vocal: "stinky",
    song: "mungkinkah",
    cover: "mungkinkah",
  },
  {
    title: "penjaga hati",
    vocal: "nadhif basalamah",
    song: "penjaga-hati",
    cover: "penjaga-hati",
  },
  {
    title: "mabuk cinta",
    vocal: "armada",
    song: "mabuk-cinta",
    cover: "mabuk-cinta",
  },
  {
    title: "puspa",
    vocal: "st12",
    song: "puspa",
    cover: "Puspa",
  },
  {
    title: "suka sama kamu",
    vocal: "d'bagindas",
    song: "suka-sama-kamu",
    cover: "suka-sama-kamu",
  },
  {
    title: "perahu kertas",
    vocal: "tulus",
    song: "perahu-kertas",
    cover: "perahu-kertas",
  },
];
random.addEventListener("click", () => {
  nextSong();
});
arrow.addEventListener("click", () => {
  musicRight.style.display = "none"
  
});
arrowUp.addEventListener("click", () => {
  musicRight.style.display = "block"
})
satu.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[0] ?? playList[0]);
  loadHeader(playList[0] ?? playList[0]);
  audioPlay();
});
dua.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[1] ?? playList[0]);
  loadHeader(playList[1] ?? playList[0]);
  audioPlay();
});
tiga.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[2] ?? playList[0]);
  loadHeader(playList[2] ?? playList[0]);
  audioPlay();
});
empat.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[3] ?? playList[0]);
  loadHeader(playList[3] ?? playList[0]);
  audioPlay();
});
lima.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[4] ?? playList[0]);
  loadHeader(playList[4] ?? playList[0]);
  audioPlay();
});
enam.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[5] ?? playList[0]);
  loadHeader(playList[5] ?? playList[0]);
  audioPlay();
});
tujuh.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[6] ?? playList[0]);
  loadHeader(playList[6] ?? playList[0]);
  audioPlay();
});
delapan.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[7] ?? playList[0]);
  loadHeader(playList[7] ?? playList[0]);
  audioPlay();
});
sembilan.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[8] ?? playList[0]);
  loadHeader(playList[8] ?? playList[0]);
  audioPlay();
});
sepuluh.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[9] ?? playList[0]);
  loadHeader(playList[9] ?? playList[0]);
  audioPlay();
});
sebelas.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[10] ?? playList[0]);
  loadHeader(playList[10] ?? playList[0]);
  audioPlay();
});
duabelas.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[11] ?? playList[0]);
  loadHeader(playList[11] ?? playList[0]);
  audioPlay();
});
tigabelas.addEventListener("click", () => {
  musicCenter.style.display = "block";
  loadMusic(playList[12] ?? playList[0]);
  loadHeader(playList[12] ?? playList[0]);
  audioPlay();
});
let isSongPlaying = false;
let songPosition = 0;
audio.onplaying = (event) => {
  isSongPlaying = true;
  putar.style.visibility = "hidden";
  Pause.style.visibility = "visible";
  jalan.style.visibility = "hidden";
  berhenti.style.visibility = "visible";
};
audio.onpause = (event) => {
  isSongPlaying = false;
  putar.style.visibility = "visible";
  Pause.style.visibility = "hidden";
  jalan.style.visibility = "visible";
  berhenti.style.visibility = "hidden";
};
audio.ontimeupdate = (event) => {
  const { currentTime, duration } = event.srcElement;
  const percent = (currentTime / duration) * 100;
  const minutes = Math.floor(duration / 60);
  const second = Math.floor(duration - minutes * 60);
  progressBar.style.width = `${percent}%`;
  durasiLagu.innerHTML = `${minutes}:${second}`;
  const menitGerak = Math.floor(currentTime / 60);
  const detikGerak = Math.floor(currentTime - menitGerak * 60);
  let addZero = detikGerak;
  if (addZero < 10) {
    addZero = `0${detikGerak}`;
  }
  durasiLaguGerak.innerHTML = `${menitGerak}:${addZero}`;
};
Play.addEventListener("click", () => {
  if (isSongPlaying) {
    audioPause();
    return;
  }
  audioPlay();
});
main.addEventListener("click", () => {
  if (isSongPlaying) {
    audioPause();
    return;
  }
  audioPlay();
});
audio.onended = (event) => {
  console.log("onended");
  nextSong();
};
prevButton.addEventListener("click", () => {
  console.log("prevButton");
});
prevButton.addEventListener("click", () => {
  prevSong();
});
nextButton.addEventListener("click", () => {
  nextSong();
});
const audioPlay = () => {
  audio.play();
};
const audioPause = () => {
  audio.pause();
};
const loadMusic = (data) => {
  console.log("loadMusic", data);
  audio.src = `music/${data.song}.mp3`;
  judul.innerHTML = data.title;
  vocal.innerHTML = data.vocal;
  cover.src = `image-music/${data.cover}.jpg`;
};
const loadHeader = (data) => {
  console.log("loadMusic", data);
  audio.src = `music/${data.song}.mp3`;
  lagu.innerHTML = data.title;
  nama.innerHTML = data.vocal;
  hai.src = `image-music/${data.cover}.jpg`;
};
const nextSong = () => {
  if (songPosition >= playList.length) {
    songPosition === playList.length;
  } else {
    songPosition++;
  }
  console.log("next song", playList[songPosition] ?? playList[0]);
  console.log("nextButton");
  loadMusic(playList[songPosition] ?? playList[0]);
  loadHeader(playList[songPosition] ?? playList[0]);
  audioPlay();
};
const tetap = () => {
  if (songPosition >= playList.length) {
    songPosition === playList.length;
  } else {
    songPosition;
  }
  console.log("next song", playList[songPosition] ?? playList[0]);
  console.log("nextButton");
  loadMusic(playList[0] ?? playList[0]);
};
const prevSong = () => {
  if (songPosition < 1) {
    songPosition === 0;
  } else {
    songPosition--;
  }
  console.log("prev song", playList[songPosition] ?? playList[0]);
  console.log("prevButton");
  loadMusic(playList[songPosition] ?? playList[0]);
  loadHeader(playList[songPosition] ?? playList[0]);
  audioPlay();
};
