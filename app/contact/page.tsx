import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre point de friction le plus coûteux. Contactez exponentvalue.",
};

export default function ContactPage() {
  return (
    <PageStub eyebrow="Contact" title="Parlons de votre point de friction.">
      <p>
        Le formulaire de contact sera publié ici. En attendant :{" "}
        <a
          href="mailto:contact@exponentvalue.com"
          className="text-accent-blue underline underline-offset-4 transition-colors duration-150 hover:text-accent-blue-deep"
        >
          contact@exponentvalue.com
        </a>
      </p>
    </PageStub>
  );
}
