import { useState, useEffect, useRef, useCallback } from 'react';
import Layout from '../../components/Layout';
import StatCard from '../../components/StatCard';
import {
  Mail,
  Send,
  CheckCircle2,
  MailOpen,
  MousePointerClick,
  XCircle,
  Info,
  ArrowUp,
  ArrowDown,
  Settings,
} from 'lucide-react';

// Browser Icon Components - Matching exact brand logos
const ChromeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#4285F4" />
    <path d="M12 2C8.5 2 5.5 4 4 6.5L8.5 12C9.5 10.5 10.5 9.5 12 9.5C13.5 9.5 14.5 10.5 15.5 12L20 6.5C18.5 4 15.5 2 12 2Z" fill="#EA4335" />
    <path d="M12 14.5C10.5 14.5 9.5 13.5 8.5 12L4 17.5C5.5 20 8.5 22 12 22C15.5 22 18.5 20 20 17.5L15.5 12C14.5 13.5 13.5 14.5 12 14.5Z" fill="#34A853" />
    <path d="M12 2C15.5 2 18.5 4 20 6.5L15.5 12C14.5 10.5 13.5 9.5 12 9.5C10.5 9.5 9.5 10.5 8.5 12L4 6.5C5.5 4 8.5 2 12 2Z" fill="#FBBC04" />
    <circle cx="12" cy="12" r="3" fill="white" />
  </svg>
);

const FirefoxIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF7139" />
    <path d="M8 6C8 8 9 10 11 11L9 13C7 12 6 10 6 8C6 7 6.5 6.5 7 6L8 6Z" fill="#FF9500" />
    <path d="M16 6C17 7 18 9 17 11L15 9C15.5 8 15 7 14 6.5L16 6Z" fill="#FF7139" />
    <circle cx="12" cy="12" r="5" fill="#FF9500" />
    <path d="M10 10C10 11 10.5 11.5 11.5 11.5C12.5 11.5 13 11 13 10L14 8C13 7 11.5 6.5 10 7L10 10Z" fill="white" />
  </svg>
);

const SafariIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#1B9CFC" />
    <path d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z" fill="white" />
    <circle cx="12" cy="12" r="2" fill="#1B9CFC" />
    <line x1="12" y1="2" x2="12" y2="22" stroke="#1B9CFC" strokeWidth="1" />
    <line x1="2" y1="12" x2="22" y2="12" stroke="#1B9CFC" strokeWidth="1" />
  </svg>
);

const EdgeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z" fill="#0078D4" />
    <path d="M12 2C8 2 5 5 5 9C5 13 8 16 12 16C16 16 19 13 19 9C19 5 16 2 12 2Z" fill="#00A4EF" />
    <path d="M12 6C10 6 8.5 7.5 8.5 9.5C8.5 11.5 10 13 12 13C14 13 15.5 11.5 15.5 9.5C15.5 7.5 14 6 12 6Z" fill="#0078D4" />
    <path d="M12 2L15 8L20 10L15 12L12 18L9 12L4 10L9 8L12 2Z" fill="#00A4EF" opacity="0.3" />
  </svg>
);

const OperaIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#FF1B2D" />
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">O</text>
  </svg>
);

const IEIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#1EBBEE" />
    <circle cx="12" cy="12" r="8" fill="#0076D6" />
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">e</text>
    <circle cx="12" cy="12" r="6" fill="none" stroke="#FFC107" strokeWidth="1" />
  </svg>
);

const OthersIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#343A40" />
    <circle cx="12" cy="8" r="1.5" fill="white" />
    <circle cx="8" cy="12" r="1.5" fill="white" />
    <circle cx="16" cy="12" r="1.5" fill="white" />
    <circle cx="12" cy="16" r="1.5" fill="white" />
    <circle cx="10" cy="10" r="1" fill="white" />
    <circle cx="14" cy="10" r="1" fill="white" />
    <circle cx="10" cy="14" r="1" fill="white" />
    <circle cx="14" cy="14" r="1" fill="white" />
  </svg>
);

export default function Analytics() {
  const [isGraphAnimated, setIsGraphAnimated] = useState(false);
  const [kpiCardAnimated, setKpiCardAnimated] = useState<boolean[]>([false, false, false, false]);
  const [tooltip, setTooltip] = useState<{
    visible: boolean;
    x: number;
    dataIndex: number;
    green: number;
    blue: number;
    red: number;
    date: string;
    position: 'left' | 'center' | 'right';
  }>({
    visible: false,
    x: 0,
    dataIndex: 0,
    green: 0,
    blue: 0,
    red: 0,
    date: '',
    position: 'center',
  });
  const [animatedGreen, setAnimatedGreen] = useState(0);
  const [animatedBlue, setAnimatedBlue] = useState(0);
  const [animatedRed, setAnimatedRed] = useState(0);
  const [hoverData, setHoverData] = useState<{
    x: number;
    values: { label: string; value: number; color: string }[];
    month: string;
  } | null>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Animate main graph on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGraphAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Animate KPI cards with stagger
  useEffect(() => {
    const timers = [0, 200, 400, 600].map((delay, index) => 
      setTimeout(() => {
        setKpiCardAnimated(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 4000 + delay) // Start after main graph animation completes (~4s)
    );
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  // Sample data points for the three lines (matching image pattern exactly)
  const months = ['JAN/22', 'FEB/22', 'MAR/22', 'APR/22', 'MAY/22', 'JUN/22', 'JUL/22'];
  // Values based on image: green (top), blue (middle), red (bottom)
  const greenLineData = [25, 35, 25, 75, 45, 98, 55]; // Top green dotted line
  const blueLineData = [20, 30, 10, 70, 35, 80, 48]; // Middle blue dotted line  
  const redLineData = [15, 40, 18, 68, 30, 78, 43]; // Bottom red dotted line
  
  // Combined visitors data for all three lines
  const visitorsData = blueLineData.map((_, index) => ({
    green: Math.round(greenLineData[index] * 1000),
    blue: Math.round(blueLineData[index] * 1000),
    red: Math.round(redLineData[index] * 1000),
    date: months[index],
    index,
  }));

  // Convert data points to SVG path
  const createPath = (data: number[], maxValue: number = 100) => {
    const points = data.map((value, index) => {
      const x = (index / (data.length - 1)) * 800;
      const y = 200 - (value / maxValue) * 200;
      return { x, y };
    });
    
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cp1x = prev.x + (curr.x - prev.x) / 3;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) / 3;
      const cp2y = curr.y;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    return path;
  };

  const greenPath = createPath(greenLineData);
  const bluePath = createPath(blueLineData);
  const redPath = createPath(redLineData);

  // Create area paths (for shaded regions - stacked)
  const createAreaPath = (topData: number[], bottomData: number[], maxValue: number = 100) => {
    const topPoints = topData.map((value, index) => {
      const x = (index / (topData.length - 1)) * 800;
      const y = 200 - (value / maxValue) * 200;
      return { x, y };
    });
    
    const bottomPoints = bottomData.map((value, index) => {
      const x = (index / (bottomData.length - 1)) * 800;
      const y = 200 - (value / maxValue) * 200;
      return { x, y };
    });
    
    // Create smooth curve for top line
    let path = `M ${topPoints[0].x} ${topPoints[0].y}`;
    for (let i = 1; i < topPoints.length; i++) {
      const prev = topPoints[i - 1];
      const curr = topPoints[i];
      const cp1x = prev.x + (curr.x - prev.x) / 3;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) / 3;
      const cp2y = curr.y;
      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    
    // Close the area by going back along bottom line
    for (let i = bottomPoints.length - 1; i >= 0; i--) {
      const prev = bottomPoints[i + 1] || bottomPoints[i];
      const curr = bottomPoints[i];
      if (i < bottomPoints.length - 1) {
        const cp1x = prev.x - (prev.x - curr.x) / 3;
        const cp1y = prev.y;
        const cp2x = curr.x + (prev.x - curr.x) / 3;
        const cp2y = curr.y;
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
      } else {
        path += ` L ${curr.x} ${curr.y}`;
      }
    }
    path += ' Z';
    
    return path;
  };

  // Stacked areas: green on top of blue, blue on top of red, red on bottom
  const greenAreaPath = createAreaPath(greenLineData, blueLineData);
  const blueAreaPath = createAreaPath(blueLineData, redLineData);
  const redAreaPath = createAreaPath(redLineData, new Array(redLineData.length).fill(0));

  // Tooltip handlers
  const handleChartInteraction = (clientX: number) => {
    if (!chartContainerRef.current || !svgRef.current) return;

    const container = chartContainerRef.current;
    const rect = container.getBoundingClientRect();
    const scrollLeft = container.scrollLeft;
    
    // Calculate relative X position within the chart
    const yAxisOffset = 40; // Account for Y-axis labels
    const relativeX = clientX - rect.left + scrollLeft - yAxisOffset;
    
    // Calculate which data point is closest
    const chartWidth = 800; // SVG viewBox width
    const dataPointWidth = chartWidth / (visitorsData.length - 1);
    const dataIndex = Math.round(relativeX / dataPointWidth);
    const clampedIndex = Math.max(0, Math.min(visitorsData.length - 1, dataIndex));
    
    // Calculate X position in SVG coordinates
    const svgX = (clampedIndex / (visitorsData.length - 1)) * chartWidth;
    
    // Get the data for this point
    const dataPoint = visitorsData[clampedIndex];
    
    // Calculate tooltip position to avoid overlapping with edges
    const tooltipX = rect.left + scrollLeft + svgX + yAxisOffset;
    const tooltipWidth = 180; // Approximate tooltip width for stacked card
    const margin = 20;
    
    let position: 'left' | 'center' | 'right' = 'center';
    if (tooltipX + tooltipWidth / 2 > window.innerWidth - margin) {
      position = 'right';
    } else if (tooltipX - tooltipWidth / 2 < margin) {
      position = 'left';
    }
    
    setTooltip({
      visible: true,
      x: svgX,
      dataIndex: clampedIndex,
      green: dataPoint.green,
      blue: dataPoint.blue,
      red: dataPoint.red,
      date: dataPoint.date,
      position,
    });
  };

  // Handle mouse move for plus sign tracking (new system)
  const handleMouseMoveTracking = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!chartContainerRef.current) return;
    
    const rect = chartContainerRef.current.getBoundingClientRect();
    const leftMargin = 40; // Account for Y-axis labels (ml-10 = 40px)
    const scrollLeft = chartContainerRef.current.scrollLeft;
    const x = e.clientX - rect.left + scrollLeft - leftMargin;
    const chartWidth = 800; // SVG viewBox width
    
    if (x < 0 || x > chartWidth) {
      setHoverData(null);
      return;
    }

    // Find the closest data point
    const index = Math.round((x / chartWidth) * (months.length - 1));
    const clampedIndex = Math.max(0, Math.min(index, months.length - 1));
    
    // Calculate SVG X position
    const svgX = (clampedIndex / (months.length - 1)) * chartWidth;
    
    const values = [
      { label: 'Green', value: greenLineData[clampedIndex], color: '#22c55e' },
      { label: 'Blue', value: blueLineData[clampedIndex], color: '#3b82f6' },
      { label: 'Red', value: redLineData[clampedIndex], color: '#ef4444' },
    ];

    setHoverData({
      x: svgX + leftMargin, // SVG X position + left margin for absolute positioning
      values,
      month: months[clampedIndex],
    });
  }, [months, greenLineData, blueLineData, redLineData]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleChartInteraction(e.clientX);
    handleMouseMoveTracking(e);
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
    setHoverData(null);
  };

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      handleChartInteraction(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0 && touchStartX.current !== null && touchStartY.current !== null) {
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
      
      // Only prevent default if user is moving horizontally (interacting with chart)
      // Allow vertical scrolling
      if (deltaX > deltaY && deltaX > 5) {
        e.preventDefault();
      }
      
      handleChartInteraction(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = null;
    touchStartY.current = null;
    // Keep tooltip visible on touch end for mobile
    setTimeout(() => {
      setTooltip(prev => ({ ...prev, visible: false }));
    }, 2000);
  };

  // Animate all three counts when tooltip changes
  useEffect(() => {
    if (tooltip.visible) {
      const duration = 500; // Animation duration in ms
      const startGreen = animatedGreen;
      const startBlue = animatedBlue;
      const startRed = animatedRed;
      const endGreen = tooltip.green;
      const endBlue = tooltip.blue;
      const endRed = tooltip.red;
      const startTime = Date.now();

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentGreen = Math.round(startGreen + (endGreen - startGreen) * easeOutCubic);
        const currentBlue = Math.round(startBlue + (endBlue - startBlue) * easeOutCubic);
        const currentRed = Math.round(startRed + (endRed - startRed) * easeOutCubic);
        
        setAnimatedGreen(currentGreen);
        setAnimatedBlue(currentBlue);
        setAnimatedRed(currentRed);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setAnimatedGreen(endGreen);
          setAnimatedBlue(endBlue);
          setAnimatedRed(endRed);
        }
      };

      animate();
    } else {
      setAnimatedGreen(0);
      setAnimatedBlue(0);
      setAnimatedRed(0);
    }
  }, [tooltip.green, tooltip.blue, tooltip.red, tooltip.visible]);

  const emailStats = [
    {
      icon: <Mail size={24} />,
      value: '50,545',
      label: 'Total Email',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      icon: <Send size={24} />,
      value: '25,000',
      label: 'Email Sent',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-50 dark:bg-orange-900/20',
    },
    {
      icon: <CheckCircle2 size={24} />,
      value: '20,354',
      label: 'Emails Delivered',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-50 dark:bg-green-900/20',
    },
    {
      icon: <MailOpen size={24} />,
      value: '12,422',
      label: 'Emails Opened',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      icon: <MousePointerClick size={24} />,
      value: '6,248',
      label: 'Email Clicked',
      iconColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
    {
      icon: <XCircle size={24} />,
      value: '2,047',
      label: 'Email Bounce',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-50 dark:bg-red-900/20',
    },
  ];

  const browserStats = [
    { 
      name: 'Google Chrome', 
      percentage: 90, 
      color: 'bg-green-500', 
      icon: <ChromeIcon size={16} />,
      progressColor: '#28a745'
    },
    { 
      name: 'Mozilla Firefox', 
      percentage: 76, 
      color: 'bg-blue-600', 
      icon: <FirefoxIcon size={16} />,
      progressColor: '#007bff'
    },
    { 
      name: 'Apple Safari', 
      percentage: 50, 
      color: 'bg-orange-500', 
      icon: <SafariIcon size={16} />,
      progressColor: '#fd7e14'
    },
    { 
      name: 'Edge Browser', 
      percentage: 20, 
      color: 'bg-gray-600', 
      icon: <EdgeIcon size={16} />,
      progressColor: '#6c757d'
    },
    { 
      name: 'Opera mini', 
      percentage: 15, 
      color: 'bg-red-500', 
      icon: <OperaIcon size={16} />,
      progressColor: '#dc3545'
    },
    { 
      name: 'Internet Explorer', 
      percentage: 12, 
      color: 'bg-cyan-500', 
      icon: <IEIcon size={16} />,
      progressColor: '#17a2b8'
    },
    { 
      name: 'Others Browser', 
      percentage: 6, 
      color: 'bg-gray-800', 
      icon: <OthersIcon size={16} />,
      progressColor: '#343a40'
    },
  ];

  const metrics = [
    {
      title: 'Bounce Rate (Avg)',
      value: '78.65%',
      change: '+ 22.85%',
      changeColor: 'text-green-600',
      changeIcon: <ArrowUp size={14} className="inline" />,
      previous: 'VS 20.49% (Prev)',
      chartColor: 'text-gray-400',
      chartPath: 'M 0 30 Q 25 10, 50 20 T 100 15 T 150 25 T 200 10',
    },
    {
      title: 'Page Views (Avg)',
      value: '86.37%',
      change: '- 34.25%',
      changeColor: 'text-red-600',
      changeIcon: <ArrowDown size={14} className="inline" />,
      previous: 'VS 28.42% (Prev)',
      chartColor: 'text-blue-400',
      chartPath: 'M 0 35 Q 25 15, 50 25 T 100 20 T 150 30 T 200 15',
    },
    {
      title: 'Site Impressions (Avg)',
      value: '67.53%',
      change: '- 42.72%',
      changeColor: 'text-red-600',
      changeIcon: <ArrowDown size={14} className="inline" />,
      previous: 'VS 43.67% (Prev)',
      chartColor: 'text-orange-400',
      chartPath: 'M 0 30 Q 25 12, 50 22 T 100 18 T 150 28 T 200 12',
    },
    {
      title: 'Conversions Rate (Avg)',
      value: '32.53%',
      change: '+ 35.47%',
      changeColor: 'text-green-600',
      changeIcon: <ArrowUp size={14} className="inline" />,
      previous: 'VS 22.34% (Prev)',
      chartColor: 'text-green-400',
      chartPath: 'M 0 38 Q 25 20, 50 28 T 100 22 T 150 32 T 200 18',
    },
  ];

  return (
    <Layout 
      breadcrumbs={[{ label: 'Dashboards' }, { label: 'Home' }, { label: 'Analytics' }]}
      subHeaderDateRange="DEC 01,25 - DEC 31,25"
    >
      <div className="p-3 sm:p-4 lg:p-6 min-h-screen">

        {/* Email Reports Section */}
        <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-3 sm:p-4 lg:p-6 mb-4 sm:mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">Email Reports</h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Email Campaign Reports</p>
            </div>
            <button className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors whitespace-nowrap">
              VIEW ALLS
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {emailStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>

        {/* Visitors Overview and Browser States */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Visitors Overview - Left Panel */}
          <div className="xl:col-span-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-3 sm:p-4 lg:p-6 shadow-sm flex flex-col w-full" style={{ overflow: 'visible' }}>
            <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Visitors Overview</h2>
              <button className="p-1 sm:p-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors flex-shrink-0">
                <Info size={16} className="sm:w-[18px] sm:h-[18px] text-gray-400" />
              </button>
            </div>
            <div 
              className="relative w-full flex-1 min-h-0 mt-3 sm:mt-6"
              style={{ 
                minHeight: '250px',
                overflow: 'visible'
              }}
            >
              {/* Scrollable container for mobile */}
              <div 
                ref={chartContainerRef}
                className="relative w-full h-full overflow-x-auto overflow-y-visible cursor-crosshair"
                style={{ 
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'thin',
                  minHeight: '250px'
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Inner container with fixed width for chart */}
                <div className="relative" style={{ minWidth: '600px', height: '100%', minHeight: '250px', overflow: 'visible' }}>
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 pr-1 sm:pr-2 z-10 w-6 sm:w-8 lg:w-10 h-full">
                    <span>100K</span>
                    <span>80K</span>
                    <span>60K</span>
                    <span>40K</span>
                    <span>20K</span>
                    <span>0K</span>
                  </div>
                  {/* Chart area */}
                  <div className="ml-6 sm:ml-8 lg:ml-10 absolute top-0 bottom-6 right-0" style={{ height: 'calc(100% - 24px)', overflow: 'visible' }}>
                      <svg 
                        ref={svgRef}
                        className="w-full h-full" 
                        viewBox="0 0 800 200" 
                        preserveAspectRatio="none" 
                        style={{ width: '100%', height: '100%' }}
                      >
                    <defs>
                      {/* Green gradient (light green) - top area */}
                      <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(134, 239, 172, 0.25)" />
                        <stop offset="100%" stopColor="rgba(134, 239, 172, 0)" />
                      </linearGradient>
                      {/* Blue gradient (light purplish-grey) - middle area */}
                      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(196, 181, 253, 0.25)" />
                        <stop offset="100%" stopColor="rgba(196, 181, 253, 0)" />
                      </linearGradient>
                      {/* Red gradient (light grey) - bottom area */}
                      <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(229, 231, 235, 0.35)" />
                        <stop offset="100%" stopColor="rgba(229, 231, 235, 0)" />
                      </linearGradient>
                    </defs>
                    
                    {/* Horizontal grid lines */}
                    {[0, 20, 40, 60, 80, 100].map((value) => {
                      const y = 200 - (value / 100) * 200;
                      return (
                        <line
                          key={value}
                          x1="0"
                          y1={y}
                          x2="800"
                          y2={y}
                          stroke="#e5e7eb"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                          opacity="0.5"
                        />
                      );
                    })}
                    
                    {/* Red area (bottom) */}
                    <path
                      d={redAreaPath}
                      fill="url(#redGradient)"
                      style={{
                        opacity: isGraphAnimated ? 1 : 0,
                        transition: 'opacity 1.2s ease-in-out 2.4s',
                      }}
                    />
                    {/* Red dotted line */}
                    <path
                      d={redPath}
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: isGraphAnimated ? '4 4' : '2000 2000',
                        strokeDashoffset: isGraphAnimated ? 0 : 2000,
                        transition: 'stroke-dasharray 2.5s cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    
                    {/* Blue area (middle) */}
                    <path
                      d={blueAreaPath}
                      fill="url(#blueGradient)"
                      style={{
                        opacity: isGraphAnimated ? 1 : 0,
                        transition: 'opacity 1.2s ease-in-out 1.8s',
                      }}
                    />
                    {/* Blue dotted line */}
                    <path
                      d={bluePath}
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: isGraphAnimated ? '4 4' : '2000 2000',
                        strokeDashoffset: isGraphAnimated ? 0 : 2000,
                        transition: 'stroke-dasharray 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                      }}
                    />
                    
                    {/* Green area (top) */}
                    <path
                      d={greenAreaPath}
                      fill="url(#greenGradient)"
                      style={{
                        opacity: isGraphAnimated ? 1 : 0,
                        transition: 'opacity 1.2s ease-in-out 1.2s',
                      }}
                    />
                    {/* Green dotted line */}
                    <path
                      d={greenPath}
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                      style={{
                        strokeDasharray: isGraphAnimated ? '4 4' : '2000 2000',
                        strokeDashoffset: isGraphAnimated ? 0 : 2000,
                        transition: 'stroke-dasharray 2.5s cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 2.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    />
                    
                  </svg>

                  {/* Plus sign tracking - Hover vertical line and data points */}
                  {hoverData && (
                    <div
                      className="absolute top-0 bottom-6 w-px bg-gray-400 dark:bg-gray-500 transition-all duration-150 ease-out pointer-events-none z-20"
                      style={{
                        left: `${hoverData.x}px`,
                        transform: 'translateX(-50%)',
                      }}
                    >
                      {/* Data points on the line - correctly positioned from 0K to 100K */}
                      {hoverData.values.map((value, idx) => {
                        // Calculate Y position: 0K is at bottom (100%), 100K is at top (0%)
                        // The SVG viewBox is 0 0 800 200, where y=0 is top and y=200 is bottom
                        // Value is 0-100, so we need to map: 0 -> 100% (bottom), 100 -> 0% (top)
                        const yPercentage = 100 - (value.value / 100) * 100;
                        return (
                          <div
                            key={idx}
                            className="absolute w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 shadow-sm transition-all duration-200 pointer-events-none"
                            style={{
                              left: '50%',
                              top: `${yPercentage}%`,
                              transform: 'translate(-50%, -50%)',
                              backgroundColor: value.color,
                            }}
                          />
                        );
                      })}
                    </div>
                  )}

                  </div>
                </div>
                {/* X-axis labels */}
                <div className="absolute bottom-0 left-6 sm:left-8 lg:left-10 right-0 flex justify-between text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 h-6 items-center" style={{ minWidth: '600px' }}>
                  {months.map((month) => (
                    <span key={month} className="flex-1 text-center truncate px-0.5">{month}</span>
                  ))}
                </div>
                
                {/* Tooltip */}
                {tooltip.visible && chartContainerRef.current && (
                  <div
                    className="absolute pointer-events-none z-50"
                    style={{
                      left: `${tooltip.x + 40}px`, // Account for Y-axis offset
                      top: '10px',
                      transform: tooltip.position === 'left' 
                        ? 'translateX(0)' 
                        : tooltip.position === 'right' 
                        ? 'translateX(-100%)' 
                        : 'translateX(-50%)',
                      transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
                      opacity: tooltip.visible ? 1 : 0,
                      maxWidth: 'calc(100% - 20px)',
                    }}
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-lg px-3 py-2.5 shadow-xl border border-gray-200 dark:border-gray-700 min-w-[140px] max-w-[180px]">
                      {/* Green line */}
                      <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
                            Green
                          </span>
                        </div>
                        <div className="text-gray-900 dark:text-white text-sm sm:text-base font-bold">
                          {animatedGreen.toLocaleString()}
                        </div>
                      </div>
                      
                      {/* Blue line */}
                      <div className="flex items-center justify-between gap-3 mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
                            Blue
                          </span>
                        </div>
                        <div className="text-gray-900 dark:text-white text-sm sm:text-base font-bold">
                          {animatedBlue.toLocaleString()}
                        </div>
                      </div>
                      
                      {/* Red line */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium">
                            Red
                          </span>
                        </div>
                        <div className="text-gray-900 dark:text-white text-sm sm:text-base font-bold">
                          {animatedRed.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    {/* Tooltip arrow */}
                    <div
                      className="absolute -bottom-1 w-2 h-2 bg-white dark:bg-gray-900 border-r border-b border-gray-200 dark:border-gray-700 rotate-45"
                      style={{ 
                        marginBottom: '-4px',
                        left: tooltip.position === 'left' 
                          ? '12px' 
                          : tooltip.position === 'right' 
                          ? 'auto' 
                          : '50%',
                        right: tooltip.position === 'right' ? '12px' : 'auto',
                        transform: tooltip.position === 'left' || tooltip.position === 'right'
                          ? 'none'
                          : 'translateX(-50%) rotate(45deg)',
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Browser States - Right Panel */}
          <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-3 sm:p-4 lg:p-6 shadow-sm relative overflow-visible w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white" style={{ fontWeight: 700 }}>Browser States</h2>
              <button className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex-shrink-0">
                <span className="text-[10px] sm:text-xs font-normal text-gray-600 dark:text-gray-400" style={{ fontStyle: 'normal' }}>i</span>
              </button>
            </div>

            {/* Browser List with Separator Lines */}
            <div className="space-y-0">
              {browserStats.map((browser, index) => (
                <div key={index}>
                  {index > 0 && (
                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-2 sm:my-3" style={{ marginLeft: '-0.75rem', marginRight: '-0.75rem' }}></div>
                  )}
                  <div className="flex items-center gap-2 sm:gap-3 py-1.5 sm:py-2">
                    {/* Browser Icon */}
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {browser.icon}
                    </div>
                    {/* Browser Name */}
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex-1 truncate" style={{ fontWeight: 400 }}>{browser.name}</span>
                    {/* Percentage */}
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal whitespace-nowrap flex-shrink-0">{browser.percentage}%</span>
                    {/* Progress Bar */}
                    <div className="w-16 sm:w-20 lg:w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 flex-shrink-0" style={{ backgroundColor: '#E9ECEF' }}>
                      <div 
                        className="h-1.5 sm:h-2 rounded-full" 
                        style={{ 
                          width: `${browser.percentage}%`,
                          backgroundColor: browser.progressColor || browser.color
                        }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer - EXPLORE DETAILS */}
            <div className="mt-4 sm:mt-6 text-center">
              <button className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium uppercase tracking-wide hover:text-gray-900 dark:hover:text-white transition-colors" style={{ letterSpacing: '0.05em' }}>
                EXPLORE DETAILS
              </button>
            </div>

            {/* Floating Action Button - Right Edge (Square Box) */}
            <button className="absolute -right-2 sm:-right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg flex items-center justify-center shadow-lg transition-colors z-10">
              <Settings size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
            </button>
          </div>
        </div>

        {/* Bottom Row KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-4 sm:p-6 shadow-sm flex flex-col">
              {/* Top row: Title on left, Current value on right */}
              <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-1 truncate">{metric.title}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">{metric.previous}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</div>
                  <div className={`text-xs sm:text-sm font-medium ${metric.changeColor}`}>
                    {metric.change}
                  </div>
                </div>
              </div>
              {/* Graph at bottom */}
              <div className="h-12 mt-auto">
                <svg className="w-full h-full" viewBox="0 0 200 40" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={metric.chartColor.replace('text-', '').includes('gray') ? 'rgba(156, 163, 175, 0.2)' : metric.chartColor.replace('text-', '').includes('blue') ? 'rgba(96, 165, 250, 0.2)' : metric.chartColor.replace('text-', '').includes('orange') ? 'rgba(251, 146, 60, 0.2)' : 'rgba(74, 222, 128, 0.2)'} />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  {/* Area fill */}
                  <path
                    d={metric.chartPath}
                    fill={`url(#gradient-${index})`}
                    style={{
                      opacity: kpiCardAnimated[index] ? 1 : 0,
                      transition: `opacity 1.2s ease-in-out ${index * 0.2 + 2}s`,
                    }}
                  />
                  {/* Line stroke */}
                  <path
                    d={metric.chartPath}
                    fill="none"
                    stroke={metric.chartColor.replace('text-', '').includes('gray') ? 'rgb(156, 163, 175)' : metric.chartColor.replace('text-', '').includes('blue') ? 'rgb(96, 165, 250)' : metric.chartColor.replace('text-', '').includes('orange') ? 'rgb(251, 146, 60)' : 'rgb(74, 222, 128)'}
                    strokeWidth="2"
                    style={{
                      strokeDasharray: kpiCardAnimated[index] ? 'none' : '1000 1000',
                      strokeDashoffset: kpiCardAnimated[index] ? 0 : 1000,
                      opacity: kpiCardAnimated[index] ? 1 : 0,
                      transition: `stroke-dasharray 2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s, stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s, opacity 0.8s ease-in-out ${index * 0.2 + 1.2}s`,
                    }}
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
