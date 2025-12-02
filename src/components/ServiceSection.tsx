import { Shield, Coffee, Wifi, Armchair } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

import serviceSafetyImg from "./assets/xett.jpg";
import serviceLuxuryImg from "./assets/ghexekhachsan.jpg";
import serviceWifiImg from "./assets/Bus1.jpg";
import serviceRefreshmentImg from "./assets/xett2.jpg";

import "./ServiceSection.css";

const serviceCopy = {
  vi: {
    heading: "Tiện ích nổi bật",
    description: "Trải nghiệm chất lượng khác biệt với hệ thống xe đời mới và đội ngũ phục vụ tận tâm",
    items: [
      {
        icon: Shield,
        title: "An toàn chuẩn 5 sao",
        description:
          "Bảo hiểm hành khách đầy đủ, tài xế nhiều kinh nghiệm và kiểm tra xe định kỳ trước mỗi chuyến",
        image: serviceSafetyImg,
      },
      {
        icon: Armchair,
        title: "Giường nằm cao cấp",
        description: "Nệm da kháng khuẩn, rèm riêng tư, chăn gối sạch sẽ giúp bạn nghỉ ngơi thoải mái",
        image: serviceLuxuryImg,
      },
      {
        icon: Wifi,
        title: "Wifi & sạc tiện lợi",
        description: "Trang bị wifi miễn phí, cổng USB và điện thoại hỗ trợ suốt hành trình",
        image: serviceWifiImg,
      },
      {
        icon: Coffee,
        title: "Nước uống - khăn lạnh",
        description: "Phục vụ nước suối, khăn lạnh và điểm dừng nghỉ hợp lý để bạn luôn tỉnh táo",
        image: serviceRefreshmentImg,
      },
    ],
  },
  en: {
    heading: "Signature amenities",
    description: "Experience modern coaches and a dedicated crew that put comfort and safety first",
    items: [
      {
        icon: Shield,
        title: "Five-star safety standards",
        description:
          "Comprehensive passenger insurance, veteran drivers, and routine inspections before every trip",
        image: serviceSafetyImg,
      },
      {
        icon: Armchair,
        title: "Premium sleeper suites",
        description: "Antibacterial leather beds, privacy curtains, and fresh linens for restful sleep",
        image: serviceLuxuryImg,
      },
      {
        icon: Wifi,
        title: "Wi-Fi & charging",
        description: "Free Wi-Fi, USB ports, and on-trip phone assistance keep you connected",
        image: serviceWifiImg,
      },
      {
        icon: Coffee,
        title: "Refreshments onboard",
        description: "Complimentary water, cold towels, and well-timed rest stops to keep you energised",
        image: serviceRefreshmentImg,
      },
    ],
  },
} as const;

export function ServiceSection() {
  const { language } = useLanguage();
  const copy = serviceCopy[language];

  return (
    <section className="services-section" id="dich-vu">
      <div className="services-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-title">{copy.heading}</h2>
          <p className="services-description">{copy.description}</p>
        </motion.div>

        {/* Services grid */}
        <div className="services-grid">
          {copy.items.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="service-card"
              >
                {/* Image placeholder */}
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>

                {/* Icon */}
                <div className="service-icon">
                  <Icon />
                </div>

                {/* Content */}
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
