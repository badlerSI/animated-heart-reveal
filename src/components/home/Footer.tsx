import { Link } from "react-router-dom";

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
        
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <Link to="/tech" className="hover:text-[#2FC5ED] transition-colors">Technology</Link>
          <Link to="/vision" className="hover:text-[#2FC5ED] transition-colors">Vision</Link>
          <Link to="/news" className="hover:text-[#2FC5ED] transition-colors">News</Link>
          <Link to="/partner" className="hover:text-[#2FC5ED] transition-colors">Partner</Link>
          <Link to="/investors" className="hover:text-[#2FC5ED] transition-colors">Investors</Link>
        </nav>
        
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Soul Interface
        </p>
      </div>
    </footer>
  );
};

export default Footer;
