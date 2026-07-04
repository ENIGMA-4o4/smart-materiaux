/* ==========================================================================
   SMART MATÉRIAUX — script.js
   Vanilla JS: bilingual FR/EN toggle, sticky nav, mobile menu, scroll
   reveal, project filter, scrollspy, and a mailto-based contact form.
   No frameworks, no build step — works as-is on GitHub Pages.
   ========================================================================== */

(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* 1. i18n — English translations (French lives in the HTML directly) */
  /* ------------------------------------------------------------------ */
  const EN = {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.onGrid": "On-Grid",
    "nav.offGrid": "Off-Grid",
    "nav.pompage": "Solar Water Pumping",
    "nav.products": "Products",
    "nav.projects": "Projects",
    "nav.about": "About Us",
    "nav.contact": "Contact",

    "hero.eyebrow": "SOLAR ENERGY · GUELMIM & REGION",
    "hero.title1": "Smart solar solutions",
    "hero.title2": "built for the field",
    "hero.title3": "in agriculture and industry",
    "hero.sub": "Installation, diagnostics and repair of on-grid, off-grid and solar water pumping systems, designed for farms and industrial sites across the Guelmim region.",
    "hero.ctaPrimary": "Request a quote",
    "hero.ctaSecondary": "Discover our services",
    "hero.cap1": "Turnkey installation",
    "hero.cap2": "Technical diagnostics",
    "hero.cap3": "Repair & after-sales",

    "trust.location": "📍 GUELMIM, MOROCCO",
    "trust.sector": "AGRICULTURAL & INDUSTRIAL SOLUTIONS",
    "trust.irrigation": "IRRIGATION & AGRICULTURAL PROJECTS",

    "services.eyebrow": "OUR SYSTEMS",
    "services.title": "Three systems. One single expertise.",
    "services.sub": "Grid-connected, fully autonomous, or built for irrigation — we install, diagnose and repair your solar system.",
    "services.onGrid.title": "On-Grid",
    "services.onGrid.desc": "Connected to the national power grid, cuts your bill through solar self-consumption, no batteries required.",
    "services.offGrid.title": "Off-Grid",
    "services.offGrid.desc": "Autonomous battery-based system for sites with no access to the grid: farms, workshops, remote sites.",
    "services.pompage.title": "Solar Water Pumping",
    "services.pompage.desc": "Pumps water directly with solar power, no battery needed — ideal for irrigation and livestock watering.",
    "services.learnMore": "Learn more",
    "services.maintenance.title": "Maintenance",
    "services.maintenance.desc": "Ongoing technical support for your installation: regular diagnostics and fast repair, whatever the system.",

    "tag.installation": "Installation",
    "tag.diagnostic": "Diagnostics",
    "tag.repair": "Repair",

    "onGrid.title": "Grid-connected system",
    "onGrid.desc": "Connected directly to the national power grid, the on-grid system prioritizes solar power and switches automatically to the grid when needed. Ideal for cutting energy costs at a site that's already connected.",
    "onGrid.li1": "Installation of certified inverters and panels",
    "onGrid.li2": "Production and efficiency diagnostics",
    "onGrid.li3": "Repair and preventive maintenance",
    "onGrid.li4": "Sizing tailored to your actual consumption",

    "offGrid.title": "Autonomous battery system",
    "offGrid.desc": "Built for isolated sites far from the power grid: remote farms, workshops, caretaker housing. The off-grid system stores solar energy in batteries for full autonomy, day and night.",
    "offGrid.li1": "Battery sizing based on your real needs",
    "offGrid.li2": "Installation of panels, charge controllers and inverters",
    "offGrid.li3": "Autonomy and storage diagnostics",
    "offGrid.li4": "After-sales service and component replacement",

    "pompage.title": "Solar pumping for agriculture",
    "pompage.desc": "A solution built for irrigation and livestock watering across the agricultural areas of the Guelmim region. Solar pumping runs without batteries, powered directly by the sun, for near-zero operating costs.",
    "pompage.li1": "Borehole flow rate and depth assessment",
    "pompage.li2": "Installation of submersible and surface pumps",
    "pompage.li3": "Hydraulic performance diagnostics",
    "pompage.li4": "Seasonal repair and maintenance",

    "maintenance.title": "Diagnostics and repair, for every system",
    "maintenance.desc": "A high-performing solar system is a well-maintained one. Our maintenance service covers full technical diagnostics and fast repair for your on-grid, off-grid or solar pumping installations, keeping their performance steady over time.",
    "maintenance.li1": "Full performance and safety diagnostics",
    "maintenance.li2": "Repair of panels, inverters, batteries and pumps",
    "maintenance.li3": "Seasonal maintenance contracts",
    "maintenance.li4": "Fast on-site response in Guelmim and the region",

    "products.eyebrow": "EQUIPMENT",
    "products.title": "Equipment for your solar installation",
    "products.sub": "We supply and install reliable equipment, selected for agricultural and industrial field conditions.",
    "prod.panels.title": "Solar Panels",
    "prod.panels.desc": "High-performance photovoltaic modules, built for high heat conditions.",
    "prod.inverters.title": "Inverters & Controllers",
    "prod.inverters.desc": "On-grid / off-grid inverters and MPPT & PWM charge controllers.",
    "prod.batteries.title": "Batteries",
    "prod.batteries.desc": "Long-life solar batteries for off-grid autonomous systems.",
    "prod.pumps.title": "Solar Pumps",
    "prod.pumps.desc": "Submersible and surface pumps for irrigation and livestock watering.",
    "prod.mounting.title": "Mounting Structures",
    "prod.mounting.desc": "Sturdy mounting structures for ground or rooftop installation.",
    "prod.cabling.title": "Cabling & Connectors",
    "prod.cabling.desc": "Certified cables, connectors and protection gear for solar installations.",
    "prod.protection.title": "Electrical Protection Elements",
    "prod.protection.desc": "Circuit breakers, surge protectors and fuses to secure your solar installation.",
    "prod.hydraulic.title": "Hydraulic Connection Accessories",
    "prod.hydraulic.desc": "Fittings, valves and accessories for your solar pumping installations.",
    "prod.cta": "Contact us",

    "projects.eyebrow": "PROJECTS",
    "projects.title": "Our installations in the field",
    "projects.sub": "A look at our recent work in Guelmim and the surrounding region.",
    "filter.all": "All",
    "proj.p1.title": "Agricultural farm",
    "proj.p1.loc": "Guelmim region",
    "proj.p2.title": "Industrial workshop",
    "proj.p2.loc": "Guelmim",
    "proj.p3.title": "Remote farm",
    "proj.p3.loc": "Guelmim region",
    "proj.p4.title": "Packaging facility",
    "proj.p4.loc": "Guelmim",
    "proj.p5.title": "Agricultural borehole",
    "proj.p5.loc": "Guelmim region",
    "proj.p6.title": "Remote site",
    "proj.p6.loc": "Guelmim region",

    "about.eyebrow": "WHO WE ARE",
    "about.title": "Solar expertise for agriculture and industry",
    "about.p1": "Smart Matériaux is a Moroccan company specialized in solar solutions for the agricultural and industrial sectors, based in Guelmim. We support our clients from technical study through to maintenance, for on-grid, off-grid and solar pumping installations built to last. Our activity also covers irrigation and agricultural project realization.",
    "about.p2": "Our approach: understand the field before proposing a solution. Every farm, every workshop has its own constraints — that's why every system is sized to measure.",
    "about.v1.title": "Technical expertise",
    "about.v1.desc": "Installation, diagnostics and repair by a team specialized in solar energy.",
    "about.v2.title": "Tailor-made solutions",
    "about.v2.desc": "Every system is sized to the site's real needs and activity.",
    "about.v3.title": "Agriculture & industry",
    "about.v3.desc": "Irrigation, pumping and agricultural project realization, alongside full industrial expertise.",
    "about.v4.title": "Regional proximity",
    "about.v4.desc": "Based in Guelmim, serving the entire region.",

    "contact.eyebrow": "CONTACT",
    "contact.title": "Let's talk about your solar project",
    "contact.sub": "Diagnostics, quotes or technical questions — reach us directly.",
    "contact.address": "ADDRESS",
    "contact.phone": "LANDLINE",
    "contact.email": "EMAIL",

    "form.title": "Send a request",
    "form.sub": "Fill out the form and we'll get back to you shortly.",
    "form.name": "Full name",
    "form.namePh": "Your name",
    "form.phone": "Phone",
    "form.phonePh": "06 XX XX XX XX",
    "form.email": "Email",
    "form.emailPh": "you@example.com",
    "form.system": "System of interest",
    "form.systemPh": "Select an option",
    "form.systemOther": "Other / Not sure",
    "form.service": "Service needed",
    "form.servicePh": "Select an option",
    "form.serviceInstall": "Installation",
    "form.serviceMaintenance": "Maintenance (diagnostics and repair)",
    "form.message": "Message",
    "form.messagePh": "Describe your project or need...",
    "form.submit": "Send request",
    "form.note": "Clicking “Send” opens your email app with the request pre-filled. You can also reach us directly on WhatsApp.",

    "footer.desc": "Installation, diagnostics and repair of on-grid, off-grid and solar water pumping systems for agriculture and industry. Based in Guelmim, Morocco.",
    "footer.nav": "NAVIGATION",
    "footer.systems": "SYSTEMS",
    "footer.contact": "CONTACT",
    "footer.copyright": "© 2026 Smart Matériaux. All rights reserved."
  };

  // Cache the original French text the first time we see each element
  const FR_CACHE = new Map();

  function cacheOriginals() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      FR_CACHE.set(el, el.textContent);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      FR_CACHE.set(el, el.getAttribute("placeholder"));
    });
  }

  function setLanguage(lang) {
    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (lang === "en" && EN[key]) {
        el.textContent = EN[key];
      } else {
        el.textContent = FR_CACHE.get(el);
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (lang === "en" && EN[key]) {
        el.setAttribute("placeholder", EN[key]);
      } else {
        el.setAttribute("placeholder", FR_CACHE.get(el));
      }
    });

    document.getElementById("langFr").classList.toggle("active", lang === "fr");
    document.getElementById("langEn").classList.toggle("active", lang === "en");
    document.title = lang === "en"
      ? "Smart Matériaux — On-Grid, Off-Grid & Solar Pumping Installation | Guelmim"
      : "Smart Matériaux — Installation Solaire On-Grid, Off-Grid & Pompage | Guelmim";
  }

  /* ------------------------------------------------------------------ */
  /* 2. Sticky header + mobile menu                                     */
  /* ------------------------------------------------------------------ */
  function initHeader() {
    const header = document.getElementById("siteHeader");
    const burger = document.getElementById("navBurger");
    const mobileMenu = document.getElementById("mobileMenu");

    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    burger.addEventListener("click", () => {
      const open = burger.classList.toggle("open");
      mobileMenu.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        burger.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 3. Scroll reveal                                                    */
  /* ------------------------------------------------------------------ */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => obs.observe(el));
  }

  /* ------------------------------------------------------------------ */
  /* 4. Scrollspy — highlight active nav link                            */
  /* ------------------------------------------------------------------ */
  function initScrollspy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links > li > a");
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const linkFor = (id) =>
      [...navLinks].find((a) => a.getAttribute("href") === "#" + id);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkFor(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
  }

  /* ------------------------------------------------------------------ */
  /* 5. Project filter                                                    */
  /* ------------------------------------------------------------------ */
  function initFilter() {
    const buttons = document.querySelectorAll(".filter-tabs button");
    const cards = document.querySelectorAll(".project-card");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        cards.forEach((card) => {
          const match = filter === "all" || card.getAttribute("data-category") === filter;
          card.classList.toggle("hidden", !match);
        });
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 6. Contact form — mailto fallback (no backend needed on GitHub Pages)*/
  /* ------------------------------------------------------------------ */
  function initForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get("name") || "").toString().trim();
      const phone = (data.get("phone") || "").toString().trim();
      const email = (data.get("email") || "").toString().trim();
      const system = (data.get("system") || "").toString().trim();
      const serviceType = (data.get("service_type") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();

      const subject = `Demande de devis — ${name || "Site web"}`;
      const bodyLines = [
        `Nom: ${name}`,
        `Téléphone: ${phone}`,
        email ? `Email: ${email}` : null,
        system ? `Système concerné: ${system}` : null,
        serviceType ? `Service souhaité: ${serviceType}` : null,
        "",
        "Message:",
        message
      ].filter(Boolean);

      const mailto = `mailto:sarl.smart01@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailto;
    });
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                 */
  /* ------------------------------------------------------------------ */
  document.addEventListener("DOMContentLoaded", () => {
    cacheOriginals();

    document.getElementById("langFr").addEventListener("click", () => setLanguage("fr"));
    document.getElementById("langEn").addEventListener("click", () => setLanguage("en"));

    initHeader();
    initReveal();
    initScrollspy();
    initFilter();
    initForm();
  });
})();
