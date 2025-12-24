import { useState } from 'react';
import { Star, Trash2, Edit, MapPin, Phone, Mail, Eye, Plus, Settings, Check } from 'lucide-react';
import Layout from '../../components/Layout';

const TABS = ['Overview', 'Billing', 'Activity', 'Notifications', 'Connection', 'Security'] as const;

const CustomerView = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>('Overview');

  return (
    <Layout breadcrumbs={[]} showSubHeader={false}>
      {/* Custom Sub Header - Only for CustomerView page */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="px-2 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
            {/* Left side - Breadcrumb */}
            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap min-w-0 flex-1">
              <span className="font-bold text-gray-900 dark:text-white">Customers</span>
              <span className="w-px h-3 sm:h-4 bg-gray-300 dark:bg-gray-600"></span>
              <span className="font-bold text-gray-900 dark:text-white">Home</span>
              <span className="text-gray-400 dark:text-gray-500 mx-0.5 sm:mx-1">&gt;</span>
              <span className="text-gray-600 dark:text-gray-400 font-normal">View</span>
            </div>

            {/* Right side - Action buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 w-full sm:w-auto">
              {/* Star icon button */}
              <button className="p-1.5 sm:p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex-shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600 dark:text-gray-400" strokeWidth={1.5} fill="none" />
              </button>
              {/* FOLLOW button with eye icon */}
              <button className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-1 sm:gap-2 flex-shrink-0">
                <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 dark:text-gray-300" strokeWidth={1.5} />
                <span className="text-[10px] sm:text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wide whitespace-nowrap">FOLLOW</span>
              </button>
              {/* CREATE CUSTOMER button with plus icon */}
              <button className="px-2 sm:px-3 py-1.5 sm:py-2 rounded bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1 sm:gap-2 flex-1 sm:flex-initial whitespace-nowrap">
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" strokeWidth={2.5} />
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wide hidden xs:inline">CREATE CUSTOMER</span>
                <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wide xs:hidden">CREATE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4 lg:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-800 h-full">
              <div className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 flex flex-col items-center h-full">
                <div className="relative mb-3 sm:mb-4">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=160"
                      alt="Alexandra Della"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 right-0 bg-green-500 rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                  </div>
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mb-1 text-center">Alexandra Della</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 lg:mb-8 text-center">alex.della@outlook.com</div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 w-full mb-4 sm:mb-6 lg:mb-8">
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded px-2 sm:px-3 py-2 sm:py-3 lg:py-4 text-center h-16 sm:h-18 lg:h-20 flex flex-col justify-center">
                    <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">28.65K</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wide">Followers</div>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded px-2 sm:px-3 py-2 sm:py-3 lg:py-4 text-center h-16 sm:h-18 lg:h-20 flex flex-col justify-center">
                    <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">38.85K</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wide">Following</div>
                  </div>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded px-2 sm:px-3 py-2 sm:py-3 lg:py-4 text-center h-16 sm:h-18 lg:h-20 flex flex-col justify-center">
                    <div className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">43.67K</div>
                    <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 dark:text-gray-400 font-semibold uppercase tracking-wide">Engagement</div>
                  </div>
                </div>

                {/* Contact list */}
                <div className="w-full space-y-3 sm:space-y-4 mb-4 sm:mb-6 lg:mb-8 text-xs">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400 font-semibold text-[10px] sm:text-xs">Location</span>
                    <span className="ml-auto text-gray-900 dark:text-white text-[10px] sm:text-xs font-bold text-right truncate">California, USA</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400 font-semibold text-[10px] sm:text-xs">Phone</span>
                    <span className="ml-auto text-gray-900 dark:text-white text-[10px] sm:text-xs font-bold text-right truncate">+01 (375) 2589 645</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-400 font-semibold text-[10px] sm:text-xs">Email</span>
                    <span className="ml-auto text-gray-900 dark:text-white text-[10px] sm:text-xs font-bold text-right truncate">alex.della@outlook.com</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex w-full gap-2 sm:gap-3 lg:gap-4">
                  <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-bold border border-gray-200 dark:border-gray-700 rounded py-2 sm:py-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <Trash2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden xs:inline">DELETE</span>
                    <span className="xs:hidden">DELETE</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-bold rounded py-2 sm:py-2.5 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <Edit className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">EDIT PROFILE</span>
                    <span className="sm:hidden">EDIT</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="lg:col-span-2 relative">
            <div className="bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-800 h-full flex flex-col">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-800 text-[10px] sm:text-xs items-center overflow-x-auto">
                <div className="flex flex-1 min-w-0">
                  {TABS.map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 lg:py-3.5 text-center font-semibold transition-colors whitespace-nowrap ${
                        activeTab === tab
                          ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border-b-2 border-blue-500'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-xs sm:text-sm leading-relaxed flex-1 overflow-y-auto">
                {activeTab === 'Overview' && (
                  <>
                    {/* Profile About */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-base font-bold text-gray-900 dark:text-white">Profile About:</div>
                        <button className="px-3 py-1.5 text-[11px] border border-gray-200 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold transition-colors">
                          UPDATES
                        </button>
                      </div>
                      <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <p>
                          John Doe is a frontend developer with over 5 years of experience creating high-quality,
                          user-friendly websites and web applications. He has a strong understanding of web development
                          technologies and a keen eye for design.
                        </p>
                        <p>
                          John is proficient in languages such as HTML, CSS, and JavaScript, and is experienced in using
                          popular frontend frameworks such as React and Angular. He is also well-versed in user experience
                          design and uses his knowledge to create engaging and intuitive user interfaces.
                        </p>
                        <p>
                          Throughout his career, John has worked on a wide range of projects for clients in various
                          industries, including e-commerce, healthcare, and education. He takes a collaborative approach
                          to development and enjoys working closely with clients and other developers to bring their ideas
                          to life.
                        </p>
                      </div>
                    </div>

                    {/* Profile Details */}
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-base font-bold text-gray-900 dark:text-white">Profile Details:</div>
                        <button className="px-3 py-1.5 text-[11px] border border-gray-200 dark:border-gray-700 rounded text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 uppercase font-bold transition-colors">
                          EDIT PROFILE
                        </button>
                      </div>

                      <div className="space-y-4 text-sm max-w-2xl">
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Full Name:</span>
                          <span className="text-gray-900 dark:text-white">Alexandra Della</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Surname:</span>
                          <span className="text-gray-900 dark:text-white">Della</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Company:</span>
                          <span className="text-gray-900 dark:text-white">Theme Ocean</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Date of Birth:</span>
                          <span className="text-gray-900 dark:text-white">26 May, 2000</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Mobile Number:</span>
                          <span className="text-gray-900 dark:text-white">+01 (375) 5896 3214</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Email Address:</span>
                          <span className="text-gray-900 dark:text-white">alex.della@outlook.com</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Location:</span>
                          <span className="text-gray-900 dark:text-white">California, United States</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Joining Date:</span>
                          <span className="text-gray-900 dark:text-white">20 Dec, 2023</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Country:</span>
                          <span className="text-gray-900 dark:text-white">United States</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Communication:</span>
                          <span className="text-gray-900 dark:text-white">Email, Phone</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Allow Changes:</span>
                          <span className="text-gray-900 dark:text-white">YES</span>
                        </div>
                        <div className="flex justify-between items-center py-1">
                          <span className="text-gray-600 dark:text-gray-400 font-semibold">Website:</span>
                          <span className="text-blue-600 dark:text-blue-400">
                            https://themeforest.net/user/theme_ocean
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* Blue Settings Icon - Right Edge, aligned with Profile About section */}
            {activeTab === 'Overview' && (
              <button className="absolute right-0 top-20 sm:top-24 lg:top-28 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center shadow-lg transition-colors z-10 -mr-2 sm:-mr-3 lg:-mr-4">
                <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerView;

