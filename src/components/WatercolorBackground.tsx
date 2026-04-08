interface WatercolorBackgroundProps {
  opacity?: number;
  className?: string;
}

const WatercolorBackground = ({ opacity = 0.3, className = "" }: WatercolorBackgroundProps) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{
        opacity,
        backgroundImage: 'url(/watercolor-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    />
  );
};

export default WatercolorBackground;
