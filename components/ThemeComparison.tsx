const themes = [
  "カメラ",
  "地図",
  "ゲーム",
  "時計",
  "本",
  "花瓶",
  "ペン",
  "公園",
  "クルマ",
];

export default function ThemeComparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">

      <h2 className="mb-16 text-center text-4xl font-bold">
        Theme Layout Test
      </h2>

      {/* A */}

      <div className="mb-24">

        <h3 className="mb-8 text-xl font-semibold">
          A：整列
        </h3>

        <div className="flex flex-wrap gap-4">

          {themes.map((theme) => (
            <span
              key={theme}
              className="rounded-full bg-orange-100 px-5 py-2 text-orange-700"
            >
              {theme}
            </span>
          ))}

        </div>

      </div>

      {/* B */}

      <div className="mb-24">

        <h3 className="mb-8 text-xl font-semibold">
          B：ランダム
        </h3>

        <div className="relative h-[320px] rounded-3xl bg-sky-50">

          <span className="absolute left-[10%] top-[15%] rounded-full bg-orange-100 px-5 py-2">カメラ</span>

          <span className="absolute left-[55%] top-[5%] rounded-full bg-orange-100 px-5 py-2">ゲーム</span>

          <span className="absolute left-[35%] top-[45%] rounded-full bg-orange-100 px-5 py-2">地図</span>

          <span className="absolute left-[70%] top-[60%] rounded-full bg-orange-100 px-5 py-2">時計</span>

          <span className="absolute left-[15%] top-[70%] rounded-full bg-orange-100 px-5 py-2">本</span>

          <span className="absolute left-[45%] top-[80%] rounded-full bg-orange-100 px-5 py-2">花瓶</span>

        </div>

      </div>

      {/* C */}

      <div>

        <h3 className="mb-8 text-xl font-semibold">
          C：半ランダム
        </h3>

        <div className="grid grid-cols-3 gap-y-8">

          {themes.map((theme, index) => (

            <div
              key={theme}
              className={`${
                index % 3 === 0
                  ? "justify-self-start"
                  : index % 3 === 1
                  ? "justify-self-center"
                  : "justify-self-end"
              }`}
            >

              <span className="rounded-full bg-orange-100 px-5 py-2 text-orange-700">
                {theme}
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}