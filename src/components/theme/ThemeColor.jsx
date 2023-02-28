import { useEffect } from "react";

const ThemeColor = () => {
  const colors = [
    "#1ab394",
    "#ebbf0c",
    "#dba423",
    "#0cc0de",
    "#028ac9",
    "#d78fd6",
    "#ff645e",
    "#ff4274",
    "#f13a3a",
  ];
  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--primary-color");
    SetThemeColor(currentColor);
    localStorage.setItem("themeColor", currentColor);
  };
  const SetThemeColor = (color) => {
    document.documentElement.style.setProperty("--primary-color", color);
  };
  useEffect(() => {
    const currentColor = localStorage.getItem("themeColor");
    SetThemeColor(currentColor);
  }, []);
  return (
    <div className="color-boxes">
      <div className="d-flex flex-column gap-2 align-items-center">
        {colors.map((colorBox) => {
          return (
            <button
              onClick={setColor}
              key={colorBox}
              style={{ "--primary-color": `${colorBox}` }}
              className="rounded-circle p-3"
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default ThemeColor;
