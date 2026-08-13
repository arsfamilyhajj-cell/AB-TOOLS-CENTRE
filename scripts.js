const defaults = {
  business:"AB Tools Centre",
  phone:"+00 000 000 0000",
  whatsapp:"+00 000 000 0000",
  email:"sales@abtoolscentre.com",
  address:"Your shop address, City, Country",
  hours:"Mon–Sat: 8:00 AM – 7:00 PM",
  heroTitle:"The Right Tools for Every Job.",
  heroText:"AB Tools Centre supplies dependable hand tools, power tools, welding machines and workshop essentials for tradespeople, contractors, fabricators and serious DIY users.",
  aboutText:"AB Tools Centre is positioned as a practical, trade-focused destination for tools, power tools and welding equipment. Use this section to tell your real story: when the business started, where you are located, the brands you stock, and why customers trust you.",
  logo:"assets/ab-tools-centre-logo.png"
};

const $ = (id) => document.getElementById(id);
const saved = JSON.parse(localStorage.getItem("abToolsCentreSettings") || "null");
const settings = {...defaults, ...(saved || {})};

function applySettings(){
  $("topContact").textContent = "Call: " + settings.phone;
  $("phoneText").textContent = settings.phone;
  $("whatsappText").textContent = settings.whatsapp;
  $("emailText").textContent = settings.email;
  $("addressText").textContent = settings.address;
  $("hoursText").textContent = settings.hours;
  $("heroTitle").textContent = settings.heroTitle;
  $("heroText").textContent = settings.heroText;
  $("aboutText").textContent = settings.aboutText;
  document.querySelectorAll("#siteLogo,.footer-logo").forEach(img => img.src = settings.logo);
  document.title = settings.business + " | Tools • Power Tools • Welding";
}

function fillEditor(){
  $("editBusiness").value=settings.business;
  $("editPhone").value=settings.phone;
  $("editWhatsapp").value=settings.whatsapp;
  $("editEmail").value=settings.email;
  $("editAddress").value=settings.address;
  $("editHours").value=settings.hours;
  $("editHeroTitle").value=settings.heroTitle;
  $("editHeroText").value=settings.heroText;
  $("editAboutText").value=settings.aboutText;
}

function openEditor(){
  $("editor").classList.add("open");
  $("editorBackdrop").classList.add("open");
  $("editor").setAttribute("aria-hidden","false");
  fillEditor();
}
function closeEditor(){
  $("editor").classList.remove("open");
  $("editorBackdrop").classList.remove("open");
  $("editor").setAttribute("aria-hidden","true");
}

$("openEditor").addEventListener("click", openEditor);
$("closeEditor").addEventListener("click", closeEditor);
$("editorBackdrop").addEventListener("click", closeEditor);

$("saveEdits").addEventListener("click", ()=>{
  Object.assign(settings,{
    business:$("editBusiness").value.trim() || defaults.business,
    phone:$("editPhone").value.trim() || defaults.phone,
    whatsapp:$("editWhatsapp").value.trim() || defaults.whatsapp,
    email:$("editEmail").value.trim() || defaults.email,
    address:$("editAddress").value.trim() || defaults.address,
    hours:$("editHours").value.trim() || defaults.hours,
    heroTitle:$("editHeroTitle").value.trim() || defaults.heroTitle,
    heroText:$("editHeroText").value.trim() || defaults.heroText,
    aboutText:$("editAboutText").value.trim() || defaults.aboutText
  });
  localStorage.setItem("abToolsCentreSettings", JSON.stringify(settings));
  applySettings();
  alert("Changes saved in this browser.");
});

$("resetEdits").addEventListener("click", ()=>{
  localStorage.removeItem("abToolsCentreSettings");
  Object.assign(settings,defaults);
  fillEditor(); applySettings();
});

$("exportSettings").addEventListener("click", ()=>{
  const blob = new Blob([JSON.stringify(settings,null,2)],{type:"application/json"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="ab-tools-centre-settings.json";
  a.click();
  URL.revokeObjectURL(a.href);
});

$("logoUpload").addEventListener("change",(e)=>{
  const file=e.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{
    settings.logo=reader.result;
    localStorage.setItem("abToolsCentreSettings",JSON.stringify(settings));
    applySettings();
    alert("Logo updated for this browser. For GitHub, place the final logo in assets/ and update the path in scripts.js.");
  };
  reader.readAsDataURL(file);
});

document.querySelector(".menu-toggle").addEventListener("click",()=>{
  const nav=$("mainNav");
  const open=nav.classList.toggle("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded",open);
});

document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>$("mainNav").classList.remove("open")));

$("contactForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const subject=encodeURIComponent("Quote request from " + data.get("name"));
  const body=encodeURIComponent(
    "Name: "+data.get("name")+"\nPhone: "+data.get("phone")+"\n\nRequest:\n"+data.get("message")
  );
  window.location.href=`mailto:${settings.email}?subject=${subject}&body=${body}`;
});

$("year").textContent=new Date().getFullYear();
applySettings();
