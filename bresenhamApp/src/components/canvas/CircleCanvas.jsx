import { Stage, Layer, Circle, Line } from 'react-konva';
import { useRef, useEffect, useState } from 'react';

function CircleCanvas({ points }) {
    const containerRef = useRef(null);
    const [size, setSize] = useState({ width: 500, height: 500 });


    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setSize({ width, height: height || width });
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);
        
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const scale = 15;
    const originX = size.width / 2;
    const originY = size.height / 2;

    const transformPoint = (x, y) => {
        return [
            originX + (x * scale),
            originY - (y * scale)
        ];
    };

    // Obtener todos los puntos únicos del círculo
    const getAllPoints = () => {
        const allPoints = [];
        points.forEach(point => {
            const puntosSimetricos = point.simetria.split(', ');
            puntosSimetricos.forEach(puntoStr => {
                const match = puntoStr.match(/\((-?\d+),(-?\d+)\)/);
                if (match) {
                    allPoints.push({
                        x: parseInt(match[1]),
                        y: parseInt(match[2])
                    });
                }
            });
        });
        
        // Eliminar duplicados
        return allPoints.filter((point, index, self) =>
            index === self.findIndex(p => p.x === point.x && p.y === point.y)
        );
    };

    const circlePoints = getAllPoints();

    return (
        <div ref={containerRef} style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
            <Stage width={size.width} height={size.height} style={{ backgroundColor: '#f9f9f9' }}>
                <Layer>
                    {/* Ejes */}
                    <Line points={[0, originY, size.width, originY]} stroke="#ddd" strokeWidth={1} />
                    <Line points={[originX, 0, originX, size.height]} stroke="#ddd" strokeWidth={1} />

                    {/* Todos los puntos del círculo */}
                    {circlePoints.map((point, index) => {
                        const [x, y] = transformPoint(point.x, point.y);
                        return (
                            <Circle
                                key={index}
                                x={x}
                                y={y}
                                radius={4}
                                fill="#1976d2"
                                stroke="#fff"
                                strokeWidth={1}
                            />
                        );
                    })}
                </Layer>
            </Stage>
        </div>
    );
}

export default CircleCanvas;