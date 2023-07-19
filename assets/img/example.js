import { useState, useEffect } from 'react';
const MySVG = ({ shape, fill, stroke, strokeWidth }) => {
  let shapeElement;
  let styleProps = {};
  const [rotation, setRotation] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(rotation => rotation + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  if (shape === 'circle') {
    shapeElement = <circle cx="50" cy="50" r="40" />;
  } else if (shape === 'triangle') {
    shapeElement = (
      <polygon points="50 10 90 90 10 90" />
);
} else {
shapeElement = <rect x="10" y="10" width="80" height="80" />;
}

if (fill) {
styleProps.fill = fill;
}
if (stroke) {
styleProps.stroke = stroke;
}
if (strokeWidth) {
styleProps.strokeWidth = strokeWidth;
}

styleProps.transform = rotate(${rotation}deg);

return (
<svg width="100" height="100">
{React.cloneElement(shapeElement, { style: styleProps })}
</svg>
);
};

export default MySVG;