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

  if (action.download) {
    link.setAttribute("download", "");
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
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `<span class="icon">${item.number}</span><h3>${item.title}</h3><p>${item.copy}</p>`;
      return card;
    }),
  );
}

function renderCaseStudies() {
  const wrapper = document.querySelector('[data-render="caseStudies"]');
  wrapper.replaceChildren(
    ...content.caseStudies.items.map((item) => {
      const article = document.createElement("article");
      article.innerHTML = `<span>${item.tag}</span><h3>${item.title}</h3><p>${item.copy}</p>`;
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
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-years">${item.years}</div>
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
  wrapper.replaceChildren(
    ...content.certificates.items.map((item) => {
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
renderCaseStudies();
renderJourney();
renderCertificates();
renderContactActions();
bindNavigation();
