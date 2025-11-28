import React from "react";
import { Dock } from "react-bits";
import { useNavigate } from "react-router-dom";
import { FaHome, FaList, FaPhone, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

export default function MobileDock() {
  const navigate = useNavigate();

  return (
    <div className="mobile-dock">
      <Dock
        items={[
          {
            label: "Home",
            icon: <FaHome />,
            onClick: () => navigate("/"),
          },
          {
            label: "Services",
            icon: <FaList />,
            onClick: () => navigate("/services"),
          },
          {
            label: "Book",
            icon: <FaCalendarAlt />,
            onClick: () => navigate("/booking"),
          },
          {
            label: "Call",
            icon: <FaPhone />,
            onClick: () => window.open("tel:+447000000000"),
          },
          {
            label: "WhatsApp",
            icon: <FaWhatsapp />,
            onClick: () =>
              window.open(
                "https://wa.me/447000000000?text=Hi,+I'd+like+to+book+a+cleaning."
              ),
          },
        ]}
      />
    </div>
  );
}
