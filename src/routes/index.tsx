import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroLeader from "@/assets/hero-leader.jpg";
import education from "@/assets/education.jpg";
import farmer from "@/assets/farmer.jpg";
import road from "@/assets/road.jpg";
import panchayat from "@/assets/panchayat.jpg";
import digitalId from "@/assets/digital-id.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "सूर्यपुरा ग्राम विकास पोर्टल — बदलता गांव, बढ़ता भारत" },
      { name: "description", content: "शिक्षा, कृषि, सड़क और डिजिटल पहचान से आत्मनिर्भर सूर्यपुरा। एक आधुनिक भारतीय गांव का डिजिटल पोर्टल।" },
      { property: "og:title", content: "सूर्यपुरा ग्राम विकास पोर्टल" },
      { property: "og:description", content: "बदलता गांव, बढ़ता भारत — आत्मनिर्भर सूर्यपुरा" },
      { property: "og:image", content: heroLeader },
    ],
  }),
  component: Index,
});

const navItems = [
  { hi: "मुख्य पृष्ठ", href: "#top" },
  { hi: "कृषि", href: "#krishi" },
  { hi: "शिक्षा", href: "#shiksha" },
  { hi: "इंफ्रास्ट्रक्चर", href: "#infra" },
  { hi: "पंचायत", href: "#panchayat" },
  { hi: "डिजिटल पहचान", href: "#digital" },
];

const stats = [
  { num: "12,480", label: "ग्रामवासी पंजीकृत" },
  { num: "3,200+", label: "किसानों को लाभ" },
  { num: "98%", label: "बच्चे विद्यालय में" },
  { num: "42 km", label: "नई पक्की सड़क" },
];

const services = [
  {
    id: "krishi", title: "कृषि विकास", en: "Smart Farming", img: farmer, color: "from-emerald-700/85 to-emerald-900/40",
    desc: "स्मार्ट सिंचाई, मिट्टी जांच, मौसम चेतावनी और PM-KISAN, फसल बीमा जैसी योजनाओं की सीधी जानकारी।",
    chips: ["ड्रिप सिंचाई", "मृदा रिपोर्ट", "MSP अलर्ट"]
  },
  {
    id: "shiksha", title: "शिक्षा", en: "Digital Learning", img: education, color: "from-amber-700/85 to-orange-900/40",
    desc: "डिजिटल कक्षाएं, स्मार्ट क्लासरूम, छात्रवृत्ति आवेदन और बेटी पढ़ाओ अभियान — एक ही जगह।",
    chips: ["स्मार्ट क्लास", "छात्रवृत्ति", "बेटी पढ़ाओ"]
  },
  {
    id: "infra", title: "सड़क एवं इंफ्रास्ट्रक्चर", en: "Roads & Infra", img: road, color: "from-stone-700/85 to-stone-900/40",
    desc: "ग्रामीण सड़कें, सौर स्ट्रीट लाइट, स्वच्छ जल और शिकायत निवारण — पारदर्शी प्रगति।",
    chips: ["PMGSY", "सौर लाइट", "जल जीवन"]
  },
  {
    id: "panchayat", title: "पंचायत सेवाएं", en: "Panchayat Services", img: panchayat, color: "from-green-800/85 to-green-950/40",
    desc: "जन्म, मृत्यु, आय व निवास प्रमाण पत्र, ग्राम सभा का ऑनलाइन एजेंडा और शिकायत दर्ज करें।",
    chips: ["प्रमाण पत्र", "शिकायत", "ग्राम सभा"]
  },
  {
    id: "digital", title: "डिजिटल पहचान", en: "Digital Identity", img: digitalId, color: "from-orange-700/85 to-rose-900/40",
    desc: "आधार, राशन कार्ड, आयुष्मान भारत और DigiLocker से जुड़ी सभी सेवाएं — सुरक्षित व आसान।",
    chips: ["आधार", "आयुष्मान", "DigiLocker"]
  },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div id="top" className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-5 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <Logo />
            <div className="min-w-0 leading-tight">
              <div className="font-hi text-lg sm:text-xl font-semibold text-primary truncate">सूर्यपुरा</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">Gram Vikas Portal</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7 font-hi text-[15px] text-foreground/80">
            {navItems.map(n => <a key={n.href} href={n.href} className="hover:text-primary transition">{n.hi}</a>)}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <button className="font-hi text-sm px-4 py-2 rounded-full border border-border hover:bg-secondary transition cursor-pointer">लॉगिन</button>
            <button className="font-hi text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition shadow-lg shadow-primary/20 cursor-pointer">सेवा शुरू करें</button>
          </div>
          <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden shrink-0 h-10 w-10 grid place-items-center rounded-full border border-border bg-card" aria-label="menu">
            <div className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-foreground transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-5 bg-foreground transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-foreground transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="px-5 py-4 grid gap-3 font-hi">
              {navItems.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="py-2 text-base">{n.hi}</a>)}
              <button className="mt-2 w-full py-3 rounded-full bg-primary text-primary-foreground">सेवा शुरू करें</button>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pt-10 pb-16 lg:py-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 font-hi text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/60">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              आत्मनिर्भर भारत · ग्राम विकास मिशन
            </span>
            <h1 className="font-hi mt-5 text-[2.6rem] leading-[1.1] sm:text-6xl lg:text-7xl font-semibold text-foreground">
              बदलता गांव,<br />
              <span className="bg-gradient-to-r from-primary via-emerald-700 to-accent bg-clip-text text-transparent">बढ़ता भारत</span>
            </h1>
            <p className="font-hi mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              शिक्षा, कृषि, सड़क और डिजिटल पहचान से आत्मनिर्भर <strong className="text-foreground font-semibold">सूर्यपुरा</strong> — हर ग्रामवासी की प्रगति, एक ही पोर्टल पर।
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="font-hi px-6 py-3.5 rounded-full bg-primary text-primary-foreground text-base font-medium shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition">
                योजना देखें →
              </button>
              <button className="font-hi px-6 py-3.5 rounded-full bg-card border border-border text-base font-medium hover:bg-secondary transition">
                गांव की प्रगति
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-primary">{s.num}</div>
                  <div className="font-hi text-xs sm:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent rounded-[3rem] blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border/60 shadow-2xl shadow-primary/10 aspect-[4/5]">
              <img src={heroLeader} alt="ग्राम विकास अंबेसडर" width={1536} height={1920} className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="font-hi text-white/95 text-sm">श्री रामसिंह चौधरी</div>
                <div className="text-white/70 text-xs">सरपंच · सूर्यपुरा ग्राम पंचायत</div>
              </div>
            </div>
            {/* Floating cards */}
            <div className="hidden sm:block absolute -left-6 top-10 bg-card border border-border rounded-2xl p-3 pr-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center text-primary">🌾</div>
                <div>
                  <div className="font-hi text-xs text-muted-foreground">आज की मंडी</div>
                  <div className="text-sm font-semibold">गेहूं ₹2,275/qt</div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute -right-4 bottom-16 bg-card border border-border rounded-2xl p-3 pr-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-accent/15 grid place-items-center text-accent">📜</div>
                <div>
                  <div className="font-hi text-xs text-muted-foreground">प्रमाण पत्र</div>
                  <div className="text-sm font-semibold">3 मिनट में जारी</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="mx-auto max-w-7xl px-5 -mt-4 mb-20">
        <div className="bg-primary text-primary-foreground rounded-3xl p-6 sm:p-8 grid sm:grid-cols-4 gap-4 shadow-xl shadow-primary/20">
          {[
            { icon: "📝", hi: "प्रमाण पत्र" },
            { icon: "🚜", hi: "कृषि योजना" },
            { icon: "🎓", hi: "छात्रवृत्ति" },
            { icon: "⚠️", hi: "शिकायत दर्ज" },
          ].map(q => (
            <button key={q.hi} className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 transition border border-white/10">
              <span className="h-12 w-12 grid place-items-center rounded-xl bg-white/10 text-2xl">{q.icon}</span>
              <span className="font-hi text-left text-[15px]">{q.hi}<br /><span className="text-xs opacity-70">अभी आवेदन</span></span>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="max-w-2xl">
          <div className="font-hi text-sm text-accent uppercase tracking-widest">हमारी सेवाएं</div>
          <h2 className="font-hi text-4xl sm:text-5xl font-semibold mt-2">पांच स्तंभ, एक संकल्प</h2>
          <p className="font-hi text-muted-foreground mt-3 text-lg">हर ग्रामवासी की ज़रूरत के लिए एक सरल, सुरक्षित और भरोसेमंद डिजिटल मंच।</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article key={s.id} id={s.id} className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}>
              <div className={`relative ${i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"} overflow-hidden`}>
                <img src={s.img} alt={s.title} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${s.color}`} />
                <div className="absolute top-4 left-4 font-hi text-xs px-3 py-1 rounded-full bg-white/90 text-foreground">{s.en}</div>
              </div>
              <div className="p-6">
                <h3 className="font-hi text-2xl font-semibold">{s.title}</h3>
                <p className="font-hi text-muted-foreground mt-2 text-[15px] leading-relaxed">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.chips.map(c => (
                    <span key={c} className="font-hi text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">{c}</span>
                  ))}
                </div>
                <a href="#" className="font-hi mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm">
                  और जानें <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section id="kahaniyan" className="bg-gradient-to-b from-background via-secondary/30 to-background border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-2xl">
            <div className="font-hi text-sm text-accent uppercase tracking-widest">बदलाव की कहानियां</div>
            <h2 className="font-hi text-4xl sm:text-5xl font-semibold mt-2">सूर्यपुरा के असली नायक</h2>
            <p className="font-hi text-muted-foreground mt-3 text-lg">हर कहानी, एक नया सवेरा। हर चेहरा, एक नई उम्मीद।</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                img: farmer, name: "सुनीता देवी", role: "किसान · आयु 42",
                before: "1.5 एकड़ बंजर ज़मीन, सालाना आय ₹18,000",
                after: "ड्रिप सिंचाई से सब्ज़ी उगाकर अब ₹1.2 लाख सालाना",
                quote: "अब बच्चों की पढ़ाई की चिंता नहीं रही।"
              },
              {
                img: education, name: "आरती कुमारी", role: "छात्रा · कक्षा 10",
                before: "गांव में स्कूल नहीं, 7 km पैदल जाना पड़ता था",
                after: "स्मार्ट क्लास और छात्रवृत्ति से अब NEET की तैयारी",
                quote: "मुझे डॉक्टर बनकर गांव लौटना है।"
              },
              {
                img: panchayat, name: "रामलाल परिवार", role: "लाभार्थी · PM आवास",
                before: "कच्चा घर, बारिश में टपकती छत",
                after: "पक्का घर, सोलर लाइट और शौचालय — सम्मान के साथ जीवन",
                quote: "सरकार ने हमारे सपने को घर दिया।"
              },
            ].map(s => (
              <article key={s.name} className="group rounded-3xl overflow-hidden bg-card border border-border shadow-sm hover:shadow-xl hover:shadow-primary/10 transition">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="font-hi text-white text-lg font-semibold">{s.name}</div>
                    <div className="text-white/80 text-xs">{s.role}</div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-stone-100 dark:bg-stone-900/40 p-3">
                      <div className="font-hi text-[11px] uppercase tracking-wider text-muted-foreground">पहले</div>
                      <div className="font-hi text-[13px] mt-1 leading-snug">{s.before}</div>
                    </div>
                    <div className="rounded-xl bg-primary/10 p-3 border border-primary/20">
                      <div className="font-hi text-[11px] uppercase tracking-wider text-primary">अब</div>
                      <div className="font-hi text-[13px] mt-1 leading-snug">{s.after}</div>
                    </div>
                  </div>
                  <p className="font-hi mt-4 text-[15px] text-foreground/90 italic border-l-2 border-accent pl-3">"{s.quote}"</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNMENT SCHEMES TRACKER */}
      <section id="yojana" className="mx-auto max-w-7xl px-5 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div className="max-w-2xl">
            <div className="font-hi text-sm text-accent uppercase tracking-widest">सरकारी योजनाएं</div>
            <h2 className="font-hi text-4xl sm:text-5xl font-semibold mt-2">हर योजना, हर लाभार्थी तक</h2>
            <p className="font-hi text-muted-foreground mt-3 text-lg">अपने गांव में चल रही सक्रिय योजनाओं की पारदर्शी जानकारी।</p>
          </div>
          <div className="flex gap-2 font-hi text-xs">
            <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20">● 18 सक्रिय</span>
            <span className="px-3 py-1.5 rounded-full bg-secondary border border-border">✓ 7 पूर्ण</span>
          </div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: "🌾", name: "PM-KISAN सम्मान निधि", dept: "कृषि मंत्रालय", status: "Active", b: "2,184", action: "Apply Now" },
            { icon: "🏠", name: "PM आवास योजना (ग्रामीण)", dept: "ग्रामीण विकास", status: "Active", b: "342", action: "Apply Now" },
            { icon: "💧", name: "जल जीवन मिशन", dept: "जल शक्ति", status: "Completed", b: "1,840 घर", action: "View Details" },
            { icon: "🎓", name: "बेटी पढ़ाओ छात्रवृत्ति", dept: "शिक्षा विभाग", status: "Active", b: "612", action: "Apply Now" },
            { icon: "🏥", name: "आयुष्मान भारत", dept: "स्वास्थ्य मंत्रालय", status: "Active", b: "9,420", action: "View Details" },
            { icon: "🛣️", name: "PMGSY सड़क योजना", dept: "ग्रामीण सड़क", status: "Completed", b: "42 km", action: "View Details" },
          ].map(y => (
            <article key={y.name} className="rounded-2xl bg-card border border-border p-5 hover:border-primary/40 hover:shadow-lg transition">
              <div className="flex items-start justify-between gap-3">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 grid place-items-center text-2xl">{y.icon}</div>
                <span className={`font-hi text-[11px] px-2.5 py-1 rounded-full ${y.status === "Active" ? "bg-emerald-100 text-emerald-800 border border-emerald-200" : "bg-stone-100 text-stone-700 border border-stone-200"}`}>
                  {y.status === "Active" ? "● सक्रिय" : "✓ पूर्ण"}
                </span>
              </div>
              <h3 className="font-hi mt-4 text-lg font-semibold leading-snug">{y.name}</h3>
              <div className="font-hi text-xs text-muted-foreground mt-1">{y.dept}</div>
              <div className="mt-4 flex items-end justify-between gap-3">
                <div>
                  <div className="font-display text-2xl font-bold text-primary">{y.b}</div>
                  <div className="font-hi text-[11px] text-muted-foreground">लाभार्थी</div>
                </div>
                <button className={`font-hi text-xs px-4 py-2 rounded-full ${y.status === "Active" ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-secondary"}`}>
                  {y.action} →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VILLAGE DASHBOARD */}
      <section id="dashboard" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <div className="max-w-2xl">
            <div className="font-hi text-sm uppercase tracking-widest text-accent">गांव का डेटा</div>
            <h2 className="font-hi text-4xl sm:text-5xl font-semibold mt-2">सूर्यपुरा एक नज़र में</h2>
            <p className="font-hi text-primary-foreground/80 mt-3 text-lg">पारदर्शी आंकड़े, पक्की प्रगति।</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { label: "साक्षरता दर", value: 87, suffix: "%", note: "+12% पिछले 5 वर्ष में", color: "bg-accent" },
              { label: "सड़क विकास", value: 92, suffix: "%", note: "42 km में से 39 km पक्की", color: "bg-amber-300" },
              { label: "किसान आय वृद्धि", value: 68, suffix: "%", note: "औसत आय ₹38k → ₹64k/वर्ष", color: "bg-emerald-300" },
            ].map(d => (
              <div key={d.label} className="rounded-3xl bg-white/10 backdrop-blur p-6 border border-white/15">
                <div className="font-hi text-sm text-primary-foreground/80">{d.label}</div>
                <div className="font-display text-5xl font-bold mt-2">{d.value}<span className="text-3xl">{d.suffix}</span></div>
                <div className="mt-4 h-2.5 w-full rounded-full bg-white/15 overflow-hidden">
                  <div className={`h-full ${d.color} rounded-full`} style={{ width: `${d.value}%` }} />
                </div>
                <div className="font-hi text-xs text-primary-foreground/70 mt-3">{d.note}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 grid sm:grid-cols-4 gap-4">
            {[
              { n: "1,840", l: "घरों में नल" },
              { n: "612", l: "छात्राएं स्कूल में" },
              { n: "24×7", l: "बिजली आपूर्ति" },
              { n: "100%", l: "खुले शौच मुक्त" },
            ].map(c => (
              <div key={c.l} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <div className="font-display text-2xl font-bold text-accent">{c.n}</div>
                <div className="font-hi text-xs text-primary-foreground/80 mt-1">{c.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLAINT / FEEDBACK + EVENTS */}
      <section className="mx-auto max-w-7xl px-5 py-20 grid lg:grid-cols-2 gap-10">
        {/* Complaint */}
        <div id="shikayat">
          <div className="font-hi text-sm text-accent uppercase tracking-widest">शिकायत / फीडबैक</div>
          <h2 className="font-hi text-3xl sm:text-4xl font-semibold mt-2">अपनी आवाज़ पंचायत तक पहुंचाएं</h2>
          <p className="font-hi text-muted-foreground mt-3">हर शिकायत का जवाब 7 कार्य दिवस में।</p>
          <form className="mt-6 rounded-3xl border border-border bg-card p-6 grid gap-4 shadow-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-1.5">
              <label className="font-hi text-sm text-foreground/80">पूरा नाम</label>
              <input className="font-hi h-12 rounded-xl border border-input bg-background px-4 outline-none focus:border-primary" placeholder="जैसे — सुनीता देवी" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-1.5">
                <label className="font-hi text-sm text-foreground/80">मोबाइल नंबर</label>
                <input className="font-hi h-12 rounded-xl border border-input bg-background px-4 outline-none focus:border-primary" placeholder="+91 ••••• •••••" />
              </div>
              <div className="grid gap-1.5">
                <label className="font-hi text-sm text-foreground/80">श्रेणी</label>
                <select className="font-hi h-12 rounded-xl border border-input bg-background px-4 outline-none focus:border-primary">
                  <option>सड़क / पानी</option><option>बिजली</option><option>शिक्षा</option><option>स्वास्थ्य</option><option>अन्य</option>
                </select>
              </div>
            </div>
            <div className="grid gap-1.5">
              <label className="font-hi text-sm text-foreground/80">समस्या विवरण</label>
              <textarea rows={4} className="font-hi rounded-xl border border-input bg-background p-4 outline-none focus:border-primary resize-none" placeholder="अपनी समस्या सरल शब्दों में लिखें..." />
            </div>
            <div className="flex flex-wrap gap-3 pt-1">
              <button className="font-hi px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow-lg shadow-primary/20">शिकायत दर्ज करें</button>
              <button type="button" className="font-hi px-6 py-3 rounded-full border border-border bg-card hover:bg-secondary inline-flex items-center gap-2">
                🔍 शिकायत ट्रैक करें
              </button>
            </div>
            <div className="font-hi text-xs text-muted-foreground">शिकायत संख्या SMS द्वारा आपके मोबाइल पर भेजी जाएगी।</div>
          </form>
        </div>

        {/* Events */}
        <div id="ghatnayen">
          <div className="font-hi text-sm text-accent uppercase tracking-widest">घटनाएं और सूचना</div>
          <h2 className="font-hi text-3xl sm:text-4xl font-semibold mt-2">आने वाली गतिविधियां</h2>
          <p className="font-hi text-muted-foreground mt-3">पंचायत, स्वास्थ्य व प्रशिक्षण कार्यक्रमों की जानकारी।</p>
          <ol className="mt-6 relative border-l-2 border-primary/30 ml-3 grid gap-5">
            {[
              { d: "18", m: "जून", time: "सुबह 10:00", title: "ग्राम सभा बैठक", place: "पंचायत भवन", tag: "पंचायत", color: "bg-primary text-primary-foreground" },
              { d: "22", m: "जून", time: "सुबह 9:00 – दोपहर 4:00", title: "निःशुल्क स्वास्थ्य शिविर", place: "प्राथमिक स्वास्थ्य केंद्र", tag: "स्वास्थ्य", color: "bg-rose-600 text-white" },
              { d: "28", m: "जून", time: "सुबह 11:00", title: "जैविक खेती प्रशिक्षण", place: "कृषि विज्ञान केंद्र", tag: "किसान", color: "bg-emerald-700 text-white" },
              { d: "02", m: "जुलाई", time: "शाम 6:00", title: "डिजिटल साक्षरता शिविर", place: "ग्राम पाठशाला", tag: "शिक्षा", color: "bg-amber-600 text-white" },
            ].map(e => (
              <li key={e.title} className="ml-6 relative">
                <span className={`absolute -left-[2.65rem] top-1 h-12 w-12 rounded-2xl grid place-items-center font-display ${e.color} shadow-md`}>
                  <span className="leading-none text-center">
                    <span className="block text-base font-bold">{e.d}</span>
                    <span className="block text-[9px] font-hi -mt-0.5">{e.m}</span>
                  </span>
                </span>
                <div className="rounded-2xl border border-border bg-card p-4 hover:shadow-md transition">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <h3 className="font-hi text-lg font-semibold">{e.title}</h3>
                    <span className="font-hi text-[11px] px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">{e.tag}</span>
                  </div>
                  <div className="font-hi text-sm text-muted-foreground mt-1">🕐 {e.time} · 📍 {e.place}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VOLUNTEER / JOIN */}
      <section id="judein" className="mx-auto max-w-7xl px-5 pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-emerald-800 via-primary to-emerald-900 text-primary-foreground p-8 sm:p-14 shadow-2xl shadow-primary/20">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <div className="font-hi text-sm text-accent uppercase tracking-widest">जुड़ें विकास मिशन से</div>
              <h2 className="font-hi text-4xl sm:text-5xl font-semibold mt-2 leading-tight">
                गांव बदल रहा है —<br />आप भी हिस्सा बनिए।
              </h2>
              <p className="font-hi mt-4 text-lg text-primary-foreground/85 max-w-xl">
                युवा, छात्र, शिक्षक और NGO — सूर्यपुरा को आत्मनिर्भर बनाने में आपका योगदान अमूल्य है। शिक्षा दीजिए, हुनर सिखाइए, या सिर्फ साथ खड़े रहिए।
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button className="font-hi px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold shadow-xl hover:translate-y-[-2px] transition">
                  Join Now · अभी जुड़ें →
                </button>
                <button className="font-hi px-6 py-3.5 rounded-full bg-white/10 border border-white/20 backdrop-blur hover:bg-white/15 transition">
                  NGO पंजीकरण
                </button>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 font-hi text-sm">
                <div><span className="font-display text-2xl font-bold text-accent">820+</span><div className="text-primary-foreground/70 text-xs">सक्रिय स्वयंसेवक</div></div>
                <div><span className="font-display text-2xl font-bold text-accent">36</span><div className="text-primary-foreground/70 text-xs">सहयोगी NGO</div></div>
                <div><span className="font-display text-2xl font-bold text-accent">14</span><div className="text-primary-foreground/70 text-xs">गांव जुड़े</div></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: "📚", t: "शिक्षा दान", d: "बच्चों को पढ़ाएं" },
                { icon: "🌱", t: "हरित मिशन", d: "पेड़ लगाएं" },
                { icon: "💪", t: "हुनर सिखाएं", d: "रोज़गार दें" },
                { icon: "❤️", t: "स्वास्थ्य सेवा", d: "जागरूकता फैलाएं" },
              ].map(v => (
                <div key={v.t} className="rounded-2xl bg-white/10 border border-white/15 backdrop-blur p-4">
                  <div className="text-3xl">{v.icon}</div>
                  <div className="font-hi font-semibold mt-2">{v.t}</div>
                  <div className="font-hi text-xs text-primary-foreground/75 mt-0.5">{v.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE PREVIEW + SOCIAL POSTS */}
      <section className="bg-gradient-to-b from-secondary/50 to-background border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-20 grid lg:grid-cols-[auto_1fr] gap-14 items-center">
          {/* Mobile mockup */}
          <div className="mx-auto">
            <div className="font-hi text-sm text-accent uppercase tracking-widest text-center lg:text-left">मोबाइल अनुभव</div>
            <h3 className="font-hi text-3xl font-semibold mt-2 mb-6 text-center lg:text-left">हर हाथ में सूर्यपुरा</h3>
            <PhoneMockup />
          </div>

          <div>
            <div className="font-hi text-sm text-accent uppercase tracking-widest">सोशल मीडिया</div>
            <h3 className="font-hi text-3xl sm:text-4xl font-semibold mt-2">गांव की कहानी, देश की प्रेरणा</h3>
            <p className="font-hi text-muted-foreground mt-3">रोज़ की प्रगति, हर पोस्ट में एक भावनात्मक संदेश।</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {/* Post 1 - Education */}
              <SocialPost
                img={education}
                badge="शिक्षा जागरूकता"
                title="पढ़ेगी बेटी, बढ़ेगा गांव"
                caption="सूर्यपुरा की हर बेटी अब स्मार्ट क्लास से जुड़ी है। शिक्षा ही असली विरासत है।"
                tags={["#बेटीपढ़ाओ", "#डिजिटलशिक्षा", "#सूर्यपुरा"]}
                tint="from-amber-600/80 to-rose-700/30"
              />
              {/* Post 2 - Farmer */}
              <SocialPost
                img={farmer}
                badge="कृषि विकास"
                title="मिट्टी से सोना उगाओ"
                caption="स्मार्ट सिंचाई और MSP की सीधी जानकारी से हमारे किसान आज आत्मनिर्भर हैं।"
                tags={["#किसान", "#स्मार्टफार्मिंग", "#आत्मनिर्भरभारत"]}
                tint="from-emerald-700/80 to-amber-700/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN NOTE */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <div className="font-hi text-sm text-accent uppercase tracking-widest">डिज़ाइन दृष्टिकोण</div>
        <h3 className="font-hi text-3xl sm:text-4xl font-semibold mt-2">क्यों यह डिज़ाइन?</h3>
        <div className="mt-6 grid sm:grid-cols-2 gap-5">
          {[
            { t: "ग्रामीण उपयोगकर्ता पहले", d: "बड़े बटन, स्पष्ट हिंदी टाइपोग्राफी (Tiro Devanagari) और कम तकनीकी शब्द — ताकि हर उम्र का व्यक्ति आसानी से उपयोग कर सके।" },
            { t: "भावनात्मक जुड़ाव", d: "स्थानीय चेहरे, खेत, स्कूल और पंचायत की वास्तविक तस्वीरें — गांव अपनी कहानी खुद कहता है।" },
            { t: "मोबाइल-फर्स्ट उपयोगिता", d: "अधिकांश ग्रामीण उपयोगकर्ता मोबाइल पर आते हैं — हैमबर्गर मेन्यू, चिपकने वाला हेडर और टैप-फ्रेंडली कार्ड।" },
            { t: "सेवाओं की स्पष्टता", d: "पांच मुख्य स्तंभ अलग-अलग रंग कोड में, चिप्स में योजनाएं — एक नज़र में सब साफ़।" },
          ].map(x => (
            <div key={x.t} className="p-5 rounded-2xl bg-card border border-border">
              <div className="font-hi font-semibold text-lg text-primary">{x.t}</div>
              <p className="font-hi text-muted-foreground text-[15px] mt-2 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 py-10 grid sm:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <div className="font-hi font-semibold text-primary">सूर्यपुरा ग्राम विकास पोर्टल</div>
              <div className="text-xs text-muted-foreground">© 2026 · ग्राम पंचायत सूर्यपुरा (काल्पनिक डेमो)</div>
            </div>
          </div>
          <div className="font-hi text-sm text-muted-foreground sm:text-center">
            जय जवान · जय किसान · जय विज्ञान · जय अनुसंधान
          </div>
          <div className="flex gap-2 font-hi text-xs">
            <span className="px-3 py-1.5 rounded-full bg-card border border-border">🇮🇳 हिन्दी</span>
            <span className="px-3 py-1.5 rounded-full bg-card border border-border">English</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-11 w-11 shrink-0 rounded-2xl bg-gradient-to-br from-primary to-emerald-700 grid place-items-center shadow-lg shadow-primary/20">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent-foreground" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        {[...Array(8)].map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = 12 + Math.cos(a) * 5, y1 = 12 + Math.sin(a) * 5;
          const x2 = 12 + Math.cos(a) * 9, y2 = 12 + Math.sin(a) * 9;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeLinecap="round" />;
        })}
      </svg>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[570px] rounded-[3rem] bg-stone-900 p-3 shadow-2xl shadow-primary/20">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-28 rounded-b-2xl bg-stone-900 z-10" />
      <div className="h-full w-full rounded-[2.4rem] overflow-hidden bg-background relative">
        <div className="px-4 pt-8 pb-3 flex justify-between text-[11px] font-semibold text-foreground">
          <span>9:41</span>
          <span>●●● 5G ▮</span>
        </div>
        <div className="px-4 pt-1 pb-3 flex items-center justify-between border-b border-border">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-emerald-700" />
            <div className="font-hi text-sm font-semibold">सूर्यपुरा</div>
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="h-0.5 w-4 bg-foreground" />
            <span className="h-0.5 w-4 bg-foreground" />
            <span className="h-0.5 w-4 bg-foreground" />
          </div>
        </div>
        <div className="p-4 space-y-3 overflow-hidden">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-emerald-800 p-4 text-primary-foreground">
            <div className="font-hi text-xs opacity-80">नमस्ते, रामलाल जी</div>
            <div className="font-hi text-lg font-semibold leading-tight mt-1">आज की सेवाएं</div>
            <button className="font-hi mt-3 text-xs px-3 py-1.5 rounded-full bg-white/15">देखें →</button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { i: "🌾", t: "कृषि" }, { i: "🎓", t: "शिक्षा" },
              { i: "📜", t: "प्रमाण" }, { i: "⚠️", t: "शिकायत" },
            ].map(x => (
              <div key={x.t} className="rounded-xl bg-card border border-border p-3 text-center">
                <div className="text-2xl">{x.i}</div>
                <div className="font-hi text-xs mt-1">{x.t}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-accent/10 border border-accent/30 p-3">
            <div className="font-hi text-[11px] text-accent font-semibold">मंडी भाव · आज</div>
            <div className="font-hi text-sm font-semibold mt-1">गेहूं ₹2,275 ↑</div>
          </div>
          <button className="w-full font-hi py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
            योजना देखें
          </button>
        </div>
      </div>
    </div>
  );
}

function SocialPost({ img, badge, title, caption, tags, tint }: {
  img: string; badge: string; title: string; caption: string; tags: string[]; tint: string;
}) {
  return (
    <div className="rounded-3xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-2xl transition">
      <div className="relative aspect-square overflow-hidden">
        <img src={img} alt={title} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${tint}`} />
        <div className="absolute top-3 left-3 font-hi text-[11px] px-2.5 py-1 rounded-full bg-white/95 text-foreground font-semibold">{badge}</div>
        <div className="absolute bottom-0 inset-x-0 p-4 text-white">
          <div className="font-hi text-2xl font-bold leading-tight drop-shadow-lg">{title}</div>
        </div>
      </div>
      <div className="p-4">
        <p className="font-hi text-sm text-foreground/90 leading-relaxed">{caption}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tags.map(t => <span key={t} className="font-hi text-[11px] text-primary font-medium">{t}</span>)}
        </div>
        <div className="mt-3 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex gap-3"><span>❤️ 2.4k</span><span>💬 184</span><span>↗ 92</span></div>
          <span className="font-hi">@suryapura.official</span>
        </div>
      </div>
    </div>
  );
}
