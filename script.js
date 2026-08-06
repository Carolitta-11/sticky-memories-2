const noteImage = document.getElementById("noteImage");
const noteMessage = document.getElementById("noteMessage");
const homeCard = document.getElementById("homeCard");
const noteCard = document.getElementById("noteCard");
const noteText = document.getElementById("noteText");

const notes = [
`
لا تخف لأني معك.<br><br>

لا تتلفت لأني إلهك.<br><br>

قد أيدتك وأعنتك وعضدتك بيمين بري.<br><br>

<span class="verse">
(إشعياء ٤١ : ١٠) 🌼
</span>
`,

`
الرب نوري وخلاصي ممن أخاف؟<br><br>

الرب حصن حياتي ممن أرتعب؟<br><br>

<span class="verse">
(مزمور ٢٧ : ١) ✨
</span>
`,

`

<p class="personal-message">
عوم و اتمخطر 🌊<br>
<span>— دوري —</span>
</p>
`,

`
أستطيع كل شيء في المسيح الذي يقويني.<br><br>

<span class="verse">
(فيلبي ٤ : ١٣) 🤍
</span>
`,

`
سلّم للرب طريقك واتكل عليه وهو يجري.<br><br>

<span class="verse">
(مزمور ٣٧ : ٥) 🌿
</span>
`,

`
أنا معكم كل الأيام إلى انقضاء الدهر.<br><br>

<span class="verse">
(متى ٢٨ : ٢٠) 🕊️
</span>
`
];

document.getElementById("openNote").onclick = function(){

    homeCard.style.display = "none";
    noteCard.style.display = "block";

    // جلب الرسائل التي ظهرت سابقاً
    let usedNotes = JSON.parse(localStorage.getItem("usedNotes")) || [];

    // لو كل الرسائل ظهرت نبدأ من جديد
    if (usedNotes.length === notes.length) {
        usedNotes = [];
    }

    // عمل قائمة بالرسائل المتبقية فقط
    let availableNotes = notes.filter((note, index) => {
        return !usedNotes.includes(index);
    });

    // اختيار رسالة عشوائية من المتبقي
    let randomIndex = Math.floor(Math.random() * availableNotes.length);

    let selectedNote = availableNotes[randomIndex];

   // معرفة رقم الرسالة الأصلية وحفظها
let selectedIndex = notes.indexOf(selectedNote);
usedNotes.push(selectedIndex);

localStorage.setItem("usedNotes", JSON.stringify(usedNotes));

// عرض الصورة
noteImage.src = "assets/images/first-message.jpg";
noteImage.style.display = "block";

// عرض الرسالة
noteText.innerHTML = selectedNote;
}


document.getElementById("backBtn").onclick = function(){

    noteCard.style.display = "none";
    homeCard.style.display = "block";

}

