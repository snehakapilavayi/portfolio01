"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ChromaGrid from "../ui/ChromaGrid";
import {
  FadeIn,
  ContactButton,
  LiveProjectButton,
  Magnet,
  AnimatedText,
} from "./components";

const PORTRAIT =
  "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png";

const MARQUEE = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

const SERVICES = [
  {
    n: "01",
    name: "Web Applications",
    d: "Designing and building dynamic, AI-assisted web experiences that blend storytelling, creativity, and intuitive interfaces.",
  },
  {
    n: "02",
    name: "Content Creation",
    d: "Crafting reels, posters, thumbnails, and short-form visuals that feel cinematic, modern, and personal to the brand.",
  },
  {
    n: "03",
    name: "Video Editing",
    d: "Editing in CapCut and DaVinci Resolve with a focus on pacing, mood, and emotional storytelling that holds attention.",
  },
  {
    n: "04",
    name: "Branding & Design",
    d: "Building cohesive identities, posters, and visual systems in Canva and Adobe tools that feel intentional and ownable.",
  },
  {
    n: "05",
    name: "Creative Tech & Experiments",
    d: "Hackathons, AI experiments, and student startup ideas turning curiosity into shipped, real, working prototypes.",
  },
  {
    n: "06",
    name: "Content Writing",
    d: "Writing sharp, research-backed pieces on startups, business models, and the ideas that move fast  because good thinking deserves good words.",
  },
];

const WRITINGS = [
  {
    n: "01",
    title: "Speed Is a Strategy",
    subtitle: "A deep dive into Snitch the D2C brand that turned 30-day manufacturing cycles into a ₹900 crore business.",
    tag: "Business Analysis",
    body: `I spent three hours looking into a menswear brand called Snitch. What caught my attention was not the clothes. It was how fast they work.

Snitch started in 2020 with 35 products and 4 employees. Now it makes around ₹900 crore in revenue, grows by 80% every year, and ships 35,000 garments daily across India.

What makes Snitch different is its speed. Brands like Zara and H&M can take months to launch collections. Snitch can design, make and deliver products in 30 days. They work with 40 factories, which helps them quickly turn trends into products before they become outdated.

Snitch also has low inventory waste only 3–4%, compared to the industry average of 20–30%. This is not just luck; it's a system built around being fast.

Being fast has its downsides. Many customers complain about quality, sizing issues and problems with refunds. Their resale platform, Relove, also seems a bit contradictory for a brand that launches eight styles every day.

So what I learnt from Snitch is simple: Speed is a strategy. It is not an advantage  it is a whole business model. Snitch did not win because they had the prettiest clothes. They won because while everyone else was planning, they were already making things happen.

The lesson is not that Snitch is perfect. The lesson is that in fashion, and in business, speed is the last big advantage left.`,
    readTime: "3 min read",
  },
  {
    n: "02",
    title: "Sometimes Stopping Is the Right Move",
    subtitle: "What a 30 day startup challenge taught me about understanding problems before building solutions.",
    tag: "Reflection",
    body: `Trying a 30-day startup challenge taught me something important. I stopped at Day 5. Not because I lost interest, but because of the problem I chose to work on.

I wanted to explore a solution around how children today are getting exposed to mobile phones, short-form content, and social media addiction at a very early age  and how deeply it affects their focus, emotions, behavior, and even the people around them.

At first, I thought I could build something quickly. But as I kept researching and documenting the process, I realised this problem has much more depth than I initially imagined.

It's not just a tech problem. It involves psychology, parenting, environment, education, habits, and the way digital platforms shape attention from childhood itself.

And honestly, I don't think this is something that should be approached superficially just for the sake of completing a challenge. So I decided to stop and take more time to understand the space properly before trying to build anything meaningful around it.

Sometimes stopping is not failure. Sometimes it means you finally understood the weight of the problem you're trying to solve.

The Day 0–5 videos are on my Instagram.`,
    readTime: "2 min read",
  },
  {
  n: "03",
  title: "Rejection Isn't the End",
  subtitle: "What Pizza Galleria's Shark Tank rejection taught me about determination, ignorance, and the loudest kind of launch.",
  tag: "Inspiration",
  body: `I recently came across a brand that was rejected by the Sharks on Shark Tank India Season 3 and is still doing incredibly well.

The brand is Pizza Galleria aA100% vegetarian pizza brand from Haryana.

But what actually shook me wasn't the numbers. It was the determination of the founder. The day co-founders Sandeep Jangra and Ishan Chugh got rejected on national TV, the first thing Sandeep did was Google "gross profit." That determination has inspired me a lot.

The Sharks rejected them not because the taste was bad. In fact, the Sharks loved the pizza. They rejected them because Sandeep couldn't clearly explain the difference between monthly and annual profits during the pitch. That created a trust deficit. And the deal was gone.

But here's what makes his story different. Sandeep tried pizza for the very first time as a working adult while employed at a company in Gurgaon. He loved the taste. And instead of having another slice, he thought — why doesn't my hometown have this?

An entrepreneur's mindset. ofc

He went back to Gohana, Haryana, a small town most pizza brands had completely ignored — and built something from scratch. He walked into Shark Tank with 30 outlets and a 4.9 Zomato rating. He left without a deal. And instead of giving up, he got back to work.

Today, Pizza Galleria has 126+ outlets across India.

The lesson I took from this has nothing to do with pizza. Rejection isn't the end. Sometimes it's the loudest launch you'll ever get.`,
  readTime: "2 min read",
},
  {
    n: "04",
    title: "Sarvam Is Not India's ChatGPT — And That's the Point",
    subtitle: "Why building AI for India was never about copying what already exists.",
    tag: "AI · Startups",
    body: `Why do we keep calling every AI company "the next ChatGPT"?

Maybe Sarvam AI was never trying to be India's ChatGPT. Maybe it was trying to be something completely different.

While the world was focused on building AI models that work amazingly well in English, Sarvam looked at a different challenge: how do we make AI actually understand India?

A country where people don't just communicate in one language, but in Hindi, Tamil, Telugu, Bengali, Hinglish, and many other cultural contexts. Because building AI for India is not just translating words. It's understanding how people speak, ask questions, and use technology in their everyday lives.

What I found interesting about Sarvam is that they didn't start with the question, "How do we copy what already exists?" They started with, "What is a problem unique to India that needs solving?"

And I think that's a valuable lesson for every student building something. You don't always need to compete with the biggest companies in the world. Sometimes, the biggest opportunities are hidden in problems that others overlook. A problem that looks local today can become a global opportunity tomorrow.

Sarvam is not India's ChatGPT. Sarvam is Sarvam. And maybe that's exactly what makes it interesting.`,
    readTime: "2 min read",
  },
];

const PROJECTS = [
  {
    n: "01",
    name: "Swap Space",
    cat: "Market Place",
    url: "https://swapspace-three.vercel.app/",
  },
  {
    n: "02",
    name: "Mood Note",
    cat: "Mental Wellness",
    url: "https://mood-note-zeta.vercel.app/",
  },
  {
    n: "03",
    name: "Ritva X",
    cat: "productivity",
    url: "https://github.com/snehakapilavayi",
    underProgress: true,
  },
  {
    n: "04",
    name: "FinTech",
    cat: "",
    url: "https://github.com/snehakapilavayi",
    underProgress: true,
  },
];

function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col relative"
      style={{ overflowX: "clip", backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={-20} as="nav">
        <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16 pt-6 md:pt-8">
          <div
            className="flex justify-between items-center py-4 border-b text-xs sm:text-sm font-medium uppercase tracking-[0.2em]"
            style={{ color: "#D7E2EA", borderColor: "rgba(215,226,234,0.12)" }}
          >
            <span className="font-semibold">Sneha Kapilavayi</span>
            <div className="hidden sm:flex gap-8 lg:gap-12">
              {["About", "Skills", "Projects", "Writing", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="hover:opacity-60 transition-opacity duration-200">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="flex-1 relative flex flex-col justify-end max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16">
        <div className="overflow-hidden relative z-0">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-[0.9] w-full text-center"
              style={{ fontSize: "clamp(3rem, 14vw, 15rem)" }}
            >
              Hi, i&apos;m sneha
            </h1>
          </FadeIn>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-10 pb-12 sm:pb-16 relative z-20">
          <FadeIn delay={0.35} y={20}>
            <p
              className="font-light uppercase tracking-[0.15em] leading-relaxed max-w-xs text-center sm:text-left"
              style={{ color: "#D7E2EA", fontSize: "clamp(0.75rem, 1vw, 0.95rem)" }}
            >
              Content Creator • Web Developer • Problem Solver
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MarqueeSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const raw = (window.scrollY - top + window.innerHeight) * 0.3;
      setOffset(raw);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const row1 = [...MARQUEE.slice(0, 11), ...MARQUEE.slice(0, 11), ...MARQUEE.slice(0, 11)];
  const row2 = [...MARQUEE.slice(11), ...MARQUEE.slice(11), ...MARQUEE.slice(11)];

  const Tile = ({ src }: { src: string }) => (
    <img
      src={src}
      loading="lazy"
      alt=""
      style={{ width: 420, height: 270 }}
      className="rounded-2xl object-cover shrink-0"
    />
  );

  return (
    <section
      ref={ref}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: "transform" }}
      >
        {row1.map((s, i) => (
          <Tile key={`r1-${i}`} src={s} />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: "transform" }}
      >
        {row2.map((s, i) => (
          <Tile key={`r2-${i}`} src={s} />
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center py-24 sm:py-32 md:py-40"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <FadeIn>
              <span className="text-xs uppercase tracking-[0.25em] opacity-50" style={{ color: "#D7E2EA" }}>
                [ 01 — About ]
              </span>
              <h2
                className="hero-heading font-black uppercase leading-[0.9] tracking-tight mt-4"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
              >
                About<br />Me
              </h2>
            </FadeIn>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 flex flex-col gap-10">
            <AnimatedText
              text="I'm a first year BTech student who enjoys building things for the web and creating content around ideas I find interesting. I work with web development, design, content writing, video editing, and creative tech experiments while learning through real projects.
I don’t follow a fixed path. I like exploring different areas and improving by actually building and trying things out.
Right now, I’m open to work and projects where I can learn and contribute."
              className="font-light leading-relaxed"
              style={{ color: "#D7E2EA", fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)" }}
            />
            <div className="pt-6 border-t" style={{ borderColor: "rgba(215,226,234,0.12)" }}>
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-32 md:py-40 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 sm:mb-20 md:mb-24 pb-6 border-b" style={{ borderColor: "rgba(12,12,12,0.12)" }}>
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em]" style={{ color: "#0C0C0C", opacity: 0.5 }}>
              [ 02 — Skills ]
            </span>
            <h2
              className="font-black uppercase mt-4 leading-[0.9]"
              style={{ color: "#0C0C0C", fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Skills
            </h2>
          </FadeIn>
        </div>
        <div className="max-w-5xl mx-auto">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div
                className="flex items-start gap-6 sm:gap-10 py-8 sm:py-10 md:py-12 group transition-colors"
                style={{ borderTop: i === 0 ? "1px solid rgba(12,12,12,0.12)" : undefined, borderBottom: "1px solid rgba(12,12,12,0.12)" }}
              >
                <div
                  className="font-light shrink-0 tabular-nums"
                  style={{ color: "#0C0C0C", opacity: 0.4, fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 flex-1">
                  <div
                    className="font-medium uppercase tracking-tight"
                    style={{ color: "#0C0C0C", fontSize: "clamp(1.25rem, 2.5vw, 2.25rem)", lineHeight: 1.1 }}
                  >
                    {s.name}
                  </div>
                  <div
                    className="font-light leading-relaxed max-w-2xl"
                    style={{ color: "#0C0C0C", opacity: 0.6, fontSize: "clamp(0.9rem, 1.2vw, 1.1rem)" }}
                  >
                    {s.d}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const chromaItems = PROJECTS.map((p, i) => {
    const colors = [
      { borderColor: "#3B82F6", gradient: "linear-gradient(145deg, rgba(59, 130, 246, 0.12), rgba(12, 12, 12, 0.95))" },
      { borderColor: "#10B981", gradient: "linear-gradient(145deg, rgba(16, 185, 129, 0.12), rgba(12, 12, 12, 0.95))" },
      { borderColor: "#F59E0B", gradient: "linear-gradient(145deg, rgba(245, 158, 11, 0.12), rgba(12, 12, 12, 0.95))" },
      { borderColor: "#8B5CF6", gradient: "linear-gradient(145deg, rgba(139, 92, 246, 0.12), rgba(12, 12, 12, 0.95))" },
    ];
    const colorTheme = colors[i % colors.length];

    return {
      title: p.name,
      subtitle: p.cat,
      handle: p.n,
      borderColor: colorTheme.borderColor,
      gradient: colorTheme.gradient,
      url: p.url,
      underProgress: (p as any).underProgress,
    };
  });

  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pb-32"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between flex-wrap gap-6 pt-24 sm:pt-32 md:pt-40 mb-16 sm:mb-20 pb-6 border-b" style={{ borderColor: "rgba(215,226,234,0.12)" }}>
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] opacity-50" style={{ color: "#D7E2EA" }}>
              [ 03 — Selected Work ]
            </span>
            <h2
              className="hero-heading font-black uppercase leading-[0.9] tracking-tight mt-4"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Projects
            </h2>
          </FadeIn>
        </div>

        <ChromaGrid 
          items={chromaItems}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
}

function WritingSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section
      id="writing"
      className="py-24 sm:py-32 md:py-40"
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 sm:mb-20 pb-6 border-b" style={{ borderColor: "rgba(215,226,234,0.12)" }}>
          <FadeIn>
            <span className="text-xs uppercase tracking-[0.25em] opacity-50" style={{ color: "#D7E2EA" }}>
              [ 04 — Writing ]
            </span>
            <h2
              className="hero-heading font-black uppercase leading-[0.9] tracking-tight mt-4"
              style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
            >
              Articles
            </h2>
          </FadeIn>
        </div>
        <div className="flex flex-col gap-0 max-w-4xl mx-auto">
          {WRITINGS.map((w, i) => (
            <FadeIn key={w.n} delay={i * 0.1}>
              <div
                className="py-8 sm:py-10 border-b cursor-pointer group"
                style={{ borderColor: "rgba(215,226,234,0.1)" }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-start gap-6 sm:gap-10 flex-1 min-w-0">
                    <span
                      className="font-light shrink-0 tabular-nums opacity-30 group-hover:opacity-60 transition-opacity"
                      style={{ color: "#D7E2EA", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1 }}
                    >
                      {w.n}
                    </span>
                    <div className="flex flex-col gap-2 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span
                          className="text-xs uppercase tracking-[0.2em] font-semibold px-2 py-1 rounded-full"
                          style={{ background: "rgba(215,226,234,0.08)", color: "#D7E2EA", opacity: 0.7 }}
                        >
                          {w.tag}
                        </span>
                        <span className="text-xs opacity-40" style={{ color: "#D7E2EA" }}>{w.readTime}</span>
                      </div>
                      <h3
                        className="font-bold uppercase tracking-tight group-hover:opacity-80 transition-opacity"
                        style={{ color: "#D7E2EA", fontSize: "clamp(1.1rem, 2vw, 1.75rem)", lineHeight: 1.15 }}
                      >
                        {w.title}
                      </h3>
                      <p className="font-light opacity-50" style={{ color: "#D7E2EA", fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}>
                        {w.subtitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className="shrink-0 text-xl opacity-40 group-hover:opacity-80 transition-all duration-300"
                    style={{ color: "#D7E2EA", transform: expanded === i ? "rotate(45deg)" : "rotate(0deg)", display: "inline-block" }}
                  >
                    +
                  </span>
                </div>
                {expanded === i && (
                  <div
                    className="mt-8 pl-0 sm:pl-16 font-light leading-[1.9] whitespace-pre-line"
                    style={{ color: "#D7E2EA", opacity: 0.7, fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", borderLeft: "2px solid rgba(215,226,234,0.15)", paddingLeft: "1.5rem", marginLeft: "0" }}
                  >
                    {w.body}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      style={{ backgroundColor: "#0C0C0C", borderTop: "1px solid rgba(215,226,234,0.12)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-end pb-12 border-b" style={{ borderColor: "rgba(215,226,234,0.12)" }}>
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] opacity-50" style={{ color: "#D7E2EA" }}>
              [ 05 — Get In Touch ]
            </span>
            <h3
              className="hero-heading font-black uppercase leading-[0.9] tracking-tight mt-4"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "#D7E2EA" }}
            >
              Let&apos;s build<br />something.
            </h3>
          </div>
          <div className="lg:col-span-5 flex justify-start lg:justify-end">
            <ContactButton label="Let's Talk" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between pt-8">
          <div style={{ color: "#D7E2EA" }} className="text-xs uppercase tracking-[0.2em] opacity-60">
            © {new Date().getFullYear()} Content Creator by choice. Developer by accident.
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-[0.2em]" style={{ color: "#D7E2EA" }}>
            <a href="https://youtube.com/@thesnehafiles07?si=qLrC1tmZWNf8RTgc" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">YouTube</a>
            <a href="https://www.instagram.com/snehakapilavayi.07" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">Instagram</a>
            <a href="https://www.linkedin.com/in/sneha-kapilavayi-b26a6137a" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">LinkedIn</a>
            <a href="https://github.com/snehakapilavayi" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <main style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <WritingSection />
      <Footer />
    </main>
  );
}
