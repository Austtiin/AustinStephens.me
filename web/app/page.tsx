"use client";

import Image from "next/image";
import CountUp from '../components/CountUp';

export default function Home() {
  const resumePath = encodeURI("/Files/AStephens_Resume_11142025 (4).pdf");

  return (
    <div className="min-h-screen antialiased" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <main className="mx-auto max-w-6xl px-6 py-12">
        
        {/* HERO - Profile at top center */}
        <header className="flex flex-col items-center gap-4 text-center mb-8">
          <div className="relative h-32 w-32 overflow-hidden rounded-full" style={{ border: '3px solid var(--border)' }}>
            <Image
              src="/Files/95986072.jpg"
              alt="Austin Stephens"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">Austin Stephens</h1>
            <p className="mt-1 text-lg" style={{ color: 'var(--muted)' }}>Cloud FinOps Certified Practitioner · Azure Administrator Assoc. </p>
          </div>

          <div className="mt-3 flex gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white no-print transition-colors"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Open Resume
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium no-print transition-colors"
              style={{ border: '1px solid var(--border)' }}
              href="mailto:AustinStephens103@gmail.com"
            >
              ✉️ Email Me
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium no-print transition-colors"
              style={{ border: '1px solid var(--border)' }}
              href="tel:+16512318917"
            >
              📞 Call Me
            </a>
          </div>
        </header>

        {/* CERTIFICATIONS WITH BADGES - Moved up for decorative purposes */}
        <section className="mb-12 max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="relative w-24 h-24">
                <Image
                  src="/Files/FINOPS-NB.png"
                  alt="FinOps Certified Practitioner"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-xs font-medium text-center">FinOps Certified</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="relative w-24 h-24">
                <Image
                  src="/Files/microsoft-certified-associate-badge-Photoroom.png"
                  alt="Microsoft Azure Administrator Associate"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-xs font-medium text-center">Azure Admin</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
              <div className="relative w-24 h-24">
                <Image
                  src="/Files/microsoft-certified-fundamentals-badge-Photoroom.png"
                  alt="Microsoft Azure Fundamentals"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-xs font-medium text-center">Azure Fundamentals</span>
            </div>
          </div>
        </section>

        {/* STATS - Three stat boxes */}
        <div className="mx-auto mb-12 flex flex-wrap justify-center gap-6 max-w-4xl">
          

          <div className="flex flex-col items-center gap-1 rounded-lg px-6 py-4 min-w-[200px]" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <div className="text-sm font-medium" style={{ color: 'var(--muted)' }}>Years of Experience</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
              <CountUp to={15} duration={2.2} className="inline" />+
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>In IT & Development</div>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-lg px-6 py-4 min-w-[200px]" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <div className="text-sm font-medium" style={{ color: 'var(--muted)' }}>Cost Savings Contributed</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
              $<CountUp to={250000} duration={2.2} className="inline" />+
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Annually</div>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-lg px-6 py-4 min-w-[200px]" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <div className="text-sm font-medium" style={{ color: 'var(--muted)' }}>Users Served</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
              <CountUp to={100000} duration={2.2} className="inline" />+
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Across Environments</div>
          </div>
        </div>

        {/* CUSTOM INFO CARDS */}
        <section className="mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Card */}
            <div className="p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Experience</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Cloud & Infrastructure</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Commercial & Government Azure tenants with cost modeling, governance, and forecasting.
              </p>
            </div>

            {/* Skills Card */}
            <div className="p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Skills</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Technologies</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                JavaScript · React · Tailwind · HTML5 · CSS · C# · C++ · Azure · FinOps
              </p>
            </div>

            {/* Volunteering Card */}
            <div className="p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Volunteering</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Event Management</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Fuhr Family Foundation: donor relations, website management, hosting optimization (~70% savings).
              </p>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Education</span>
              </div>
              <h3 className="text-xl font-bold mb-3">B.S. Computer Science</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Azure & FinOps Certified | CJIS Privileged Access
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS / SITES I MANAGE */}
        <section className="mt-12 max-w-5xl mx-auto mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Sites I Manage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ice Castle USA */}
            <a 
              href="https://www.icecastleusa.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl transition-all hover:shadow-xl hover:-translate-y-2" 
              style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://www.icecastleusa.com/favicon.ico"
                    alt="Ice Castle USA"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">Ice Castle USA</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Managed hosting & cost optimization
              </p>
            </a>

            {/* Forest Lake Ice Classic */}
            <a 
              href="https://ForestLakeIceClassic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl transition-all hover:shadow-xl hover:-translate-y-2" 
              style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <span className="text-3xl">🏒</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">Forest Lake Ice Classic</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Event site — hosting & savings
              </p>
            </a>

            {/* GitHub / Open Source */}
            <a 
              href="https://github.com/Austtiin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl transition-all hover:shadow-xl hover:-translate-y-2" 
              style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                    alt="GitHub"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">GitHub</h3>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Open Source repos & tooling
              </p>
            </a>
          </div>
        </section>

        <footer className="mt-16 pb-8 text-center text-sm" style={{ color: 'var(--muted)' }}>
          Built with ❤️ • AS
        </footer>
      </main>
    </div>
  );
}
