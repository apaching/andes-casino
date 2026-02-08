export default function BottomNavBar() {
  const navItems = [
    { icon: "/navigation_bar/sports_icon.webp", label: "DEPORTES" },
    { icon: "/navigation_bar/favorite_icon.webp", label: "FAVORITOS" },
    { icon: "/navigation_bar/recent_icon.webp", label: "RECIENTES" },
    { icon: "/navigation_bar/casino_icon.webp", label: "CASINO" },
    { icon: "/navigation_bar/expand_icon.webp", label: "EXPANDIR" },
  ];

  return (
    <footer className="fixed bottom-0 z-50 flex h-16 w-full flex-row items-center justify-around bg-white px-2 py-2 sm:hidden">
      {navItems.map((item, index) => (
        <button
          key={index}
          className="flex flex-col items-center justify-center gap-1 hover:cursor-pointer"
        >
          <img
            src={item.icon}
            alt={item.label}
            className="h-6 w-6 object-contain"
          />
          <span className="text-[10px] font-light text-gray-600">
            {item.label}
          </span>
        </button>
      ))}
    </footer>
  );
}
