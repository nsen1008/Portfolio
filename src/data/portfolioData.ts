export interface ProjectMetric {
  label: string;
  value: string;
  desc?: string;
}

export interface ProjectCaseStudy {
  challenge: string;
  solution: string;
  result: string;
}

export interface TechnicalContribution {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  image: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: ProjectMetric[];
  keyFeatures: string[];
  caseStudy?: ProjectCaseStudy;
  contributions?: TechnicalContribution[];
  demoUrl?: string;
  company?: string;
  period?: string;
}

export const PORTFOLIO_INFO = {
  name: "Nguyễn Thanh Sang",
  nickname: "Seneyu",
  role: "Front-End Developer",
  specialization: "React & Next.js Specialist",
  birthDate: "10/08/2004",
  phone: "(+84) 768 479 401",
  email: "thanhsang2418@gmail.com",
  location: "TP. Hồ Chí Minh, Việt Nam",
  status: "Sẵn sàng nhận cơ hội việc làm mới",
  avatar: "/images/avatar.png",
  cvFile: "https://drive.google.com/file/d/159JH1FJNYw2siy7uIUrNTFnf_j0Fb9Ej/view?usp=sharing",
  bio: "Lập trình viên Front-End định hướng React và Next.js với kinh nghiệm thực tế tại DUDI Software trong việc xây dựng các nền tảng website du lịch, website doanh nghiệp và ứng dụng chia sẻ cộng đồng. Tập trung phát triển giao diện responsive chuẩn mực, tái sử dụng component, tích hợp REST API và chuyển động web mượt mà.",
  stats: [
    { label: "Dự án thực tế hoàn thiện", value: "5" },
    { label: "Kinh nghiệm thực chiến", value: "DUDI Software" },
    { label: "Chứng chỉ quốc tế", value: "Meta Certified" },
    { label: "Tối ưu hóa giao diện", value: "60 FPS" },
  ],
  education: {
    school: "Đại học Công nghệ TP.HCM (HUTECH)",
    major: "Kỹ thuật Phần mềm (Software Engineering)",
    period: "2022 – 2026",
    gpa: "3.06 / 4.00",
    coursework: ["Phát triển ứng dụng Web", "Hệ cơ sở dữ liệu", "Lập trình hướng đối tượng (OOP)", "Phát triển ứng dụng Di động"],
  },
  experience: [
    {
      role: "Front-end Developer",
      company: "DUDI Software",
      period: "04/2026 – 09/2026",
      description: "Phát triển và bảo trì tính năng giao diện cho nhiều dự án khách hàng sử dụng React, Next.js, TypeScript, JavaScript và Tailwind CSS. Tập trung vào giao diện responsive, component tái sử dụng, tích hợp REST API và nâng cao trải nghiệm người dùng.",
      projects: ["ConDaoTrip (condaotrip.com.vn)", "Cao Nguyên Xanh (caonguyenxanh.com.vn)", "Odyssey Hà Giang (odysseyhagiangloop.com)"],
    },
    {
      role: "Front-end Developer Intern",
      company: "DUDI Software",
      period: "01/2026 – 03/2026",
      description: "Tham gia phát triển giao diện web application và landing page. Xây dựng responsive UI, tích hợp API, quản lý trạng thái ứng dụng và hiệu ứng chuyển động tương tác.",
      projects: ["Món Quà Nhỏ (mon-qua-nho-v4-1.vercel.app)", "Landing Côn Đảo (condaonationalpark.com)"],
    },
  ],
  certifications: [
    {
      name: "Meta Front-End Developer",
      issuer: "Meta / Coursera",
      year: "2026",
    },
    {
      name: "Chứng chỉ Tiếng Anh B1 (English Proficiency Level B1)",
      issuer: "Bộ GD&ĐT / HUTECH",
      year: "2025",
    },
  ],
  socials: {
    github: "https://github.com/nsen1008",
    linkedin: "https://linkedin.com/in/thanhsang1008",
    email: "thanhsang2418@gmail.com",
    phone: "(+84) 768 479 401",
  },
  skills: {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
    frontend: ["React", "Next.js App Router", "React Router", "React Hooks"],
    styling: ["Tailwind CSS", "Ant Design", "Radix UI", "Responsive Design"],
    stateData: ["REST API", "Axios", "Fetch API", "TanStack Query", "Zustand"],
    addons: ["Socket.IO Client", "i18next (Đa ngôn ngữ)", "Framer Motion", "GSAP", "SEO Metadata & Sitemap"],
    tools: ["Git", "GitHub", "Vite", "Figma", "Postman", "npm", "ESLint"],
  },
};

export const PROJECTS: Project[] = [
  {
    id: "condao-trip",
    title: "ConDaoTrip — Website Du Lịch & Dịch Vụ Côn Đảo",
    subtitle: "Dự án khách hàng tại DUDI Software",
    category: "Du Lịch & Thương Mại",
    featured: true,
    image: "/images/projects/condao-trip.png",
    demoUrl: "https://condaotrip.com.vn",
    company: "DUDI Software",
    period: "04/2026 – 09/2026",
    description: "Website thông tin du lịch và đặt dịch vụ Côn Đảo hoàn chỉnh. Hỗ trợ đa ngôn ngữ 8 thứ tiếng, sitemap động từ API và tích hợp giao diện quản trị đầy đủ.",
    longDescription: "Phát triển giao diện danh sách và chi tiết tour, dịch vụ, bài viết tin tức; tổ chức hệ thống thành phần tái sử dụng cho điều hướng, thẻ nội dung và bố cục trang. Tích hợp REST API cho nội dung và hệ thống quản trị tour, dịch vụ, danh mục, banner, bài viết và liên hệ. Đặc biệt hỗ trợ 8 ngôn ngữ với i18next và xây dựng sitemap lấy dữ liệu động từ API có cơ chế dữ liệu dự phòng.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Axios", "i18next", "SEO Sitemap"],
    metrics: [
      { label: "Đa ngôn ngữ", value: "8 Thứ tiếng", desc: "Chuyển ngữ tức thì qua i18next & Locale routing" },
      { label: "Tốc độ phản hồi", value: "< 1.4s", desc: "Server-side Rendering với Next.js tối ưu" },
      { label: "Sitemap tự động", value: "100% Dynamic", desc: "Đồng bộ từ REST API có dữ liệu fallback" },
      { label: "Môi trường", value: "Live Production", desc: "Vận hành thực tế tại condaotrip.com.vn" },
    ],
    keyFeatures: [
      "Hỗ trợ 8 ngôn ngữ quốc tế linh hoạt thông qua i18next và routing theo locale",
      "Giao diện danh sách và chi tiết tour, dịch vụ lữ hành, tin tức và liên hệ",
      "Tích hợp REST API phục vụ toàn bộ nội dung và bảng điều khiển quản trị",
      "Tự động tạo sitemap động từ API có cơ chế fallback khi truy vấn lỗi",
    ],
    caseStudy: {
      challenge: "Hệ thống thông tin du lịch và đặt dịch vụ lữ hành Côn Đảo bao gồm nhiều dữ liệu đa dạng (tour, khách sạn, vé tàu cao tốc, cẩm nang du lịch). Yêu cầu đặt ra là phải tải trang cực nhanh, hỗ trợ 8 ngôn ngữ phục vụ du khách quốc tế và chuẩn SEO cao để cạnh tranh thứ hạng tìm kiếm tự nhiên.",
      solution: "Triển khai Next.js kết hợp i18next với cấu trúc locale-based routing, tách biệt component tái sử dụng (tour card, booking CTA, gallery). Xây dựng cơ chế tạo XML Sitemap động trực tiếp từ REST API kèm dữ liệu fallback an toàn, kết hợp Axios interceptor xử lý request/response tập trung.",
      result: "Website vận hành ổn định trên live production tại condaotrip.com.vn, phục vụ hàng nghìn lượt tra cứu và đặt tour mỗi tháng, đạt điểm đánh giá cao về hiệu năng và thân thiện với công cụ tìm kiếm.",
    },
    contributions: [
      { title: "Kiến trúc Next.js SSR & Đa ngôn ngữ", description: "Xây dựng cấu trúc thư mục chuẩn mực, tích hợp i18next với 8 bộ từ điển ngôn ngữ và điều hướng theo URL locale." },
      { title: "Hệ thống Thành phần Tái sử dụng", description: "Phát triển bộ component linh hoạt: thanh điều hướng, bộ lọc dịch vụ, thẻ hiển thị tour và popup đặt dịch vụ nhanh." },
      { title: "Tích hợp RESTful API & Interceptor", description: "Đóng gói lớp dịch vụ API với Axios, kiểm soát toàn diện trạng thái tải (loading skeletons) và thông báo lỗi người dùng." },
      { title: "Tự động hóa Sitemap & Chuẩn SEO", description: "Lập trình API route sinh sitemap.xml động theo thời gian thực từ dữ liệu bài viết và tour, bảo đảm chỉ mục Google luôn cập nhật." },
    ],
  },
  {
    id: "landing-condao",
    title: "Landing Côn Đảo — Du Lịch & Khám Phá Quốc Gia",
    subtitle: "Dự án khách hàng tại DUDI Software",
    category: "Landing Page & Animation",
    featured: true,
    image: "/images/projects/landing-condao.png",
    demoUrl: "https://www.condaonationalpark.com",
    company: "DUDI Software",
    period: "01/2026 – 03/2026",
    description: "Landing page quảng bá du lịch Côn Đảo phong cách điện ảnh. Tích hợp hoạt ảnh cuộn mượt mà với GSAP, ScrollTrigger, Lenis và hiệu ứng parallax cao cấp.",
    longDescription: "Xây dựng landing page giới thiệu gồm hero, câu chuyện điểm đến, tour nổi bật, bản đồ tương tác, dịch vụ và thư viện ảnh với bố cục responsive tỉ mỉ. Lập trình các hiệu ứng xuất hiện khi cuộn (scroll-based animations), parallax, text reveal và cuộn mượt bằng GSAP và Lenis. Tách biệt cấu trúc dữ liệu tour, dịch vụ khỏi thành phần giao diện để dễ dàng bảo trì.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "GSAP", "ScrollTrigger", "Lenis", "Motion"],
    metrics: [
      { label: "Tốc độ khung hình", value: "60 FPS", desc: "Hoạt ảnh cuộn mượt mà không drop frame" },
      { label: "Chỉ số LCP", value: "< 1.2s", desc: "Tối ưu hóa tài nguyên ảnh định dạng WebP" },
      { label: "Công nghệ hoạt ảnh", value: "Lenis + GSAP", desc: "Inertial Scroll kết hợp ScrollTrigger" },
      { label: "Môi trường", value: "Live Production", desc: "condaonationalpark.com" },
    ],
    keyFeatures: [
      "Hiệu ứng cuộn mượt mà (Inertial Smooth Scrolling) với thư viện Lenis",
      "Hoạt ảnh ScrollTrigger kết hợp parallax và hiệu ứng reveal chữ nghệ thuật",
      "Bản đồ tương tác điểm đến và thư viện hình ảnh tối ưu tải ảnh định dạng WebP",
      "Phân tách lớp dữ liệu (data layer) độc lập với UI components",
    ],
    caseStudy: {
      challenge: "Cần xây dựng một trải nghiệm visual đậm chất điện ảnh, giới thiệu thiên nhiên hoang sơ và các địa danh lịch sử Côn Đảo nhằm khơi gợi cảm xúc khám phá của du khách, đồng thời phải duy trì tốc độ tải trang nhanh và cuộn êm ái trên mọi thiết bị di động.",
      solution: "Ứng dụng GSAP ScrollTrigger cùng thư viện cuộn quán tính Lenis để tạo cảm giác chuyển động mượt mà. Kết hợp hiệu ứng parallax, text reveal và bản đồ điểm đến tương tác. Nén và chuyển đổi toàn bộ hình ảnh sang định dạng WebP tải từng phần (lazy load).",
      result: "Trang landing page đạt hiệu năng thị giác ấn tượng, mang lại trải nghiệm thương hiệu cao cấp tại condaonationalpark.com với thời gian tương tác trung bình của người dùng tăng rõ rệt.",
    },
    contributions: [
      { title: "Trải nghiệm Cuộn quán tính (Inertial Scroll)", description: "Cấu hình thư viện Lenis đồng bộ cùng khung hình render của trình duyệt, loại bỏ hoàn toàn cảm giác giật cục khi cuộn." },
      { title: "Hoạt cảnh ScrollTrigger & Parallax", description: "Điều phối các timeline GSAP phức tạp cho tiêu đề chữ nghệ thuật và hình ảnh thiên nhiên trượt theo chiều sâu thị giác." },
      { title: "Bản đồ Tương tác Điểm đến", description: "Xây dựng bản đồ du lịch trực quan với các điểm pin tương tác, xem nhanh thông tin bãi biển và khu bảo tồn." },
      { title: "Tối ưu hóa Tài nguyên Hình ảnh", description: "Áp dụng định dạng WebP hiện đại và cơ chế nạp ảnh ưu tiên (priority loading) cho khối Hero để tối ưu chỉ số LCP." },
    ],
  },
  {
    id: "cao-nguyen-xanh",
    title: "Cao Nguyên Xanh — Doanh Nghiệp In Ấn & Bao Bì",
    subtitle: "Dự án khách hàng tại DUDI Software",
    category: "Website Doanh Nghiệp",
    featured: true,
    image: "/images/projects/caonguyenxanh.png",
    demoUrl: "https://caonguyenxanh.com.vn",
    company: "DUDI Software",
    period: "04/2026 – 09/2026",
    description: "Website doanh nghiệp sản xuất in ấn và bao bì chuyên nghiệp. Tìm kiếm debounced, lọc danh mục theo URL params và xử lý API tập trung.",
    longDescription: "Xây dựng giao diện giới thiệu doanh nghiệp, danh mục và chi tiết sản phẩm, bộ sưu tập mẫu mã, dự án và ngành hàng. Phát triển tính năng tìm kiếm sản phẩm có debounce, lọc theo danh mục và phân trang đồng bộ với tham số URL. Tách lớp gọi API theo nghiệp vụ, chuẩn hóa xử lý lỗi tập trung và xây dựng giao diện quản trị sản phẩm, bộ sưu tập, dự án.",
    tags: ["React", "JavaScript", "Vite", "Tailwind CSS", "React Router", "Axios", "Framer Motion"],
    metrics: [
      { label: "Tối ưu tìm kiếm", value: "300ms Debounce", desc: "Giảm 70% số lượng request truy vấn dư thừa" },
      { label: "Đồng bộ URL", value: "Query Params", desc: "Lưu trữ trạng thái bộ lọc và phân trang" },
      { label: "Kiến trúc API", value: "Modular Services", desc: "Interceptors chuẩn hóa dữ liệu và xử lý lỗi" },
      { label: "Môi trường", value: "Live Production", desc: "caonguyenxanh.com.vn" },
    ],
    keyFeatures: [
      "Tìm kiếm sản phẩm tối ưu với kỹ thuật Debounce và phân trang mượt mà",
      "Bộ lọc danh mục đồng bộ trực tiếp với tham số URL hỗ trợ SEO và bookmark",
      "Kiến trúc API service phân tách theo module nghiệp vụ với interceptors xử lý lỗi",
      "Giao diện quản trị danh mục sản phẩm, bộ sưu tập và form liên hệ doanh nghiệp",
    ],
    caseStudy: {
      challenge: "Doanh nghiệp in ấn và sản xuất bao bì với hàng trăm danh mục sản phẩm, bộ sưu tập mẫu mã và ngành hàng phục vụ đối tác B2B. Yêu cầu giao diện uy tín, tải danh mục nhanh, hỗ trợ tìm kiếm tức thì và bộ lọc sản phẩm mượt mà dễ gửi liên hệ báo giá.",
      solution: "Xây dựng hệ thống tìm kiếm áp dụng debounce 300ms, đồng bộ bộ lọc danh mục và trang hiện tại vào URL Search Params (thuận tiện cho việc chia sẻ liên kết sản phẩm). Tách biệt các tầng gọi API theo domain nghiệp vụ và chuẩn hóa giao diện form báo giá.",
      result: "Hệ thống vận hành chính thức tại caonguyenxanh.com.vn, giúp doanh nghiệp số hóa danh mục mẫu mã, tăng khả năng tiếp cận khách hàng doanh nghiệp và giảm thời gian tư vấn mẫu sản phẩm.",
    },
    contributions: [
      { title: "Đồng bộ Bộ lọc & Trạng thái vào URL", description: "Ứng dụng useSearchParams để bộ lọc ngành hàng và trang hiển thị phản ánh tức thời trên thanh địa chỉ trình duyệt." },
      { title: "Tìm kiếm Debounced Hiệu quả cao", description: "Giảm thiểu tải cho máy chủ backend bằng cách trì hoãn truy vấn cho đến khi người dùng dừng gõ phím." },
      { title: "Kiến trúc API Service tập trung", description: "Tách lớp API theo từng thực thể (products, categories, collections), xử lý refresh và fallback đồng nhất." },
      { title: "Form Yêu cầu Báo giá B2B", description: "Thiết kế form thu thập thông tin dự án đính kèm mã sản phẩm quan tâm, hỗ trợ xác thực dữ liệu ngay tại client." },
    ],
  },
  {
    id: "odyssey-hagiang",
    title: "Odyssey Hà Giang — Cổng Tour Trải Nghiệm Hà Giang",
    subtitle: "Dự án khách hàng tại DUDI Software",
    category: "Tour & Trải Nghiệm",
    featured: true,
    image: "/images/projects/odyssey-hagiang.png",
    demoUrl: "https://www.odysseyhagiangloop.com",
    company: "DUDI Software",
    period: "04/2026 – 09/2026",
    description: "Website tour du lịch trải nghiệm khám phá Hà Giang Loop. Tối ưu hóa SEO quốc tế, lazy load hình ảnh và custom hooks xử lý metadata.",
    longDescription: "Phát triển giao diện danh sách và chi tiết tour, điểm đến, thư viện ảnh, bài viết và thông tin dịch vụ di chuyển/lưu trú. Tích hợp API xác thực quản trị và quản lý bài viết; chuyển đổi dữ liệu backend sang cấu trúc hiển thị frontend tối ưu. Xây dựng custom hooks quản lý tiêu đề, mô tả và Open Graph/Twitter metadata động cho từng trang cùng xử lý lazy-loading hình ảnh.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion", "Fetch API"],
    metrics: [
      { label: "SEO Metadata", value: "Dynamic Hooks", desc: "Tự động đồng bộ Open Graph & Twitter Cards" },
      { label: "Ổn định bố cục", value: "CLS = 0", desc: "Cố định tỉ lệ khung hình chống nhảy layout" },
      { label: "Tải ảnh tối ưu", value: "Lazy Loading", desc: "Nạp tài nguyên phong cảnh độ phân giải cao" },
      { label: "Môi trường", value: "Live Production", desc: "odysseyhagiangloop.com" },
    ],
    keyFeatures: [
      "Custom hook quản lý SEO metadata động (Title, Meta Description, Open Graph)",
      "Chi tiết lộ trình tour, điểm đến du lịch và thư viện hình ảnh độ phân giải cao",
      "Tích hợp API xác thực phân quyền quản trị nội dung bài viết và dịch vụ",
      "Xử lý trạng thái tải (loading states) và fallback lỗi giao diện chỉn chu",
    ],
    caseStudy: {
      challenge: "Dự án phục vụ khách du lịch quốc tế trải nghiệm cung phượt xe máy Hà Giang Loop. Website cần truyền tải chi tiết hành trình từng ngày, lịch trình tour trực quan, thư viện hình ảnh hùng vĩ và tối ưu SEO quốc tế để hiển thị đẹp khi chia sẻ liên kết.",
      solution: "Viết custom hook tự động quản lý thẻ meta tiêu đề, mô tả và hình ảnh Open Graph động theo từng tour. Thiết kế timeline lộ trình tương tác rõ ràng từng chặng dừng chân và tích hợp cơ chế lazy load hình ảnh phong cảnh độ nét cao.",
      result: "Sản phẩm bàn giao đúng tiến độ, vận hành tại odysseyhagiangloop.com với diện mạo quốc tế hiện đại, hiển thị trực quan và thu hút lượng đặt tour từ khách du lịch nước ngoài.",
    },
    contributions: [
      { title: "Custom Hook Quản lý Dynamic SEO", description: "Viết hook tự động cập nhật document.title và các thẻ Open Graph / Twitter Cards động mà không cần thư viện cồng kềnh." },
      { title: "Timeline Lộ trình Tour Trực quan", description: "Trình bày hành trình phượt từng ngày sinh động với thông tin độ cao, khoảng cách và điểm chụp ảnh nổi bật." },
      { title: "Tối ưu hóa Thư viện Hình ảnh Phong cảnh", description: "Áp dụng kỹ thuật responsive picture và lazy loading cho bộ sưu tập ảnh đèo Mã Pí Lèng, hẻm Tu Sản." },
      { title: "Xử lý Trạng thái & Fallback Giao diện", description: "Xây dựng các skeleton loading và màn hình thông báo thân thiện khi đường truyền mạng của khách quốc tế chập chờn." },
    ],
  },
  {
    id: "mon-qua-nho",
    title: "Món Quà Nhỏ — Nền Tảng Chia Sẻ Đồ Dùng Cộng Đồng",
    subtitle: "Dự án thực tập tại DUDI Software",
    category: "Web App & Realtime",
    featured: true,
    image: "/images/projects/mon-qua-nho.png",
    demoUrl: "https://mon-qua-nho-v4-1.vercel.app",
    company: "DUDI Software",
    period: "01/2026 – 03/2026",
    description: "Nền tảng mạng xã hội chia sẻ đồ dùng cộng đồng. Nhắn tin thời gian thực với Socket.IO, xác thực OTP, quản lý state với TanStack Query và Zustand.",
    longDescription: "Xây dựng giao diện khám phá đồ dùng, đăng bài trao đổi, xem chi tiết, gửi yêu cầu nhận đồ và quản lý hồ sơ cá nhân. Tích hợp luồng xác thực người dùng hoàn chỉnh (đăng nhập, đăng ký, OTP, khôi phục mật khẩu). Ứng dụng TanStack Query cho cache dữ liệu và Zustand cho trạng thái ứng dụng. Lập trình tính năng nhắn tin thời gian thực qua Socket.IO và trang quản trị người dùng, sản phẩm, giao dịch với biểu đồ thống kê.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Ant Design", "TanStack Query", "Zustand", "Socket.IO"],
    metrics: [
      { label: "Thời gian thực", value: "Socket.IO", desc: "Nhắn tin và cập nhật trạng thái trò chuyện 2 chiều" },
      { label: "Quản lý dữ liệu", value: "TanStack Query", desc: "Cache dữ liệu server-state và tối ưu request" },
      { label: "State Ứng dụng", value: "Zustand Store", desc: "Lưu trữ phiên đăng nhập và giỏ đồ nhận quyên góp" },
      { label: "Xác thực bảo mật", value: "OTP Auth Flow", desc: "Quy trình đăng ký, xác thực và phục hồi mật khẩu" },
    ],
    keyFeatures: [
      "Hệ thống nhắn tin trò chuyện thời gian thực kết nối Socket.IO Client",
      "Luồng xác thực tài khoản an toàn với mã OTP và quản trị hồ sơ cá nhân",
      "Quản lý đồng bộ dữ liệu server và cache tối ưu với TanStack Query",
      "Trang quản trị (Admin Portal) thống kê người dùng, danh mục và giao dịch",
    ],
    caseStudy: {
      challenge: "Nền tảng mạng xã hội chia sẻ đồ dùng cũ vì cộng đồng với tính tương tác cao: người tặng đăng đồ, người cần gửi yêu cầu, hai bên trò chuyện thời gian thực để hẹn gặp và ban quản trị duyệt bài để tránh thông tin rác.",
      solution: "Ứng dụng Next.js kết hợp Zustand cho local state và TanStack Query để quản lý server state cùng cache thông minh. Tích hợp Socket.IO Client phục vụ tính năng nhắn tin tức thì, xây dựng luồng xác thực mã OTP an toàn và bảng quản trị Ant Design trực quan.",
      result: "Ứng dụng hoàn thiện môi trường thử nghiệm với đầy đủ luồng người dùng và trang Admin Dashboard thống kê biểu đồ trực quan, được đánh giá xuất sắc trong kỳ thực tập tại DUDI Software.",
    },
    contributions: [
      { title: "Nhắn tin Thời gian thực với Socket.IO", description: "Lập trình hệ thống chat 2 chiều giữa người tặng và người nhận, tự động cuộn đến tin nhắn mới và báo trạng thái online." },
      { title: "Quản lý State với TanStack Query & Zustand", description: "Tách bạch rõ ràng giữa trạng thái giao diện tạm thời (Zustand) và dữ liệu bất đồng bộ từ máy chủ có bộ nhớ đệm (Query Cache)." },
      { title: "Toàn bộ Quy trình Xác thực Tài khoản & OTP", description: "Xây dựng các bước đăng ký, đăng nhập, nhập mã xác thực OTP qua email và xử lý phân quyền bảo vệ tuyến đường (route guard)." },
      { title: "Bảng điều khiển Quản trị (Admin Dashboard)", description: "Tích hợp Ant Design xây dựng bảng quản lý người dùng, duyệt sản phẩm đồ dùng và đồ thị thống kê giao dịch cộng đồng." },
    ],
  },
];
