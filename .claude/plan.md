# Portfolio Website — Complete Plan & Architecture

## Context
Your React + Vite portfolio (`param-rai-folio`) is a well-structured single-page application with modern tooling (Tailwind CSS, Framer Motion, Embla Carousel) and a clean component architecture. The codebase is functional with minor bugs and optimization opportunities. This plan outlines a systematic 5-phase roadmap to fix critical issues, enhance accessibility, improve design, and prepare for production deployment.

---

## 1. PROJECT OVERVIEW & TECHNOLOGY STACK

**Framework & Build System:**
- React 18.3.1 with Vite 6.0.5 (modern, fast bundler)
- Tailwind CSS 3.4.17 (utility-first styling)
- Node v24.20.0, npm 11.19.0

**Key Dependencies:**
- **Animations:** Framer Motion 12.2.0
- **Carousel:** Embla Carousel React 8.5.2
- **Icons:** React Icons 5.4.0
- **Navigation:** React Scroll 1.9.0 (smooth scroll to anchors)
- **Tooling:** ESLint 9.17.0, PostCSS, Autoprefixer

**Architecture:**
- Single-page application with 6 major sections (Hero, TechnicalProficiency, MyProjects, AboutMe, ContactMe, Footer)
- 5 reusable components (Navbar, ProjectCard, StatInfoCard, Tabs, ContactInfoCard)
- Centralized data store in `src/utils/data.js` (projects, skills, stats, navigation links)

---

## 2. PROJECT HEALTH ASSESSMENT

**Current Status:** Functional portfolio with minor bugs. Good baseline for improvements.

**Strengths:**
- Clean component architecture and data separation
- Responsive design using Tailwind's mobile-first approach
- Modern animation library (Framer Motion)
- Carousel library for project showcase
- Consistent warm color system (orange #F6A64F, brown #B56141, cream #FFFCF8)
- Contact form integration (Formspree)

**Critical Issues:**
| ID | Severity | Issue | Evidence | Impact |
|---|---|---|---|---|
| BUG-001 | Critical | ESLint broken | `npm run lint` fails with "Cannot find module './eslint'" | Blocks code quality checks |

**Functional Issues:**
| ID | Severity | Issue | Evidence | Impact |
|---|---|---|---|---|
| BUG-005 | High | Resume download button non-functional | Hero.jsx button has no `onClick` handler | Visitor cannot download resume |
| BUG-004 | High | Social media links broken | AboutMe.jsx social icons link to "#" placeholder | No way to connect on social platforms |

**Content & Quality Issues:**
| ID | Severity | Issue | Evidence | Impact |
|---|---|---|---|---|
| BUG-002 | Medium | Misleading project tags | Project 3 (Vanilla JS): tags list "React, Express..." | Confusing to visitors |
| BUG-006 | Medium | Generic profile picture from CDN | Both Hero.jsx and AboutMe.jsx use external URL | Not personal; single point of failure |
| BUG-003 | Low | Unused icon imports | Hero.jsx imports `FaJava`, `FaPython` but never uses | Code bloat |
| BUG-007 | Low | Accessibility gaps | Missing alt text, form labels, ARIA attributes | Incomplete WCAG compliance |

**Uncommitted Changes:**
- `src/utils/data.js`: "Years of Experience" updated from 3+ to 6+ (valid, ready to commit)

---

## 3. RECOMMENDED FRONTEND DESIGN DIRECTION

**Current Design Analysis:**
- Warm, inviting aesthetic with orange primary color (#F6A64F)—appropriate for creative/engineering roles
- Clean typography with Poppins font family
- Subtle Framer Motion micro-interactions
- Responsive Tailwind layout
- Carousel for project showcase

**Recommended Enhancements (Non-Breaking):**

**Hero Section:**
- Replace CDN profile picture with professional local headshot
- Add animated gradient text effect on headline
- Enhance call-to-action button contrast and hover states
- Implement working resume download

**Navigation:**
- Improve mobile menu accessibility and focus trapping
- Add scroll progress indicator
- Maintain existing glassmorphism navbar

**Project Cards:**
- Add category badges (Frontend, Full-Stack, etc.)
- Implement hover animations for better interactivity
- Display tech stack more prominently
- Fix misleading project tags

**Skills Section:**
- Group skills by category (Frontend, Backend, Tools)
- Add proficiency level indicators
- Consider learning timeline visualization

**Contact Section:**
- Replace broken social links with real profiles
- Add working resume download with proper file
- Enhance LinkedIn/GitHub button styling
- Improve form accessibility (labels, ARIA)

---

## 4. PRIORITIZED BUG BACKLOG WITH EVIDENCE

**Phase 0 (Housekeeping):**
1. **BUG-001**: Fix ESLint module error — blocks all linting
2. Commit pending change in `src/utils/data.js` (6+ years)

**Phase 1 (Critical Fixes):**
3. **BUG-005**: Implement resume download button (`src/sections/Hero.jsx`)
4. **BUG-004**: Fix social media links (`src/utils/data.js`, `src/sections/AboutMe.jsx`)

**Phase 2 (Content & Quality):**
5. **BUG-002**: Correct project tags (`src/utils/data.js`)
6. **BUG-006**: Replace profile picture with local asset
7. **BUG-003**: Remove unused imports (`src/sections/Hero.jsx`)

**Phase 3 (Accessibility & UX):**
8. **BUG-007**: Add ARIA labels, form labels, focus indicators (all components)

---

## 5. RELEVANT SKILLS

**Available Skills (Confirmed):**
- `code-review`: Review diffs and find bugs
- `security-review`: Audit dependencies and check for credential leaks
- `run`: Launch and test portfolio in live browser
- `dataviz`: For future skill proficiency visualizations

**Recommended Usage:**
1. **`run`** (HIGH VALUE): Test portfolio interactively during development
2. **`code-review`** (HIGH VALUE): Verify fixes before commits
3. **`security-review`** (MEDIUM VALUE): Final dependency and credential check

---

## 6. AI TEAM ARCHITECTURE

**Lightweight 2-Person Team:**

| Role | Implementation | Responsibilities | Permissions |
|---|---|---|---|
| **Lead Planner** | Manual (you + me) | Design decisions, approve phases, maintain roadmap | Strategic decisions |
| **Frontend Developer** | Claude (main) | Implement fixes, write code, test changes | Full file edit + git operations |
| **QA / Bug Hunter** | `run` skill + manual | Test interactively, report issues, verify fixes | Read-only + browser testing |
| **Security Reviewer** | `security-review` skill | Audit dependencies, scan for secrets | Read-only + reporting |

**Recommendation:** Start with main developer (me) + you as decision-maker. Use skills for specialized checks rather than spawning subagents (keeps context focused and costs lower).

---

## 7. GITHUB MCP INTEGRATION

**Current Setup:** GitHub remote configured (`origin → paramrai/param-rai-folio`)

**Verification Plan:**
1. Verify `gh` CLI is available and authenticated
2. Test repository access and permissions
3. Recommend enabling branch protection on `main` (require PR reviews)
4. Set up GitHub Dependabot for automated security updates

**Action:** If GitHub MCP unavailable, recommend installing via Claude Code's MCP marketplace.

---

## 8. AUTOMATED TESTING & BUG-DETECTION STRATEGY

**Pipeline:**
1. **ESLint:** `npm run lint` (unblock in Phase 0)
2. **Build Verification:** `npm run build` to catch bundler errors
3. **Browser Testing:** Use `run` skill for interactive QA
4. **Accessibility:** Lighthouse audit for WCAG compliance

**Recording & Regression:**
- Document findings in structured bug reports
- Run full test suite after each phase
- Use `git diff` to verify no unintended changes
- Keep rollback branch ready for each phase

---

## 9. PHASED IMPLEMENTATION ROADMAP

### **Phase 0: Housekeeping (Day 1 — 30 mins)**
**Scope:** Unblock critical issues

| Task | Files | Expected Result | Verification |
|---|---|---|---|
| Fix ESLint module error | `node_modules/`, `package.json` | `npm run lint` runs without errors | Run `npm run lint` → zero errors |
| Commit pending change | `src/utils/data.js` | 6+ years experience committed | `git log` shows commit |
| Create feature branch | Git | New branch `feature/portfolio-improvements` | `git branch` shows active branch |

**Acceptance Criteria:** ESLint works, no uncommitted changes, clean feature branch ready.

---

### **Phase 1: Critical Fixes (Day 1-2 — 2-3 hours)**
**Scope:** Implement resume download, fix social links

| Task | Files | Expected Result | Verification |
|---|---|---|---|
| Implement resume download | `src/sections/Hero.jsx`, add `/public/resume.pdf` | Resume downloads when button clicked | Test in browser: click button, verify file downloads |
| Fix social media links | `src/utils/data.js`, `src/sections/AboutMe.jsx` | Links point to real social profiles (GitHub, LinkedIn, etc.) | Test each icon: verify URL opens correct profile |
| Responsive test | All | No layout breaks on mobile/tablet | Use `run` skill on different viewports |

**Acceptance Criteria:** Resume functional, social links work, responsive design preserved.

---

### **Phase 2: Content & Quality (Day 2-3 — 2-3 hours)**
**Scope:** Fix misleading content, replace assets, clean code

| Task | Files | Expected Result | Verification |
|---|---|---|---|
| Update project tags | `src/utils/data.js` | Project 3 tags corrected (vanilla JS only, no React/Express) | Read file, verify accuracy |
| Replace profile picture | `src/assets/profile.jpg`, `src/sections/Hero.jsx`, `src/sections/AboutMe.jsx` | Local professional headshot used (not CDN) | Image displays without 404, aspect ratio correct |
| Remove unused imports | `src/sections/Hero.jsx` | Clean imports, no unused icons | Run `npm run lint` → zero warnings |
| Full build test | All | `npm run build` succeeds, no errors | Build completes successfully |

**Acceptance Criteria:** Clean code, accurate data, all imports used, successful build.

---

### **Phase 3: Accessibility & UX (Day 3-4 — 2-3 hours)**
**Scope:** WCAG 2.1 Level AA compliance

| Task | Files | Expected Result | Verification |
|---|---|---|---|
| Add ARIA labels | All components | Screen reader reads all interactive elements correctly | Browser accessibility tool check |
| Improve form labels | `src/sections/ContactMe.jsx` | Form fields have associated `<label>` elements | Keyboard navigation works, labels visible |
| Add focus indicators | Global CSS (`src/index.css`) | Keyboard users see clear focus outlines | Tab through page, verify blue/violet outline visible |
| Lighthouse audit | All | Accessibility score ≥90 | Run Lighthouse → check accessibility tab |

**Acceptance Criteria:** WCAG 2.1 Level AA compliance reached, Lighthouse accessibility ≥90.

---

### **Phase 4: Design Enhancements (Day 4-5 — 3-4 hours)**
**Scope:** Visual polish and micro-interactions

| Task | Files | Expected Result | Verification |
|---|---|---|---|
| Enhance project cards | `src/components/ProjectCard.jsx` | Add category badges, highlight tech stack, improve hover animations | Visual inspection, smooth transitions |
| Add skill categories | `src/sections/TechnicalProficiency.jsx` | Group by Frontend/Backend/Tools with section headers | Layout balanced, filters work |
| Improve CTA buttons | `src/sections/Hero.jsx` | Better visual hierarchy, hover/focus states | Desktop/mobile interactive testing |
| Add scroll animations | All sections | Subtle entrance animations on scroll (Framer Motion) | Use `run` skill: scroll page, observe smooth reveals |

**Acceptance Criteria:** Enhanced visual appeal, no performance regression (<3s load time), animations smooth on desktop/mobile.

---

### **Phase 5: Optimization & Deploy (Day 5-6 — 2-3 hours)**
**Scope:** Production readiness

| Task | Files | Expected Result | Verification |
|---|---|---|---|
| Optimize images | `src/assets/` | Images compressed (WebP/optimized PNG), correct dimensions | Lighthouse image audit → no unoptimized images |
| Add SEO meta tags | `index.html` | OG tags, description, keywords for social sharing | HTML inspection, LinkedIn preview test |
| PWA support | `public/manifest.json` | Progressive Web App ready for installation | Lighthouse PWA score ≥80 |
| Final security audit | All | Dependencies up-to-date, no vulnerabilities | `npm audit` passes |
| Merge to main | Git | All phases complete, PRs approved and merged | GitHub PR merged, `main` branch updated |

**Acceptance Criteria:** Production-ready, Lighthouse score >95, zero security warnings, all PRs merged to `main`.

---

## 10. SECURITY, COST & MAINTENANCE

**Security:**
- No secrets exposed: verified no `.env` files or credentials in repo
- Dependencies: All actively maintained (React 18, Vite 6, Tailwind 3 latest versions)
- Third-party: Formspree contact form (trusted, privacy-compliant)
- Action: Run `npm audit` before Phase 5 deployment

**Cost:**
- Hosting: Assuming Vercel (free tier supports this portfolio)
- Services: Formspree (free tier for contact forms), GitHub free tier
- CDN assets: Will replace with local assets (Phase 2)
- **Estimated additional cost: $0 (free tier sufficient)**

**Maintenance:**
- Update cadence: Check dependencies quarterly
- Monitoring: Enable GitHub Dependabot for automated security updates
- Backup: Git history serves as backup
- Long-term: Plan for content updates as career evolves (new projects, skills)

---

## 11. ROLLBACK PLAN & APPROVAL CHECKPOINTS

**Rollback Strategy:**
- Each phase on separate feature branch (`feature/phase-0`, `feature/phase-1`, etc.)
- Before merging: full test suite passes
- If issue found: use `git revert` for single commits
- Never force-push to `main`
- Keep `main` always deployable

**Approval Checkpoints:**
1. **After Phase 0:** You verify ESLint fix works
2. **After Phase 1:** You test resume download and social links in live browser
3. **After Phase 2:** You review updated content and confirm no regressions
4. **After Phase 3:** Accessibility audit passes
5. **After Phase 4:** Design enhancements meet your expectations
6. **After Phase 5:** Final security review and performance check
7. **Final:** GitHub PR review before merge to `main`

---

## 12. NEXT STEPS & APPROVAL REQUEST

Your portfolio is **healthy and ready for improvement.** The codebase is clean, dependencies are modern, and the design is cohesive.

**Recommended Execution Timeline:**
- **Week 1:** Phases 0-2 (housekeeping + critical fixes + content quality)
- **Week 2:** Phases 3-4 (accessibility + design enhancements)
- **Week 2 End:** Phase 5 (optimization + deployment)

**Expected Outcome:**
- ✅ Fully functional portfolio (no broken buttons/links)
- ✅ WCAG 2.1 Level AA accessibility compliant
- ✅ Enhanced visual appeal with modern animations
- ✅ Lighthouse score >95 (performance/SEO/accessibility/best practices)
- ✅ Professional, maintenance-ready codebase
