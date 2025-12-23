interface StatCardProps {
  icon: JSX.Element;
  value: string;
  label: string;
  iconColor: string;
  iconBg: string;
}

export default function StatCard({ icon, value, label, iconColor, iconBg }: StatCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800 p-6 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className={`w-12 h-12 ${iconBg} rounded-md flex items-center justify-center mb-3`}>
          <div className={iconColor}>{icon}</div>
        </div>
        <div className="text-3xl font-extrabold text-gray-900 dark:text-white mb-1">{value}</div>
        <div className="text-sm text-gray-500 dark:text-gray-400 tracking-wide">{label}</div>
      </div>
    </div>
  );
}
