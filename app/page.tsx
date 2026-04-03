import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { HeroButtons } from "@/components/hero-buttons";
import {
  LinkSimple,
  ChartBar,
  Folders,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

const features = [
  {
    icon: LinkSimple,
    title: "Instant Short Links",
    description:
      "Paste any long URL and get a clean, shareable short link in seconds. No friction, no fuss.",
  },
  {
    icon: ChartBar,
    title: "Click Analytics",
    description:
      "Track how your links perform. See click counts and understand your audience at a glance.",
  },
  {
    icon: Folders,
    title: "Link Management",
    description:
      "All your links in one place. Create, update, or delete them whenever you need from your personal dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Your links are tied to your account. Only you can manage them — nobody else can interfere.",
  },
];

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="flex flex-col flex-1 items-center justify-center gap-8 px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs text-muted-foreground">
          <LinkSimple weight="bold" className="size-3.5" />
          Simple. Fast. Reliable.
        </div>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Shorten links.
          <br />
          <span className="text-muted-foreground">Track what matters.</span>
        </h1>
        <p className="max-w-lg text-base text-muted-foreground">
          Create short, memorable links in seconds and get real-time analytics
          on every click — all from one clean dashboard.
        </p>
        <HeroButtons />
      </section>

      {/* Features */}
      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight">
            Everything you need to manage your links
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 border border-border bg-card p-6"
              >
                <div className="flex size-9 items-center justify-center border border-border bg-muted">
                  <Icon weight="duotone" className="size-5" />
                </div>
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border px-6 py-20 text-center">
        <div className="mx-auto max-w-lg flex flex-col items-center gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-sm text-muted-foreground">
            Join today and start shortening links for free. No credit card
            required.
          </p>
        </div>
      </section>
    </div>
  );
}
