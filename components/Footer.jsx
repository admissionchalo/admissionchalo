const FOOTER_LINKS = {
  Explore: [
    { label: "Colleges", href: "/colleges" },
    { label: "Courses", href: "/courses" },
    { label: "Exams", href: "/exams" },
    { label: "Rankings", href: "/rankings" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "News", href: "/news" },
  ],
  Support: [
    { label: "Free Counselling", href: "/counselling" },
    { label: "Help Center", href: "/help" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const SOCIAL_LINKS = ["Instagram", "Twitter", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold font-heading text-lg font-bold text-charcoal">
                A
              </span>
              <span className="font-heading text-lg font-bold text-white">
                Admission<span className="text-gold">Chalo</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs font-body text-sm font-normal text-white/50">
              India's trusted portal for college admissions. Compare colleges,
              track exams, and get expert counselling, all in one place.
            </p>

            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((name) => (
                <a key={name} href="#" aria-label={name} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 font-body text-xs font-bold text-white/60 transition hover:border-gold hover:text-gold">
                  {name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {Object.keys(FOOTER_LINKS).map((heading) => (
            <div key={heading}>
              <h3 className="font-heading text-sm font-bold text-white">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {FOOTER_LINKS[heading].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-body text-sm font-normal text-white/50 transition hover:text-gold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gold/20 bg-white/5 px-6 py-6 sm:flex sm:items-center sm:justify-between sm:px-8">
          <div>
            <h3 className="font-heading text-base font-bold text-white">
              Stay updated on admissions
            </h3>
            <p className="mt-1 font-body text-sm font-normal text-white/50">
              Get exam dates and college news straight to your inbox.
            </p>
          </div>

          <div className="mt-4 flex gap-2 sm:mt-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full min-w-0 rounded-full border border-white/15 bg-transparent px-4 py-2.5 font-body text-sm text-white placeholder:text-white/40 focus:outline-none sm:w-64"
            />
            <button className="flex-shrink-0 rounded-full bg-gold px-5 py-2.5 font-heading text-sm font-bold text-charcoal transition hover:bg-gold-dark">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 sm:flex-row">
          <p className="font-body text-xs font-normal text-white/40">
            (c) 2026 AdmissionChalo. All rights reserved. Sample data for demo purposes.
          </p>
          <div className="flex gap-5">
            <a href="/privacy" className="font-body text-xs font-normal text-white/40 transition hover:text-gold">
              Privacy
            </a>
            <a href="/terms" className="font-body text-xs font-normal text-white/40 transition hover:text-gold">
              Terms
            </a>
            <a href="/sitemap" className="font-body text-xs font-normal text-white/40 transition hover:text-gold">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}