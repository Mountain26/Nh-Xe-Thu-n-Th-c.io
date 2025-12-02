import { Phone, Facebook } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import "./FloatingContacts.css";

export function FloatingContacts() {
  const { language } = useLanguage();

  const labels = language === "vi"
    ? {
        container: "Kênh liên hệ nhanh",
        zalo: "Liên hệ Zalo",
        hotline: "Gọi tổng đài",
        facebook: "Theo dõi Facebook",
      }
    : {
        container: "Quick contact channels",
        zalo: "Message via Zalo",
        hotline: "Call hotline",
        facebook: "Follow on Facebook",
      };

  return (
    <div className="floating-contacts" aria-label={labels.container}>
      <a
        className="floating-contacts__item floating-contacts__item--zalo"
        href="https://zalo.me/nhaxethuanthuc23"
        target="_blank"
        rel="noreferrer"
        aria-label={labels.zalo}
      >
        <span className="floating-contacts__icon floating-contacts__icon--zalo" aria-hidden="true">
          <span className="floating-contacts__icon-text">Zalo</span>
        </span>
        <span className="floating-contacts__halo" aria-hidden="true" />
      </a>
      <a
        className="floating-contacts__item floating-contacts__item--hotline"
        href="tel:0983250900"
        aria-label={labels.hotline}
      >
        <span className="floating-contacts__icon" aria-hidden="true">
          <Phone />
        </span>
        <span className="floating-contacts__halo" aria-hidden="true" />
      </a>
      <a
        className="floating-contacts__item floating-contacts__item--facebook"
        href="https://www.facebook.com/nhaxethuanthuc"
        target="_blank"
        rel="noreferrer"
        aria-label={labels.facebook}
      >
        <span className="floating-contacts__icon" aria-hidden="true">
          <Facebook />
        </span>
        <span className="floating-contacts__halo" aria-hidden="true" />
      </a>
    </div>
  );
}
