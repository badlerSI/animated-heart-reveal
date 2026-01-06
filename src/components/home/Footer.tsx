const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/SoulWaveMachineWhite.png" 
            alt="Soul Interface" 
            className="h-8 w-auto opacity-80"
          />
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-500">
            © 2026 Soul Interface
          </p>
          <p className="text-xs text-gray-600 mt-1">
            NVIDIA is a registered trademark of NVIDIA Corporation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;