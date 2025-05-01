const goleiro = document.getElementById("goleiro");
const bola = document.getElementById("bola");
const resultado = document.getElementById("resultado");

let posGoleiro = 200;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && posGoleiro > 0) {
    posGoleiro -= 20;
  } else if (e.key === "ArrowRight" && posGoleiro < 400) {
    posGoleiro += 20;
  }
  goleiro.style.left = `${posGoleiro}px`;
});

document.getElementById("chutarBtn").addEventListener("click", () => {
  const destino = Math.floor(Math.random() * 400) + 50;
  bola.style.left = destino + "px";
  bola.style.bottom = "250px";

  setTimeout(() => {
    const centroBola = destino + 25;
    const centroGoleiro = posGoleiro + 50;

    if (Math.abs(centroBola - centroGoleiro) < 60) {
      resultado.textContent = "DEFESA! 🧤";
    } else {
      resultado.textContent = "⚽ GOOOL!";
    }

    // Resetar bola
    bola.style.bottom = "20px";
    bola.style.left = "350px";
  }, 900);
});
