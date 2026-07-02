type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl text-center mx-auto">
      <p className="text-sm uppercase tracking-[0.3em] text-violet-400/80">ShikshaSetu</p>
      <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300">{subtitle}</p>
    </div>
  );
}
