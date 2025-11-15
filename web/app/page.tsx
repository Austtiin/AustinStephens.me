"use client";

import Image from "next/image";
import CountUp from '../components/CountUp';

export default function Home() {
  const resumePath = encodeURI("/Files/AStephens_Resume_11142025 (4).pdf");

  return (
    <div className="min-h-screen antialiased" style={{ background: 'linear-gradient(135deg, #fcfdfd 0%, #e8f5f3 25%, #f5faf9 50%, #e8f5f3 75%, #fcfdfd 100%)', color: 'var(--foreground)' }}>
      {/* HERO PAGE - Full Screen */}
      <div className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(154, 210, 203, 0.15) 0%, rgba(235, 212, 148, 0.12) 25%, rgba(154, 210, 203, 0.08) 50%, rgba(235, 212, 148, 0.12) 75%, rgba(154, 210, 203, 0.15) 100%)' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-5 w-96 h-96 rounded-full opacity-40 blur-3xl animate-blob" style={{ background: 'radial-gradient(circle, #9AD2CB 0%, transparent 70%)' }}></div>
          <div className="absolute top-32 right-10 w-[500px] h-[500px] rounded-full opacity-35 blur-3xl" style={{ background: 'radial-gradient(circle, #EBD494 0%, transparent 70%)', animation: 'blob-spin 25s linear infinite reverse' }}></div>
          <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(circle, #7bb9b2 0%, transparent 70%)', animation: 'blob-spin 30s linear infinite' }}></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full opacity-25 blur-2xl" style={{ background: 'radial-gradient(circle, #d4a942 0%, transparent 70%)', animation: 'blob-spin 35s linear infinite reverse' }}></div>
          {/* Gradient mesh overlay */}
          <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 20% 80%, rgba(154, 210, 203, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(235, 212, 148, 0.3) 0%, transparent 50%)' }}></div>
        </div>
        <header className="flex flex-col items-center gap-4 text-center max-w-4xl">
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
            <h1 className="text-6xl md:text-7xl font-extrabold mb-4 tracking-tight" style={{ color: '#1a1d23', lineHeight: '1.1' }}>Hey, I&apos;m Austin 👋</h1>
            <p className="text-2xl md:text-3xl mb-4 font-bold tracking-tight" style={{ color: 'var(--accent)', letterSpacing: '-0.02em' }}>Junior Cloud Solutions Engineer</p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-medium" style={{ color: '#2d3e3b' }}>
              Managed 300+ Azure workloads and contributed to $250K+ in annual savings 💰<br />
              FinOps Certified Practitioner | Azure Administrator Associate<br />
              Turning cloud complexity into business value 🚀
            </p>
          </div>

          {/* CERTIFICATIONS IN HERO */}
          <div className="mt-6 flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center gap-3 p-5 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: 'white', border: '2px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div className="relative w-24 h-24">
                <Image
                  src="/Files/FINOPS-NB.png"
                  alt="FinOps Certified Practitioner"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-xs font-semibold text-center">FinOps Certified</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-5 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: 'white', border: '2px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div className="relative w-24 h-24">
                <Image
                  src="/Files/microsoft-certified-associate-badge-Photoroom.png"
                  alt="Microsoft Azure Administrator Associate"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-xs font-semibold text-center">Azure Administrator</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-5 rounded-xl transition-transform hover:scale-105" style={{ backgroundColor: 'white', border: '2px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <div className="relative w-24 h-24">
                <Image
                  src="/Files/microsoft-certified-fundamentals-badge-Photoroom.png"
                  alt="Microsoft Azure Fundamentals"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-xs font-semibold text-center">Azure Fundamentals</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white no-print transition-all hover:scale-105 hover:shadow-xl shadow-md"
              style={{ backgroundColor: 'var(--accent)', fontWeight: '600' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              href="https://github.com/Austtiin"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub Profile
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold no-print transition-all hover:scale-105 hover:shadow-xl shadow-md"
              style={{ border: '2px solid var(--accent)', color: 'var(--accent)', backgroundColor: 'white' }}
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Resume
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold no-print transition-all hover:scale-105 hover:shadow-xl shadow-md"
              style={{ border: '2px solid var(--accent)', color: 'var(--accent)', backgroundColor: 'white' }}
              href="mailto:AustinStephens103@gmail.com"
            >
              ✉️ Let&apos;s chat
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium no-print transition-all hover:scale-105"
              style={{ border: '2px solid var(--border)', color: 'var(--foreground)', backgroundColor: 'white' }}
              href="tel:+16512318917"
            >
              📞 (651) 231-8917
            </a>
          </div>
        </header>

        {/* Scroll Down Indicator */}
        <a href="#main-content" className="absolute bottom-8 animate-bounce cursor-pointer">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm" style={{ color: 'var(--muted)' }}>Scroll to explore</span>
            <svg className="w-6 h-6" style={{ color: 'var(--accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>

      {/* MAIN CONTENT */}
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(154, 210, 203, 0.02) 50%, transparent 100%)' }}>

        {/* HOW I WORK BEST */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight" style={{ color: 'var(--foreground)' }}>How I Work Best 💪</h2>
          <p className="text-center text-base mb-8 max-w-2xl mx-auto font-medium" style={{ color: 'var(--muted)' }}>
            Everyone has their ideal work style. Here&apos;s mine:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Autonomy</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                Give me a goal and trust me to figure out the path. I thrive when I have the freedom to solve problems my way.
              </p>
            </div>
            <div className="p-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Direct Communication</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                Skip the fluff. Clear, honest feedback helps me grow faster. I&apos;ll do the same for you.
              </p>
            </div>
            <div className="p-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-3 tracking-tight">Hands-On Learning</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                I learn by doing. Point me at a challenge, let me break things (safely!), and watch me figure it out.
              </p>
            </div>
          </div>
        </section>

        {/* QUOTE & STATS SECTION */}
        <div className="my-16 p-8 rounded-2xl" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
          {/* FUN QUOTE */}
          <div className="mb-12 text-center">
            <p className="text-2xl md:text-3xl font-bold italic tracking-tight" style={{ color: 'var(--accent)', lineHeight: '1.3' }}>
              &quot;Why pay cloud rates when you can pay cloud savings?&quot; 💡
            </p>
            <p className="mt-3 text-base font-medium" style={{ color: 'var(--muted)' }}>- Me, probably after finding another optimization</p>
          </div>

          {/* STATS - Three stat boxes */}
          <div className="flex flex-wrap justify-center gap-6">
          
          <div className="flex flex-col items-center gap-1 rounded-lg px-6 py-4 min-w-[200px]" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <div className="text-sm font-medium" style={{ color: 'var(--muted)' }}>Azure Workloads</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
              <CountUp to={300} duration={2.2} className="inline" />+
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Managed & Optimized ☁️</div>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-lg px-6 py-4 min-w-[200px]" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <div className="text-sm font-medium" style={{ color: 'var(--muted)' }}>Annual Savings</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
              $<CountUp to={250000} duration={2.2} className="inline" />+
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Contributed to orgs 💰</div>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-lg px-6 py-4 min-w-[200px]" style={{ backgroundColor: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <div className="text-sm font-medium" style={{ color: 'var(--muted)' }}>KPIs Implemented</div>
            <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>
              <CountUp to={10} duration={2.2} className="inline" />+
            </div>
            <div className="text-xs" style={{ color: 'var(--muted)' }}>Cost monitoring metrics 📊</div>
          </div>
        </div>
      </div>

      {/* WHAT I DO SECTION - With Box */}
      <div className="my-16">
        <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Floating accent circles */}
          <div className="absolute top-10 left-10 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: 'var(--highlight)', animation: 'float 8s ease-in-out infinite' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 tracking-tight relative z-10">🎯 What I Do</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 relative z-10">
            {/* Experience Card */}
            <div className="p-5 md:p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">☁️</div>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Cloud FinOps</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Cost Optimization & Governance</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                Managed 300+ Azure workloads with rightsizing, reservations, and savings plans. <br className="md:hidden" />
                Analyzed ~$1M in annual cloud spend across Commercial & Government tenants.
              </p>
            </div>

            {/* Skills Card */}
            <div className="p-5 md:p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">🔧</div>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Technical Stack</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Full-Stack Development</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                JavaScript • React • Next.js • TypeScript • Tailwind • C# • C++ <br className="md:hidden" />
                Azure Functions • APIs • Database Management • IT Infrastructure
              </p>
            </div>

            {/* Volunteering Card */}
            <div className="p-5 md:p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">💼</div>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Business Impact</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">IT & Systems Leadership</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                Migrated dealership website to Azure achieving 91% cost reduction <br className="md:hidden" />
                ($5,400 to $480/year). Managed IT across 10+ buildings including POS, networking & security.
              </p>
            </div>

            {/* Volunteering Card */}
            <div className="p-5 md:p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">❤️</div>
              <div className="mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--accent)' }}>Giving Back</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Community Work</h3>
              <p className="text-sm leading-relaxed font-medium" style={{ color: 'var(--muted)' }}>
                Fuhr Family Foundation: Managing donor relations, optimizing their website, and cutting hosting costs by ~70%. <br className="md:hidden" />
                Saving money for good causes feels pretty great! 🌟
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION SECTION */}
      <div className="my-16">
        <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Subtle background gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, var(--highlight) 0%, transparent 70%)' }}></div>
          {/* Floating accent circles */}
          <div className="absolute top-10 left-10 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full opacity-20" style={{ backgroundColor: 'var(--highlight)', animation: 'float 8s ease-in-out infinite' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight relative z-10">🎓 Education & Certifications</h2>
          <p className="text-center text-base mb-6 max-w-2xl mx-auto font-medium relative z-10" style={{ color: 'var(--muted)' }}>
            Building a strong foundation in computer science and cloud technologies
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
            <div className="p-5 md:p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--accent)' }}>
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">B.S. Computer Science</h3>
              <p className="text-sm md:text-base mb-2" style={{ color: 'var(--muted)' }}>
                Rasmussen University
              </p>
              <p className="text-sm" style={{ color: 'var(--accent)' }}>
                GPA: 3.66 • Dean&apos;s List
              </p>
            </div>
            
            <div className="p-5 md:p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">A.S. Software Application Development</h3>
              <p className="text-sm md:text-base mb-2" style={{ color: 'var(--muted)' }}>
                Rasmussen University
              </p>
              <p className="text-sm" style={{ color: 'var(--accent)' }}>
                Associate of Science
              </p>
            </div>
            
            <div className="p-5 md:p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-lg md:text-xl font-bold mb-3">Professional Certifications</h3>
              <ul className="text-sm space-y-2" style={{ color: 'var(--muted)' }}>
                <li>✅ FinOps Certified Practitioner</li>
                <li>✅ Azure Administrator Associate</li>
                <li>✅ Azure Fundamentals</li>
                <li>✅ CJIS Privileged Access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AI & CODING AGENTS SECTION */}
      <div className="my-16">
        <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 rounded-tl-2xl opacity-20" style={{ borderColor: 'var(--accent)' }}></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 rounded-br-2xl opacity-20" style={{ borderColor: 'var(--accent)' }}></div>
          {/* Small growing dots */}
          <div className="absolute top-1/4 right-10 w-1 h-1 rounded-full opacity-40 animate-pulse" style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className="absolute bottom-1/3 left-10 w-1.5 h-1.5 rounded-full opacity-30 animate-pulse" style={{ backgroundColor: 'var(--highlight)', animationDelay: '0.5s' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight relative z-10">🤖 AI & Coding Agents</h2>
          <p className="text-center text-sm md:text-base mb-6 max-w-2xl mx-auto font-medium relative z-10" style={{ color: 'var(--muted)' }}>
            Leveraging AI tools to accelerate development and problem-solving
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-bold mb-3">Claude (Anthropic)</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Deep reasoning, code generation, and complex problem-solving
              </p>
            </div>
            <div className="p-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold mb-3">GPT-4 / GPT-5</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Rapid prototyping, API integrations, and creative solutions
              </p>
            </div>
            <div className="p-6 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-lg font-bold mb-3">GitHub Copilot</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Real-time code suggestions and productivity boost
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AZURE SERVICES SECTION */}
      <div className="my-16">
        <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 opacity-3 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--accent), var(--accent) 2px, transparent 2px, transparent 12px)' }}></div>
          {/* Accent gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-10 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--accent), transparent)' }}></div>
          {/* Floating accent circles */}
          <div className="absolute top-16 right-16 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--accent)' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight relative z-10">☁️ Azure Services I Work With</h2>
          <p className="text-center text-sm md:text-base mb-6 max-w-2xl mx-auto font-medium relative z-10" style={{ color: 'var(--muted)' }}>
            Hands-on experience with these Azure resources
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            <div className="p-5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="text-base font-bold mb-2">Entra ID</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Identity & access management</p>
            </div>
            <div className="p-5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-base font-bold mb-2">Azure Functions</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Serverless compute</p>
            </div>
            <div className="p-5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">🌐</div>
              <h3 className="text-base font-bold mb-2">CDN / Front Door</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Content delivery & routing</p>
            </div>
            <div className="p-5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">💾</div>
              <h3 className="text-base font-bold mb-2">Storage Accounts</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Queues, files, blobs & tables</p>
            </div>
            <div className="p-5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-base font-bold mb-2">Communication Services</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Email, SMS & voice</p>
            </div>
            <div className="p-5 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-base font-bold mb-2">Cost Management</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Budgets, analysis & FinOps</p>
            </div>
          </div>
        </div>
      </div>

      {/* NEED HELP? / LEARNING GOALS SECTION */}
      <div className="my-16">
        <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--accent)' }}>
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Radial dot pattern */}
          <div className="absolute inset-0 opacity-8 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, var(--accent) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Corner highlights */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-2xl pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 blur-2xl pointer-events-none" style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}></div>
          {/* Floating dots */}
          <div className="absolute top-12 left-12 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--accent)' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight relative z-10">🤝 Let&apos;s Collaborate!</h2>
          <p className="text-center text-base mb-6 max-w-2xl mx-auto font-medium relative z-10" style={{ color: 'var(--muted)' }}>
            I&apos;m actively looking to expand my cloud knowledge into new environments. <br className="md:hidden" />
            Whether you need Azure support or want to collaborate on GCP, AWS, or Oracle Cloud projects, let&apos;s connect!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="p-5 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--accent)' }}>
              <div className="text-4xl mb-3">☁️</div>
              <h3 className="text-base font-bold mb-2" style={{ color: 'var(--accent)' }}>Azure</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>300+ workloads managed</p>
            </div>
            <div className="p-5 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-base font-bold mb-2">GCP</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Eager to learn!</p>
            </div>
            <div className="p-5 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-3">🚪</div>
              <h3 className="text-base font-bold mb-2">AWS</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Ready to dive in!</p>
            </div>
            <div className="p-5 rounded-xl text-center transition-all hover:shadow-lg hover:-translate-y-1" style={{ border: '2px solid var(--border)' }}>
              <div className="text-4xl mb-3">🟥</div>
              <h3 className="text-base font-bold mb-2">Oracle Cloud</h3>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Let&apos;s explore together!</p>
            </div>
          </div>
          <div className="text-center">
            <a
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white no-print transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              style={{ backgroundColor: 'var(--accent)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
              href="mailto:AustinStephens103@gmail.com"
            >
              📧 Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>

      {/* AZURE BILLING HELP SECTION */}
      <div className="my-16">
        <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '3px solid var(--highlight)' }}>
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Highlight gradient */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at center, var(--highlight) 0%, transparent 70%)' }}></div>
          {/* Floating elements */}
          <div className="absolute top-10 right-10 w-3 h-3 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--highlight)' }}></div>
          <div className="absolute bottom-10 left-10 w-2.5 h-2.5 rounded-full opacity-25 animate-float" style={{ backgroundColor: 'var(--accent)', animationDelay: '1.5s' }}></div>
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="text-4xl md:text-5xl mb-4">📊</div>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Having Trouble Understanding Your Azure Bill?
            </h2>
            <p className="text-base md:text-xl mb-6 font-medium leading-relaxed" style={{ color: 'var(--muted)' }}>
              I&apos;ve analyzed millions of rows of Azure billing data to help organizations <br className="hidden md:block" />
              interpret KPIs, understand cost patterns, and optimize their cloud spending.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '2px solid var(--border)' }}>
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="text-base font-bold mb-2">Cost Analysis</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Deep dive into billing data to find hidden costs</p>
              </div>
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '2px solid var(--border)' }}>
                <div className="text-3xl mb-2">📊</div>
                <h3 className="text-base font-bold mb-2">KPI Development</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Create metrics to track cloud spending</p>
              </div>
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '2px solid var(--border)' }}>
                <div className="text-3xl mb-2">💾</div>
                <h3 className="text-base font-bold mb-2">DBCU Calculations</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Database capacity unit analysis and optimization</p>
              </div>
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '2px solid var(--border)' }}>
                <div className="text-3xl mb-2">🗄️</div>
                <h3 className="text-base font-bold mb-2">Storage Analysis</h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>Ingestion, holding costs, and retention strategies</p>
              </div>
            </div>

            <div className="bg-white/50 p-6 rounded-xl border-2 mb-6" style={{ borderColor: 'var(--accent)' }}>
              <p className="text-base font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                💡 I can help you make sense of complex Azure billing statements, <br className="hidden md:block" />
                identify cost-saving opportunities, and implement better financial governance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold text-white no-print transition-all hover:scale-105 hover:shadow-xl shadow-lg"
                style={{ backgroundColor: 'var(--highlight)', color: '#1a1d23' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#c49a35'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--highlight)'; }}
                href="mailto:AustinStephens103@gmail.com?subject=Azure%20Billing%20Help%20Request"
              >
                📧 Get Help With Your Azure Bill
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold no-print transition-all hover:scale-105 hover:shadow-xl shadow-md"
                style={{ border: '2px solid var(--highlight)', color: 'var(--highlight)', backgroundColor: 'white' }}
                href="tel:+16512318917"
              >
                📞 Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
            {/* PROJECTS SECTION */}
      <div className="my-16">
        <div className="p-6 md:p-8 rounded-2xl relative overflow-hidden" style={{ backgroundColor: 'var(--card-bg)', border: '2px solid var(--border)' }}>
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          {/* Wave pattern background */}
          <div className="absolute inset-0 opacity-3 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, var(--border), var(--border) 1px, transparent 1px, transparent 10px)' }}></div>
          {/* Floating elements */}
          <div className="absolute top-16 right-16 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--accent)', animationDelay: '1s' }}></div>
          <div className="absolute bottom-16 left-20 w-2.5 h-2.5 rounded-full opacity-25 animate-float" style={{ backgroundColor: 'var(--highlight)', animationDelay: '2s' }}></div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 tracking-tight relative z-10">🚀 Sites I&apos;ve Helped Build</h2>
          <p className="text-center text-sm md:text-base mb-6 max-w-2xl mx-auto font-medium relative z-10" style={{ color: 'var(--muted)' }}>
            Real projects, real impact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <a 
              href="https://www.icecastleusa.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" 
              style={{ border: '2px solid var(--border)' }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏰</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:underline">Ice Castle USA</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                    Built with Next.js • Optimized for performance • <br className="md:hidden" />Handling thousands of visitors
                  </p>
                  <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>Visit Site →</span>
                </div>
              </div>
            </a>

            <a 
              href="https://forestlakeiceclassic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" 
              style={{ border: '2px solid var(--border)' }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">❄️</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:underline">Forest Lake Ice Classic</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                    Event management platform • Real-time updates • <br className="md:hidden" />Community engagement
                  </p>
                  <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>Visit Site →</span>
                </div>
              </div>
            </a>

            <a 
              href="https://fuhrfamilyfoundation.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" 
              style={{ border: '2px solid var(--border)' }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌟</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:underline">Fuhr Family Foundation</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                    Donor management • Cost optimization (70% savings) • <br className="md:hidden" />Volunteer work
                  </p>
                  <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>Visit Site →</span>
                </div>
              </div>
            </a>

            <a 
              href="https://github.com/Austtiin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 rounded-xl transition-all hover:shadow-lg hover:-translate-y-1" 
              style={{ border: '2px solid var(--border)' }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">💻</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:underline">My GitHub</h3>
                  <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                    Check out my code, projects, and contributions • <br className="md:hidden" />Always building something new
                  </p>
                  <span className="text-xs font-semibold" style={{ color: 'var(--accent)' }}>View Profile →</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

        <footer className="mt-16 pb-8 text-center">
          <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>
            Built with ❤️, ☕, and probably too many Claude requests!
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2025 Austin Stephens • Let&apos;s build something cool together! 🚀
          </p>
        </footer>
      </main>
    </div>
  );
}
