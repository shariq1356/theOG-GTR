import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-xs text-ink/50 sm:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded bg-white p-1">
            <Image src="/brand/lb-works-logo.png" alt="" width={22} height={22} className="h-full w-full object-contain" />
          </span>
          <span className="font-display text-sm font-semibold tracking-widest text-ink">
            GT-R <span className="text-nismo-red">LIBERTY WALK</span>
          </span>
        </a>
        <p className="max-w-2xl">
          Independent, unofficial showcase of a privately owned, modified
          vehicle — not a publication of Nissan, Liberty Walk, Rohana or any
          other brand named on this page. Nissan and GT-R are trademarks of
          Nissan Motor Co., Ltd.; Liberty Walk, LB Works and LB★Performance
          are trademarks of their respective owner. Reference footage
          throughout shows this build&rsquo;s actual featured vehicle — see
          the accompanying video-mapping notes.
        </p>
        <a href="#specs" className="mono-label text-ink/70! hover:text-nismo-red-bright!">
          Specifications ↑
        </a>
      </div>
    </footer>
  );
}
