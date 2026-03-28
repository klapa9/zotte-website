import { useLocation, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className = "" }: NavigationProps) => {
  const location = useLocation();

  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === "/weeszot" || path.includes("weeszot")) return "weeszot";
    if (path === "/leven" || path.includes("leven")) return "leven";
    if (path === "/liefde" || path.includes("liefde")) return "liefde";
    if (path === "/ziekzot" || path.includes("ziekzot")) return "ziekzot";
    if (path === "/openjegeest" || path.includes("openjegeest")) return "openjegeest";
    if (path === "/geld" || path.includes("geld")) return "geld";
    if (path === "/reacties" || path.includes("reacties")) return "reacties";
    return "home";
  };

  const currentPage = getCurrentPage();

  const navigationItems = [
    { key: "home", label: "Home", icon: "🏠", href: "/" },
    { key: "openjegeest", label: "Open Geest", icon: "🧠", href: "/openjegeest" },
    { key: "weeszot", label: "Wees Zot", icon: "🌟", href: "/weeszot" },
    { key: "leven", label: "Leven", icon: "❓", href: "/leven" },
    { key: "liefde", label: "liefde", icon: "❤️", href: "/liefde" },
    { key: "ziekzot", label: "Ziek Zot", icon: "🌿", href: "/ziekzot" },
  ];

  const getItemColor = (itemKey: string) => {
    if (itemKey === currentPage) {
      switch (itemKey) {
        case "geld":
          return "text-orange-300 hover:text-orange-200";
        case "weeszot":
          return "text-yellow-300 hover:text-yellow-200";
        case "leven":
          return "text-cyan-300 hover:text-cyan-200";
        case "liefde":
          return "text-green-300 hover:text-green-200";
        case "ziekzot":
          return "text-pink-300 hover:text-pink-200";
        case "openjegeest":
          return "text-indigo-300 hover:text-indigo-200";
        case "reacties":
          return "text-purple-300 hover:text-purple-200";
        default:
          return "text-white hover:text-gray-200";
      }
    }
    return "text-gray-300 hover:text-white";
  };

  const getActiveBackground = (itemKey: string) => {
    if (itemKey === currentPage) {
      switch (itemKey) {
        case "geld":
          return "bg-orange-600 bg-opacity-30 border-orange-400";
        case "weeszot":
          return "bg-yellow-600 bg-opacity-30 border-yellow-400";
        case "leven":
          return "bg-cyan-600 bg-opacity-30 border-cyan-400";
        case "liefde":
          return "bg-green-600 bg-opacity-30 border-green-400";
        case "ziekzot":
          return "bg-pink-600 bg-opacity-30 border-pink-400";
        case "openjegeest":
          return "bg-indigo-600 bg-opacity-30 border-indigo-400";
        case "reacties":
          return "bg-purple-600 bg-opacity-30 border-purple-400";
        default:
          return "bg-gray-600 bg-opacity-30 border-gray-400";
      }
    }
    return "";
  };

  const commentsButtonActive = currentPage === "reacties";

  return (
    <nav className={`py-8 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
          <Link
            to="/reacties"
            aria-label="Bekijk alle reacties"
            title="Bekijk alle reacties"
            className={`absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 shadow-lg ${
              commentsButtonActive
                ? "bg-purple-600/40 border-purple-300 text-white"
                : "bg-white/10 border-white/20 text-white/80 hover:bg-white/15 hover:text-white"
            }`}
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
          </Link>

          <h3 className="text-2xl font-black text-white mb-4 text-center">
            🔗 Verder Ontdekken
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`font-bold transition-all duration-300 block ${
                  getActiveBackground(item.key)
                    ? `${getActiveBackground(item.key)} rounded-xl p-3 border-2 relative`
                    : getItemColor(item.key)
                }`}
              >
                {getActiveBackground(item.key) && (
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                )}

                <div className="text-3xl mb-1">{item.icon}</div>
                <div className={getActiveBackground(item.key) ? "text-white" : ""}>
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;