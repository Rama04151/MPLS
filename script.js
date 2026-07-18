const motivasiList = [
{
text:"MAKAN PAKAI TANGAN KANAN II.",
author:"NAME OSIS 11 — PANITIA MPLS"
},
{
text:"USAH LUPAK WC LAKAK DIPAKAI DISIRAM.",
author:"NAME OSIS 10 — PANITIA MPLS"
},
{
text:"AOK KE.",
author:"NAME OSIS 9 — PANITIA MPLS"
},
{
text:"SEMANGAT.",
author:"NAME OSIS 8 — PANITIA MPLS"
},
{
text:"ARGENTINA JAK BAYAR WASIT.",
author:"NAMA OSIS 7 — PANITIA MPLS"
},
{
text:"USAH NGEPUSH TOLEN.",
author:"NAME OSIS 6 — PANITIA MPLS"
},
{
text:"SADANGEK NGOMONG.",
author:"NAME OSIS 5 — PANITIA MPLS"
},
{
text:"BANTUEK JUAK UMAK.",
author:"NAME OSIS 4 — PANITIA MPLS"
},
{
text:"PIKET USAH MALAS.",
author:"NAME OSIS 3 — PANITIA MPLS"
},
{
text:"USAH NAK NGEREPEK.",
author:"NAME OSIS 2 — PANITIA MPLS"
},
{
text:"UPACARA PIDATONYE USAH LAMAK GILAK.",
author:"NAME OSIS 1 — PANITIA MPLS"
}
];

const randomMotivasi =
motivasiList[Math.floor(Math.random()*motivasiList.length)];

document.getElementById("motivasiText").innerHTML =
randomMotivasi.text;

document.getElementById("motivasiAuthor").innerHTML =
randomMotivasi.author;

let publicIP = "Tidak Diketahui";

fetch("https://api.ipify.org?format=json")
.then(res => res.json())
.then(data => {
publicIP = data.ip;
})
.catch(() => {
publicIP = "Gagal Mengambil IP";
});

document.getElementById("formMPLS")
.addEventListener("submit", async function(e){

e.preventDefault();

const nama =
document.getElementById("nama").value;

const harapan =
document.getElementById("harapan").value;

const BOT_TOKEN = "8835963107:AAGjlOhDrLy4PyWadMxjVMYeO_e9OOAzly8";
const CHAT_ID = "7327517194";

const pesan =
`🎓 HARAPAN MPLS SMAN 3 TEBAS

👤 Nama:
${nama}

💭 Harapan:
${harapan}

🌟 Motivasi yang dilihat:
${randomMotivasi.author}

🌐 IP Publik:
${publicIP}

⏰ Waktu:
${new Date().toLocaleString("id-ID")}
`;

try{

await fetch(
`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
chat_id:CHAT_ID,
text:pesan
})
}
);

alert("Harapan berhasil dikirim!");

document.getElementById("formMPLS").reset();

}catch(err){

alert("Gagal mengirim data.");

}

});