import { notFound } from "next/navigation";
import { CASES } from "@/lib/cases";
import { CaseLayout } from "@/components/case-detail/case-layout";
import { smartcrowdData } from "@/lib/case-data/smartcrowd";
import { spaceNeedleData } from "@/lib/case-data/space-needle";
import { bitterbrainsData } from "@/lib/case-data/bitterbrains";

interface Props {
  params: { slug: string };
}

const caseDataMap = {
  smartcrowd: smartcrowdData,
  "space-needle": spaceNeedleData,
  bitterbrains: bitterbrainsData,
};

export async function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export default function CasePage({ params }: Props) {
  const caseMeta = CASES.find((c) => c.slug === params.slug);
  const caseData = caseDataMap[params.slug as keyof typeof caseDataMap];

  if (!caseMeta || !caseData) {
    notFound();
  }

  const otherCases = CASES.filter((c) => c.slug !== params.slug).slice(0, 2);

  return (
    <CaseLayout
      caseData={caseData}
      caseMeta={caseMeta}
      otherCases={otherCases}
    />
  );
}
