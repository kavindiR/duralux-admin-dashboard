import { useState } from 'react';
import {
  BarChart3,
  Filter,
  Paperclip,
  MoreHorizontal,
  ArrowUp,
  ChevronDown,
  Eye,
  Settings,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';

// Logo Components - Based on provided image descriptions
const AppStoreIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Three rounded lines forming an "A" */}
      <path d="M8 18L12 6L16 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M10 13H14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const DropboxIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#0061FF' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue diamonds forming a box */}
      <path d="M6 2L12 6L18 2L12 6L6 2Z" fill="white" />
      <path d="M18 10L12 14L6 10L12 6L18 10Z" fill="white" />
      <path d="M6 14L12 18L18 14L12 18L6 14Z" fill="white" />
      <path d="M18 2L24 6L18 10L12 6L18 2Z" fill="white" />
    </svg>
  </div>
);

const FacebookIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: '#1877F2' }}>
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lowercase "f" */}
      <path d="M7.5 20V11.25H10.5L11 7.5H7.5V5.25C7.5 4.125 7.75 3.5 9 3.5H11V0.375C10.625 0.25 9.5 0 8.25 0C5.75 0 4 1.5 4 4.625V7.5H1V11.25H4V20H7.5Z" fill="white" />
    </svg>
  </div>
);

const FigmaIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg">
    <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Colorful shapes forming "f": orange, pink, purple, blue, green */}
      <rect x="4" y="0" width="3.5" height="7" rx="1.75" fill="#FF7262" />
      <rect x="8.5" y="0" width="3.5" height="7" rx="1.75" fill="#A259FF" />
      <circle cx="8" cy="12" r="2.5" fill="#1ABCFE" />
      <rect x="4" y="17" width="3.5" height="7" rx="1.75" fill="#0ACF83" />
      <rect x="8.5" y="17" width="3.5" height="7" rx="1.75" fill="#F24E1E" />
    </svg>
  </div>
);

const GitHubIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-gray-800">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      {/* Octocat - cat silhouette with "O" */}
      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.42 4.865 20.167 8.839 21.489C9.339 21.58 9.521 21.272 9.521 21.004C9.521 20.757 9.513 20.009 9.508 19.307C6.726 19.907 6.139 18.184 6.139 18.184C5.685 17.041 5.029 16.761 5.029 16.761C3.97 16.125 5.1 16.136 5.1 16.136C6.258 16.223 6.849 17.327 6.849 17.327C7.889 19.023 9.417 18.529 9.551 18.441C9.62 17.886 9.839 17.498 10.083 17.294C7.354 17.003 4.503 15.988 4.503 11.691C4.503 10.34 4.96 9.208 5.061 8.966C4.998 8.728 4.625 7.36 5.228 5.525C5.228 5.525 6.362 5.184 9.498 6.907C10.293 6.69 11.149 6.582 12 6.577C12.851 6.582 13.707 6.69 14.502 6.907C17.638 5.184 18.772 5.525 18.772 5.525C19.375 7.36 19.002 8.728 18.939 8.966C19.04 9.208 19.497 10.34 19.497 11.691C19.497 15.999 16.641 17.003 13.907 17.291C14.234 17.574 14.556 18.178 14.556 19.119C14.556 20.568 14.539 21.679 14.531 21.998C14.531 22.263 14.711 22.567 15.217 22.47C19.136 21.145 22 17.416 22 12C22 6.477 17.523 2 12 2Z" />
    </svg>
  </div>
);

const GitLabIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#FC6D26' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orange/red fox-like head */}
      <path d="M12 2L2 9L12 16L22 9L12 2Z" fill="white" />
      <path d="M2 9L8 21L12 16L2 9Z" fill="#E24329" />
      <path d="M22 9L16 21L12 16L22 9Z" fill="#FC6D26" />
    </svg>
  </div>
);

const GmailIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full" style={{ backgroundColor: '#EA4335' }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      {/* Red circle with white "M" */}
      <path d="M24 5.5V18.5C24 19.88 22.88 21 21.5 21H2.5C1.12 21 0 19.88 0 18.5V5.5C0 4.12 1.12 3 2.5 3H3L12 10L21 3H21.5C22.88 3 24 4.12 24 5.5ZM12 12L2 5.5V18.5H21.5V5.5L12 12Z" fill="white" />
      <path d="M12 10L2 3H22L12 10Z" fill="white" />
    </svg>
  </div>
);

const InstagramIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gradient square with camera icon */}
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
    </svg>
  </div>
);

const PayPalIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg" style={{ backgroundColor: '#003087' }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Blue overlapping "P"s */}
      <path d="M8.5 19H4L6 5H10.5L8.5 19Z" fill="#009CDE" />
      <path d="M17.5 19H13L15 5H19.5L17.5 19Z" fill="#012169" />
    </svg>
  </div>
);

const GoogleDriveIcon = () => (
  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Triangular shape with green, yellow, blue sections */}
      <path d="M7.71 6.5L1.15 18L4.58 22L11.13 10.5L7.71 6.5Z" fill="#0066DA" />
      <path d="M14.58 10.5L11.13 10.5L4.58 22L14.58 22L14.58 10.5Z" fill="#00AC47" />
      <path d="M22.85 18L16.29 6.5L14.58 10.5L14.58 22L22.85 18Z" fill="#EA4335" />
      <path d="M16.29 6.5L14.58 10.5L11.13 10.5L7.71 6.5L11.13 2.5L16.29 6.5Z" fill="#FFBA00" />
    </svg>
  </div>
);

// Project Icon Component that renders the appropriate logo
const ProjectIcon = ({ logoType }: { logoType: string }) => {
  const logos: { [key: string]: JSX.Element } = {
    'appstore': <AppStoreIcon />,
    'dropbox': <DropboxIcon />,
    'facebook': <FacebookIcon />,
    'figma': <FigmaIcon />,
    'github': <GitHubIcon />,
    'gitlab': <GitLabIcon />,
    'gmail': <GmailIcon />,
    'instagram': <InstagramIcon />,
    'paypal': <PayPalIcon />,
    'googledrive': <GoogleDriveIcon />,
  };
  
  return logos[logoType] || <div className="w-8 h-8 bg-blue-600 rounded-lg" />;
};

// Profile Picture Avatar Component with real profile pictures
const ProfilePictureAvatar = ({ name, seed }: { name: string; seed?: number }) => {
  // Generate consistent seed from name for consistent avatar per person
  const avatarSeed = seed || name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Use pravatar.cc for real profile pictures (provides actual photos)
  // Using seed to get consistent photo per person
  const avatarUrl = `https://i.pravatar.cc/96?img=${(avatarSeed % 70) + 1}`;
  
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 dark:bg-gray-700 ring-1 ring-gray-200 dark:ring-gray-600">
      <img 
        src={avatarUrl} 
        alt={name}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => {
          // Fallback to randomuser.me for real profile pictures
          const target = e.target as HTMLImageElement;
          const gender = avatarSeed % 2 === 0 ? 'women' : 'men';
          const fallbackSeed = (avatarSeed % 99) + 1;
          target.src = `https://randomuser.me/api/portraits/${gender}/${fallbackSeed}.jpg`;
        }}
      />
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProjects, setSelectedProjects] = useState<Set<number>>(new Set());
  const [showFilter, setShowFilter] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState<number | null>(null);

  // Handler functions
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedProjects(new Set(currentProjects.map(p => p.id)));
    } else {
      setSelectedProjects(new Set());
    }
  };

  const handleSelectProject = (projectId: number, checked: boolean) => {
    const newSelected = new Set(selectedProjects);
    if (checked) {
      newSelected.add(projectId);
    } else {
      newSelected.delete(projectId);
    }
    setSelectedProjects(newSelected);
  };

  const handleViewProject = (projectId: number) => {
    navigate(`/projects/view?id=${projectId}`);
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  const handleBarChart = () => {
    navigate('/');
  };

  const handleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handlePaperclip = () => {
    // Export functionality - could download CSV/Excel
    const csvContent = [
      ['Project Name', 'Customer', 'Start Date', 'End Date', 'Status'].join(','),
      ...currentProjects.map(p => [
        p.name,
        p.customer.name,
        p.startDate,
        p.endDate,
        p.status
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'projects.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleMoreOptions = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMoreMenu(showMoreMenu === projectId ? null : projectId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleStatusChange = (projectId: number, newStatus: string) => {
    // In a real app, this would update the project status via API
    console.log(`Project ${projectId} status changed to ${newStatus}`);
  };

  const projects = [
    {
      id: 1,
      name: 'Spark: This name could work well for a proje...',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Alexandra Della', avatar: 'AD', hasImage: true },
      startDate: '2023-04-05',
      endDate: '2023-04-10',
      assigned: { email: 'arcie.tones@gmail.com', avatar: 'AT' },
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      logoType: 'appstore',
    },
    {
      id: 2,
      name: 'Nexus',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Green Cute', avatar: 'GC', hasImage: true },
      startDate: '2023-04-05',
      endDate: '2023-04-10',
      assigned: { email: 'jon.tones@gmail.com', avatar: 'JT' },
      status: 'Not Started',
      statusColor: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      logoType: 'dropbox',
    },
    {
      id: 3,
      name: 'Velocity',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Nancy Elliot', avatar: 'N', hasImage: false, avatarColor: 'bg-red-500' },
      startDate: '2023-04-05',
      endDate: '2023-04-10',
      assigned: { email: 'lanie.nveyn@gmail.com', avatar: 'LN' },
      status: 'On Hold',
      statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      logoType: 'facebook',
    },
    {
      id: 4,
      name: 'Catalyst',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Henry Leach', avatar: 'H', hasImage: false, avatarColor: 'bg-orange-500' },
      startDate: '2023-04-05',
      endDate: '2023-04-10',
      assigned: { email: 'nneth.une@gmail.com', avatar: 'NU' },
      status: 'Declined',
      statusColor: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      logoType: 'figma',
    },
    {
      id: 5,
      name: 'Odyssey',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Marianne Audrey', avatar: 'MA', hasImage: true },
      startDate: '2023-04-05',
      endDate: '2023-04-10',
      assigned: { email: 'erna.serpa@outlook.com', avatar: 'ES' },
      status: 'Finished',
      statusColor: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      logoType: 'github',
    },
    {
      id: 6,
      name: 'Synergy',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Cute Green', avatar: 'CG', hasImage: true },
      startDate: '2023-04-12',
      endDate: '2023-04-18',
      assigned: { email: 'arcie.tones@gmail.com', avatar: 'AT' },
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      logoType: 'gitlab',
    },
    {
      id: 7,
      name: 'Zenith',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Leach Henry', avatar: 'L', hasImage: false, avatarColor: 'bg-red-500' },
      startDate: '2023-04-15',
      endDate: '2023-04-20',
      assigned: { email: 'jon.tones@gmail.com', avatar: 'JT' },
      status: 'Not Started',
      statusColor: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
      logoType: 'gmail',
    },
    {
      id: 8,
      name: 'Momentum',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Audrey Marianne', avatar: 'AM', hasImage: true },
      startDate: '2023-04-18',
      endDate: '2023-04-25',
      assigned: { email: 'lanie.nveyn@gmail.com', avatar: 'LN' },
      status: 'On Hold',
      statusColor: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      logoType: 'instagram',
    },
    {
      id: 9,
      name: 'Horizon',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Elliot Nancy', avatar: 'E', hasImage: false, avatarColor: 'bg-blue-500' },
      startDate: '2023-04-20',
      endDate: '2023-04-28',
      assigned: { email: 'nneth.une@gmail.com', avatar: 'NU' },
      status: 'Finished',
      statusColor: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      logoType: 'paypal',
    },
    {
      id: 10,
      name: 'Zenith',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing...',
      customer: { name: 'Della Henry', avatar: 'DH', hasImage: true },
      startDate: '2023-04-22',
      endDate: '2023-04-30',
      assigned: { email: 'erna.serpa@outlook.com', avatar: 'ES' },
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      logoType: 'googledrive',
    },
  ];

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.assigned.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProjects.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  return (
    <Layout breadcrumbs={[{ label: 'Projects' }, { label: 'Home' }, { label: 'List' }]} showSubHeader={false}>
      {/* Custom SubHeader matching image design */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Left Section - Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-gray-800 dark:text-gray-200">Projects</span>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600" />
            <span className="font-bold text-gray-700 dark:text-gray-300">Home</span>
            <span className="text-gray-400 dark:text-gray-500 mx-1">&gt;</span>
            <span className="text-gray-500 dark:text-gray-400">List</span>
          </div>

          {/* Right Section - Icon Buttons and Create Button */}
          <div className="flex items-center gap-2">
            <button 
              onClick={handleBarChart}
              className="w-9 h-9 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              title="View Analytics"
            >
              <BarChart3 className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={handleFilter}
              className={`w-9 h-9 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center ${showFilter ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-300' : ''}`}
              title="Filter Projects"
            >
              <Filter className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={handlePaperclip}
              className="w-9 h-9 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
              title="Export Projects"
            >
              <Paperclip className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </button>
            <button 
              onClick={() => navigate('/projects/create')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <span>+</span>
              <span>CREATE PROJECT</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
        {/* Table Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
          {/* Search and Entries Controls */}
          <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 dark:text-gray-400">Show</label>
                <div className="relative inline-block">
                  <select
                    value={entriesPerPage}
                    onChange={e => {
                      setEntriesPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-3 py-1.5 pr-8 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300 appearance-none cursor-pointer"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600 dark:text-gray-400 pointer-events-none" />
                </div>
                <label className="text-sm text-gray-600 dark:text-gray-400">entries</label>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label className="text-sm text-gray-600 dark:text-gray-400">Search:</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={e => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search..."
                  className="flex-1 sm:w-64 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-white dark:bg-gray-800 border-b-2 border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left border-b-2 border-gray-200 dark:border-gray-700">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 dark:border-gray-600"
                      checked={currentProjects.length > 0 && selectedProjects.size === currentProjects.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <span>PROJECT-NAME</span>
                      <ArrowUp className="w-3 h-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <span>CUSTOMER</span>
                      <ArrowUp className="w-3 h-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <span>START DATE</span>
                      <ArrowUp className="w-3 h-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <span>END DATE</span>
                      <ArrowUp className="w-3 h-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <span>ASSIGNED</span>
                      <ArrowUp className="w-3 h-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <span>STATUS</span>
                      <ArrowUp className="w-3 h-3 text-gray-400" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <span>ACTIONS</span>
                      <ArrowUp className="w-3 h-3 text-gray-400" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {currentProjects.map(project => (
                  <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-4 py-3">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 dark:border-gray-600"
                        checked={selectedProjects.has(project.id)}
                        onChange={(e) => handleSelectProject(project.id, e.target.checked)}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <ProjectIcon logoType={project.logoType} />
                        <div className="flex flex-col gap-0.5">
                          <div className="text-sm leading-tight">
                            {project.name.includes(':') ? (
                              <>
                                <span className="font-bold text-gray-900 dark:text-white">
                                  {project.name.split(':')[0]}:
                                </span>
                                <span className="font-normal text-gray-600 dark:text-gray-400">
                                  {project.name.split(':').slice(1).join(':')}
                                </span>
                              </>
                            ) : (
                              <span className="font-bold text-gray-900 dark:text-white">
                                {project.name}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                            {project.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        {project.customer.hasImage ? (
                          <ProfilePictureAvatar name={project.customer.name} />
                        ) : (
                          <div className={`w-6 h-6 ${project.customer.avatarColor || 'bg-blue-500'} rounded-full flex items-center justify-center text-white text-xs font-semibold flex-shrink-0`}>
                            {project.customer.avatar}
                          </div>
                        )}
                        <span className="text-sm text-gray-900 dark:text-white font-semibold">
                          {project.customer.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-normal">
                      {project.startDate}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900 dark:text-white font-normal">
                      {project.endDate}
                    </td>
                    <td className="px-4 py-3">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md px-3 py-2 flex items-center gap-2.5 justify-between">
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <ProfilePictureAvatar name={project.assigned.email} />
                          <span className="text-sm text-gray-900 dark:text-white font-normal truncate">
                            {project.assigned.email}
                          </span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0 ml-auto" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md px-3 py-2 flex items-center gap-2.5 justify-between">
                        <div className="flex items-center gap-2.5 flex-1 min-w-0">
                          <div 
                            className={`w-2 h-2 rounded-full flex-shrink-0 ${
                              project.status === 'In Progress' ? 'bg-blue-500' :
                              project.status === 'Not Started' ? 'bg-orange-500' :
                              project.status === 'On Hold' ? 'bg-green-500' :
                              project.status === 'Declined' ? 'bg-red-500' :
                              project.status === 'Finished' ? 'bg-cyan-500' :
                              'bg-gray-500'
                            }`}
                          />
                          <span className="text-sm text-gray-900 dark:text-white font-normal">
                            {project.status}
                          </span>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0 ml-auto" />
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="w-8 h-8 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          <Eye className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                        </button>
                        <button className="w-7 h-7 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          <MoreHorizontal className="w-3.5 h-3.5 text-gray-700 dark:text-gray-300" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1} to {Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} entries
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 border border-gray-300 dark:border-gray-500 rounded text-sm text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-800 disabled:cursor-not-allowed disabled:hover:bg-white dark:disabled:hover:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Previous
              </button>
              <button
                className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium"
              >
                {currentPage}
              </button>
              <button
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 border border-gray-300 dark:border-gray-500 rounded text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Floating Settings Button */}
        <button className="fixed right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-l-lg shadow-lg flex items-center justify-center transition-colors z-50">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </Layout>
  );
};

export default Projects;
