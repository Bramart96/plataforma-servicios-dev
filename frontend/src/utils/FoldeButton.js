import { useEffect, useState } from "react";

const FoldeButton = ({ label, children }) => {
  const [button, setButton] = useState(false);

  useEffect(() => {
    const closeOnPageScroll = () => setButton(false);
    window.addEventListener("scroll", closeOnPageScroll, { passive: true });
    return () => window.removeEventListener("scroll", closeOnPageScroll);
  }, []);


  return (
    <div className="flex flex-col items-center w-full gap-2">
      <button
        className="od-button px-4 py-2 rounded font-bold text-sm shadow cursor-pointer"
        onClick={() => setButton(!button)}
      >
        {label}
      </button>
      {button && <div className="w-full">{children}</div>}
    </div>
  );
};

export default FoldeButton;
