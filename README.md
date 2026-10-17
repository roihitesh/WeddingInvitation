# Hitesh & Shivanee · Royal Indian Wedding Invitation 💍✨

A luxury, bilingual Indian wedding invitation website built with **React 19**, **TypeScript**, and **Vite**. Inspired by grand Rajasthani palace architecture, antique ivory paper textures, deep royal maroon headings, and antique gold ornaments.

---

## 🏛️ Complete Visitor Experience (Pages 1 to 9)

1. **Opening Palace Entrance**:
   - 3D double doors with royal crest that gently part open to reveal the sanctum.
   - H&S monogram seal, couple names in cursive typography, and sacred Ganesh invocation.
   - Duplicate-click guard for smooth transition into the invitation.

2. **Bilingual Language Selection**:
   - Two handcrafted stationery cards (English contemporary elegance & Hindi Devanagari Patrika).
   - Language choice is remembered in browser storage and preserved across navigation.

3. **Royal Wedding Welcome Page**:
   - Centered H&S royal monogram and Grand Mughal scalloped arch.
   - Live Muhurat countdown against Indian Standard Time (`Asia/Kolkata`) when an auspicious date is configured.
   - Graceful kalash card when the official date announcement awaits.

4. **Our Story (6 Relationship Milestones)**:
   - Continuous gold timeline connecting all 6 relationship milestones:
     1. First Meeting (A quiet coffee conversation)
     2. Those First Butterflies (Stolen glances & smiles)
     3. Sharing Our Feelings (Walking by starlit archways)
     4. Traveling Together (Lake Pichola, Udaipur)
     5. Family Blessings (Uniting hearts & traditions)
     6. Tying the Knot (The sacred forever vow)
   - Bespoke royal art folios for pending couple photos (no misleading stranger stock photography).
   - Responsive alternating editorial layout.

5. **Wedding Celebrations**:
   - Haldi, Mehendi, Sangeet, Wedding Ceremony, and Reception.
   - Highlighting the sacred Wedding Ceremony with special royal borders.
   - Hides unconfigured fields automatically.

6. **Wedding Venue & Directions**:
   - Royal Heritage Palace destination information.
   - One-click Google Maps transit directions link when configured.

7. **RSVP & Guest Confirmation**:
   - Private digital response card with name validation and attendance choice.
   - Dynamic guest count selector (required only when attending).
   - In-memory duplicate submission protection.
   - Secure Supabase backend integration with Row-Level Security (RLS).
   - Clear status notice if backend credentials are not yet configured.

8. **Wedding Photo Gallery (Our Memories)**:
   - Category filtering (All Memories, Our Journey, Travel Diaries, Special Moments, Celebrations).
   - Editorial masonry layout preserving natural landscape, portrait, and square aspect ratios.
   - Full-screen royal Lightbox modal with keyboard arrows (`Left`/`Right`), `Escape` to close, and mobile swipe gestures.

9. **Final Invitation & Refined Royal Footer**:
   - Centered monogram and cursive *Hitesh & Shivanee* signature.
   - Heartfelt bilingual closing message from the couple and family.
   - Compact summary of configured wedding particulars (strictly zero invented data).
   - Full section navigation links and compact language toggle.

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js 20+ and npm

### Quick Start
```bash
# 1. Clone repository
git clone git@github.com:roihitesh/WeddingInvitation.git
cd WeddingInvitation

# 2. Run local development server
npm run dev

# 3. Open in browser
# http://localhost:8000
```

### Run Automated Tests
```bash
npm test
```
Executes the native Node test suite verifying couple data, bilingual copy, countdown safety, milestone order, venue visibility, RSVP validation, and gallery filters.

### Production Build
```bash
npm run build
```
Type-checks with `tsc` and generates the optimized production bundle in `dist/`.

---

## 🔐 Supabase RSVP Backend Setup

To enable real-time cloud storage of guest responses:

1. Create a Supabase project at [supabase.com](https://supabase.com).
2. Run the following SQL query in the **Supabase SQL Editor**:

```sql
create table public.rsvps (
  id uuid primary key default gen_random_uuid(),
  guest_name text not null,
  attendance text not null, -- 'attending' or 'declined'
  guest_count integer not null default 0,
  selected_events text[] default '{}',
  message text,
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table public.rsvps enable row level security;

-- Policy 1: Allow public visitors to submit their RSVP (INSERT only)
create policy "Allow anonymous guest submissions"
  on public.rsvps
  for insert
  to anon
  with check (true);

-- Policy 2: Prevent public guests from reading other guests' responses (SELECT restricted)
-- Only authenticated wedding hosts with service access or admin dashboard can view responses
```

3. Copy `.env.example` to `.env.local` and configure your credentials:
```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

*Note: Never paste your `service_role` key into client-side code or `.env` files.*

---

## 🚀 Deployment

### Deploy to Vercel
1. Import the repository in [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Environment Variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
6. Click **Deploy**. The included `vercel.json` ensures all client-side routes and assets rewrite correctly.

### Deploy to GitHub Pages
The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys to `gh-pages` automatically upon every push to the `main` branch.

---

## 📄 License & Attribution
Designed and crafted with love for **Hitesh & Shivanee**.
Made with love, shared with family, remembered forever.
॥ शुभम् भवतु ॥
