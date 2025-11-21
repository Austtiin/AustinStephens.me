"use client";
import { Card, CardContent, Tooltip, Stack, Typography, Badge, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloudIcon from '@mui/icons-material/Cloud';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SpeedIcon from '@mui/icons-material/Speed';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { LineChart, Line, AreaChart, Area } from 'recharts';
import CountUp from './CountUp';
import { motion } from 'framer-motion';

const workloadsData = [150,180,220,260,300].map(v=>({value:v}));
const savingsData = [150,180,200,230,250].map(v=>({value:v}));
const spendData = [600,750,850,920,1000].map(v=>({value:v}));
const buildingsData = [4,6,8,9,10].map(v=>({value:v}));

export function KPISection() {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.4}} viewport={{once:true, margin:'-50px'}}>
      <Box sx={{ display:'grid', gridTemplateColumns:{ xs:'1fr', sm:'repeat(2,1fr)', lg:'repeat(4,1fr)'}, gap:{ xs:2, sm:2.5}, mb:6 }}>
        {/* Cloud Workloads */}
        <motion.div initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} transition={{duration:0.3, delay:0.05}} viewport={{once:true, amount:0.3}}>
          <Tooltip title="Azure resources managed during Hennepin County internship" arrow placement="top">
            <Card elevation={2} sx={{ borderLeft:'4px solid #2d8b7f', transition:'transform 0.2s', '&:hover':{ transform:'translateY(-4px)', boxShadow:4 } }}>
              <CardContent sx={{ p:2.5 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb:2 }}>
                  <Badge badgeContent={<CheckCircleIcon sx={{ fontSize:14 }} />} color="success">
                    <CloudIcon sx={{ fontSize:40, color:'#2d8b7f' }} />
                  </Badge>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <TrendingUpIcon sx={{ color:'#10b981', fontSize:16 }} />
                    <Typography variant="caption" sx={{ color:'#10b981', fontWeight:700 }}>+100%</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h3" sx={{ fontWeight:700, color:'#2d8b7f', mb:0.5 }}>
                  <CountUp to={300} duration={2.2} />+
                </Typography>
                <Typography variant="body2" sx={{ color:'#6b7280', fontWeight:600 }}>Cloud Workloads</Typography>
                <Typography variant="caption" sx={{ color:'#10b981', display:'block', mb:1 }}>Hennepin County internship</Typography>
                <Box sx={{ width:'100%', mt:1 }}>
                  <AreaChart width={220} height={40} data={workloadsData}><Area type="monotone" dataKey="value" stroke="#2d8b7f" fill="#2d8b7f" fillOpacity={0.18} strokeWidth={2} /></AreaChart>
                </Box>
              </CardContent>
            </Card>
          </Tooltip>
        </motion.div>
        {/* Savings */}
        <motion.div initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} transition={{duration:0.3, delay:0.1}} viewport={{once:true, amount:0.3}}>
          <Tooltip title="FinOps initiatives reducing cloud expenditure" arrow placement="top">
            <Card elevation={2} sx={{ borderLeft:'4px solid #d4a942', transition:'transform 0.2s', '&:hover':{ transform:'translateY(-4px)', boxShadow:4 } }}>
              <CardContent sx={{ p:2.5 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb:2 }}>
                  <Badge badgeContent={<LocalFireDepartmentIcon sx={{ fontSize:14 }} />} color="warning">
                    <AssessmentIcon sx={{ fontSize:40, color:'#d4a942' }} />
                  </Badge>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <TrendingUpIcon sx={{ color:'#10b981', fontSize:16 }} />
                    <Typography variant="caption" sx={{ color:'#10b981', fontWeight:700 }}>+67%</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h3" sx={{ fontWeight:700, color:'#d4a942', mb:0.5 }}>$250K</Typography>
                <Typography variant="body2" sx={{ color:'#6b7280', fontWeight:600 }}>Annual Cloud Savings</Typography>
                <Typography variant="caption" sx={{ color:'#10b981', display:'block', mb:1 }}>Supported through FinOps</Typography>
                <Box sx={{ width:'100%', mt:1 }}>
                  <AreaChart width={220} height={40} data={savingsData}><Area type="monotone" dataKey="value" stroke="#d4a942" fill="#d4a942" fillOpacity={0.18} strokeWidth={2} /></AreaChart>
                </Box>
              </CardContent>
            </Card>
          </Tooltip>
        </motion.div>
        {/* Spend Analyzed */}
        <motion.div initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} transition={{duration:0.3, delay:0.15}} viewport={{once:true, amount:0.3}}>
          <Tooltip title="Active analysis across commercial and government tenants" arrow placement="top">
            <Card elevation={2} sx={{ borderLeft:'4px solid #0ea5e9', transition:'transform 0.2s', '&:hover':{ transform:'translateY(-4px)', boxShadow:4 } }}>
              <CardContent sx={{ p:2.5 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb:2 }}>
                  <Badge badgeContent={<DashboardIcon sx={{ fontSize:14 }} />} color="info">
                    <SpeedIcon sx={{ fontSize:40, color:'#0ea5e9' }} />
                  </Badge>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography variant="body2" sx={{ color:'#10b981', fontWeight:600, fontSize:'0.7rem' }}>ACTIVE</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h3" sx={{ fontWeight:700, color:'#0ea5e9', mb:0.5 }}>~$1M</Typography>
                <Typography variant="body2" sx={{ color:'#6b7280', fontWeight:600 }}>Annual Spend Analyzed</Typography>
                <Typography variant="caption" sx={{ color:'#6b7280', display:'block', mb:1 }}>Commercial &amp; Gov tenants</Typography>
                <Box sx={{ width:'100%', mt:1 }}>
                  <LineChart width={220} height={40} data={spendData}><Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} dot={false} /></LineChart>
                </Box>
              </CardContent>
            </Card>
          </Tooltip>
        </motion.div>
        {/* Buildings Supported */}
        <motion.div initial={{opacity:0,y:15}} whileInView={{opacity:1,y:0}} transition={{duration:0.3, delay:0.2}} viewport={{once:true, amount:0.3}}>
          <Tooltip title="IT infrastructure support across multiple facilities" arrow placement="top">
            <Card elevation={2} sx={{ borderLeft:'4px solid #10b981', transition:'transform 0.2s', '&:hover':{ transform:'translateY(-4px)', boxShadow:4 } }}>
              <CardContent sx={{ p:2.5 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb:2 }}>
                  <CodeIcon sx={{ fontSize:40, color:'#8b5cf6' }} />
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <TrendingUpIcon sx={{ color:'#10b981', fontSize:16 }} />
                    <Typography variant="caption" sx={{ color:'#10b981', fontWeight:700 }}>+150%</Typography>
                  </Stack>
                </Stack>
                <Typography variant="h3" sx={{ fontWeight:700, color:'#8b5cf6', mb:0.5 }}><CountUp to={10} duration={1.5} />+</Typography>
                <Typography variant="body2" sx={{ color:'#6b7280', fontWeight:600 }}>Buildings Supported</Typography>
                <Typography variant="caption" sx={{ color:'#6b7280', display:'block', mb:1 }}>IT infrastructure &amp; systems</Typography>
                <Box sx={{ width:'100%', mt:1 }}>
                  <AreaChart width={220} height={40} data={buildingsData}><Area type="monotone" dataKey="value" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.18} strokeWidth={2} /></AreaChart>
                </Box>
              </CardContent>
            </Card>
          </Tooltip>
        </motion.div>
      </Box>
    </motion.div>
  );
}
export default KPISection;