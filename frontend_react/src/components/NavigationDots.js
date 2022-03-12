import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["start", "o mnie", "projekty", "umiejętności", "kontakt"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#1eb9b1" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
