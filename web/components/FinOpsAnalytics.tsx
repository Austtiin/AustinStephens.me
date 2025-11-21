"use client";
import { Card, CardContent, Divider, Chip, Paper, Typography, Box, Stack, useTheme } from '@mui/material';
// Replace workload distribution pie with optimization mix bar chart; using Recharts for consistency
import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { RadarChart as RechartsRadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import BarChartIcon from '@mui/icons-material/BarChart';
import { motion } from 'framer-motion';

// Radar chart data (FinOps capabilities competency)
// Domains are outcomes; capabilities describe how to achieve them.
// Provided competency percentages:
// Understanding Usage & Cost = 78%
// Quantifying Business Value = 54%
// Optimizing Usage & Cost = 43%
// Manage FinOps Practice = 62%
const radarData = [
  { label: 'Usage & Cost', full: 'Understanding Usage & Cost', value: 78 },
  { label: 'Business Value', full: 'Quantifying Business Value', value: 54 },
  { label: 'Optimize Usage & Cost', full: 'Optimizing Usage & Cost', value: 43 },
  { label: 'Practice Mgmt', full: 'Manage FinOps Practice', value: 62 },
];

// Optimization activity mix (percent focus across FinOps practices)
const optimizationActivityMix = [
  { category: 'Rightsizing', percent: 30 },
  { category: 'Documentation', percent: 87 },
  { category: 'Reservations', percent: 45 },
  { category: 'Storage Lifecycle', percent: 15 },
  { category: 'Tagging Compliance', percent: 87 },
  { category: 'Visibility/Reporting', percent: 97 },
];

export function FinOpsAnalytics(){
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const radarWidth = isMd ? 500 : 320;
  const radarHeight = isMd ? 420 : 340;
  const outerRadius = isMd ? 160 : 120;
  const cx = radarWidth / 2;
  const cy = isMd ? 210 : radarHeight / 2 - 10;

  return (
    <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:0.5 }} viewport={{ once:true, margin:'-50px' }}>
      <Divider sx={{ my:{ xs:4, md:6 }, borderColor:'transparent', '&::before, &::after':{ borderTop:'2px solid', borderImage:'linear-gradient(90deg, transparent, #8b5cf6, transparent) 1'} }}>
        <Chip label="FinOps & Cloud Analytics" sx={{ backgroundColor:'#8b5cf6', color:'white', fontWeight:600, px:2 }} />
      </Divider>
      <Card elevation={2} sx={{ mb:6 }}>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mb:3 }}>
            <BarChartIcon sx={{ color:'#8b5cf6' }} />
            <Typography variant="h6" sx={{ fontWeight:700 }}>FinOps Capability & Workload Profile</Typography>
          </Stack>
          <Box sx={{ display:'flex', flexDirection:{ xs:'column', md:'row' }, gap:4 }}>
            {/* Main Radar Chart */}
            <Paper elevation={0} sx={{ p:2, flex:1, border:'1px solid #e5e7eb', minWidth:0, overflow:'hidden' }}>
              <Typography variant="subtitle2" sx={{ fontWeight:700, mb:1 }}>FinOps Proficiency Radar</Typography>
              <RechartsRadarChart cx={cx} cy={cy} outerRadius={outerRadius} width={radarWidth} height={radarHeight} data={radarData}>
                <defs>
                  <linearGradient id="radarGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2d8b7f" stopOpacity={0.85} />
                    <stop offset="100%" stopColor="#9AD2CB" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <PolarGrid />
                <PolarAngleAxis dataKey="label" tick={{ fill:'#374151', fontSize:11, fontWeight:600 }} />
                <PolarRadiusAxis angle={30} domain={[0,100]} tick={{ fill:'#6b7280', fontSize:10 }} />
                <Radar name="FinOps" dataKey="value" stroke="#2d8b7f" strokeWidth={2} fill="url(#radarGradient)" fillOpacity={0.6} />
                <Tooltip formatter={(val: number, _name: string, item: { payload?: { full?: string } }) => [`${val}%`, item.payload?.full || '']} />
                <Legend />
              </RechartsRadarChart>
              <Typography variant="caption" sx={{ mt:1, color:'#6b7280', display:'block' }}>
                Current competency across key FinOps capabilities (illustrative snapshot).
              </Typography>
            </Paper>
            {/* Side Optimization Activity Mix */}
            <Paper elevation={0} sx={{ p:2, width:{ xs:'100%', md:360 }, border:'1px solid #e5e7eb', alignSelf:'stretch', minWidth:0 }}>
              <Typography variant="subtitle2" sx={{ fontWeight:700, mb:1 }}>Optimization Activity Mix</Typography>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart data={optimizationActivityMix} layout="vertical" margin={{ left: 10, right: 10, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" domain={[0, 100]} ticks={[0,20,40,60,80,100]} tick={{ fill:'#6b7280', fontSize:12 }} />
                  <YAxis dataKey="category" type="category" width={130} tick={{ fill:'#374151', fontSize:12, fontWeight:600 }} />
                  <Tooltip formatter={(v:number)=>`${v}%`} cursor={{ fill:'rgba(0,0,0,0.05)' }} />
                  <defs>
                    <linearGradient id="barGradientBase" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#2d8b7f" />
                    </linearGradient>
                  </defs>
                  <Bar dataKey="percent" radius={4} fill="url(#barGradientBase)">
                    {optimizationActivityMix.map((entry) => (
                      <Cell key={entry.category} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <Typography variant="caption" sx={{ mt:1, color:'#6b7280', display:'block' }}>
                Relative focus invested across current primary practice (illustrative).
              </Typography>
            </Paper>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default FinOpsAnalytics;