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
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Soul Interface
        </p>
      </div>
    </footer>
  );
};

export default Footer;