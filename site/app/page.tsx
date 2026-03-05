import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#1E2D5C" }}
      >
        {/* Background action photo */}
        <Image
          src="/photos/tva-sand-action-hero.jpg"
          alt="TVA athletes playing at the sand courts"
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          style={{ opacity: 0.45 }}
        />

        {/* Background overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(30,45,92,0.6) 0%, rgba(30,45,92,0.75) 60%, rgba(30,45,92,0.95) 100%)",
          }}
        />

        {/* Subtle color accents */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #3DBFB0 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F4A07A 0%, transparent 40%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
            <Star size={14} fill="currentColor" />
            Christian-Based Youth Volleyball
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
            Faith.{" "}
            <span style={{ color: "#3DBFB0" }}>Community.</span>
            <br />
            Excellence.
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
            Founded in 2011, TVA is the Central Valley&apos;s faith-based competitive volleyball club for boys and girls. The sport is the platform. The mission is bigger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#programs"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "#3DBFB0", color: "#1E2D5C" }}
            >
              Explore Programs
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border-2 hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Our Mission
            </Link>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1E2D5C" }}>
              Our Programs
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
              Three programs. One mission. Every athlete who trains with us gets coached on skill, shaped in character, and grounded in faith.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Boys Indoor */}
            <Link href="/boys-indoor" className="group block">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/photos/boys-team-fullsize.webp"
                    alt="Boys Indoor Volleyball"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,45,92,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: "#3DBFB0", color: "#1E2D5C" }}>
                      Boys
                    </span>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: "#1E2D5C" }}>
                  <h3 className="text-xl font-bold text-white mb-2">Boys Indoor</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Two competitive leagues - NCVA Power League and Fresno Heat League. Coaches who take the game and the faith seriously.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: "#3DBFB0" }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Girls Indoor */}
            <Link href="/girls-indoor" className="group block">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/photos/girls-indoor-action.jpg"
                    alt="Girls Indoor Volleyball"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,45,92,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: "#F4A07A", color: "#1E2D5C" }}>
                      Girls
                    </span>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: "#1E2D5C" }}>
                  <h3 className="text-xl font-bold text-white mb-2">Girls Indoor</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                    Competitive indoor volleyball for girls youth athletes. Coaches hold athletes to a real standard and train with faith at the center.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: "#3DBFB0" }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Sand */}
            <Link href="/sand" className="group block">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/photos/tva-sand-action-hero.jpg"
                    alt="Sand Volleyball"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(30,45,92,0.8) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ backgroundColor: "#3DBFB0", color: "#1E2D5C" }}>
                      Sand
                    </span>
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: "#1E2D5C" }}>
                  <h3 className="text-xl font-bold text-white mb-2">Sand Volleyball</h3>
                  <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                    TVA Beach Academy returns each summer for boys and girls. Check back for 2026 registration details and dates.
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-colors" style={{ color: "#3DBFB0" }}>
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 lg:grid-cols-4">
        {[
          { value: "3", label: "Programs", sub: "Boys Indoor · Girls Indoor · Sand", accent: "#3DBFB0", dark: false },
          { value: "2011", label: "Founded", sub: "Serving the Central Valley", accent: "#F4A07A", dark: true },
          { value: "Boys\n+ Girls", label: "Athletes", sub: "Indoor and Sand programs", accent: "#3DBFB0", dark: false },
          { value: "501c3", label: "Non-Profit", sub: "Tax ID: 83-1610708", accent: "#F4A07A", dark: true },
        ].map((stat) => (
          <div
            key={stat.label}
            className="relative px-8 py-14 flex flex-col justify-between overflow-hidden"
            style={{ backgroundColor: stat.dark ? "#1E2D5C" : "#162247" }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: stat.accent }}
            />
            <div
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: stat.accent }}
            >
              {stat.label}
            </div>
            <div
              className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-none mb-3 whitespace-pre-line"
            >
              {stat.value}
            </div>
            <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
              {stat.sub}
            </div>
          </div>
        ))}
      </section>

      {/* Faith Section */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(61,191,176,0.15)", color: "#0B7065" }}>
                Our Vision
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight" style={{ color: "#1E2D5C" }}>
                More Than
                <br />
                <span style={{ color: "#0B7065" }}>a Volleyball Club</span>
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#374151" }}>
                TVA was built on the idea that sport is a platform. Athletes who come through this program compete hard. They also leave with something that outlasts any scoreboard.
              </p>
              <blockquote className="text-xl font-medium italic leading-relaxed mb-6" style={{ color: "#374151", borderLeft: "4px solid #3DBFB0", paddingLeft: "1.5rem" }}>
                "To see the world impacted for Jesus Christ through the influence of athletes and coaches and the sport of volleyball."
              </blockquote>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: "#1E2D5C" }}>
                <p className="text-lg font-semibold italic text-white mb-2">
                  "Whatever you do, do it all for the glory of God."
                </p>
                <p style={{ color: "#3DBFB0" }} className="text-sm font-bold">
                  - 1 Corinthians 10:31
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ backgroundColor: "#F4A07A" }} />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: "#3DBFB0" }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/vision-and-mission.png"
                  alt="Vision and Mission"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="w-12 h-1 mx-auto rounded-full" style={{ backgroundColor: "#3DBFB0" }} />
            </div>
            <h2 className="text-3xl font-black" style={{ color: "#1E2D5C" }}>Official Partners</h2>
            <p className="text-base mt-2" style={{ color: "#6b7280" }}>
              The partners who back TVA believe in what this program is building.
            </p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.smacksportswear.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-full max-w-sm text-center"
              style={{ borderTop: "4px solid #3DBFB0" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto"
                style={{ backgroundColor: "rgba(61,191,176,0.12)" }}
              >
                <Star size={26} style={{ color: "#3DBFB0" }} />
              </div>
              <h3 className="text-2xl font-black mb-1" style={{ color: "#1E2D5C" }}>
                SMACK Sportswear
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#6b7280" }}>
                Official Uniform Partner
              </p>
              <span
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 group-hover:scale-105"
                style={{ backgroundColor: "#3DBFB0", color: "#1E2D5C" }}
              >
                Visit Site <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
