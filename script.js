// Tarifas por tipo de vehículo
const tarifas = {
    pickup: { base: 500, km: 10, kg: 2, m3: 5 },
    camion_pequeno: { base: 700, km: 12, kg: 2.5, m3: 6 },
    camion_mediano: { base: 900, km: 14, kg: 3, m3: 7 },
    camion_grande: { base: 1200, km: 18, kg: 3.5, m3: 8 },
    volqueta: { base: 1100, km: 16, kg: 3.2, m3: 7.5 },
    camion_carga_mediano: { base: 1500, km: 20, kg: 4, m3: 9 },
    camion_carga_grande: { base: 2000, km: 25, kg: 5, m3: 10 },
  };
  
  document.getElementById("metodo").addEventListener("change", function () {
    const metodo = this.value;
    if (metodo === "peso") {
      document.getElementById("pesoInput").style.display = "block";
      document.getElementById("volumenInput").style.display = "none";
    } else {
      document.getElementById("pesoInput").style.display = "none";
      document.getElementById("volumenInput").style.display = "block";
    }
  });
  
  // Función para calcular el precio
  function calcular() {
    const distancia = Number(document.getElementById("distancia").value);
    const tipoVehiculo = document.getElementById("tipoVehiculo").value;
    const metodo = document.getElementById("metodo").value;
    const peso = Number(document.getElementById("peso").value);
    const volumen = Number(document.getElementById("volumen").value);
  
    if (!tarifas[tipoVehiculo]) {
      alert("Vehículo no válido.");
      return;
    }

    const { base, km, kg, m3 } = tarifas[tipoVehiculo];
  
    let precio = 0;
  
    if (metodo === "peso") {
      precio = base + distancia * km + peso * kg; //peso
    } else if (metodo === "volumen") {
      precio = base + distancia * km + volumen * m3; //volumen
    }
  
    // Mostramos el resultado
    document.getElementById("resultado").innerText = `Precio estimado: L. ${precio.toFixed(2)}`;
  }