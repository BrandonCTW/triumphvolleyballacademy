import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Trophy, Users, ArrowRight } from "lucide-react";

export default function BoysIndoorPage() {
  const importantLinks = [
    {
      title: "NCVA Membership",
      description: "Register for your NCVA membership - required for all competitive play in Northern California.",
      href: "https://ncva.com/info/registration/login/",
      color: "#3DBFB0",
    },
    {
      title: "NCVA Power League Info",
      description: "Learn about the NCVA Boys Power League schedule, divisions, and competition details.",
      href: "https://ncva.com/boys-division/",
      color: "#1E2D5C",
    },
    {
      title: "Heat League Information",
      description: "Get details on the Fresno Heat League for local boys competitive volleyball.",
      href: "https://fresnoheat.com/boys-heat-league",
      color: "#F4A07A",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1E2D5C" }}>
        {/* Background team photo */}
        <Image
          src="/photos/boys-recent.webp"
          alt="TVA boys team"
          fill
          unoptimized
          className="object-cover object-center"
          style={{ opacity: 0.2 }}
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
                Competitive club volleyball for boys youth athletes in the Central Valley. TVA develops players through high-level training, NCVA Power League competition, and Fresno Heat League participation.
              </p>
              <div className="flex flex-wrap gap-3">
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
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photos/TVA-boys-action.png"
                  alt="Boys volleyball action"
                  width={600}
                  height={450}
                  unoptimized
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
                TVA Boys Indoor is a competitive club volleyball program built for young men who want to develop their game at a high level while growing in faith and character. Our coaching staff is committed to developing the whole athlete - physically, mentally, and spiritually.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#374151" }}>
                We compete in the NCVA (Northern California Volleyball Association) Power League, one of the most competitive junior volleyball circuits in California. Athletes also participate in the Fresno Heat League for additional local competition experience.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: "#374151" }}>
                At TVA, volleyball is a platform. We play with purpose - to develop champions who will impact their communities and the world for Jesus Christ.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <Users size={32} className="mb-4" style={{ color: "#3DBFB0" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>What to Expect</h3>
              <ul className="space-y-3">
                {[
                  "High-level competitive training",
                  "NCVA Power League competition",
                  "Fresno Heat League participation",
                  "Faith-integrated coaching",
                  "Character development",
                  "Team community and culture",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photos/boys-team.png"
                alt="Boys team group photo"
                width={600}
                height={400}
                unoptimized
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/photos/boys-recent.webp"
                alt="Recent boys team photo"
                width={600}
                height={400}
                unoptimized
                className="w-full h-auto"
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
              Everything you need to get started with Boys Indoor volleyball at TVA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {importantLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: link.color }}
                >
                  <ExternalLink size={22} color="white" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "#1E2D5C" }}>
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

      {/* Club Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Trophy size={36} style={{ color: "#3DBFB0" }} />
            <h2 className="text-4xl font-black" style={{ color: "#1E2D5C" }}>
              Club Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/photos/boys-achievement-1.png"
                alt="Boys club achievement"
                width={700}
                height={500}
                unoptimized
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/photos/boys-achievement-2.png"
                alt="Boys club achievement"
                width={700}
                height={500}
                unoptimized
                className="w-full h-auto"
              />
            </div>
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
          unoptimized
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
          <h2 className="text-4xl font-black text-white mb-4">Ready to Join?</h2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
            Start your NCVA membership and get ready to compete with TVA Boys Indoor.
          </p>
          <a
            href="https://ncva.com/info/registration/login/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "#3DBFB0" }}
          >
            Register with NCVA <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
