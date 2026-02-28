import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#1E2D5C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image
              src="/logos/TVA-Logo.png"
              alt="Triumph Volleyball Academy"
              width={140}
              height={48}
              unoptimized
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
              A Christian-based volleyball club in the Central Valley of California.
            </p>
            <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              TAX ID: 83-1610708
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "#3DBFB0" }}
            >
              Programs
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/boys-indoor"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Boys Indoor
                </Link>
              </li>
              <li>
                <Link
                  href="/girls-indoor"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Girls Indoor
                </Link>
              </li>
              <li>
                <Link
                  href="/sand"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Sand Volleyball
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3
              className="font-bold text-sm uppercase tracking-wider mb-4"
              style={{ color: "#3DBFB0" }}
            >
              Organization
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://www.smacksportswear.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            &copy; 2022-2026 Triumph Volleyball Academy. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            Uniforms by{" "}
            <a
              href="https://www.smacksportswear.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-white/70"
            >
              SMACK Sportswear
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
