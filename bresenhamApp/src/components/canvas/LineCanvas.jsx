import { Stage, Line, Layer, Circle } from 'react-konva';
import { useRef, useEffect, useState } from 'react';

function LineCanvas({ points }) {
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

    const scale = 7; // Escala fija pero centrado adaptable
    const originX = size.width / 2;
    const originY = size.height / 2;

    const transformPoint = (x, y) => {
        return [
            originX + (x * scale),
            originY - (y * scale)
        ];
    };

    const linePoints = points.flatMap(point => 
        transformPoint(point.x, point.y)
    );

    return (
        <div ref={containerRef} style={{ width: '100%', height: '400px', border: '1px solid #ccc' }}>
            <Stage width={size.width} height={size.height} style={{ backgroundColor: '#f9f9f9' }}>
                <Layer>
                    {/* Ejes */}
                    <Line points={[0, originY, size.width, originY]} stroke="#ddd" strokeWidth={1} />
                    <Line points={[originX, 0, originX, size.height]} stroke="#ddd" strokeWidth={1} />

                    {/* Línea */}
                    <Line points={linePoints} stroke="#1976d2" strokeWidth={3} lineCap="round" />
                    
                    {/* Puntos */}
                    {points.map((point, index) => {
                        const [x, y] = transformPoint(point.x, point.y);
                        return <Circle key={index} x={x} y={y} radius={4} fill="#ff0000" stroke="#fff" strokeWidth={1} />;
                    })}
                </Layer>
            </Stage>
        </div>
    );
}

export default LineCanvas;