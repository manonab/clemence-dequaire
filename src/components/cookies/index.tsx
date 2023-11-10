import React, { useState } from "react";

interface CookiesProps {
  handleAcceptCookies: () => void;
}
const CookieBanner: React.FC<CookiesProps> = ({ handleAcceptCookies }: CookiesProps) => {
  const [showBanner, setShowBanner] = useState<boolean>(true);

  const hideBanner = () => {
    setShowBanner(false);
  };


  if (!showBanner) {
    return null; // Ne rien afficher si le consentement a déjà été donné
  }

  return (
    <div className="z-50 fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between">
        <p className="text-sm">
          Notre site utilise des cookies pour améliorer votre expérience. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={handleAcceptCookies}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Accepter
          </button>
          <button
            onClick={hideBanner}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
