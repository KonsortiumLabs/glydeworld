# G//LYDE WORLD

Premium editable IP portal for `glydeworld.com`.

This repo now contains a Vercel-ready Next.js App Router implementation while preserving the original exported prototype in `/glyde` as legacy visual/source reference.

## Local Setup

```bash
npm install
npm run dev
npm run build
```

Admin:

```text
/admin
password: ggchamp
```

The admin uses browser `localStorage` for prototype overrides. Use **Export JSON** after editing and **Import JSON** to restore/migrate content later.

## Deployment Checklist

1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Deploy the default project settings for Next.js.
4. Add `glydeworld.com` as a custom domain in Vercel.
5. In Namecheap DNS, follow Vercel's exact DNS record instructions.
6. Typically Vercel will ask for an `A` record for `@` and a `CNAME` for `www` to `cname.vercel-dns.com`, but use the current Vercel dashboard values.
7. Wait for DNS propagation.
8. Confirm SSL is issued in Vercel.
9. Visit `https://glydeworld.com`.
10. Visit `https://glydeworld.com/admin` and log in with `ggchamp`.

## Content System

Major editable content lives in:

```text
content/siteContent.ts
```

Editable areas include:

- site settings and footer
- SEO defaults
- navigation and CTAs
- homepage, gravsports, G//LYDE Racing, Neo Noctis, Garage, Support
- character archive
- story archive entries
- circuits
- factions
- manufacturers
- sponsors
- submission/payment/support links
- concept art note
- image URLs and captions

---

Legacy original brief follows for context.

CRITICAL DEPLOYMENT + EDITABILITY REQUIREMENT:

This project must be ready to publish live at:

glydeworld.com

The domain will be purchased/managed through Namecheap and the site will likely be deployed through Vercel.

Build this as a production-ready, Vercel-deployable website, preferably using Next.js / React / Tailwind.

The final output must be easy to deploy, easy to edit, and not dependent on future AI/agent edits.

I am low on Claude/Codex credits and need the site to be editable through a simple admin page.

PRIMARY REQUIREMENTS:
1. Build a polished public-facing G//LYDE WORLD site.
2. Build a simple admin/editor page at /admin.
3. Admin password can be simple for now: ggchamp
4. All site copy, images, SEO fields, CTAs, riders, rigs, circuits, sponsors, factions, and support cards must be editable.
5. The site should be deployable to Vercel.
6. The domain glydeworld.com should be ready to connect through Namecheap DNS.
7. Do not hardcode long content into page components. Use a centralized content system.
8. Include clear deployment instructions at the end.

TECH STACK:
Use:
- Next.js
- React
- Tailwind CSS
- Local JSON/content object storage for default content
- Browser localStorage for admin-edited overrides in the prototype
- Optional file export/import JSON system so I can save content changes

If possible, structure the project like:

/app
  /page.tsx
  /admin/page.tsx
  /lore/page.tsx
  /gravsport/page.tsx
  /circuits/page.tsx
  /g-core/page.tsx
  /riders/page.tsx
  /machines/page.tsx
  /leagues/page.tsx
  /factions/page.tsx
  /codex/page.tsx
/components
/content
  siteContent.ts
/lib
/public

If true routing is too much, use internal route state, but actual routes are strongly preferred.

ADMIN PAGE REQUIREMENTS:
Create an /admin page with a simple password gate.

Password:
ggchamp

The admin page should allow editing:

GLOBAL SETTINGS:
- site title
- site description
- domain
- universe label
- primary CTA text
- secondary CTA text
- footer copy

SEO SETTINGS:
- homepage meta title
- homepage meta description
- Open Graph title
- Open Graph description
- Open Graph image URL
- Twitter/X card title
- Twitter/X card description
- Twitter/X card image URL
- favicon URL
- share image URL

HOME PAGE:
- hero title
- hero subtitle
- hero background image URL
- hero intro copy
- CTA labels
- feature cards
- sponsor ticker text
- featured circuits
- featured machines
- featured support CTA

LORE PAGE:
- section titles
- paragraphs
- key quotes
- lore cards

GRAVSPORT PAGE:
- intro copy
- race categories
- G-Suit description
- Gravboard description
- G-Rig description
- race type cards
- official/wager distinctions

CIRCUITS PAGE:
- add/edit/delete circuit cards
- circuit name
- location
- type
- description
- difficulty
- image URL
- tags
- status, official / underground / rumored / off-world

G-CORE PAGE:
- edit G-Core intro
- add/edit/delete G-Core variants
- name
- color
- affinity
- rider type
- weakness
- lore line
- image/icon URL

RIDERS PAGE:
- add/edit/delete rider profiles
- name
- affiliation
- class
- affinity
- preferred machine
- status
- signature skill
- bio
- quote
- image URL

MACHINES PAGE:
- add/edit/delete machine categories
- G-Suit
- Gravboard
- G-Rig
- prototypes
- relics
- custom classes
- description
- stats
- image URL

LEAGUES PAGE:
- add/edit/delete league/event cards
- Grand Cup
- Crown Circuit
- Lowline Runs
- Blackline Invitational
- Worldwide Circuit
- Orbital Exhibition
- description
- status
- sponsor
- image URL

FACTIONS PAGE:
- add/edit/delete faction cards
- name
- description
- agenda
- role in world
- image/logo URL

SPONSORS:
- add/edit/delete sponsors
- sponsor name
- category
- tagline
- description
- logo/image URL
- fictional / real / placeholder toggle

SUPPORT PAGE:
- edit support title
- edit support intro
- add/edit/delete support cards
- CTA button labels
- external links for Discord, Kickstarter, Stripe, Gumroad, Fourthwall, Typeform, Google Form, etc.
- support interest form copy
- legal/canon note copy

CODEX:
- add/edit/delete terms
- term
- category
- definition
- related terms

IMAGE MANAGEMENT:
For now, image management can be simple URL-based editing.

In admin, every image field should be editable as an image URL.

If possible, include:
- preview of current image
- remove image button
- replace image URL field
- fallback placeholder if no image exists

Do not require real upload/storage for the first version, unless easy. I mainly need to be able to swap images by URL.

CONTENT SAVE SYSTEM:
For the first version, use localStorage for admin edits so changes can be previewed immediately.

Include:
- Save Changes
- Reset Section
- Reset All to Default
- Export JSON
- Import JSON

Export JSON is important so I can save my edited site content and re-import it later.

Add clear comments in the code explaining where the content lives and how to edit it manually if needed.

IMPORTANT:
The public site should load from default content, then override with localStorage-edited content if it exists.

DEPLOYMENT READINESS:
Include all files needed to deploy.

Make sure:
- package.json is complete
- build works
- no missing imports
- no reliance on paid APIs
- no external CMS required
- no broken image dependency
- placeholder images work
- site is responsive
- metadata works
- routes work
- admin page works
- password gate works

SEO:
Use Next.js metadata where possible.
Create editable metadata from content.
Add Open Graph / social share metadata.
Add a simple robots.txt and sitemap if possible.
Include alt text fields for important images where practical.

DOMAIN / NAMECHEAP / VERCEL INSTRUCTIONS:
At the end, provide exact deployment instructions:

1. Push project to GitHub.
2. Import GitHub repo into Vercel.
3. Deploy.
4. In Vercel, add custom domain: glydeworld.com.
5. In Namecheap DNS, point domain to Vercel.
6. Add required records:
   - A record for @ pointing to Vercel IP if needed
   - CNAME for www pointing to cname.vercel-dns.com
   - or whatever Vercel recommends after domain setup
7. Wait for DNS propagation.
8. Confirm SSL is active.
9. Visit https://glydeworld.com.
10. Visit https://glydeworld.com/admin and login with ggchamp.

Add a note that exact DNS records should follow Vercel’s domain instructions if they differ.

ADMIN SECURITY NOTE:
This /admin password system is temporary and not secure for a serious production CMS. It is acceptable for initial prototype/private editing, but should later be upgraded to real authentication and database storage through Supabase, Sanity, Payload CMS, or another CMS.

However, for now, build it anyway because I need editability immediately.

FINAL QUALITY BAR:
This should not feel like a generic admin dashboard attached to a generic landing page.

It should feel like:
- a serious IP website
- a premium racing universe hub
- a lore archive
- a community conversion engine
- a deployable Vercel site
- editable without needing AI agents

Build it cleanly, modularly, and ready to publish.

FINAL INSTRUCTION:
Prioritize publishability and editability.

The design must be polished, but the content system and /admin editor are mission-critical.

I need to be able to:
- change copy
- change images
- change SEO
- change support CTAs
- add/remove riders
- add/remove circuits
- add/remove sponsors
- add/remove factions
- export/import content
- deploy to Vercel
- connect glydeworld.com from Namecheap

Do not return a static mockup only. Return a working deployable site.
