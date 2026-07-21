"use client";

import { useEffect, useRef, useState } from "react";

const row1 = [
  "カメラ",
  "皿",
  "傘",
  "カフェ",
  "花瓶",
  "お金",
  "時計",
  "ペン",
  "洗濯機",
  "ネクタイ",
];

const row2 = [
  "照明",
  "ペット",
  "カバン",
  "チケット",
  "クルマ",
  "道",
  "地図",
  "机",
  "メガネ",
  "ゲーム",
];

const row3 = [
  "食事",
  "本",
  "公園",
  "服",
  "窓",
  "音楽",
  "橋",
  "自由時間",
  "仕事",
  "家",
];

function Card({ text }: { text: string }) {
  return (
    <div className="flex h-24 w-60 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-slate-700 shadow-sm">
      {text}
    </div>
  );
}

function Marquee({
  items,
  reverse = false,
  speed,
  isPaused,
}: {
  items: string[];
  reverse?: boolean;
  speed: "slow" | "medium" | "fast";
  isPaused: boolean;
}) {
  const [cards, setCards] = useState(items);
  const [offset, setOffset] = useState(0);

  const speedMap = {
    slow: 8,
    medium: 4,
    fast: 2,
  };

  const cardWidth = 260;

  useEffect(() => {
    let animationFrame: number;
    let lastTime = performance.now();
    let elapsed = 0;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPaused) {
        elapsed += deltaTime;

        const duration = speedMap[speed] * 1000;

        const progress = Math.min(elapsed / duration, 1);

        setOffset(progress * cardWidth);

        if (progress >= 1) {
          elapsed = 0;

          setOffset(0);

          setCards((currentCards) => {
            if (reverse) {
              const lastCard = currentCards[currentCards.length - 1];

              return [
                lastCard,
                ...currentCards.slice(0, currentCards.length - 1),
              ];
            }

            const firstCard = currentCards[0];

            return [
              ...currentCards.slice(1),
              firstCard,
            ];
          });
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [reverse, speed]);

  return (
  <div className="relative overflow-hidden py-3">

    {/* カード列 */}
    <div
      className="flex gap-5"
      style={{
        transform: `translateX(${
          reverse ? offset - cardWidth : -offset
        }px)`,
      }}
    >
      {cards.map((item, index) => (
        <Card key={`${item}-${index}`} text={item} />
      ))}
    </div>

    {/* 左側のぼかし */}
    <div
      className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[calc(67%-260px)] backdrop-blur-[3px]"
      style={{
        maskImage:
          "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, black 0%, black 55%, transparent 100%)",
      }}
    />

    {/* 右側のぼかし */}
    <div
      className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[calc(67%-260px)] backdrop-blur-[3px]"
      style={{
        maskImage:
          "linear-gradient(to left, black 0%, black 55%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to left, black 0%, black 55%, transparent 100%)",
      }}
    />

  </div>
  );
}  

export default function ThemeLens() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="bg-sky-50 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold text-slate-800">
        こんなテーマを配信しています
      </h2>
      <div className="relative">
        <Marquee items={row1} speed="slow" isPaused={isPaused}/>
        
        <Marquee items={row2} speed="medium" reverse isPaused={isPaused}/>
        
        <Marquee items={row3} speed="fast" isPaused={isPaused}/>

         {/* 共通レンズ */}
         <div
           className="
           pointer-events-auto
           absolute
           left-1/2
           top-1/2
           z-20
           h-[520px]
           w-[520px]
           -translate-x-1/2
           -translate-y-1/2
           cursor-pointer
           rounded-full
           border-2
           border-white/70
           shadow-[inset_0_0_12px_rgba(255,255,255,0.28),0_0_18px_rgba(255,255,255,0.18),0_0_30px_rgba(0,0,0,0.10)]"
         
         onMouseEnter={() => setIsPaused(true)}
         onMouseLeave={() => setIsPaused(false)}
      />
      </div>
    </section>
  );
}