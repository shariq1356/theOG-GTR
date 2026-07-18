export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 text-xs text-ink/50 sm:px-12 lg:px-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-widest text-ink">
          GT-R <span className="text-nismo-red">NISMO</span>
        </a>
        <p className="max-w-2xl">
          Independent technical dossier, not an official Nissan or NISMO
          publication. Nissan, GT-R and NISMO are trademarks of Nissan Motor
          Co., Ltd. Reference footage used throughout depicts a modified
          third-party vehicle and is used only as a cinematic motion
          reference — see the accompanying video-mapping notes.
        </p>
        <a href="#specs" className="mono-label text-ink/70! hover:text-nismo-red-bright!">
          Specifications ↑
        </a>
      </div>
    </footer>
  );
}
