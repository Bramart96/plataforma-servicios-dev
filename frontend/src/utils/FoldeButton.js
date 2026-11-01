import { useEffect, useId, useState } from "react";

const PROFILE_OPEN_EVENT = "origindev:profile-open";

const FoldeButton = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const profileId = useId();
  const contentId = `${profileId}-content`;

  useEffect(() => {
    // Al abrir otro perfil, cerrar el que estuviera abierto.
    const handleOtherProfile = (event) => {
      if (event.detail !== profileId) setIsOpen(false);
    };

    // Cerrar el detalle al desplazarse por la página.
    const handleScroll = () => setIsOpen(false);

    window.addEventListener(PROFILE_OPEN_EVENT, handleOtherProfile);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener(PROFILE_OPEN_EVENT, handleOtherProfile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [profileId]);

  const handleToggle = () => {
    if (!isOpen) {
      window.dispatchEvent(
        new CustomEvent(PROFILE_OPEN_EVENT, { detail: profileId })
      );
    }
    setIsOpen((previous) => !previous);
  };

  return (
    <div
      className="flex w-full flex-col items-center gap-2"
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={(event) => {
        if (event.key === "Escape") setIsOpen(false);
      }}
    >
      <button
        type="button"
        className="od-button cursor-pointer rounded px-4 py-2 text-sm font-bold shadow"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        {label}
      </button>

      {isOpen && (
        <div id={contentId} className="w-full">
          {children}
        </div>
      )}
    </div>
  );
};

export default FoldeButton;
