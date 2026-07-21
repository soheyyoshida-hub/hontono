export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100 to-cyan-50">
       {/* Background blur */}
        <div className="pointer-events-none absolute inset-0 z-0"></div>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-400/30 blur-3xl" />
      

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 md:px-10 lg:flex-row lg:justify-between lg:px-16">

        {/* Left */}
        <div className="max-w-xl text-center lg:text-left">

          <p className="mb-5 inline-block rounded-full border border-orange-200 bg-orange-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-orange-600">
            Podcast
          </p>

          <h1 className="text-5xl font-bold leading-none text-slate-900 md:text-6xl lg:text-7xl">
            ほんとうの〇〇
          </h1>

          <h2 className="mt-6 text-2xl font-regular leading-tight text-slate-800 md:text-3xl lg:text-[42px]">
            レンズを変えれば、
            <br />
            世界が変わる。
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-600">
            身近なものを入口に、
            <br className="hidden md:block" />
            歴史・現在・未来を探るポッドキャスト。
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <a
              href="https://open.spotify.com/show/2X4lZEpaPVxm6yjOsKtZz3"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-xl"
            >
              Spotifyで聴く
            </a>

            <a
              href="https://podcasts.apple.com/jp/podcast/%E3%81%BB%E3%82%93%E3%81%A8%E3%81%86%E3%81%AE/id1873676018"
              className="rounded-full border border-slate-200 bg-white/80 backdrop-blur px-8 py-4 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              Apple Podcast
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="mt-20 flex justify-center lg:mt-0 lg:w-1/2">

          <div className="aspect-square w-80 rounded-[2.5rem] shadow-[0_35px_80px_rgba(0,0,0,0.22)] transition duration-500 hover:rotate-3 hover:scale-105 md:w-[430px]">
              <img
               src="/cover.png"
               alt="Podcast Cover"
               className="h-full w-full rounded-[2.5rem] object-cover"
              />

            </div>

          </div>

        </div>
    </section>
  );
}