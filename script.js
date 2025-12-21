// Dinamik yil
document.getElementById('year').textContent = new Date().getFullYear();

// Demo yangiliklar ma'lumotlari
const NEWS = [
  { title: "Ilmiy konferensiya bo‘lib o‘tdi", date: "2025-03-14", excerpt: "Talabalar va professorlar ilmiy ma'ruzalar bilan ishtirok etishdi." },
  { title: "Qabul 2025 boshlandi", date: "2025-06-01", excerpt: "Bakalavr va magistratura uchun onlayn ro‘yxatdan o‘tish ochildi." },
  { title: "Yangi laboratoriya ochildi", date: "2025-02-20", excerpt: "Zamonaviy jihozlangan IT laboratoriya talabalarga foydalanishga topshirildi." },
  { title: "Talabalar hackathon g‘olib bo‘lishdi", date: "2025-04-02", excerpt: "Jamoalar innovatsion loyihalar taqdim etishdi." },
  { title: "Xalqaro hamkorlik kengaymoqda", date: "2025-05-10", excerpt: "Chet el universitetlari bilan memorandumlar imzolandi." },
  { title: "Kutubxona fondi yangilandi", date: "2025-03-28", excerpt: "Yangi elektron resurslar va darsliklar qo‘shildi." }
];

let page = 1;
const pageSize = 3;

function renderNews() {
  const container = document.getElementById('news-list');
  const start = (page - 1) * pageSize;
  const slice = NEWS.slice(start, start + pageSize);

  slice.forEach(n => {
    const div = document.createElement('div');
    div.className = 'news-item';
    div.innerHTML = `
      <h3>${n.title}</h3>
      <time>${n.date}</time>
      <p>${n.excerpt}</p>
    `;
    container.appendChild(div);
  });

  // Tugma holati
  const btn = document.getElementById('loadMore');
  if (start + pageSize >= NEWS.length) {
    btn.disabled = true;
    btn.textContent = "Barchasi yuklandi";
  } else {
    btn.disabled = false;
    btn.textContent = "Ko‘proq yangiliklar";
  }
}
renderNews();

document.getElementById('loadMore').addEventListener('click', () => {
  page++;
  renderNews();
});

// Kontakt forma yuborilganda holat xabari
const form = document.getElementById('contactForm');
const statusBox = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  // Frontend tekshiruv
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    statusBox.textContent = "Iltimos, barcha maydonlarni to‘ldiring.";
    statusBox.style.color = "#c0392b";
    return;
  }

  statusBox.textContent = "Yuborilmoqda...";
  statusBox.style.color = "#667085";
});




