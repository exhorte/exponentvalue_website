import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Méthode",
  description:
    "Cadrage, assemblage, déploiement : la méthode 90 jours d’exponentvalue, étape par étape.",
};

export default function MethodePage() {
  return (
    <PageStub eyebrow="La méthode" title="90 jours, étape par étape.">
      <p>
        Du cadrage du point de friction au prototype en conditions réelles, la
        timeline détaillée de la méthode sera publiée ici.
      </p>
    </PageStub>
  );
}
