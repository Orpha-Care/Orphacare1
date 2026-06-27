import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Bot,
  Check,
  Download,
  FileCheck2,
  Globe2,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UsersRound,
  Zap,
} from "lucide-react";

const websiteUrl = "https://orpha-care.onrender.com/";
const apkUrl = "/App.apk";

const features = [
  {
    title: "AI Guidance",
    description: "Smart insights at your fingertips",
    icon: Bot,
  },
  {
    title: "Disease Resources",
    description: "Trusted medical information",
    icon: BookOpen,
  },
  {
    title: "Medical Support",
    description: "Guidance from experts",
    icon: Headphones,
  },
  {
    title: "Regulatory Help",
    description: "Navigate policies with ease",
    icon: ShieldCheck,
  },
];

const trustItems = [
  { title: "Secure & Private", body: "Your data is safe with us", icon: ShieldCheck },
  { title: "Evidence Based", body: "Trusted medical information", icon: FileCheck2 },
  { title: "Expert Verified", body: "Reviewed by specialists", icon: UsersRound },
  { title: "Always Updated", body: "Latest research & guidelines", icon: Activity },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white shadow-[0_16px_36px_rgba(10,130,110,0.16)] ring-1 ring-emerald-100/80 sm:h-12 sm:w-12">
        <svg viewBox="0 0 54 54" className="h-9 w-9" aria-hidden="true">
          <defs>
            <linearGradient id="logoGradient" x1="5" x2="49" y1="7" y2="48">
              <stop stopColor="#10b7c7" />
              <stop offset="0.55" stopColor="#0ca678" />
              <stop offset="1" stopColor="#25c070" />
            </linearGradient>
          </defs>
          <path
            fill="url(#logoGradient)"
            d="M27 45.5c-3.9-7.6-15.8-12-15.8-24.2 0-6.7 4.6-12.1 11.2-12.1 2.4 0 4.4.8 6.1 2.2 1.7-1.4 3.8-2.2 6.2-2.2 6.5 0 11.1 5.4 11.1 12.1 0 12.2-11.7 16.5-15.7 24.2l-1.5-13.8h-3.1L27 45.5Z"
          />
          <circle cx="20.6" cy="24.1" r="2.6" fill="#ecfdf5" />
          <circle cx="34" cy="24.1" r="2.6" fill="#ecfdf5" />
          <path
            d="M20.5 33.2c3.7 3.1 9.9 3.1 13.6 0"
            stroke="#ecfdf5"
            strokeLinecap="round"
            strokeWidth="3.1"
          />
        </svg>
      </div>
      <div className={compact ? "leading-tight" : "leading-tight"}>
        <p className="text-[1.4rem] font-black tracking-normal text-slate-950 sm:text-[1.65rem]">
          Orpha<span className="text-emerald-600">Care</span>
        </p>
        <p className="text-xs font-semibold text-slate-500 sm:text-sm">
          Care Beyond Rarity
        </p>
      </div>
    </div>
  );
}

function Background() {
  const particles = Array.from({ length: 28 }, (_, index) => ({
    id: index,
    left: `${(index * 37) % 100}%`,
    top: `${(index * 19) % 92}%`,
    delay: (index % 8) * 0.35,
    size: 2 + (index % 4),
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="orb left-[-8rem] top-[10rem] h-56 w-56 bg-teal-200/45 sm:h-72 sm:w-72" />
      <div className="orb right-[-7rem] top-16 h-60 w-60 bg-cyan-200/55 sm:h-80 sm:w-80" />
      <div className="orb bottom-[-9rem] left-[52%] h-64 w-64 bg-emerald-200/40 sm:h-96 sm:w-96" />

      <svg className="absolute left-[-4rem] top-24 h-[38rem] w-44 opacity-30 sm:w-56" viewBox="0 0 180 620">
        <path d="M46 0c90 85 90 175 0 260s-90 175 0 260" fill="none" stroke="#13b8a7" strokeWidth="9" />
        <path d="M134 0c-90 85-90 175 0 260s90 175 0 260" fill="none" stroke="#8ee8db" strokeWidth="9" />
        {Array.from({ length: 12 }, (_, i) => (
          <path
            key={i}
            d={`M${49 + (i % 2) * 14} ${32 + i * 43} L${131 - (i % 2) * 14} ${32 + i * 43}`}
            stroke="#0f766e"
            strokeLinecap="round"
            strokeWidth="3"
          />
        ))}
      </svg>

      <svg className="absolute right-0 top-0 h-[32rem] w-[42rem] opacity-35" viewBox="0 0 680 520">
        <g fill="none" stroke="#9edfd9" strokeWidth="1.4">
          <path d="M426 22 486 84 456 151 535 205 615 170" />
          <path d="M486 84 565 80 631 26" />
          <path d="M456 151 394 184 405 262 334 314" />
          <path d="M535 205 560 286 635 328" />
        </g>
        <g fill="#fff">
          {[426, 486, 456, 535, 615, 565, 631, 394, 405, 334, 560, 635].map((x, i) => (
            <circle key={`${x}-${i}`} cx={x} cy={[22, 84, 151, 205, 170, 80, 26, 184, 262, 314, 286, 328][i]} r={i % 3 === 0 ? 8 : 5} />
          ))}
        </g>
      </svg>

      <svg className="absolute left-[28%] top-20 hidden h-44 w-[34rem] opacity-60 md:block" viewBox="0 0 560 180">
        <path
          className="heartbeat"
          d="M0 92h120l22-54 38 118 44-92 28 28h88l24-62 42 116 34-54h120"
          fill="none"
          stroke="#d9f4ef"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
        />
      </svg>

      <svg className="absolute bottom-0 left-0 h-56 w-full opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 260">
        <path
          d="M0 186c170-72 298-72 464-18 213 70 351 92 552 8 157-65 277-78 424-34v118H0Z"
          fill="url(#waveGradient)"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0" x2="1440" y1="0" y2="0">
            <stop stopColor="#dff8f3" stopOpacity="0" />
            <stop offset="0.5" stopColor="#ccfbf1" stopOpacity="0.8" />
            <stop offset="1" stopColor="#e0f2fe" stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.95)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [-8, 8, -8], opacity: [0.15, 0.75, 0.15] }}
          transition={{
            duration: 4.8 + (particle.id % 5),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Navbar() {
  return (
    <motion.header
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.05}
      className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
    >
      <Logo />
      <nav className="flex items-center gap-2 sm:gap-3" aria-label="Account actions">
        <a
          href={websiteUrl}
          target="_self"
          rel="noopener noreferrer"
          className="rounded-xl border border-white/80 bg-white/55 px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
        >
          Login
        </a>
        <a
          href={websiteUrl}
          target="_self"
          rel="noopener noreferrer"
          className="rounded-xl border border-emerald-500/70 bg-white/35 px-3 py-2 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-emerald-50 sm:rounded-2xl sm:px-5 sm:py-3 sm:text-sm"
        >
          Register
        </a>
      </nav>
    </motion.header>
  );
}

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.28 + index * 0.08}
      whileHover={{ y: -7, scale: 1.025 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="soft-glass rounded-2xl p-4 text-center sm:p-5"
    >
      <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-sm font-extrabold text-slate-950 sm:text-base">{feature.title}</h3>
      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{feature.description}</p>
    </motion.div>
  );
}

function AndroidIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-12 w-12" aria-hidden="true">
      <path d="M22 31h36v24a7 7 0 0 1-7 7H29a7 7 0 0 1-7-7V31Z" fill="currentColor" />
      <path d="M28 29c1.4-7.2 6-12 12-12s10.6 4.8 12 12H28Z" fill="currentColor" />
      <path d="M24 19 18 10M56 19l6-9" stroke="currentColor" strokeLinecap="round" strokeWidth="4" />
      <rect x="12" y="33" width="7" height="22" rx="3.5" fill="currentColor" />
      <rect x="61" y="33" width="7" height="22" rx="3.5" fill="currentColor" />
      <circle cx="34" cy="25" r="2" fill="#ecfdf5" />
      <circle cx="46" cy="25" r="2" fill="#ecfdf5" />
    </svg>
  );
}

function ActionCard() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.35}
      className="glass relative z-10 w-full max-w-[31rem] rounded-[2rem] p-4 sm:p-6 lg:p-7"
      aria-label="Choose how to continue with OrphaCare"
    >
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-teal-700 shadow-[0_18px_38px_rgba(6,78,59,0.15)] ring-1 ring-teal-100 sm:h-20 sm:w-20">
          <Globe2 className="h-8 w-8 sm:h-11 sm:w-11" />
        </div>
        <div>
          <p className="text-xl font-black tracking-normal text-slate-950 sm:text-3xl">
            Continue on Web
          </p>
          <p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">
            Instant access without installation
          </p>
        </div>
      </div>

      <motion.a
        whileHover={{ scale: 1.015, boxShadow: "0 18px 38px rgba(16,185,129,0.18)" }}
        whileTap={{ scale: 0.985 }}
        href={websiteUrl}
        target="_self"
        rel="noopener noreferrer"
        className="mt-4 flex min-h-12 w-full items-center justify-center gap-3 rounded-2xl border border-emerald-600 bg-white/55 px-5 text-base font-extrabold text-emerald-700 transition hover:bg-emerald-50 sm:mt-5 sm:min-h-14 sm:text-lg"
      >
        Open Website
        <ArrowRight className="h-5 w-5" />
      </motion.a>

      <div className="my-5 flex items-center gap-3 sm:my-7">
        <span className="h-px flex-1 bg-slate-200/90" />
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-sm font-extrabold text-slate-700 shadow-sm ring-1 ring-slate-100">
          OR
        </span>
        <span className="h-px flex-1 bg-slate-200/90" />
      </div>

      <div className="relative overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 p-4 text-white shadow-[0_26px_60px_rgba(5,150,105,0.34)] sm:p-6">
        <div className="absolute -right-16 -top-24 h-56 w-56 rounded-full bg-white/16 blur-2xl" />
        <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-emerald-200/20 blur-2xl" />
        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-950/35 px-3 py-1.5 text-xs font-extrabold uppercase tracking-normal text-emerald-50 shadow-lg sm:mb-4">
            <Sparkles className="h-3.5 w-3.5 fill-white" />
            Recommended
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              animate={{ boxShadow: ["0 0 0 0 rgba(220,252,231,0.45)", "0 0 0 18px rgba(220,252,231,0)", "0 0 0 0 rgba(220,252,231,0)"] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
              className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/20 text-white ring-1 ring-white/35 sm:h-24 sm:w-24"
            >
              <AndroidIcon />
            </motion.div>
            <div>
              <h2 className="text-xl font-black tracking-normal sm:text-3xl">
                Download Android App
              </h2>
              <p className="mt-1 text-base font-bold text-emerald-50 sm:text-xl">
                Install via Appilix
              </p>
              <p className="mt-1 text-sm font-medium text-white/86 sm:text-base">
                Direct secure installation
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
            href={apkUrl}
            target="_self"
            rel="noopener noreferrer"
            download="App.apk"
            className="mt-4 flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 text-lg font-black text-emerald-700 shadow-[0_20px_42px_rgba(4,120,87,0.25)] transition hover:text-emerald-800 sm:mt-5 sm:min-h-16 sm:text-xl"
          >
            <Download className="h-6 w-6" />
            Download APK
          </motion.a>

          <div className="mt-4 grid grid-cols-1 gap-2 min-[440px]:grid-cols-3 sm:mt-5 sm:gap-3">
            {[
              ["No Play Store Required", ShieldCheck],
              ["Fast Installation", Zap],
              ["Secure APK Delivery", LockKeyhole],
            ].map(([label, Icon]) => (
              <div
                key={label}
                className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-950/20 px-3 py-2 text-center text-xs font-extrabold leading-tight text-white ring-1 ring-white/10"
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function PhoneMockup() {
  const modules = [
    ["Diseases", Bot, "from-cyan-100 to-blue-50"],
    ["Guidance", FileCheck2, "from-orange-100 to-amber-50"],
    ["Regulatory", ShieldCheck, "from-emerald-100 to-green-50"],
    ["Support", Headphones, "from-violet-100 to-purple-50"],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, rotate: 5 }}
      animate={{ opacity: 1, y: [0, -12, 0], rotate: 5 }}
      transition={{
        opacity: { duration: 0.75, delay: 0.55 },
        y: { duration: 5.4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 0.75, delay: 0.55 },
      }}
      className="phone-shadow relative mx-auto mt-6 w-[13.5rem] shrink-0 sm:w-[16rem] lg:absolute lg:-right-16 lg:top-36 lg:mt-0 xl:-right-20 xl:w-[16.5rem] 2xl:-right-24 2xl:w-[17.25rem]"
      aria-label="OrphaCare mobile app preview"
    >
      <div className="rounded-[2.2rem] border-[8px] border-slate-950 bg-slate-950 p-1 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]">
        <div className="relative overflow-hidden rounded-[1.65rem] bg-slate-50">
          <div className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-950" />
          <div className="min-h-[29rem] bg-gradient-to-b from-white via-slate-50 to-emerald-50/60 p-4 pt-8 sm:min-h-[34rem] sm:p-5 sm:pt-9 xl:min-h-[32rem] 2xl:min-h-[33rem]">
            <div className="mb-5 flex items-center justify-between">
              <Logo compact />
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <p className="text-[0.72rem] font-extrabold text-slate-800 sm:text-xs">
              Hello, welcome back!
            </p>
            <div className="mt-3 rounded-2xl bg-gradient-to-br from-violet-100 via-white to-cyan-100 p-4 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-black text-slate-950">AI Guidance</p>
                  <p className="mt-1 text-[0.65rem] leading-relaxed text-slate-600">
                    Get AI-powered insights on rare diseases
                  </p>
                </div>
                <ArrowRight className="mt-3 h-4 w-4 text-emerald-700" />
              </div>
            </div>
            <p className="mt-5 text-sm font-black text-slate-950">Explore</p>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {modules.map(([label, Icon, gradient]) => (
                <div key={label} className={`rounded-2xl bg-gradient-to-br ${gradient} p-3 shadow-sm`}>
                  <Icon className="mb-3 h-6 w-6 text-emerald-600" />
                  <p className="text-[0.65rem] font-extrabold text-slate-800">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-black text-slate-950">Recent Updates</p>
            <div className="mt-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[0.68rem] font-extrabold text-slate-800">
                    New treatment guideline
                  </p>
                  <p className="text-[0.58rem] font-semibold text-slate-500">2 hours ago</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-around rounded-t-3xl bg-white/95 px-4 py-3 text-[0.58rem] font-bold text-slate-500 shadow-[0_-12px_24px_rgba(15,23,42,0.06)]">
              {["Home", "Search", "Saved", "Profile"].map((item, index) => (
                <span key={item} className={index === 0 ? "text-emerald-600" : ""}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TrustStrip() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={0.68}
      className="glass relative z-10 mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 rounded-[1.75rem] p-4 sm:grid-cols-2 sm:p-5 lg:grid-cols-4 lg:gap-0"
      aria-label="OrphaCare trust signals"
    >
      {trustItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className={`flex items-center gap-4 px-3 py-2 ${index > 0 ? "lg:border-l lg:border-slate-200" : ""}`}
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/75 text-emerald-700 ring-1 ring-emerald-100">
              <Icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-black text-slate-950">{item.title}</p>
              <p className="mt-1 text-sm leading-snug text-slate-600">{item.body}</p>
            </div>
          </div>
        );
      })}
    </motion.section>
  );
}

export default function App() {
  return (
    <main className="bg-medical relative min-h-screen overflow-x-hidden">
      <Background />
      <Navbar />

      <section className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-4 pb-8 pt-2 sm:px-6 sm:pb-10 md:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-8 lg:pt-8 xl:gap-14">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.14}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-100/75 px-4 py-2 text-sm font-extrabold text-emerald-800 ring-1 ring-emerald-200/70"
          >
            <ShieldCheck className="h-4 w-4" />
            Trusted Rare Disease Platform
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mt-4 text-[clamp(2.75rem,10vw,5.85rem)] font-black leading-[0.95] tracking-normal text-slate-950 sm:mt-6"
          >
            Care Beyond
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Rarity
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.26}
            className="mx-auto mt-3 max-w-2xl text-base font-medium leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8 md:text-xl lg:mx-0"
          >
            Empowering patients, caregivers, researchers, and healthcare professionals
            with trusted rare disease resources and support.
          </motion.p>

          <div className="mt-5 flex flex-col items-center sm:mt-7 lg:hidden">
            <ActionCard />
            <PhoneMockup />
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.56}
            className="soft-glass mx-auto mt-7 flex max-w-xl items-center justify-between gap-4 rounded-3xl p-3 text-left lg:mx-0"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["bg-emerald-100", "bg-cyan-100", "bg-slate-100"].map((color, index) => (
                  <div
                    key={color}
                    className={`grid h-11 w-11 place-items-center rounded-full border-2 border-white ${color} text-xs font-black text-slate-700 shadow-sm`}
                  >
                    {["DR", "PT", "RX"][index]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-black text-emerald-800 sm:text-base">
                  Trusted by Patients & Healthcare Professionals
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm">
                  Committed to accuracy, privacy, and better outcomes.
                </p>
              </div>
            </div>
            <ShieldCheck className="hidden h-7 w-7 shrink-0 text-emerald-600 sm:block" />
          </motion.div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[42rem] flex-col items-center justify-center lg:flex lg:min-h-[39rem] lg:items-start">
          <ActionCard />
          <PhoneMockup />
        </div>
      </section>

      <div className="relative z-10 px-4 pb-6 sm:px-6 lg:px-8">
        <TrustStrip />
      </div>
    </main>
  );
}
