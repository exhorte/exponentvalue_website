import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Entreprise",
  description:
    "Vitesse, impact, intégration : le manifeste et la vision d’exponentvalue.",
};

export default function EntreprisePage() {
  return (
    <PageStub eyebrow="Entreprise" title="Vitesse. Impact. Intégration.">
      <p>Le manifeste et la vision d’exponentvalue seront publiés ici.</p>
    </PageStub>
  );
}
