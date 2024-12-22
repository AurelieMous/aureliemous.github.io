import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center pt-35">
          <span className={title()}>Hello, I&#39;m&nbsp;</span>
          <span className={title({ color: "violet" })}>Aurélie&nbsp;</span>
          <br />
          <span className={title()}>
            a
            <Link
              color="foreground"
              href="/skills/"
              size="lg"
              style={{ fontSize: "3rem", margin: "1rem", cursor: "pointer", textDecoration: "underline" }}
            >
              full-stack
            </Link>
            developer
          </span>
          <div className={subtitle({ class: "mt-4 pt-10" })}>
            En alternance pour Concepteur Développeur d&#39;Application
            jusqu&#39;en juillet 2026.
          </div>
        </div>

        <div className="flex gap-3 pt-10">
          <Button as={Link} color="secondary" href="/about/" variant="ghost">
            About me
          </Button>
          <Button
            showAnchorIcon
            as={Link}
            color="secondary"
            href="https://oclock.io/formations/cda-alternance"
            variant="solid"
          >
            Ma formation
          </Button>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
