# CLAUDE.md - Rankett.com Marketing Site

## Repository Info

**Path:** `/Users/yahirgonzalez/Desktop/Ai Visiblity Tool/Rankett.com`
**Remote:** `https://github.com/YG4PRESIDENT/Rankett.com.git`
**Branch:** `main`

## Git Commit Workflow

**IMPORTANT:** Follow this exact workflow to avoid commit issues.

### Before Making Changes
```bash
cd /Users/yahirgonzalez/Desktop/Ai\ Visiblity\ Tool/Rankett.com
git status  # Verify clean working tree
```

### After Making Changes
```bash
# 1. Check status first
git status

# 2. Add specific files (NOT git add .)
git add path/to/specific/file.tsx

# 3. Commit with heredoc for multi-line messages
git commit -m "$(cat <<'EOF'
Short description

- Detail 1
- Detail 2

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"

# 4. Push immediately
git push
```

### If Git Lock Error Occurs
```bash
rm -f /Users/yahirgonzalez/Desktop/Ai\ Visiblity\ Tool/Rankett.com/.git/index.lock
git status  # Verify state before continuing
```

### If Commits Go Wrong
```bash
# Find last good commit
git log --oneline -10

# Reset to good commit
git reset --hard <commit-hash>

# Force push to fix remote
git push --force
```

## Project Structure

```
Rankett.com/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── pricing/           # Pricing page
│   ├── features/          # Features page
│   └── ...
├── components/
│   ├── home/              # Homepage sections
│   │   ├── HeroHome.tsx
│   │   ├── FAQChat.tsx
│   │   ├── FeaturesMatrix.tsx
│   │   └── ...
│   ├── pricing/           # Pricing components
│   ├── casestudies/       # Case study components
│   ├── ui/                # Reusable UI components
│   └── scroll/            # Scroll animation components
├── lib/                   # Utilities and constants
└── public/                # Static assets
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Common Commands

```bash
# Development
npm run dev

# Build (run before pushing to verify)
npm run build

# Type check
npx tsc --noEmit
```

## Deployment

- Hosted on Vercel (auto-deploys from main branch)
- Domain: rankett.com
- Changes typically deploy within 1-2 minutes of push
