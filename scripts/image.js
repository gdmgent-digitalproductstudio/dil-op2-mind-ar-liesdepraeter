window.addEventListener("load", () => {

  console.log("Scene loaded");

  // audio entity
  const soundEntity = document.querySelector("#oceanSound");
  let isPlaying = false;       // houdt bij of audio speelt
  let audioUnlocked = false;   // nodig voor mobiele browsers (touch vereist)

  // icons
  const volOn = document.querySelector("#volumeOnIcon");
  const volOff = document.querySelector("#volumeOffIcon");

  // target entity
  const target = document.querySelector('[mindar-image-target="targetIndex: 2"]');
  let targetVisible = false;

  // functie om audio te unlocken bij eerste interactie (mobiele browsers)
  const unlockAudio = () => {
    if (!audioUnlocked) {
      soundEntity.components.sound.playSound();
      soundEntity.components.sound.stopSound();
      audioUnlocked = true;
      console.log("Audio unlocked");
    }
  };

  // klik ergens op het scherm togglet audio
  window.addEventListener("click", () => {
    if (!targetVisible) return; // alleen togglen als target zichtbaar is
    unlockAudio();

    if (isPlaying) {
      // stop audio
      soundEntity.components.sound.stopSound();
      isPlaying = false;
      volOn.setAttribute("visible", false);
      volOff.setAttribute("visible", true);
    } else {
      // play audio
      soundEntity.components.sound.playSound();
      isPlaying = true;
      volOn.setAttribute("visible", true);
      volOff.setAttribute("visible", false);
    }
  });

  // wanneer target gevonden wordt
  target.addEventListener("targetFound", () => {
    console.log("Target found");
    targetVisible = true;

    unlockAudio();

    if (!isPlaying) {
      soundEntity.components.sound.playSound();
      isPlaying = true;
      volOn.setAttribute("visible", true);
      volOff.setAttribute("visible", false);
    }
  });

  // wanneer target verloren gaat
  target.addEventListener("targetLost", () => {
    console.log("Target lost");
    targetVisible = false;

    if (isPlaying) {
      soundEntity.components.sound.stopSound();
      isPlaying = false;
      volOn.setAttribute("visible", false);
      volOff.setAttribute("visible", true);
    }
  });

});