import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CASES, getCase, getAdjacentCases } from "@/lib/cases";
import { Reveal } from "@/components/ui/reveal";
import { CoverPlaceholder } from "@/components/ui/cover-placeholder";
import { CaseSidebar } from "@/components/case-detail/case-sidebar";
import { CaseNav } from "@/components/case-detail/case-nav";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getCase(params.slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: `${item.title} — Vlad Holoborodko`,
      description: item.description,
    },
  };
}

// Sections that get an illustrative mockup placeholder beneath the copy
const ILLUSTRATED_SECTIONS = new Set(["process", "solution"]);

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const item = getCase(params.slug);
  if (!item) notFound();

  const { prev, next } = getAdjacentCases(item.slug);

  const metaRows: { label: string; value: string }[] = [
    { label: "Duration", value: item.meta.duration },
    { label: "Role", value: item.meta.role },
    { label: "Team", value: item.meta.team },
    { label: "Platform", value: item.platform },
    { label: "Tools", value: item.meta.tools.join(", ") },
    { label: "Skills", value: item.meta.skills.join(", ") },
  ];

  return (
    <>
      <section className="px-6 pb-16 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">
              — Case study · {item.year}
            </p>
            <h1 className="mt-4 font-display text-display-lg font-semibold uppercase leading-[1.02] text-ink">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
              {item.description}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-10">
            <CoverPlaceholder label={item.title} ratio="aspect-[16/9]" />
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3 md:grid-cols-6">
              {metaRows.map((row) => (
                <div key={row.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-snug text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[180px_1fr] lg:gap-20">
          <CaseSidebar sections={item.sections} />

          <div className="flex flex-col gap-20">
            {item.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <Reveal>
                  <h2 className="font-display text-display-sm font-semibold uppercase text-ink">
                    {section.title}
                  </h2>
                  <div className="mt-4 max-w-2xl space-y-4 text-sm leading-relaxed text-muted md:text-base">
                    {section.body.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>

                {ILLUSTRATED_SECTIONS.has(section.id) && (
                  <Reveal delay={0.05} className="mt-8">
                    <CoverPlaceholder
                      label={`${item.title} — ${section.title}`}
                      ratio="aspect-[16/9]"
                    />
                  </Reveal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CaseNav prev={prev} next={next} />
    </>
  );
}
