import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    generateStars();
    if (isDark) {
      generateMeteors();
    }

    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [isDark]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 6 + 3,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {isDark ? (
        // 🌙 DARK MODE (stars + meteors)
        <>
          {stars.map((star) => (
            <div
              key={star.id}
              className="rounded-full absolute bg-white animate-pulse-subtle"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
              }}
            />
          ))}
          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor animate-meteor"
              style={{
                width: meteor.size * 50 + "px",
                height: meteor.size * 2 + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animationDelay: meteor.delay,
                animationDuration: meteor.animationDuration + "s",
              }}
            />
          ))}
        </>
      ) : (
        // ☀️ LIGHT MODE (galaxy pastel nebula)
        <div className="absolute w-full h-full bg-gradient-to-b from-white via-[#fdfbff] to-[#f0f4ff]">
          {/* glowing nebula clouds */}
          <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-transparent blur-3xl opacity-60 top-[-10%] left-[-10%]" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200 via-cyan-100 to-transparent blur-3xl opacity-60 bottom-[-15%] right-[-10%]" />
          <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-100 via-orange-100 to-transparent blur-3xl opacity-50 top-[30%] left-[20%]" />

          {/* shimmering particles */}
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-300 to-pink-300 animate-fadefloat"
              style={{
                width: `${Math.random() * 3 + 2}px`,
                height: `${Math.random() * 3 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.3,
                animationDuration: `${Math.random() * 8 + 5}s`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
