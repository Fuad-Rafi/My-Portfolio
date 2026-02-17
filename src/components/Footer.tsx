const Footer = () => (
  <footer className="border-t border-border/30 py-8 px-4">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display font-bold gradient-text text-lg">Fuad.</p>
      <div className="flex flex-col items-center md:items-end gap-1">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} MD Fuyad Ibnay Rafi. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs opacity-60">
          Icon by <a href="https://www.flaticon.com/free-icons/portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">Freepik - Flaticon</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
