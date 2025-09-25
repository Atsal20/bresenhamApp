export function bresenhamLine(x0, y0, x1, y1) {
    let points = [];
    x0 = Math.round(Number(x0));
    y0 = Math.round(Number(y0));
    x1 = Math.round(Number(x1));
    y1 = Math.round(Number(y1));

    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = (x0 < x1) ? 1 : -1;
    let sy = (y0 < y1) ? 1 : -1;

    let m = dy / dx;

    if (m <= 1) {
        // Caso pendiente <= 1
        let pk = 2 * dy - dx; // pk inicial
        
        while (x0 !== x1) {
            points.push({ x: x0, y: y0, pk: pk });
            
            if (pk >= 0) {
                y0 += sy;
                pk = pk + 2 * dy - 2 * dx;
            } else {
                pk = pk + 2 * dy;
            }
            x0 += sx;
        }
        // Añadir el punto final
        points.push({ x: x0, y: y0, pk: pk });
    } else {
        // Caso pendiente > 1
        let pk = 2 * dx - dy; // pk inicial CORREGIDO
        
        while (y0 !== y1) {
            points.push({ x: x0, y: y0, pk: pk });
            
            if (pk >= 0) {
                x0 += sx;
                pk = pk + 2 * dx - 2 * dy;
            } else {
                pk = pk + 2 * dx;
            }
            y0 += sy;
        }
        // Añadir el punto final
        points.push({ x: x0, y: y0, pk: pk });
    }

    return points;
}