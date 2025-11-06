import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © 2025 Parvez Mahamud. Built with{" "}
            <Heart className="text-accent" size={16} fill="currentColor" />
            and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
