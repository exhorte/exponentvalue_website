import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Plateforme",
  description:
    "Architecture orientée objet, composants réutilisables, intégration matériel-logiciel : la plateforme exponentvalue.",
};

export default function PlateformePage() {
  return (
    <PageStub eyebrow="La plateforme" title="Une architecture qui a cinq ans d’avance.">
      <p>
        Règle des 20 %, composants éprouvés, intégration totale entre matériel
        et logiciel. Le détail de l’architecture sera publié ici.
      </p>
    </PageStub>
  );
}
