import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./PolicyPage.css";

const copy = {
  vi: {
    title: "Chính sách đặt vé Nhà xe Thuận Thực",
    updated: "Cập nhật tháng 12/2025",
    introduction: [
      "Website có chức năng cung cấp thông tin tuyến, lịch trình và hỗ trợ khách liên hệ với Nhà xe Thuận Thực.",
      "Đặt vé trực tuyến chưa được kích hoạt. Hành khách vui lòng liên hệ qua các kênh chính thức bên dưới.",
    ],
    sections: [
      {
        title: "1. Hình thức đặt vé",
        paragraphs: [
          "Nhà xe Thuận Thực hiện hỗ trợ đặt vé thông qua các kênh sau:",
        ],
        list: [
          "Gọi trực tiếp tổng đài",
          "Nhắn tin qua Fanpage/Zalo",
          "Đặt trực tiếp tại văn phòng/bến xe",
        ],
        note:
          "Website hiện chỉ có chức năng xem thông tin tuyến – giờ – lịch trình, KHÔNG đặt vé trực tuyến.",
      },
      {
        title: "2. Thông tin cần cung cấp khi đặt vé",
        paragraphs: [
          "Khi đặt vé qua tổng đài, vui lòng chuẩn bị đủ các thông tin sau để nhân viên hỗ trợ nhanh chóng:",
        ],
        list: [
          "Họ và tên",
          "Số điện thoại",
          "Tuyến đi – giờ đi dự kiến",
          "Số lượng vé",
        ],
      },
      {
        title: "3. Chính sách giữ chỗ",
        list: [
          "Sau khi đặt vé, hệ thống sẽ giữ chỗ theo thông tin khách hàng cung cấp.",
          "Nhân viên có thể liên hệ lại để xác nhận trước giờ khởi hành.",
          "Nếu không thể liên hệ với khách, chỗ có thể được chuyển cho hành khách khác.",
        ],
      },
      {
        title: "4. Chính sách cọc",
        list: [
          "Từ 3 vé trở lên: yêu cầu cọc trước để giữ chỗ.",
          "Mức cọc được thông báo cụ thể theo từng tuyến.",
          "Vé đã cọc được ưu tiên giữ chỗ và không bị ảnh hưởng khi cao điểm.",
        ],
      },
      {
        title: "5. Hình thức thanh toán",
        paragraphs: ["Khách hàng có thể chọn thanh toán trước hoặc thanh toán khi lên xe:"],
        bulletGroups: [
          {
            heading: "Thanh toán trước",
            items: [
              "Chuyển khoản vào tài khoản ngân hàng chính thức của Nhà xe.",
              "Nhân viên sẽ cung cấp số tài khoản, tên chủ tài khoản và nội dung chuyển khoản.",
            ],
          },
          {
            heading: "Thanh toán khi lên xe",
            items: [
              "Áp dụng cho vé lẻ (1–2 vé) hoặc một số tuyến ít áp lực khách.",
              "Không phát sinh phụ thu khi khách thanh toán trực tiếp trên xe.",
            ],
          },
        ],
      },
      {
        title: "6. Thay đổi, huỷ vé",
        list: [
          "Liên hệ tổng đài để thay đổi giờ khởi hành hoặc huỷ vé.",
          "Vé đã cọc có thể áp dụng chính sách riêng tùy thời điểm.",
          "Trong trường hợp bất khả kháng (thời tiết, sự cố đường), nhà xe có thể điều chỉnh thời gian xuất bến.",
        ],
      },
      {
        title: "7. Trách nhiệm & quyền lợi của khách hàng",
        paragraphs: ["Khách hàng được hưởng các quyền lợi:"],
        bulletGroups: [
          {
            heading: "Quyền lợi",
            items: [
              "Giữ đúng chỗ đã đặt.",
              "Được hỗ trợ hành lý trong phạm vi cho phép.",
              "Được nhân viên hướng dẫn tại bến hoặc trên xe.",
            ],
          },
          {
            heading: "Trách nhiệm",
            items: [
              "Cung cấp thông tin chính xác.",
              "Có mặt đúng giờ.",
              "Giữ gìn trật tự và an toàn trong suốt hành trình.",
            ],
          },
        ],
      },
    ],
    closing: "Mọi thắc mắc xin vui lòng liên hệ tổng đài 0983 250 900 để được hỗ trợ chi tiết.",
    back: "Quay về trang chủ",
  },
  en: {
    title: "Thuận Thực Ticket Policy",
    updated: "Updated December 2025",
    introduction: [
      "This website provides route, timetable, and service information to help passengers connect with Thuận Thực Coachlines.",
      "Online ticketing is not yet enabled. Please use our official contact channels to reserve seats.",
    ],
    sections: [
      {
        title: "1. Booking Channels",
        paragraphs: ["Tickets can currently be reserved via:"],
        list: [
          "Calling our hotline",
          "Messaging through Facebook Fanpage/Zalo",
          "Visiting our office or authorised stations",
        ],
        note:
          "The website is for route and schedule reference only. Online ticket purchase is unavailable for now.",
      },
      {
        title: "2. Information Required",
        paragraphs: [
          "When contacting the hotline, please prepare the following information so our agents can assist quickly:",
        ],
        list: ["Full name", "Phone number", "Route and preferred departure time", "Number of seats"],
      },
      {
        title: "3. Seat Hold Policy",
        list: [
          "Once booked, seats are held according to the details you provide.",
          "Our team may call back to reconfirm before departure.",
          "If we are unable to reach you, the seat may be reassigned to other passengers.",
        ],
      },
      {
        title: "4. Deposit Terms",
        list: [
          "Bookings of three seats or more require a deposit to secure the reservation.",
          "Deposit amounts vary by route and will be shared by hotline staff.",
          "Deposited tickets receive priority protection during high-demand periods.",
        ],
      },
      {
        title: "5. Payment Options",
        paragraphs: ["Passengers may choose advance payment or pay on board:"],
        bulletGroups: [
          {
            heading: "Advance payment",
            items: [
              "Transfer to Thuận Thực’s official bank account.",
              "Staff will provide account number, account holder, and transfer details.",
            ],
          },
          {
            heading: "Pay on board",
            items: [
              "Available for single or double tickets and selected low-demand routes.",
              "No additional surcharge applies when paying directly on the coach.",
            ],
          },
        ],
      },
      {
        title: "6. Changes & Cancellations",
        list: [
          "Contact the hotline to adjust departure time or cancel tickets.",
          "Deposited tickets may follow specific rules depending on timing.",
          "In force majeure events (weather, road incidents), departures may be rescheduled.",
        ],
      },
      {
        title: "7. Passenger Responsibilities & Rights",
        paragraphs: ["Passengers are entitled to:"],
        bulletGroups: [
          {
            heading: "Rights",
            items: [
              "Seat allocation exactly as reserved.",
              "Assistance with luggage within permitted limits.",
              "Guidance from staff at boarding points and on board.",
            ],
          },
          {
            heading: "Responsibilities",
            items: [
              "Provide accurate contact details.",
              "Arrive on time for departure.",
              "Maintain order and safety throughout the trip.",
            ],
          },
        ],
      },
    ],
    closing: "For further clarification, please call our hotline +84 983 250 900.",
    back: "Back to home",
  },
};

export function BookingPolicyPage() {
  const { language } = useLanguage();
  const content = copy[language];

  return (
    <div className="policy-page">
      <header className="policy-page__header">
        <h1 className="policy-page__title">{content.title}</h1>
        <span className="policy-page__updated">{content.updated}</span>
        <div className="policy-page__introduction">
          {content.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </header>

      {content.sections.map((section) => (
        <section key={section.title} className="policy-page__section">
          <h2 className="policy-page__section-title">{section.title}</h2>
          <div className="policy-page__section-content">
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? (
              <ul className="policy-page__list">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.bulletGroups?.map((group) => (
              <div key={group.heading}>
                <p className="policy-page__subheading">{group.heading}</p>
                <ul className="policy-page__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {section.note ? <p>{section.note}</p> : null}
          </div>
        </section>
      ))}

      <footer className="policy-page__footer">
        <p>{content.closing}</p>
        <Link to="/" className="policy-page__back-link">
          {content.back}
        </Link>
      </footer>
    </div>
  );
}
