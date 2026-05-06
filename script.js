const content = window.siteContent;
const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");

function getValue(path) {
  return path.split(".").reduce((value, key) => value?.[key], content);
}

function setTextContent() {
  document.title = content.meta.title;
  document.querySelector("meta[name='description']").setAttribute("content", content.meta.description);

  document.querySelectorAll("[data-content]").forEach((element) => {
    const value = getValue(element.dataset.content);
    if (typeof value === "string") {
      element.textContent = value;
    }
  });
}

function createLink(action) {
  const link = document.createElement("a");
  link.className = `button ${action.variant || "secondary"}`;
  link.href = action.target;
  link.textContent = action.label;

  if (action.external) {
    link.target = "_blank";
    link.rel = "noreferrer";
  }

  return link;
}

function renderNavigation() {
  const nav = document.querySelector('[data-render="navigation"]');
  nav.replaceChildren(
    ...content.navigation.map((item) => {
      const link = document.createElement("a");
      link.href = item.target;
      link.textContent = item.label;
      return link;
    }),
  );
}

function renderHeroActions() {
  const wrapper = document.querySelector('[data-render="heroActions"]');
  wrapper.replaceChildren(
    createLink({ ...content.hero.primaryAction, variant: "primary" }),
    createLink({ ...content.hero.secondaryAction, variant: "secondary" }),
  );
}

function renderSnapshot() {
  const wrapper = document.querySelector('[data-render="snapshot"]');
  wrapper.replaceChildren(
    ...content.snapshot.map((item) => {
      const block = document.createElement("div");
      block.innerHTML = `<strong>${item.label}</strong><span>${item.value}</span>`;
      return block;
    }),
  );
}

function renderProfile() {
  const wrapper = document.querySelector('[data-render="profileParagraphs"]');
  wrapper.replaceChildren(
    ...content.profile.paragraphs.map((copy) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = copy;
      return paragraph;
    }),
  );
}

function renderCapabilities() {
  const wrapper = document.querySelector('[data-render="capabilities"]');
  wrapper.replaceChildren(
    ...content.capabilities.items.map((item) => {
      const caseStudy = content.caseStudies.items.find((study) => study.id === item.caseStudyId);
      const accordion = document.createElement("article");
      accordion.className = "capability-accordion";
      accordion.innerHTML = `
        <button class="capability-trigger" type="button" aria-expanded="false">
          <span class="icon">${item.number}</span>
          <span class="capability-summary">
            <span>${item.title}</span>
            <span>${item.copy}</span>
          </span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
        </button>
        <div class="capability-panel" hidden>
          ${caseStudy ? createCaseStudyMarkup(caseStudy) : "<p>Case study non disponibile.</p>"}
        </div>
      `;
      return accordion;
    }),
  );
}

function createCaseStudyMarkup(item) {
  const capabilities = item.capabilities.map((capability) => `<span>${capability}</span>`).join("");
  const formatCaseLine = (copy) => copy.replace(/^(Obiettivo|Impatto):\s*/, '<strong class="case-label">$1:</strong> ');

  return `
    <div class="inline-case">
      <span class="tag">${item.tag}</span>
      <div>
        <p class="case-meta">${item.company} · ${item.client}</p>
        <h3>${item.title}</h3>
      </div>
      <div>
        <p>${formatCaseLine(item.copy)}</p>
        <p class="case-evidence">${formatCaseLine(item.evidence)}</p>
        <div class="case-capabilities">${capabilities}</div>
      </div>
    </div>
  `;
}

function bindCapabilityAccordions() {
  document.querySelectorAll(".capability-accordion").forEach((accordion) => {
    const trigger = accordion.querySelector(".capability-trigger");
    const panel = accordion.querySelector(".capability-panel");

    trigger.addEventListener("click", () => {
      const isOpen = trigger.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".capability-accordion.is-open").forEach((openAccordion) => {
        if (openAccordion === accordion) {
          return;
        }

        openAccordion.classList.remove("is-open");
        openAccordion.querySelector(".capability-trigger").setAttribute("aria-expanded", "false");
        openAccordion.querySelector(".capability-panel").hidden = true;
      });

      accordion.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });
}

function renderSkillGroups() {
  const wrapper = document.querySelector('[data-render="skillGroups"]');
  const positions = [
    [8, 42],
    [42, 12],
    [80, 32],
    [74, 82],
    [20, 82],
    [78, 16],
  ];

  wrapper.replaceChildren(
    ...content.skillGroups.map((group) => {
      const article = document.createElement("article");
      const links = group.items
        .map((_, index) => {
          const [x, y] = positions[index % positions.length];
          return `<line x1="50" y1="50" x2="${x}" y2="${y}" />`;
        })
        .join("");
      const items = group.items
        .map((item, index) => {
          const [x, y] = positions[index % positions.length];
          return `<span class="skill-node" style="--x: ${x}%; --y: ${y}%;">${item}</span>`;
        })
        .join("");
      article.className = "skill-group";
      article.setAttribute("aria-label", group.title);
      article.innerHTML = `
        <div class="skill-network">
          <svg class="skill-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            ${links}
          </svg>
          <span class="skill-core">${group.title}</span>
          ${items}
        </div>
      `;
      return article;
    }),
  );
}

function renderJourney() {
  const wrapper = document.querySelector('[data-render="journey"]');
  wrapper.replaceChildren(
    ...content.journey.items.map((item) => {
      const li = document.createElement("li");
      const tags = item.tags.map((tag) => `<span>${tag}</span>`).join("");
      li.innerHTML = `
        <div class="timeline-years">${item.years}</div>
        <div class="timeline-marker" aria-hidden="true"></div>
        <article class="timeline-card">
          <p class="timeline-company">${item.company}</p>
          <h3>${item.role}</h3>
          <p>${item.copy}</p>
          <div class="timeline-tags">${tags}</div>
        </article>
      `;
      return li;
    }),
  );
}

function renderCertificates() {
  const wrapper = document.querySelector('[data-render="certificates"]');
  const certificates = [...content.certificates.items].sort((a, b) => Number(b.year) - Number(a.year));
  wrapper.replaceChildren(
    ...certificates.map((item) => {
      const article = document.createElement("article");
      article.className = "certificate";
      const action = item.file
        ? `<a href="${item.file}" target="_blank" rel="noreferrer">Apri certificato</a>`
        : `<span class="certificate-empty">File da caricare</span>`;
      article.innerHTML = `
        <div>
          <span class="tag">${item.year}</span>
          <h3>${item.title}</h3>
          <p>${item.issuer}</p>
        </div>
        ${action}
      `;
      return article;
    }),
  );
}

function renderContactActions() {
  const wrapper = document.querySelector('[data-render="contactActions"]');
  wrapper.replaceChildren(...content.contact.actions.map(createLink));
}

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function bindNavigation() {
  const navLinks = document.querySelectorAll(".nav a");

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", syncHeader, { passive: true });
  syncHeader();
}

setTextContent();
renderNavigation();
renderHeroActions();
renderSnapshot();
renderProfile();
renderCapabilities();
bindCapabilityAccordions();
renderSkillGroups();
renderJourney();
renderCertificates();
renderContactActions();
bindNavigation();
