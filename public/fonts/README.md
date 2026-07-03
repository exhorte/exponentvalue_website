# Fonts Garet

Déposer ici les fichiers fournis par le propriétaire :

- `Garet-Book.woff2` — graisse 400 (corps de texte)
- `Garet-Heavy.woff2` — graisse 800 (titres)

Puis suivre les 3 étapes décrites dans le commentaire `GARET` de
`app/layout.tsx` (décommenter le bloc `localFont`, ajouter la variable au
`<html>`, mettre à jour `--font-sans` dans `app/globals.css`).

Tant que ces fichiers ne sont pas fournis, le site utilise Poppins
(géométrique le plus proche de Garet) via `next/font/google`.
