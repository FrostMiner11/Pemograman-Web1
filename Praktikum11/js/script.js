document.querySelectorAll("a").forEach((a) => {
  // Jika di klik akan menjalankan fungsi computerChoice()
  a.addEventListener("click", (element) => {
    computerChoice(element);
  });
});

function computerChoice(element) {
  // pilihan User
  let pilihanUser = element.target.innerText;

  // Menangkap element pilihan komputer
  let pilihanKomputer = document.querySelector("#result");

  // Membuat pilihan komputer dengan array
  let choices = ["Rock", "Paper", "Scissors"];

  // Membuat pilihan komputer secara random
  pilihanKomputer.innerHTML = choices[Math.round(Math.random() * 2)];
  pilihanKomputer = pilihanKomputer.innerHTML;

  // Jika pilihan user == pilihan komputer (Draw)
  if (pilihanUser == pilihanKomputer) {
    alert("DRAW");
    setTimeout(()=>alert("DRAW"), 200)
  }

  // Paper & Rock Win And Lose
  if (pilihanKomputer == "Paper" && pilihanUser == "Rock") {
    setTimeout(()=>alert("YOU LOSE AND COMPUTER WIN"), 200)
  } else if (pilihanUser == "Paper" && pilihanKomputer == "Rock") {
    setTimeout(()=>alert("YOU WIN AND COMPUTER LSOE"), 200)
  }

  // Rock & Scissors Win And Lose
  if (pilihanKomputer == "Rock" && pilihanUser == "Scissors") {
    setTimeout(()=>alert("YOU LOSE AND COMPUTER WIN"), 200)
  } else if (pilihanUser == "Rock" && pilihanKomputer == "Scissors") {
    setTimeout(()=>alert("YOU WIN AND COMPUTER LOSE"), 200)
  }

  //   Scissors & Paper Win And Lose
  if (pilihanKomputer == "Scissors" && pilihanUser == "Paper") {
    setTimeout(()=>alert("YOU LOSE AND COMPUTER WIN"), 200)
  } else if (pilihanUser == "Scissors" && pilihanKomputer == "Paper") {
    setTimeout(()=>alert("YOU LOSE WIN COMPUTER LOSE"), 200)
  }
}
