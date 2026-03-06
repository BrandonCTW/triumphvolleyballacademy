import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, Trophy, Users, ArrowRight } from "lucide-react";

export default function BoysIndoorPage() {
  const importantLinks = [
    {
      title: "NCVA Membership",
      description: "NCVA membership is required before competitive play begins. If your son is joining TVA Boys Indoor, this is the first step.",
      href: "https://ncva.com/info/registration/login/",
      color: "#3DBFB0",
    },
    {
      title: "AAU Membership",
      description: "AAU membership may be required depending on the events TVA competes in. Register through the official AAU site.",
      href: "https://aausports.org/membership/",
      color: "#1E2D5C",
    },
    {
      title: "NCVA Power League Info",
      description: "The Power League is Northern California's primary boys junior circuit. TVA competes here throughout the season.",
      href: "https://ncva.com/boys-division/",
      color: "#F4A07A",
    },
    {
      title: "Heat League Information",
      description: "The Fresno Heat League runs locally and gives TVA boys extra match reps over the course of the year.",
      href: "https://fresnoheat.com/boys-heat-league",
      color: "#3DBFB0",
    },
  ];

  const alumniPhotos = [
    "/photos/alumni-1.jpg",
    "/photos/alumni-2.jpg",
    "/photos/alumni-3.jpg",
    "/photos/alumni-4.jpg",
    "/photos/alumni-5.jpg",
    "/photos/alumni-6.jpg",
    "/photos/alumni-7.jpg",
    "/photos/alumni-8.jpg",
    "/photos/alumni-9.jpg",
    "/photos/alumni-10.jpg",
    "/photos/alumni-11.jpg",
    "/photos/alumni-12.jpg",
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background team photo */}
        <Image
          src="/photos/boys-team-faces.webp"
          alt="TVA boys team"
          fill
          className="object-cover object-top"
          style={{ opacity: 0.3 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.88) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.9) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle at 70% 30%, #3DBFB0 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                Boys Program
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                Boys <span style={{ color: "#3DBFB0" }}>Indoor</span>
              </h1>
              <p className="text-xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
                Competitive club volleyball for boys in the Central Valley. NCVA Power League competition, Fresno Heat League, and coaches who take both the game and the faith seriously.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  NCVA Power League
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Fresno Heat League
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(61,191,176,0.2)", color: "#3DBFB0" }}>
                  Faith-Based Training
                </span>
              </div>
              <a
                href="mailto:coachgugtva@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#3DBFB0", color: "#1E2D5C" }}
              >
                <Mail size={18} />
                Contact Now
              </a>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30" style={{ backgroundColor: "#3DBFB0" }} />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/boys-new-1.jpg"
                  alt="TVA Boys Indoor team"
                  width={600}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black mb-6" style={{ color: "#1E2D5C" }}>
                Program Overview
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#374151" }}>
                TVA Boys Indoor competes in the NCVA Power League, one of California&apos;s most contested junior circuits. Players also get Fresno Heat League matches throughout the season. That is two competitive outlets, more game reps, and more real development.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#374151" }}>
                The program started in 2011. Coaches here believe in the mission because they are part of it. Hard practices are paired with conversations about character, integrity, and what it means to compete for something larger than a scoreboard.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#374151" }}>
                Boys who join TVA are not showing up for drills alone. They are stepping into a program built on the belief that sport is a platform for something bigger. That shows up in how the teams carry themselves - on the court and off it.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <Users size={32} className="mb-4" style={{ color: "#3DBFB0" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "NCVA Power League and Heat League competition",
                  "Faith-integrated coaching and character development",
                  "Strong team culture and community",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "#374151" }}>
                    <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#3DBFB0" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] relative">
              <Image
                src="/photos/boys-new-2.jpg"
                alt="Boys team"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] relative">
              <Image
                src="/photos/boys-new-3.jpg"
                alt="Boys team"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] relative">
              <Image
                src="/photos/boys-new-4.jpg"
                alt="Boys team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="py-20" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4" style={{ color: "#1E2D5C" }}>
              Important Links
            </h2>
            <p className="text-lg" style={{ color: "#6b7280" }}>
              Here is where to go once you are ready to join TVA Boys Indoor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ borderTop: `4px solid ${link.color}` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: link.color }}
                >
                  <ExternalLink size={22} color="white" />
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#1E2D5C" }}>
                  {link.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>
                  {link.description}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-colors group-hover:gap-2"
                  style={{ color: link.color }}
                >
                  Visit Site <ArrowRight size={14} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Trophy size={36} style={{ color: "#3DBFB0" }} />
            <h2 className="text-4xl font-black" style={{ color: "#1E2D5C" }}>
              Alumni
            </h2>
          </div>
          <p className="text-lg mb-12" style={{ color: "#6b7280" }}>
            30+ TVA athletes have gone on to play at the collegiate level. This is what the mission looks like years later.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {alumniPhotos.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md aspect-square relative">
                <Image
                  src={src}
                  alt={`TVA alumni ${i + 1}`}
                  fill
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 text-center overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background action photo */}
        <Image
          src="/photos/TVA-boys-action.png"
          alt="TVA boys volleyball action"
          fill
          className="object-cover object-center"
          style={{ opacity: 0.18 }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,45,92,0.88) 0%, rgba(30,45,92,0.72) 50%, rgba(30,45,92,0.9) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-white mb-4">Contact Now</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Questions about the Boys Indoor program? Reach out directly to our director.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:coachgugtva@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "#3DBFB0", color: "#1E2D5C" }}
            >
              <Mail size={20} />
              coachgugtva@gmail.com
            </a>
            <a
              href="https://ncva.com/info/registration/login/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 border-2 hover:bg-white/10"
              style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Register with NCVA <ExternalLink size={18} />
            </a>
          </div>
          <p className="mt-4 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Director: coachgugtva@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
