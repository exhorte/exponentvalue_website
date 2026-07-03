import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Secteurs",
  description:
    "Logistique, finance, industrie, distribution, santé, administration : les secteurs d’application d’exponentvalue.",
};

export default function SecteursPage() {
  return (
    <PageStub eyebrow="Secteurs" title="Un vertical, un cas d’usage.">
      <p>
        Logistique, finance, industrie, distribution, santé, administration —
        les cas d’usage détaillés par secteur seront publiés ici.
      </p>
    </PageStub>
  );
}
