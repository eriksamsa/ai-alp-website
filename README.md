# AI-ALP Website

Moderna predstavitvena spletna stran za mobilno aplikacijo AI-ALP na domeni `ai-alp.com`.

## Tehnologija

- Next.js
- React
- TypeScript
- Navaden CSS

## Lokalni zagon

```bash
npm install
npm run dev
```

Po zagonu odpri:

```bash
http://localhost:3000
```

## Produkcijski build

```bash
npm run build
```

Za lokalni zagon produkcijskega builda:

```bash
npm run start
```

## Objava na Vercel

1. Uvozi projekt iz Git repozitorija.
2. Framework preset: `Next.js`.
3. Install command: `npm install`.
4. Build command: `npm run build`.

## Strani

- `/`
- `/privacy-policy`
- `/terms`
- `/contact`

## SEO

SEO metapodatki so nastavljeni v `app/layout.tsx`. Sitemap in robots sta ustvarjena prek Next.js datotek `app/sitemap.ts` in `app/robots.ts`.
