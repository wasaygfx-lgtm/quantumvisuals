export default function AnimatedGradientBackground() {
  return (
    <div
      style={{
        zIndex: -1,
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        background:
          'radial-gradient(circle at center, hsla(266, 78%, 68%, 0.8) 0%, hsla(0, 0%, 0%, 0) 50%),' +
          'radial-gradient(circle at top left, hsla(266, 78%, 78%, 0.8) 0%, hsla(0, 0%, 0%, 0) 40%),' +
          'radial-gradient(circle at bottom right, hsla(266, 78%, 68%, 0.8) 0%, hsla(0, 0%, 0%, 0) 50%)',
        backgroundSize: '400% 400%',
        animation: 'animated-gradient 15s ease infinite',
        opacity: 0.15,
      }}
    />
  );
}
