"use client";

import Image from "next/image";
import CountUp from '../components/CountUp';
import { Box, Card, CardContent, Typography, Chip, LinearProgress, Paper, Stack, Divider, Tooltip, Badge, Avatar, CircularProgress, Tabs, Tab } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloudIcon from '@mui/icons-material/Cloud';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { LineChart, Line, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const resumePath = encodeURI("/Files/AStephens_Resume_11142025 (4).pdf");
  const [activeTab, setActiveTab] = useState(0);

  // Sparkline data for KPI trends
  const workloadsData = [
    { value: 150 }, { value: 180 }, { value: 220 }, { value: 260 }, { value: 300 }
  ];
  const savingsData = [
    { value: 150 }, { value: 180 }, { value: 200 }, { value: 230 }, { value: 250 }
  ];
  const spendData = [
    { value: 600 }, { value: 750 }, { value: 850 }, { value: 920 }, { value: 1000 }
  ];
  const buildingsData = [
    { value: 4 }, { value: 6 }, { value: 8 }, { value: 9 }, { value: 10 }
  ];

  return (
    <div className="min-h-screen antialiased" style={{ background: '#f8fffe', color: 'var(--foreground)' }}>

      {/* HERO PAGE - Full Screen */}
      <div className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Files/20250111_195715.webp"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <header className="flex flex-col items-center gap-3 text-center max-w-3xl relative z-10"
          style={{
            backgroundColor: 'rgba(154, 210, 203, 0.25)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            padding: '2rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
          }}>
          <div className="relative h-24 w-24 overflow-hidden rounded-full" style={{ border: '3px solid rgba(255, 255, 255, 0.5)' }}>
            <Image
              src="/Files/95986072.jpg"
              alt="Austin Stephens"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight" style={{ color: '#ffffff', lineHeight: '1.1', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>Hey, I&apos;m Austin 👋</h1>
            <p className="text-xl md:text-2xl mb-2 font-bold tracking-tight" style={{ color: '#9AD2CB', letterSpacing: '-0.02em', textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>Junior Cloud Solutions Engineer</p>
            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium" style={{ color: '#f0f0f0' }}>
              Helped managed 300+ Azure workloads and contributed to $250K+ in annual savings<br />
              FinOps Certified Practitioner | Azure Administrator Associate
            </p>
          </div>

          {/* CERTIFICATIONS IN HERO */}
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg transition-transform hover:scale-105" style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
              <div className="relative w-16 h-16">
                <Image
                  src="/Files/FINOPS-NB.png"
                  alt="FinOps Certified Practitioner"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-[10px] font-semibold text-center" style={{ color: '#1a1d23' }}>FinOps</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg transition-transform hover:scale-105" style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
              <div className="relative w-16 h-16">
                <Image
                  src="/Files/microsoft-certified-associate-badge-Photoroom.png"
                  alt="Microsoft Azure Administrator Associate"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-[10px] font-semibold text-center" style={{ color: '#1a1d23' }}>AZ-104</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-3 rounded-lg transition-transform hover:scale-105" style={{ backgroundColor: 'rgba(255, 255, 255, 0.35)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
              <div className="relative w-16 h-16">
                <Image
                  src="/Files/microsoft-certified-fundamentals-badge-Photoroom.png"
                  alt="Microsoft Azure Fundamentals"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <span className="text-[10px] font-semibold text-center" style={{ color: '#1a1d23' }}>AZ-900</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white no-print transition-all hover:scale-105 hover:shadow-xl shadow-lg"
              style={{ backgroundColor: 'rgba(45, 139, 127, 0.9)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', fontWeight: '600', border: '1px solid rgba(255, 255, 255, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(45, 139, 127, 1)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(45, 139, 127, 0.9)'}
              href="https://github.com/Austtiin"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold no-print transition-all hover:scale-105 hover:shadow-xl shadow-md"
              style={{ border: '2px solid rgba(255, 255, 255, 0.4)', color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Resume
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold no-print transition-all hover:scale-105 hover:shadow-xl shadow-md"
              style={{ border: '2px solid rgba(255, 255, 255, 0.4)', color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              href="mailto:AustinStephens103@gmail.com"
            >
              ✉️ Email
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium no-print transition-all hover:scale-105"
              style={{ border: '2px solid rgba(255, 255, 255, 0.3)', color: '#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
              href="tel:+16512318917"
            >
              📞 Call
            </a>
          </div>
        </header>

        {/* Quick Navigation Section */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-4xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <a href="#azure-services" className="p-2 rounded-lg text-center transition-all hover:scale-105 hover:shadow-xl" style={{ backgroundColor: 'rgba(154, 210, 203, 0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <div className="text-xl mb-0.5">☁️</div>
              <span className="text-xs font-semibold" style={{ color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Azure Skills</span>
            </a>
            <a href="#education" className="p-2 rounded-lg text-center transition-all hover:scale-105 hover:shadow-xl" style={{ backgroundColor: 'rgba(154, 210, 203, 0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <div className="text-xl mb-0.5">🎓</div>
              <span className="text-xs font-semibold" style={{ color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Education</span>
            </a>
            <a href="#billing-help" className="p-2 rounded-lg text-center transition-all hover:scale-105 hover:shadow-xl" style={{ backgroundColor: 'rgba(154, 210, 203, 0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <div className="text-xl mb-0.5">📊</div>
              <span className="text-xs font-semibold" style={{ color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Billing</span>
            </a>
            <a href="#projects" className="p-2 rounded-lg text-center transition-all hover:scale-105 hover:shadow-xl" style={{ backgroundColor: 'rgba(154, 210, 203, 0.2)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
              <div className="text-xl mb-0.5">🚀</div>
              <span className="text-xs font-semibold" style={{ color: '#ffffff', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>Projects</span>
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a href="#main-content" className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-semibold" style={{ color: '#ffffff', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Scroll to explore</span>
            <svg className="w-5 h-5" style={{ color: '#9AD2CB', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.5))' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </a>
      </div>

      <main id="main-content" className="mx-auto max-w-6xl px-6 py-16 relative" style={{ zIndex: 1 }}>
        {/* DIVE THROUGH THE CLOUD - Background Effect */}
        <div className="fixed left-0 right-0 pointer-events-none" style={{ top: '100vh', bottom: 0, zIndex: -1 }}>
          {/* Progressive background zones - Cloud to Data Center */}
          <div className="absolute inset-0 overflow-hidden">
          {/* ZONE 1: CLOUDS (0-800px) - Soft white/blue clouds */}
          <div className="absolute top-0 left-0 w-full h-[800px]" style={{ 
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(224, 242, 254, 0.6) 50%, rgba(224, 242, 254, 0.3) 100%)',
          }}></div>
          {/* Cloud shapes */}
          <div className="absolute top-10 left-[10%] w-[300px] h-[120px] rounded-full opacity-40 blur-2xl" style={{ background: 'white' }}></div>
          <div className="absolute top-32 right-[15%] w-[400px] h-[150px] rounded-full opacity-45 blur-3xl" style={{ background: 'white' }}></div>
          <div className="absolute top-64 left-[30%] w-[350px] h-[130px] rounded-full opacity-35 blur-2xl" style={{ background: 'white' }}></div>
          <div className="absolute top-[400px] right-[25%] w-[320px] h-[140px] rounded-full opacity-40 blur-3xl" style={{ background: 'white' }}></div>
          <div className="absolute top-[550px] left-[20%] w-[380px] h-[160px] rounded-full opacity-38 blur-2xl" style={{ background: 'white' }}></div>
          
          {/* ZONE 2: TRANSITIONING SKY (800px-1600px) - Blue gradient with wisps */}
          <div className="absolute top-[800px] left-0 w-full h-[800px]" style={{ 
            background: 'linear-gradient(to bottom, rgba(224, 242, 254, 0.5) 0%, rgba(186, 230, 253, 0.6) 30%, rgba(125, 211, 252, 0.5) 70%, rgba(125, 211, 252, 0.3) 100%)',
          }}></div>
          {/* Wispy clouds fading out */}
          <div className="absolute top-[900px] right-[20%] w-[280px] h-[100px] rounded-full opacity-12 blur-2xl" style={{ background: 'white' }}></div>
          <div className="absolute top-[1100px] left-[25%] w-[250px] h-[90px] rounded-full opacity-10 blur-xl" style={{ background: 'white' }}></div>
          {/* Sky teal accents */}
          <div className="absolute top-[1200px] right-[15%] w-[200px] h-[200px] rounded-full opacity-8 blur-3xl animate-float" style={{ background: 'radial-gradient(circle, #9AD2CB 0%, transparent 70%)', animationDelay: '2s' }}></div>
          <div className="absolute top-[1400px] left-[35%] w-[180px] h-[180px] rounded-full opacity-6 blur-3xl animate-float" style={{ background: 'radial-gradient(circle, #7dd3fc 0%, transparent 70%)', animationDelay: '4s' }}></div>
          
          {/* ZONE 3: APPROACHING DATA CENTER (1600px-2400px) - Darker blue with tech accents */}
          <div className="absolute top-[1600px] left-0 w-full h-[800px]" style={{ 
            background: 'linear-gradient(to bottom, rgba(125, 211, 252, 0.4) 0%, rgba(56, 189, 248, 0.5) 30%, rgba(14, 165, 233, 0.45) 70%, rgba(14, 165, 233, 0.3) 100%)',
          }}></div>
          {/* Grid pattern emerging */}
          <div className="absolute top-[1700px] left-0 w-full h-[600px] opacity-8" style={{ 
            backgroundImage: 'linear-gradient(rgba(154, 210, 203, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(154, 210, 203, 0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
          {/* Tech blobs */}
          <div className="absolute top-[1800px] right-[20%] w-[250px] h-[250px] rounded-full opacity-10 blur-3xl" style={{ background: 'radial-gradient(circle, #2d8b7f 0%, transparent 70%)', animation: 'blob-spin 30s linear infinite' }}></div>
          <div className="absolute top-[2100px] left-[15%] w-[280px] h-[280px] rounded-full opacity-12 blur-3xl animate-blob" style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', animationDelay: '3s' }}></div>
          
          {/* ZONE 4: DATA CENTER (2400px+) - Dark tech environment with server rack aesthetic */}
          <div className="absolute top-[2400px] left-0 w-full h-[2000px]" style={{ 
            background: 'linear-gradient(to bottom, rgba(14, 165, 233, 0.35) 0%, rgba(30, 58, 138, 0.4) 30%, rgba(17, 24, 39, 0.3) 70%, rgba(17, 24, 39, 0.15) 100%)',
          }}></div>
          {/* Dense grid pattern like server racks */}
          <div className="absolute top-[2500px] left-0 w-full h-[1500px] opacity-12" style={{ 
            backgroundImage: 'linear-gradient(rgba(45, 139, 127, 0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 139, 127, 0.8) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
          {/* Horizontal lines like server lights */}
          <div className="absolute top-[2600px] left-0 w-full h-[1200px] opacity-10" style={{ 
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(212, 169, 66, 0.3) 60px, rgba(212, 169, 66, 0.3) 62px)',
          }}></div>
          {/* Data center glow points */}
          <div className="absolute top-[2700px] right-[25%] w-[300px] h-[300px] rounded-full opacity-15 blur-3xl" style={{ background: 'radial-gradient(circle, #d4a942 0%, transparent 70%)', animation: 'pulse 4s ease-in-out infinite' }}></div>
          <div className="absolute top-[3000px] left-[20%] w-[250px] h-[250px] rounded-full opacity-12 blur-3xl" style={{ background: 'radial-gradient(circle, #2d8b7f 0%, transparent 70%)', animation: 'pulse 5s ease-in-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute top-[3300px] right-[30%] w-[280px] h-[280px] rounded-full opacity-14 blur-3xl" style={{ background: 'radial-gradient(circle, #0ea5e9 0%, transparent 70%)', animation: 'pulse 4.5s ease-in-out infinite', animationDelay: '2s' }}></div>
          <div className="absolute top-[3600px] left-[35%] w-[320px] h-[320px] rounded-full opacity-13 blur-3xl" style={{ background: 'radial-gradient(circle, #d4a942 0%, transparent 70%)', animation: 'pulse 5.5s ease-in-out infinite', animationDelay: '0.5s' }}></div>
          
          {/* Floating indicator dots throughout */}
          <div className="absolute top-[300px] left-[15%] w-3 h-3 rounded-full opacity-20 animate-float" style={{ backgroundColor: 'var(--accent)', animationDelay: '0.5s' }}></div>
          <div className="absolute top-[800px] right-[20%] w-2.5 h-2.5 rounded-full opacity-15 animate-float" style={{ backgroundColor: 'var(--highlight)', animationDelay: '1.5s' }}></div>
          <div className="absolute top-[1400px] left-[25%] w-2 h-2 rounded-full opacity-18 animate-float" style={{ backgroundColor: 'var(--accent)', animationDelay: '3s' }}></div>
          <div className="absolute top-[2000px] right-[30%] w-3 h-3 rounded-full opacity-16 animate-float" style={{ backgroundColor: 'var(--highlight)', animationDelay: '4s' }}></div>
          <div className="absolute top-[2600px] left-[35%] w-2.5 h-2.5 rounded-full opacity-14 animate-float" style={{ backgroundColor: 'var(--accent)', animationDelay: '5.5s' }}></div>
        </div>
        </div>

        {/* DASHBOARD-STYLE CONTENT */}
        <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, md: 3 }, py: 6 }}>
          
          {/* KEY METRICS OVERVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#2d8b7f' }}>
              Key Achievements & Impact
            </Typography>
            <AutoAwesomeIcon sx={{ fontSize: 24, color: '#d4a942' }} />
          </Stack>
          <Typography variant="body2" sx={{ mb: 4, color: '#6b7280' }}>
            Contributions to cloud cost optimization and FinOps initiatives
          </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5, mb: 6 }}>
            {/* KPI Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
            <Tooltip title="Azure resources managed during Hennepin County internship" arrow placement="top">
              <Card elevation={2} sx={{ borderLeft: '4px solid #2d8b7f', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Badge badgeContent={<CheckCircleIcon sx={{ fontSize: 14 }} />} color="success">
                        <CloudIcon sx={{ fontSize: 40, color: '#2d8b7f' }} />
                      </Badge>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <TrendingUpIcon sx={{ color: '#10b981', fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 700 }}>+100%</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#2d8b7f', mb: 0.5 }}>
                      <CountUp to={300} duration={2.2} />+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                      Cloud Workloads
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#10b981', display: 'block', mb: 1 }}>
                      Hennepin County internship
                    </Typography>
                    <Box sx={{ height: 40, mt: 1 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={workloadsData}>
                          <Area type="monotone" dataKey="value" stroke="#2d8b7f" fill="#2d8b7f" fillOpacity={0.2} strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
            </Tooltip>
            </motion.div>

            {/* KPI Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
            <Tooltip title="FinOps initiatives reducing cloud expenditure" arrow placement="top">
              <Card elevation={2} sx={{ borderLeft: '4px solid #d4a942', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Badge badgeContent={<LocalFireDepartmentIcon sx={{ fontSize: 14 }} />} color="warning">
                        <AssessmentIcon sx={{ fontSize: 40, color: '#d4a942' }} />
                      </Badge>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <TrendingUpIcon sx={{ color: '#10b981', fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 700 }}>+67%</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#d4a942', mb: 0.5 }}>
                      $250K
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                      Annual Cloud Savings
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#10b981', display: 'block', mb: 1 }}>
                      Supported through FinOps
                    </Typography>
                    <Box sx={{ height: 40, mt: 1 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={savingsData}>
                          <Area type="monotone" dataKey="value" stroke="#d4a942" fill="#d4a942" fillOpacity={0.2} strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
            </Tooltip>
            </motion.div>

            {/* KPI Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
            <Tooltip title="Active analysis across commercial and government tenants" arrow placement="top">
              <Card elevation={2} sx={{ borderLeft: '4px solid #0ea5e9', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <Badge badgeContent={<DashboardIcon sx={{ fontSize: 14 }} />} color="info">
                        <SpeedIcon sx={{ fontSize: 40, color: '#0ea5e9' }} />
                      </Badge>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="body2" sx={{ color: '#10b981', fontWeight: 600, fontSize: '0.7rem' }}>ACTIVE</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#0ea5e9', mb: 0.5 }}>
                      ~$1M
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                      Annual Spend Analyzed
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
                      Commercial & Gov tenants
                    </Typography>
                    <Box sx={{ height: 40, mt: 1 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={spendData}>
                          <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
            </Tooltip>
            </motion.div>

            {/* KPI Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
            <Tooltip title="IT infrastructure support across multiple facilities" arrow placement="top">
              <Card elevation={2} sx={{ borderLeft: '4px solid #10b981', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 4 } }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                      <CodeIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <TrendingUpIcon sx={{ color: '#10b981', fontSize: 16 }} />
                        <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 700 }}>+150%</Typography>
                      </Stack>
                    </Stack>
                    <Typography variant="h3" sx={{ fontWeight: 700, color: '#8b5cf6', mb: 0.5 }}>
                      <CountUp to={10} duration={1.5} />+
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', fontWeight: 600 }}>
                      Buildings Supported
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
                      IT infrastructure & systems
                    </Typography>
                    <Box sx={{ height: 40, mt: 1 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={buildingsData}>
                          <Area type="monotone" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} strokeWidth={2} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </Box>
                  </CardContent>
                </Card>
            </Tooltip>
            </motion.div>
          </Box>
          </motion.div>

          {/* Section Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <Divider sx={{ my: 6, borderColor: 'transparent', '&::before, &::after': { borderTop: '2px solid', borderImage: 'linear-gradient(90deg, transparent, #2d8b7f, transparent) 1' } }}>
            <Chip label="Skills & Experience" sx={{ backgroundColor: '#2d8b7f', color: 'white', fontWeight: 600, px: 2 }} />
          </Divider>
          </motion.div>

          {/* SKILLS PROFICIENCY CHART */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <Box id="azure-services" sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3, mb: 6 }}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                    <BarChartIcon sx={{ color: '#2d8b7f' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Azure Skills & Experience
                    </Typography>
                  </Stack>
                  
                  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3, mb: 3 }}>
                    {/* Circular Progress Cards */}
                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
                        <CircularProgress variant="determinate" value={85} size={80} thickness={4} sx={{ color: '#2d8b7f' }} />
                        <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#2d8b7f' }}>85%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>Cost Management</Typography>
                      <Chip label="Advanced" size="small" sx={{ backgroundColor: '#2d8b7f', color: 'white', fontSize: '0.65rem', height: '18px', mt: 0.5 }} />
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
                        <CircularProgress variant="determinate" value={70} size={80} thickness={4} sx={{ color: '#0ea5e9' }} />
                        <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#0ea5e9' }}>70%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>Serverless</Typography>
                      <Chip label="Proficient" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white', fontSize: '0.65rem', height: '18px', mt: 0.5 }} />
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
                        <CircularProgress variant="determinate" value={75} size={80} thickness={4} sx={{ color: '#d4a942' }} />
                        <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#d4a942' }}>75%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>Storage & CDN</Typography>
                      <Chip label="Proficient" size="small" sx={{ backgroundColor: '#d4a942', color: 'white', fontSize: '0.65rem', height: '18px', mt: 0.5 }} />
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
                        <CircularProgress variant="determinate" value={65} size={80} thickness={4} sx={{ color: '#8b5cf6' }} />
                        <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#8b5cf6' }}>65%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>Identity & Security</Typography>
                      <Chip label="Proficient" size="small" sx={{ backgroundColor: '#8b5cf6', color: 'white', fontSize: '0.65rem', height: '18px', mt: 0.5 }} />
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
                        <CircularProgress variant="determinate" value={60} size={80} thickness={4} sx={{ color: '#10b981' }} />
                        <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#10b981' }}>60%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>Compute & VMs</Typography>
                      <Chip label="Intermediate" size="small" sx={{ backgroundColor: '#10b981', color: 'white', fontSize: '0.65rem', height: '18px', mt: 0.5 }} />
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                      <Box sx={{ position: 'relative', display: 'inline-flex', mb: 1 }}>
                        <CircularProgress variant="determinate" value={50} size={80} thickness={4} sx={{ color: '#f59e0b' }} />
                        <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 700, color: '#f59e0b' }}>50%</Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>Networking</Typography>
                      <Chip label="Learning" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white', fontSize: '0.65rem', height: '18px', mt: 0.5 }} />
                    </Box>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>Cost Management & FinOps</Typography>
                      <Typography variant="body2" sx={{ color: '#2d8b7f', fontWeight: 700 }}>Advanced</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 1, backgroundColor: '#e5e7eb', '& .MuiLinearProgress-bar': { backgroundColor: '#2d8b7f' }, display: { xs: 'block', md: 'none' } }} />
                  </Box>
                </CardContent>
              </Card>

            {/* CERTIFICATIONS & EDUCATION */}
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent id="education">
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                    <SchoolIcon sx={{ color: '#2d8b7f' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Credentials
                    </Typography>
                  </Stack>

                  <Box sx={{ mb: 3 }}>
                    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                      <Tooltip title="FinOps Certified Practitioner" arrow>
                        <Avatar sx={{ width: 36, height: 36, backgroundColor: '#d4a942', fontSize: 14, fontWeight: 700 }}>FO</Avatar>
                      </Tooltip>
                      <Tooltip title="Azure Administrator Associate" arrow>
                        <Avatar sx={{ width: 36, height: 36, backgroundColor: '#0ea5e9', fontSize: 14, fontWeight: 700 }}>104</Avatar>
                      </Tooltip>
                      <Tooltip title="Azure Fundamentals" arrow>
                        <Avatar sx={{ width: 36, height: 36, backgroundColor: '#0ea5e9', fontSize: 14, fontWeight: 700 }}>900</Avatar>
                      </Tooltip>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Chip label="FinOps Certified" size="small" sx={{ backgroundColor: '#d4a942', color: 'white', fontWeight: 600 }} />
                      <Chip label="AZ-104" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white', fontWeight: 600 }} />
                      <Chip label="AZ-900" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white', fontWeight: 600 }} />
                    </Stack>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                      B.S. Computer Science
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Rasmussen University
                    </Typography>
                    <Typography variant="caption" sx={{ display: 'block', color: '#2d8b7f', fontWeight: 600 }}>
                      GPA: 3.66 • Dean&apos;s List
                    </Typography>
                  </Box>

                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
                      A.S. Software Development
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Rasmussen University
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
          </Box>
          </motion.div>

          {/* Section Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <Divider sx={{ my: 6, borderColor: 'transparent', '&::before, &::after': { borderTop: '2px solid', borderImage: 'linear-gradient(90deg, transparent, #d4a942, transparent) 1' } }}>
            <Chip label="Services & Specializations" sx={{ backgroundColor: '#d4a942', color: 'white', fontWeight: 600, px: 2 }} />
          </Divider>
          </motion.div>

          {/* ACTIVITY TIMELINE */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <Card elevation={2} sx={{ mb: 6, position: 'relative', overflow: 'visible' }}>
            {/* Decorative corner accent */}
            <Box sx={{ position: 'absolute', top: -10, right: -10, width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #2d8b7f 0%, #d4a942 100%)', opacity: 0.1, zIndex: 0 }} />
            <CardContent sx={{ position: 'relative', zIndex: 1 }}>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                <TimelineIcon sx={{ color: '#2d8b7f' }} />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  Recent Activity & Milestones
                </Typography>
                <AutoAwesomeIcon sx={{ fontSize: 20, color: '#d4a942', ml: 'auto' }} />
              </Stack>
              
              <Box>
                {/* Timeline Item 1 - B.S. Computer Science (2025) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                <Stack direction="row" spacing={2} sx={{ mb: 3, position: 'relative', '&::before': { content: '""', position: 'absolute', left: '19px', top: '40px', bottom: '-12px', width: '2px', backgroundColor: '#e5e7eb' } }}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: '#8b5cf6', zIndex: 1, boxShadow: '0 4px 12px rgba(139, 92, 246, 0.3)' }}>
                    <SchoolIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>B.S. Computer Science</Typography>
                      <Chip label="2025" size="small" sx={{ backgroundColor: '#8b5cf6', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Graduated with 3.66 GPA, Dean&apos;s List - Rasmussen University
                    </Typography>
                  </Box>
                </Stack>
                </motion.div>

                {/* Timeline Item 2 - Azure Administrator (2025) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                <Stack direction="row" spacing={2} sx={{ mb: 3, position: 'relative', '&::before': { content: '""', position: 'absolute', left: '19px', top: '40px', bottom: '-12px', width: '2px', backgroundColor: '#e5e7eb' } }}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: '#0ea5e9', zIndex: 1, boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)' }}>
                    <CheckCircleIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Azure Administrator (AZ-104)</Typography>
                      <Chip label="2025" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Microsoft Azure Administrator Associate certification - managing cloud resources and infrastructure
                    </Typography>
                  </Box>
                </Stack>
                </motion.div>

                {/* Timeline Item 3 - Portfolio Projects (2024-2025) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                <Stack direction="row" spacing={2} sx={{ mb: 3, position: 'relative', '&::before': { content: '""', position: 'absolute', left: '19px', top: '40px', bottom: '-12px', width: '2px', backgroundColor: '#e5e7eb' } }}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: '#f59e0b', zIndex: 1, boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)' }}>
                    <DashboardIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Portfolio Projects Launched</Typography>
                      <Chip label="2024-2025" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Deployed multiple production sites including Ice Castle USA, OnTap MN, and portfolio projects
                    </Typography>
                  </Box>
                </Stack>
                </motion.div>

                {/* Timeline Item 4 - FinOps Certified (2024) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                <Stack direction="row" spacing={2} sx={{ mb: 3, position: 'relative', '&::before': { content: '""', position: 'absolute', left: '19px', top: '40px', bottom: '-12px', width: '2px', backgroundColor: '#e5e7eb' } }}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: '#d4a942', zIndex: 1, boxShadow: '0 4px 12px rgba(212, 169, 66, 0.3)' }}>
                    <CheckCircleIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>FinOps Certified Practitioner</Typography>
                      <Chip label="2024" size="small" sx={{ backgroundColor: '#d4a942', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Earned FinOps Foundation certification - focused on cloud cost optimization and financial operations
                    </Typography>
                  </Box>
                </Stack>
                </motion.div>

                {/* Timeline Item 5 - Azure Fundamentals (2024) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                <Stack direction="row" spacing={2} sx={{ mb: 3, position: 'relative', '&::before': { content: '""', position: 'absolute', left: '19px', top: '40px', bottom: '-12px', width: '2px', backgroundColor: '#e5e7eb' } }}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: '#10b981', zIndex: 1, boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}>
                    <CheckCircleIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Azure Fundamentals (AZ-900)</Typography>
                      <Chip label="2024" size="small" sx={{ backgroundColor: '#10b981', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Microsoft Azure Fundamentals certification - foundational cloud concepts and Azure services
                    </Typography>
                  </Box>
                </Stack>
                </motion.div>

                {/* Timeline Item 6 - Hennepin County Internship (2024) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                <Stack direction="row" spacing={2} sx={{ mb: 3, position: 'relative', '&::before': { content: '""', position: 'absolute', left: '19px', top: '40px', bottom: '-12px', width: '2px', backgroundColor: '#e5e7eb' } }}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: '#06b6d4', zIndex: 1, boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)' }}>
                    <CodeIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Hennepin County Internship</Typography>
                      <Chip label="2024" size="small" sx={{ backgroundColor: '#06b6d4', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Managed 300+ cloud workloads and gained hands-on Azure infrastructure experience
                    </Typography>
                  </Box>
                </Stack>
                </motion.div>

                {/* Timeline Item 7 - A.S. Software Application Development (2023) */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ width: 40, height: 40, backgroundColor: '#ec4899', zIndex: 1, boxShadow: '0 4px 12px rgba(236, 72, 153, 0.3)' }}>
                    <SchoolIcon sx={{ fontSize: 20 }} />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>A.S. Software Application Development</Typography>
                      <Chip label="2023" size="small" sx={{ backgroundColor: '#ec4899', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                    </Stack>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Associate degree in Software Application Development - Rasmussen University
                    </Typography>
                  </Box>
                </Stack>
                </motion.div>
              </Box>
            </CardContent>
          </Card>
          </motion.div>

          {/* Section Divider */}
          <Divider sx={{ my: 6, borderColor: 'transparent', '&::before, &::after': { borderTop: '2px solid', borderImage: 'linear-gradient(90deg, transparent, #d4a942, transparent) 1' } }}>
            <Chip label="Services & Specializations" sx={{ backgroundColor: '#d4a942', color: 'white', fontWeight: 600, px: 2 }} />
          </Divider>

          {/* AZURE BILLING SERVICES */}
          <Card id="billing-help" elevation={2} sx={{ mb: 6, background: 'linear-gradient(135deg, #f8fffe 0%, #e6f7f5 100%)', border: '2px solid #d4a942' }}>
            <CardContent>
              <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
                <TimelineIcon sx={{ color: '#d4a942', fontSize: 32 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#2d8b7f' }}>
                  Azure Billing & Cost Analysis
                </Typography>
              </Stack>
              <Typography variant="body2" sx={{ mb: 3, color: '#6b7280' }}>
                Need help with Azure costs? I&apos;m learning to break down complex billing and identify optimization opportunities.
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2, mb: 3 }}>
                  <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                    <BarChartIcon sx={{ fontSize: 32, color: '#2d8b7f', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Cost Analysis</Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Detailed breakdowns
                    </Typography>
                  </Paper>
                  <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                    <DashboardIcon sx={{ fontSize: 32, color: '#0ea5e9', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>KPI Tracking</Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Custom dashboards
                    </Typography>
                  </Paper>
                  <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                    <StorageIcon sx={{ fontSize: 32, color: '#8b5cf6', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>DBCU Calculations</Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Cosmos DB insights
                    </Typography>
                  </Paper>
                  <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                    <AccountTreeIcon sx={{ fontSize: 32, color: '#d4a942', mb: 1 }} />
                    <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Storage Analysis</Typography>
                    <Typography variant="caption" sx={{ color: '#6b7280' }}>
                      Ingestion tracking
                    </Typography>
                  </Paper>
              </Box>

              <Paper elevation={0} sx={{ p: 2, backgroundColor: '#fff', border: '1px solid #d4a942' }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#2d8b7f', mb: 1 }}>
                  💡 Questions about your Azure bill?
                </Typography>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  I&apos;m happy to help break down costs, explore optimization opportunities, and learn together.
                </Typography>
              </Paper>
            </CardContent>
          </Card>

          {/* Section Divider */}
          <Divider sx={{ my: 6, borderColor: 'transparent', '&::before, &::after': { borderTop: '2px solid', borderImage: 'linear-gradient(90deg, transparent, #0ea5e9, transparent) 1' } }}>
            <Chip label="Tech Stack & Tools" sx={{ backgroundColor: '#0ea5e9', color: 'white', fontWeight: 600, px: 2 }} />
          </Divider>

          {/* TECHNOLOGY STACK WITH TABS */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <Card elevation={2} sx={{ mb: 6 }}>
            <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
              <Tab label="All Technologies" sx={{ fontWeight: 600 }} />
              <Tab label="Cloud & DevOps" sx={{ fontWeight: 600 }} />
              <Tab label="Languages" sx={{ fontWeight: 600 }} />
              <Tab label="Learning" sx={{ fontWeight: 600 }} />
            </Tabs>
            
            <CardContent>
              {/* Tab 0: All Technologies */}
              {activeTab === 0 && (
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                      <CodeIcon sx={{ color: '#2d8b7f' }} />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Technologies I&apos;ve Worked With
                      </Typography>
                    </Stack>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      <Chip label="Next.js" variant="outlined" />
                      <Chip label="React" variant="outlined" />
                      <Chip label="TypeScript" variant="outlined" />
                      <Chip label="Python" variant="outlined" />
                      <Chip label="PowerShell" variant="outlined" />
                      <Chip label="C++" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                      <Chip label="C#" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                      <Chip label="HTML" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                      <Chip label="CSS" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                      <Chip label="Tailwind CSS" variant="outlined" />
                      <Chip label="Material UI" variant="outlined" sx={{ backgroundColor: '#0ea5e9', color: 'white' }} />
                    </Stack>
                  </Box>
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                      <CloudIcon sx={{ color: '#0ea5e9' }} />
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Cloud & Tools
                      </Typography>
                    </Stack>
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      <Chip label="Azure" variant="outlined" sx={{ backgroundColor: '#0ea5e9', color: 'white' }} />
                      <Chip label="GitHub" variant="outlined" />
                      <Chip label="VS Code" variant="outlined" />
                      <Chip label="GPT-4" variant="outlined" sx={{ backgroundColor: '#10b981', color: 'white' }} />
                      <Chip label="GPT-5" variant="outlined" sx={{ backgroundColor: '#10b981', color: 'white' }} />
                    </Stack>
                  </Box>
                </Box>
              )}

              {/* Tab 1: Cloud & DevOps */}
              {activeTab === 1 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Cloud Platforms & DevOps Tools</Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Azure Services</Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        <Chip label="Azure Commercial" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white' }} />
                        <Chip label="Azure Government" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white' }} />
                        <Chip label="Multi-tenant" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white' }} />
                      </Stack>
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>AI & Automation</Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        <Chip label="GPT-4" size="small" sx={{ backgroundColor: '#10b981', color: 'white' }} />
                        <Chip label="GPT-5" size="small" sx={{ backgroundColor: '#10b981', color: 'white' }} />
                        <Chip label="GitHub Copilot" size="small" />
                      </Stack>
                    </Paper>
                  </Box>
                </Box>
              )}

              {/* Tab 2: Languages */}
              {activeTab === 2 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>Programming Languages</Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                      <CodeIcon sx={{ fontSize: 40, color: '#2d8b7f', mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>TypeScript / JavaScript</Typography>
                      <Chip label="Proficient" size="small" sx={{ backgroundColor: '#2d8b7f', color: 'white', mt: 1 }} />
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                      <CodeIcon sx={{ fontSize: 40, color: '#0ea5e9', mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>Python</Typography>
                      <Chip label="Intermediate" size="small" sx={{ backgroundColor: '#0ea5e9', color: 'white', mt: 1 }} />
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                      <CodeIcon sx={{ fontSize: 40, color: '#8b5cf6', mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>PowerShell</Typography>
                      <Chip label="Intermediate" size="small" sx={{ backgroundColor: '#8b5cf6', color: 'white', mt: 1 }} />
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                      <CodeIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>C++ / C#</Typography>
                      <Chip label="Learning" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white', mt: 1 }} />
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb', textAlign: 'center' }}>
                      <CodeIcon sx={{ fontSize: 40, color: '#10b981', mb: 1 }} />
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>HTML / CSS</Typography>
                      <Chip label="Proficient" size="small" sx={{ backgroundColor: '#10b981', color: 'white', mt: 1 }} />
                    </Paper>
                  </Box>
                </Box>
              )}

              {/* Tab 3: Learning */}
              {activeTab === 3 && (
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Technologies I&apos;m Learning</Typography>
                  <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
                    Expanding my cloud and infrastructure knowledge
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Cloud Platforms</Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        <Chip label="AWS" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white' }} />
                        <Chip label="Google Cloud" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white' }} />
                        <Chip label="Oracle Cloud" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white' }} />
                      </Stack>
                    </Paper>
                    <Paper elevation={0} sx={{ p: 2, border: '1px solid #e5e7eb' }}>
                      <Typography variant="body2" sx={{ fontWeight: 700, mb: 1 }}>Infrastructure as Code</Typography>
                      <Stack direction="row" flexWrap="wrap" gap={1}>
                        <Chip label="Terraform" size="small" sx={{ backgroundColor: '#8b5cf6', color: 'white' }} />
                        <Chip label="Bicep" size="small" sx={{ backgroundColor: '#8b5cf6', color: 'white' }} />
                      </Stack>
                    </Paper>
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
          </motion.div>

          {/* OLD TECHNOLOGY STACK - KEEPING FOR BACKWARD COMPATIBILITY */}
          <Box sx={{ display: 'none', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3, mb: 6 }}>
              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <CodeIcon sx={{ color: '#2d8b7f' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Technologies I&apos;ve Worked With
                    </Typography>
                  </Stack>
                  <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1.5, fontStyle: 'italic' }}>
                    Learning and growing with each project
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    <Chip label="Next.js" variant="outlined" />
                    <Chip label="React" variant="outlined" />
                    <Chip label="TypeScript" variant="outlined" />
                    <Chip label="Python" variant="outlined" />
                    <Chip label="PowerShell" variant="outlined" />
                    <Chip label="C++" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                    <Chip label="C#" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                    <Chip label="HTML" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                    <Chip label="CSS" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                    <Chip label="Tailwind CSS" variant="outlined" />
                    <Chip label="Material UI" variant="outlined" sx={{ backgroundColor: '#0ea5e9', color: 'white' }} />
                  </Stack>
                </CardContent>
              </Card>

              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <CloudIcon sx={{ color: '#2d8b7f' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Cloud & Tools
                    </Typography>
                  </Stack>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    <Chip label="Azure" sx={{ backgroundColor: '#0ea5e9', color: 'white' }} />
                    <Chip label="Git/GitHub" variant="outlined" />
                    <Chip label="VS Code" variant="outlined" />
                    <Chip label="Claude AI" variant="outlined" />
                    <Chip label="GitHub Copilot" variant="outlined" />
                    <Chip label="GPT-4" variant="outlined" />
                    <Chip label="GPT-5" variant="outlined" sx={{ backgroundColor: '#f3f4f6' }} />
                  </Stack>
                </CardContent>
              </Card>

              <Card elevation={2}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <CloudIcon sx={{ color: '#2d8b7f' }} />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      Azure Environments
                    </Typography>
                  </Stack>
                  <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1.5, fontStyle: 'italic' }}>
                    Experience across different Azure tenant types
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    <Chip label="Commercial Tenants" sx={{ backgroundColor: '#10b981', color: 'white' }} />
                    <Chip label="Government Tenants" sx={{ backgroundColor: '#3b82f6', color: 'white' }} />
                    <Chip label="Multi-Tenant" variant="outlined" />
                  </Stack>
                </CardContent>
              </Card>

              <Card elevation={2} sx={{ border: '2px dashed #d4a942' }}>
                <CardContent>
                  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      🎯 Wanting to Learn
                    </Typography>
                  </Stack>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    <Chip label="Amazon Web Services" variant="outlined" sx={{ borderColor: '#f59e0b', color: '#f59e0b' }} />
                    <Chip label="Google Cloud" variant="outlined" sx={{ borderColor: '#ef4444', color: '#ef4444' }} />
                    <Chip label="Oracle Cloud" variant="outlined" sx={{ borderColor: '#dc2626', color: '#dc2626' }} />
                    <Chip label="Terraform" variant="outlined" sx={{ borderColor: '#8b5cf6', color: '#8b5cf6' }} />
                  </Stack>
                </CardContent>
              </Card>
          </Box>

          {/* Section Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <Divider sx={{ my: 6, borderColor: 'transparent', '&::before, &::after': { borderTop: '2px solid', borderImage: 'linear-gradient(90deg, transparent, #8b5cf6, transparent) 1' } }}>
            <Chip label="Portfolio & Projects" sx={{ backgroundColor: '#8b5cf6', color: 'white', fontWeight: 600, px: 2 }} />
          </Divider>
          </motion.div>

          {/* PROJECT PORTFOLIO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
          <Card id="projects" elevation={2} sx={{ mb: 6 }}>
            <CardContent>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: '#2d8b7f' }}>
                Featured Projects
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, color: '#6b7280' }}>
                Production deployments with real impact
              </Typography>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
                  <Paper elevation={0} sx={{ p: 2, border: '2px solid #e5e7eb', '&:hover': { borderColor: '#2d8b7f', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ fontSize: 32 }}>🍺</Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            OnTap MN
                          </Typography>
                          <Chip label="In Dev" size="small" sx={{ backgroundColor: '#8b5cf6', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                        </Stack>
                        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
                          Bar events • Bingo & Raffles • Minnesota entertainment
                        </Typography>
                        <a href="https://ontap-mn.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#2d8b7f', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                          Visit Site →
                        </a>
                      </Box>
                    </Stack>
                  </Paper>

                  <Paper elevation={0} sx={{ p: 2, border: '2px solid #e5e7eb', '&:hover': { borderColor: '#2d8b7f', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ fontSize: 32 }}>🏰</Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            Ice Castle USA
                          </Typography>
                          <Chip label="Medium Traffic" size="small" sx={{ backgroundColor: '#f59e0b', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                        </Stack>
                        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
                          Next.js • Performance optimized • High availability
                        </Typography>
                        <a href="https://www.icecastleusa.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2d8b7f', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                          Visit Site →
                        </a>
                      </Box>
                    </Stack>
                  </Paper>

                  <Paper elevation={0} sx={{ p: 2, border: '2px solid #e5e7eb', '&:hover': { borderColor: '#2d8b7f', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ fontSize: 32 }}>❄️</Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            Forest Lake Ice Classic
                          </Typography>
                          <Chip label="Low Traffic" size="small" sx={{ backgroundColor: '#10b981', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                        </Stack>
                        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
                          Event platform • Ticket Sales • Seasonal
                        </Typography>
                        <a href="https://forestlakeiceclassic.com" target="_blank" rel="noopener noreferrer" style={{ color: '#2d8b7f', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                          Visit Site →
                        </a>
                      </Box>
                    </Stack>
                  </Paper>

                  <Paper elevation={0} sx={{ p: 2, border: '2px solid #e5e7eb', '&:hover': { borderColor: '#2d8b7f', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ fontSize: 32 }}>🌟</Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            Fuhr Family Foundation
                          </Typography>
                          <Chip label="70% Cost ↓" size="small" sx={{ backgroundColor: '#10b981', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                        </Stack>
                        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
                          Donor management • Online Ticket Sales • Non-profit
                        </Typography>
                        
                      </Box>
                    </Stack>
                  </Paper>

                  <Paper elevation={0} sx={{ p: 2, border: '2px solid #e5e7eb', '&:hover': { borderColor: '#2d8b7f', transform: 'translateY(-2px)' }, transition: 'all 0.3s' }}>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ fontSize: 32 }}>💻</Box>
                      <Box sx={{ flex: 1 }}>
                        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 0.5 }}>
                          <Typography variant="body1" sx={{ fontWeight: 700 }}>
                            GitHub Profile
                          </Typography>
                          <Chip label="Active" size="small" sx={{ backgroundColor: '#8b5cf6', color: 'white', fontSize: '0.7rem', height: '20px' }} />
                        </Stack>
                        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 1 }}>
                          Code samples • Open source • Portfolio projects
                        </Typography>
                        <a href="https://github.com/Austtiin" target="_blank" rel="noopener noreferrer" style={{ color: '#2d8b7f', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}>
                          View Profile →
                        </a>
                      </Box>
                    </Stack>
                  </Paper>
              </Box>
            </CardContent>
          </Card>
          </motion.div>

          {/* CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
          <Card elevation={3} sx={{ background: 'linear-gradient(135deg, #2d8b7f 0%, #1e6b5f 100%)', color: 'white', textAlign: 'center' }}>
            <CardContent sx={{ py: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Let&apos;s Collaborate on Your Cloud Journey
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                Whether you need Azure optimization, cost analysis, or cloud support im your guy. 
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center" flexWrap="wrap">
                <a 
                  href="mailto:AustinStephens103@gmail.com"
                  style={{ 
                    textDecoration: 'none',
                    backgroundColor: 'white',
                    color: '#2d8b7f',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    display: 'inline-block'
                  }}
                >
                  📧 Get in Touch
                </a>
                <a 
                  href={resumePath}
                  download
                  style={{ 
                    textDecoration: 'none',
                    backgroundColor: 'transparent',
                    color: 'white',
                    padding: '12px 32px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    border: '2px solid white',
                    display: 'inline-block'
                  }}
                >
                  📄 Download Resume
                </a>
              </Stack>
            </CardContent>
          </Card>
          </motion.div>

        </Box>

        {/* FOOTER */}
        <footer style={{ marginTop: '4rem', paddingBottom: '2rem', textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#6b7280', mb: 1 }}>
            Built with ❤️, ☕ and Next.js
          </Typography>
          <Typography variant="caption" sx={{ color: '#6b7280' }}>
            © 2025 Austin Stephens
          </Typography>
        </footer>
      </main>
    </div>
  );
}
