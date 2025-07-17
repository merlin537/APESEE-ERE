// Map of images (ensure these images are in your 'images/' folder)
const missionImages = {
  research: 'images/research.jpg',
  innovate: 'images/innovate.jpg',
  support: 'images/support.jpg',
  empower: 'images/empower.jpg'
};

function openMissionModal(key) {
  const modal = document.getElementById("mission-modal");
  const modalImg = document.getElementById("mission-modal-img");
  modalImg.src = missionImages[key];
  modal.style.display = "flex";
}

function closeMissionModal() {
  document.getElementById("mission-modal").style.display = "none";
}
const missionData = {
  research: {
    img: 'prog1.jpg',
    text: 'We conduct action-based research to inform youth-focused solutions and policy innovation.'
  },
  innovate: {
    img: 'prog2.jpg',
    text: 'We promote innovation hubs and entrepreneurial programs to empower young minds.'
  },
  support: {
    img: 'prog3.jpg',
    text: 'Our mission is to support vulnerable communities through education and mentorship.'
  },
  empower: {
    img: 'prog4.jpg',
    text: 'Empowering youth with skills, leadership training, and community engagement tools.'
  },
  opportunities: {
    img: 'prog1.jpg',
    text: 'We support youth-led agribusiness and modern farming practices for food security.'
  },
  education: {
    img: 'images/education.jpg',
    text: 'Education is at the core of our programs — from basic literacy to digital skills.'
  },
  health: {
    img: 'images/health.jpg',
    text: 'Access to youth-friendly health services is part of our integrated mission.'
  }
};

function openMissionModal(key) {
  const modal = document.getElementById("mission-modal");
  const img = document.getElementById("mission-modal-img");
  const text = document.getElementById("mission-modal-text");

  img.src = missionData[key].img;
  text.textContent = missionData[key].text;
  modal.style.display = "flex";
}

function closeMissionModal() {
  document.getElementById("mission-modal").style.display = "none";
}

