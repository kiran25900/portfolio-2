const ecosystemLinks = [
  { label: "Documentation", href: "#" },
  { label: "Source", href: "#" },
  { label: "Components", href: "#" },
  { label: "Resources", href: "#" },
];

const companyLinks = [
  { label: "Privacy", href: "#" },
  { label: "Status", href: "#" },
  { label: "Journal", href: "#" },
  { label: "Careers", href: "#" },
];

const socialIcons = [
  { icon: "code", label: "GitHub", href: "#" },
  { icon: "hub", label: "Network", href: "#" },
  { icon: "alternate_email", label: "Email", href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-t border-zinc-200 bg-[#f1f5ec]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 max-w-7xl mx-auto">
        {/* Brand Column */}
        <div>
          <div className="font-headline font-black uppercase text-zinc-400 text-2xl mb-6">
            OSBORN
          </div>
          <p className="text-zinc-500 max-w-sm mb-8">
            A passionate Full Stack Engineer dedicated to crafting beautiful, functional, and user-centric digital experiences.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((social) => (
              <a
                key={social.label}
                href={social.href}
                id={`footer-social-${social.label.toLowerCase()}`}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined text-sm">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-headline font-bold text-primary mb-4">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              {ecosystemLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-primary mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-12 py-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-zinc-500 text-sm font-body tracking-wide">
          © {new Date().getFullYear()} OSBORN — CRAFTED WITH PASSION
        </span>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400">
            Available for Work
          </span>
        </div>
      </div>
    </footer>
  );
}
