const container = document.getElementById("results");
const favorites = JSON.parse(localStorage.getItem("favorites")||"[]");

function render(list){
  container.innerHTML="";
  list.forEach(item=>{
    const fav = favorites.includes(item.title) ? "❤️" : "🤍";
    container.innerHTML += `
    <a href="${item.link}" class="card glass p-6 rounded-xl hover:glow" data-aos="fade-up">
      <h3 class="text-xl font-bold">${item.title} <span class="text-red-400">${fav}</span></h3>
      <p class="text-gray-300">${item.desc}</p>
      <span class="text-sm text-blue-400">${item.category}</span>
    </a>`;
  });
}

function filter(cat){
  if(cat==="全部") render(data);
  else render(data.filter(d=>d.category===cat));
}

document.getElementById("search").addEventListener("input", e=>{
  const val = e.target.value.toLowerCase();
  render(data.filter(d=> d.title.toLowerCase().includes(val) || d.desc.toLowerCase().includes(val) ));
});

document.getElementById("toggleTheme").addEventListener("click", ()=>{
  document.body.classList.toggle("bg-white");
  document.body.classList.toggle("text-black");
});