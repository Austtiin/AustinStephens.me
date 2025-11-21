export function FloatingDecorations() {
  return (
    <div className="absolute pointer-events-none" style={{ top: 0, left: 0, right: 0, height: '100%', minHeight: '500vh', zIndex: 0 }}>
      <div className="absolute left-[5%] opacity-10" style={{ top: 'calc(100vh + 100px)', animation: 'float-slow 8s ease-in-out infinite' }}>
        <div style={{ width: '80px', height: '60px', background: 'linear-gradient(135deg, #2d8b7f 0%, #9AD2CB 100%)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(45, 139, 127, 0.2)' }} />
      </div>
      {/* (Trimmed for brevity – additional decoration blocks can be re-added similarly) */}
    </div>
  );
}
export default FloatingDecorations;