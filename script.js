const noteImage = document.getElementById("noteImage");
const noteMessage = document.getElementById("noteMessage");
const homeCard = document.getElementById("homeCard");
const noteCard = document.getElementById("noteCard");
const noteText = document.getElementById("noteText");

const notes = [
  {
    image: "assets/images/naruto.jpeg",
    text: `<p class="personal-message">Perseverance beats Talent✨.<br><span>— NARUTO —</span>`,
    message: ""
  },
  {
    image: "assets/images/jesus.jpeg",
    text: `لا تخف لأني معك.<br><br>لا تتلفت لأني إلهك.<br><br>قد أيدتك وأعنتك وعضدتك بيمين بري.<br><br><span class="verse">(إشعياء ٤١ : ١٠) 🌼</span>`,
    message: ""
  },
  {
    image: "assets/images/avakerollos.jpeg",
    text: `<p class="personal-message">ثق أن الرب أحن عليك من نفسك فأن طلبته تجده.<br><span>— البابا كيرلس السادس —</span>`,
    message: ""
  },
  {
    image: "assets/images/lord.jpeg",
    text: `الرب نوري وخلاصي ممن أخاف؟<br><br>الرب حصن حياتي ممن أرتعب؟<br><br><span class="verse">(مزمور ٢٧ : ١) ✨</span>`,
    message: ""
  },
  {
    image: "assets/images/khokha.jpeg",
    text: `<p class="personal-message">صباح الخير..اليوم الموعود ، الشمس طالعة و الحوض نظيف..✨.<br><span>— خوخة —</span>`,
    message: ""
  },
  {
    image: "assets/images/ican.jpeg",
    text: `أستطيع كل شيء في المسيح الذي يقويني.<br><br><span class="verse">(فيلبي ٤ : ١٣) 🤍</span>`,
    message: ""
  },
  {
    image: "assets/images/godhand.jpeg",
    text: `سلّم للرب طريقك واتكل عليه وهو يجري.<br><br><span class="verse">(مزمور ٣٧ : ٥) 🌿</span>`,
    message: ""
  },
  {
    image: "assets/images/hakuna.jpeg",
    text: `<p class="personal-message">انساه و المستقبل اديه كل التركيز🤩 .<br><span>— HAKUNA MATATA —</span>`,
    message: ""
  },
  {
    image: "assets/images/flower.jpeg",
    text: `<p class="personal-message">You aren't responsible for fixing everything that’s broken,take a break 🤍.<br><span>— REMINDER —</span>`,
    message: ""
  },
  {
    image: "assets/images/follow.jpeg",
    text: `<p class="personal-message">TRUST GOD, AND YOU 💛.<br><span>— REMINDER —</span>`,
    message: ""
  },
   {
    image: "assets/images/note.png",
    text: `<p class="personal-message">QUICK REMINDER.<br><span>— 🤍 —</span>`,
    message: ""
  },
  {
    image: "assets/images/god.jpeg",
    text: `أنا معكم كل الأيام إلى انقضاء الدهر.<br><br><span class="verse">(متى ٢٨ : ٢٠) 🕊️</span>`,
    message: ""
  }
];

document.getElementById("openNote").onclick = function() {
  homeCard.style.display = "none";
  noteCard.style.display = "block";

  let usedNotes = JSON.parse(localStorage.getItem("usedNotes")) || [];

  if (usedNotes.length >= notes.length) {
    usedNotes = [];
    localStorage.removeItem("usedNotes");
  }

  let availableIndexes = notes
    .map((_, index) => index)
    .filter(index => !usedNotes.includes(index));

  let randomIndex = Math.floor(Math.random() * availableIndexes.length);
  let selectedIndex = availableIndexes[randomIndex];
  let selectedNote = notes[selectedIndex];

  if (selectedIndex !== undefined) {
    usedNotes.push(selectedIndex);
    localStorage.setItem("usedNotes", JSON.stringify(usedNotes));
  }

  if (selectedNote) {
    noteImage.src = selectedNote.image;
    noteImage.style.display = "block";
    noteText.innerHTML = selectedNote.text || "";
    noteMessage.innerHTML = selectedNote.message || "";
  }
};

document.getElementById("backBtn").onclick = function() {
  noteCard.style.display = "none";
  homeCard.style.display = "block";
};
