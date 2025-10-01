import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">La Belle Maison</h3>
            <p className="text-primary-foreground/80">
              Where Culinary Art Meets Timeless Elegance
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary flex items-center justify-center transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary flex items-center justify-center transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-gold hover:text-primary flex items-center justify-center transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} La Belle Maison. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
