// Algoritmo de Bresenham para circunferencia (punto medio)
export function bresenhamCircle(radio) {
  let x = 0;
  let y = radio;
  let pk = 1 - radio;
  let points = [];

  while (x <= y) {
    // Generar todos los puntos simétricos para este (x,y)
    const puntosSimetricos = [
      { x, y }, { x: y, y: x }, { x: -x, y: y }, { x: -y, y: x },
      { x: -x, y: -y }, { x: -y, y: -x }, { x, y: -y }, { x: y, y: -x }
    ];

    // Crear string con todos los puntos simétricos
    const simetriaStr = puntosSimetricos.map(p => `(${p.x},${p.y})`).join(', ');

    // Guardar solo el punto base con la columna de simetría
    points.push({
      x: x,
      y: y,
      pk: pk,
      simetria: simetriaStr
    });

    x++;
    if (pk < 0) {
      pk = pk + 2 * x + 1;
    } else {
      y--;
      pk = pk + 2 * (x - y) + 1;
    }
  }

  return points;
}