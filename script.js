const noteImage = document.getElementById("noteImage");
const noteMessage = document.getElementById("noteMessage");
const homeCard = document.getElementById("homeCard");
const noteCard = document.getElementById("noteCard");
const noteText = document.getElementById("noteText");

const notes = [
  {
    image: "assets/images/first-message.jpg",
    text: "",
    message: `<p class="personal-message">عوم و اتمخطر 🌊<br><span>— دوري —</span></p>`
  },
  {
    image: "assets/images/image1.jpg",
    text: `لا تخف لأني معك.<br><br>لا تتلفت لأني إلهك.<br><br>قد أيدتك وأعنتك وعضدتك بيمين بري.<br><br><span class="verse">(إشعياء ٤١ : ١٠) 🌼</span>`,
    message: ""
  },
  {
    image: "assets/images/second-message.jpg",
    text: `الرب نوري وخلاصي ممن أخاف؟<br><br>الرب حصن حياتي ممن أرتعب؟<br><br><span class="verse">(مزمور ٢٧ : ١) ✨</span>`,
    message: ""
  },
  {
    image: "assets/images/third-message.jpg",
    text: `أستطيع كل شيء في المسيح الذي يقويني.<br><br><span class="verse">(فيلبي ٤ : ١٣) 🤍</span>`,
    message: ""
  },
  {
    image: "assets/images/fourth-message.jpg",
    text: `سلّم للرب طريقك واتكل عليه وهو يجري.<br><br><span class="verse">(مزمور ٣٧ : ٥) 🌿</span>`,
    message: ""
  },
  {
    image: "assets/images/fifth-message.jpg",
    text: `أنا معكم كل الأيام إلى انقضاء الدهر.<br><br><span class="verse">(متى ٢٨ : ٢٠) 🕊️</span>`,
    message: ""
  }
];

document.getElementById("openNote").onclick = function() {
  homeCard.style.display = "none";
  noteCard.style.display = "block";

  let usedNotes = JSON.parse(localStorage.getItem("usedNotes")) || [];

  if (usedNotes.length === notes.length) {
    usedNotes = [];
  }

  let availableNotes = notes.filter((note, index) => !usedNotes.includes(index));
  let randomIndex = Math.floor(Math.random() * availableNotes.length);
  let selectedNote = availableNotes[randomIndex];

  let selectedIndex = notes.indexOf(selectedNote);
  usedNotes.push(selectedIndex);
  localStorage.setItem("usedNotes", JSON.stringify(usedNotes));

  noteImage.src = selectedNote.image;
  noteImage.style.display = "block";
  noteText.innerHTML = selectedNote.text || "";
  noteMessage.innerHTML = selectedNote.message || "";
};

document.getElementById("backBtn").onclick = function() {
  noteCard.style.display = "none";
  homeCard.style.display = "block";
};
