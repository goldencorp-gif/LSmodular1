
import { Language } from './types';

export const TRANSLATIONS: Record<Language, any> = {
  [Language.EN]: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      howItWorks: 'How it Works',
      faq: 'FAQ',
      contact: 'Contact',
      hub: 'Ads Hub'
    },
    footer: {
      tagline: 'Design-Led Modular Housing. Delivered with Certainty.',
      mission: 'We specialise in delivering modular housing from client-designed plans, providing a streamlined pathway from design to delivery with greater clarity and control.',
      col1: 'Gadgets',
      col2: 'Services',
      col3: 'Contact',
      col4: 'Partners & Legal',
      gadgets: {
        calculator: 'Cost Calculator',
        measurer: 'Site Measurer',
        design: 'Design Studio'
      },
      serviceList: [
        'Modular Housing Delivery',
        'Design Feasibility',
        'Modular Optimisation',
        'Pre-Construction Coordination'
      ],
      contactDetails: {
        phone: '0432 866 168',
        email: 'lesector.vic@gmail.com',
        area: 'Australia (Victoria)',
        hours: 'Monday – Friday, 9:00am – 5:00pm'
      },
      partners: [
        { name: '1st Mortgage Group', role: 'Mortgage Broker', url: 'https://www.1stmg.com.au' },
        { name: '8 Miles Estate', role: 'Real Estate Agency', url: 'https://www.8milesestate.com.au' },
        { name: 'Core-Base Construction', role: 'Footing & Groundworks', url: 'https://www.corebasecons.com.au' }
      ],
      legal: ['Privacy Policy', 'Terms & Conditions'],
      copyright: '© Le Sector 2024. All rights reserved.',
      disclaimer: 'Le Sector provides modular housing delivery and coordination services. Design services are provided by external architects and designers.',
      cta: {
        title: 'Facing challenges with Land or Finance?',
        sub: 'Speak with our strategic partners to solve your pre-construction hurdles.',
        btn: 'Connect with Partners'
      }
    },
    home: {
      heroTitle: 'Design-Led Modular Housing. Delivered with Certainty.',
      heroSub: 'We take client-designed plans and deliver them through a streamlined modular construction model—reducing risk, time, and complexity.',
      ctaStart: 'Start Your Modular Journey',
      ctaSpeak: 'Speak With Our Team',
      whoTitle: 'Who We Are',
      whoMain: 'Le Sector specialises in delivering modular housing from custom-designed plans.',
      whoSub1: 'We work with homeowners, architects, designers, and developers who already have a vision—and need a delivery partner who understands both design intent and construction reality.',
      whoSub2: 'Our role is to bridge the gap between concept and completion by coordinating design optimisation, modular manufacturing, and site readiness into one integrated pathway.',
      salesPoints: {
        warranty: { title: "Regulated Warranty", desc: "Full standard building warranty protection (7 years), exactly like regulated traditional construction." },
        delays: { title: "No Site Delays", desc: "Never have labour stages on site. Factory manufacturing eliminates rain delays and trade gaps." },
        fixedPrice: { title: "Fixed Price Contract", desc: "Stay Fixed Price. We lock in the cost before manufacturing begins, providing total financial certainty." },
        costRises: { title: "No Cost Rises", desc: "Never face material cost raises. We procure materials upfront to protect you from inflation." }
      }
    },
    ecosystem: {
      tag: 'Integrated Ecosystem',
      title: 'Le Sector + CoreBase',
      desc: 'Le Sector works closely with CoreBase Construction, specialists in foundations and groundworks, ensuring site preparation and structural integration are aligned from day one.',
      quote: "This collaboration removes the common disconnect between modular manufacturing and on-site works—resulting in smoother delivery and fewer surprises.",
      leSectorSubtitle: 'Design & Modular',
      coreBaseSubtitle: 'Groundworks'
    },
    process: {
      tag: 'Our Process',
      title: 'Process-Led Confidence',
      steps: [
        { num: '01', title: 'Design Review & Feasibility', desc: 'We assess plans for modular suitability and compliance—identifying efficiencies without compromising design.' },
        { num: '02', title: 'Modular Optimisation', desc: 'Plans are refined for off-site construction, improving speed, cost certainty, and quality control.' },
        { num: '03', title: 'Pre-Construction Coordination', desc: 'We align consultants, manufacturing, and site requirements to eliminate disconnects.' },
        { num: '04', title: 'Modular Delivery', desc: 'Modules are produced off-site and delivered with precision, supported by foundation groundworks.' }
      ],
      finalCta: 'Ready to explore modular delivery?',
      bookBtn: 'Book a Consultation'
    },
    about: {
      tag: 'Our Approach',
      title: 'Architecture First. Delivery Always.',
      sub1: 'Le Sector was established to support a growing demand for design-driven modular housing—where speed and certainty are required without sacrificing architectural quality.',
      sub2: 'Rather than offering pre-designed kits, we specialise in delivering client-designed plans through a modular construction methodology.',
      roleTitle: 'Our Role',
      roleSub: 'We are not a volume builder. We are a delivery partner.',
      roles: [
        { title: 'Translation', desc: 'Translating complex architectural design into modular execution.' },
        { title: 'Management', desc: 'Managing interfaces between consultants, manufacturing, and site works.' },
        { title: 'Clarity', desc: 'Providing clarity, structure, and certainty throughout the process.' }
      ],
      integrity: 'Design Integrity'
    },
    services: {
      tag: 'Our Expertise',
      title: 'Design-Led Modular Delivery',
      desc: 'Complete oversight of the modular lifecycle from the first design review to the final module installation.',
      list: [
        'Design feasibility assessment',
        'Modular optimisation & coordination',
        'Consultant and engineering alignment',
        'Pre-construction planning',
        'Modular manufacturing coordination',
        'Delivery and installation oversight'
      ],
      groundTitle: 'Foundation & Site Readiness',
      groundTag: 'Delivered via CoreBase',
      groundList: [
        { title: 'Foundations', desc: 'Expertly engineered foundations optimized for module weight and site conditions.' },
        { title: 'Groundworks', desc: 'Complete civil works, drainage, and utility trenching.' },
        { title: 'Structural Preparation', desc: 'Precision set-out to ensure module-to-ground interface is millimeter-perfect.' }
      ]
    },
    faq: {
      tag: 'Trust & Clarity',
      title: 'Frequently Asked Questions',
      items: [
        { q: 'Do you provide designs?', a: 'No. We work with client-designed plans or external architects. Our value is in the execution and modular delivery of your specific vision.' },
        { q: 'Is modular cheaper?', a: 'Modular is about certainty and efficiency, not shortcuts. It provides predictable costs and significantly reduced construction timelines, but quality remains premium.' },
        { q: 'Can designs be customised?', a: 'Yes—our process is built specifically to support bespoke architectural outcomes. We don\'t force you into a "kit" home.' },
        { q: 'Who manages foundations?', a: 'Foundations are delivered in coordination with CoreBase Construction to ensure a seamless interface between ground and module.' }
      ]
    },
    contact: {
      tag: "Let's Discuss",
      title: 'Your Project Start',
      desc: 'Serving Melbourne and the surrounding regions of Victoria with design-led modular delivery.',
      labels: {
        phone: 'Direct Line',
        email: 'Email',
        area: 'Service Area',
        formTitle: 'Consultation Request',
        name: 'Full Name',
        brief: 'Project Brief',
        placeholder: 'Briefly describe your vision...',
        submit: 'Book a Consultation'
      }
    }
  },
  [Language.ZH]: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务项目',
      howItWorks: '运作流程',
      faq: '常见问题',
      contact: '联系我们',
      hub: '广告中心'
    },
    footer: {
      tagline: '设计驱动的模块化住宅。交付确定性。',
      mission: '我们专注于根据客户设计的图纸交付模块化住宅，提供从设计到交付的简化途径，更加清晰和可控。',
      col1: '小工具',
      col2: '服务',
      col3: '联系方式',
      col4: '合作伙伴与法律',
      gadgets: {
        calculator: '成本计算器',
        measurer: '现场测量员',
        design: '设计工作室'
      },
      serviceList: [
        '模块化住宅交付',
        '设计可行性',
        '模块化优化',
        '施工前协调'
      ],
      contactDetails: {
        phone: '0432 866 168',
        email: 'lesector.vic@gmail.com',
        area: '澳大利亚 (维多利亚)',
        hours: '周一至周五, 上午9:00 – 下午5:00'
      },
      partners: [
        { name: '1st Mortgage Group', role: '抵押贷款经纪人', url: 'https://www.1stmg.com.au' },
        { name: '8 Miles Estate', role: '房地产中介', url: 'https://www.8milesestate.com.au' },
        { name: 'Core-Base Construction', role: '地基与土方工程', url: 'https://www.corebasecons.com.au' }
      ],
      legal: ['隐私政策', '条款与条件'],
      copyright: '© Le Sector 2024. 版权所有。',
      disclaimer: 'Le Sector 提供模块化住房交付和协调服务。设计服务由外部建筑师和设计师提供。',
      cta: {
        title: '面临土地或财务挑战？',
        sub: '与我们的战略合作伙伴沟通，解决您的施工前难题。',
        btn: '联系合作伙伴'
      }
    },
    home: {
      heroTitle: '设计驱动的模块化住宅。交付确定性。',
      heroSub: '我们接收客户设计的蓝图，并通过精简的模块化建筑模型进行交付——降低风险、时间和复杂性。',
      ctaStart: '开启您的模块化之旅',
      ctaSpeak: '与我们的团队沟通',
      whoTitle: '我们是谁',
      whoMain: 'Le Sector 专注于根据客户定制的设计方案交付模块化住宅。',
      whoSub1: '我们与已经拥有愿景的房主、建筑师、设计师和开发商合作——他们需要一个既了解设计意图又了解建筑现实的交付合作伙伴。',
      whoSub2: '我们的职责是通过协调设计优化、模块化制造和现场准备，将概念与完成之间的鸿沟转化为一条综合交付路径。',
      salesPoints: {
        warranty: { title: "受监管的保修", desc: "完全标准的建筑保修保护（7年），就像受监管的传统建筑一样。" },
        delays: { title: "无现场延误", desc: "现场绝无劳工阶段。工厂制造消除了因雨天延误和工种衔接的问题。" },
        fixedPrice: { title: "固定价格合同", desc: "保持固定价格。我们在制造开始前锁定成本，提供完全的财务确定性。" },
        costRises: { title: "无成本上涨", desc: "绝无材料成本上涨。我们预先采购材料，保护您免受通货膨胀影响。" }
      }
    },
    ecosystem: {
      tag: '集成生态系统',
      title: 'Le Sector + CoreBase',
      desc: 'Le Sector 与 CoreBase Construction（地基和土方工程专家）紧密合作，确保施工准备与结构集成从第一天起就保持一致。',
      quote: "这种合作消除了模块化制造与现场施工之间常见的断层——从而实现更顺畅的交付并减少意外。",
      leSectorSubtitle: '设计与模块化',
      coreBaseSubtitle: '地基工程'
    },
    process: {
      tag: '我们的流程',
      title: '流程驱动的信心',
      steps: [
        { num: '01', title: '设计审查与可行性', desc: '我们评估图纸的模块化适用性和合规性——在不影响设计的前提下识别效率。' },
        { num: '02', title: '模块化优化', desc: '为离岸建造精炼方案，提高速度、成本确定性和质量控制。' },
        { num: '03', title: '施工前协调', desc: '我们协调顾问、制造和现场要求，消除断层。' },
        { num: '04', title: '模块化交付', desc: '模块在工厂生产并精准交付，由地基工程提供支持。' }
      ],
      finalCta: '准备好探索模块化交付了吗？',
      bookBtn: '预约咨询'
    },
    about: {
      tag: '我们的方法',
      title: '建筑至上。交付始终。',
      sub1: 'Le Sector 的成立是为了满足对设计驱动型模块化住宅日益增长的需求——在不牺牲建筑质量的前提下，满足对速度和确定性的要求。',
      sub2: '我们不提供预设计的套件，而是专门通过模块化建筑方法交付客户设计的图纸。',
      roleTitle: '我们的角色',
      roleSub: '我们不是量产建筑商。我们是交付合作伙伴。',
      roles: [
        { title: '转化', desc: '将复杂的建筑设计转化为模块化执行。' },
        { title: '管理', desc: '管理顾问、制造和现场施工之间的衔接。' },
        { title: '清晰', desc: '在整个过程中提供清晰、结构化和确定性的指引。' }
      ],
      integrity: '设计完整性'
    },
    services: {
      tag: '我们的专业知识',
      title: '设计驱动的模块化交付',
      desc: '从第一次设计审查到最终模块安装，对模块化全生命周期的完整监管。',
      list: [
        '设计可行性评估',
        '模块化优化与协调',
        '顾问与工程对齐',
        '施工前规划',
        '模块化制造协调',
        '交付与安装监管'
      ],
      groundTitle: '地基与现场准备',
      groundTag: '由 CoreBase 交付',
      groundList: [
        { title: '地基', desc: '根据模块重量和现场条件优化的专业工程地基。' },
        { title: '土方工程', desc: '完整的土建工程、排水和公用设施开槽。' },
        { title: '结构准备', desc: '精确放样，确保模块与地面的接口毫米级完美。' }
      ]
    },
    faq: {
      tag: '信任与清晰',
      title: '常见问题',
      items: [
        { q: '你们提供设计吗？', a: '不提供。我们根据客户设计的图纸或外部建筑师的方案工作。我们的价值在于执行和交付您的特定愿景。' },
        { q: '模块化更便宜吗？', a: '模块化关乎确定性和效率，而非偷工减料。它提供可预测的成本和显著缩短的工期，但质量保持高端。' },
        { q: '设计可以定制吗？', a: '可以——我们的流程专门为支持定制化建筑成果而构建。我们不会强迫您选择“套娃式”住宅。' },
        { q: '谁负责地基？', a: '地基由 CoreBase Construction 协调交付，以确保地面与模块之间的无缝衔接。' }
      ]
    },
    contact: {
      tag: "让我们开始讨论",
      title: '您的项目启动',
      desc: '在墨尔本及维多利亚周边地区提供设计驱动的模块化交付服务。',
      labels: {
        phone: '直线电话',
        email: '电子邮件',
        area: '服务区域',
        formTitle: '咨询申请',
        name: '全名',
        brief: '项目简介',
        placeholder: '简要描述您的愿景...',
        submit: '预约咨询'
      }
    }
  },
  [Language.VI]: {
    nav: {
      home: 'Trang chủ',
      about: 'Về chúng tôi',
      services: 'Dịch vụ',
      howItWorks: 'Quy trình',
      faq: 'Hỏi đáp',
      contact: 'Liên hệ',
      hub: 'Trung tâm quảng cáo'
    },
    footer: {
      tagline: 'Nhà ở lắp ghép theo thiết kế. Giao hàng với sự chắc chắn.',
      mission: 'Chúng tôi chuyên cung cấp nhà ở lắp ghép từ các bản thiết kế của khách hàng, mang lại lộ trình hợp lý từ thiết kế đến giao hàng với sự rõ ràng và kiểm soát tốt hơn.',
      col1: 'Tiện ích',
      col2: 'Dịch vụ',
      col3: 'Liên hệ',
      col4: 'Đối tác & Pháp lý',
      gadgets: {
        calculator: 'Tính toán chi phí',
        measurer: 'Đo lường hiện trường',
        design: 'Studio Thiết kế'
      },
      serviceList: [
        'Giao nhận nhà lắp ghép',
        'Khả thi thiết kế',
        'Tối ưu hóa lắp ghép',
        'Điều phối tiền xây dựng'
      ],
      contactDetails: {
        phone: '0432 866 168',
        email: 'lesector.vic@gmail.com',
        area: 'Australia (Victoria)',
        hours: 'Thứ Hai – Thứ Sáu, 9:00 – 17:00'
      },
      partners: [
        { name: '1st Mortgage Group', role: 'Môi giới thế chấp', url: 'https://www.1stmg.com.au' },
        { name: '8 Miles Estate', role: 'Đại lý bất động sản', url: 'https://www.8milesestate.com.au' },
        { name: 'Core-Base Construction', role: 'Móng & Công trình đất', url: 'https://www.corebasecons.com.au' }
      ],
      legal: ['Chính sách bảo mật', 'Điều khoản & Điều kiện'],
      copyright: '© Le Sector 2024. Đã đăng ký bản quyền.',
      disclaimer: 'Le Sector cung cấp dịch vụ giao hàng và điều phối nhà ở lắp ghép. Dịch vụ thiết kế được cung cấp bởi các kiến trúc sư và nhà thiết kế bên ngoài.',
      cta: {
        title: 'Gặp khó khăn về Đất đai hoặc Tài chính?',
        sub: 'Trao đổi với đối tác chiến lược của chúng tôi để giải quyết các thách thức trước khi xây dựng.',
        btn: 'Kết nối với Đối tác'
      }
    },
    home: {
      heroTitle: 'Nhà ở lắp ghép theo thiết kế. Giao hàng với sự chắc chắn.',
      heroSub: 'Chúng tôi tiếp nhận các bản thiết kế của khách hàng và triển khai qua mô hình xây dựng lắp ghép tinh gọn—giảm thiểu rủi ro, thời gian và sự phức tạp.',
      ctaStart: 'Bắt đầu hành trình',
      ctaSpeak: 'Trao đổi với chúng tôi',
      whoTitle: 'Chúng tôi là ai',
      whoMain: 'Le Sector chuyên cung cấp nhà ở lắp ghép từ các bản thiết kế tùy chỉnh.',
      whoSub1: 'Chúng tôi làm việc với chủ nhà, kiến trúc sư và nhà phát triển—những người cần một đối tác hiểu cả ý đồ thiết kế và thực tế xây dựng.',
      whoSub2: 'Vai trò của chúng tôi là thu hép khoảng cách giữa ý tưởng và hoàn thiện.',
      salesPoints: {
        warranty: { title: "Bảo hành quy định", desc: "Bảo hành xây dựng tiêu chuẩn đầy đủ (7 năm), giống hệt như xây dựng truyền thống." },
        delays: { title: "Không trễ tiến độ", desc: "Không có giai đoạn nhân công tại chỗ. Sản xuất nhà máy loại bỏ chậm trễ do thời tiết." },
        fixedPrice: { title: "Hợp đồng giá cố định", desc: "Giữ giá cố định. Chúng tôi chốt chi phí trước khi sản xuất để đảm bảo tài chính." },
        costRises: { title: "Không tăng chi phí", desc: "Không tăng giá vật liệu. Chúng tôi mua vật liệu trước để tránh lạm phát." }
      }
    },
    ecosystem: {
      tag: 'Hệ sinh thái tích hợp',
      title: 'Le Sector + CoreBase',
      desc: 'Le Sector hợp tác chặt chẽ với CoreBase Construction, chuyên gia về móng và hạ tầng, đảm bảo chuẩn bị mặt bằng đồng bộ từ ngày đầu tiên.',
      quote: "Sự hợp tác này loại bỏ sự mất kết nối giữa sản xuất và lắp đặt tại hiện trường.",
      leSectorSubtitle: 'Thiết kế & Lắp ghép',
      coreBaseSubtitle: 'Thi công nền móng'
    },
    process: {
      tag: 'Quy trình của chúng tôi',
      title: 'Sự tự tin từ quy trình',
      steps: [
        { num: '01', title: 'Đánh giá thiết kế', desc: 'Đánh giá tính khả thi và tuân thủ của bản vẽ cho phương pháp lắp ghép.' },
        { num: '02', title: 'Tối ưu hóa lắp ghép', desc: 'Tinh chỉnh bản vẽ để sản xuất tại nhà máy, tăng tốc độ và kiểm soát chất lượng.' },
        { num: '03', title: 'Phối hợp tiền xây dựng', desc: 'Kết nối các bên tư vấn, sản xuất và hiện trường.' },
        { num: '04', title: 'Giao hàng và Lắp đặt', desc: 'Các module được sản xuất và lắp đặt chính xác trên nền móng có sẵn.' }
      ],
      finalCta: 'Sẵn sàng khám phá xây dựng lắp ghép?',
      bookBtn: 'Đặt lịch tư vấn'
    },
    about: {
      tag: 'Cách tiếp cận',
      title: 'Kiến trúc đi đầu. Giao hàng luôn luôn.',
      sub1: 'Le Sector được thành lập để đáp ứng nhu cầu ngày càng tăng về nhà ở lắp ghép chất lượng cao.',
      sub2: 'Chúng tôi không bán các mẫu nhà có sẵn, chúng tôi thi công theo bản vẽ của khách hàng.',
      roleTitle: 'Vai trò của chúng tôi',
      roleSub: 'Chúng tôi là đối tác triển khai dự án của bạn.',
      roles: [
        { title: 'Chuyển đổi', desc: 'Chuyển đổi thiết kế kiến trúc sang thực thi lắp ghép.' },
        { title: 'Quản lý', desc: 'Quản lý giao diện giữa sản xuất và hiện trường.' },
        { title: 'Minh bạch', desc: 'Cung cấp cấu trúc và sự chắc chắn trong suốt quy trình.' }
      ],
      integrity: 'Tính nguyên bản thiết kế'
    },
    services: {
      tag: 'Chuyên môn',
      title: 'Giao hàng lắp ghép theo thiết kế',
      desc: 'Giám sát toàn bộ vòng đời lắp ghép từ đánh giá đầu tiên đến lắp đặt cuối cùng.',
      list: [
        'Đánh giá tính khả thi',
        'Tối ưu hóa và phối hợp',
        'Đồng bộ tư vấn kỹ thuật',
        'Lập kế hoạch tiền xây dựng',
        'Phối hợp sản xuất module',
        'Giám sát giao hàng và lắp đặt'
      ],
      groundTitle: 'Nền móng và Hiện trường',
      groundTag: 'Cung cấp bởi CoreBase',
      groundList: [
        { title: 'Móng nhà', desc: 'Nền móng được kỹ thuật hóa tối ưu cho trọng lượng module.' },
        { title: 'Hạ tầng', desc: 'Hoàn thiện hệ thống thoát nước và tiện ích.' },
        { title: 'Chuẩn bị cấu trúc', desc: 'Đảm bảo giao diện móng-module chính xác từng milimet.' }
      ]
    },
    faq: {
      tag: 'Tin tưởng và Minh bạch',
      title: 'Câu hỏi thường gặp',
      items: [
        { q: 'Các bạn có cung cấp thiết kế không?', a: 'Không. Chúng tôi làm việc theo bản vẽ của khách hàng hoặc kiến trúc sư bên ngoài.' },
        { q: 'Xây nhà lắp ghép có rẻ hơn không?', a: 'Nó mang lại sự chắc chắn về chi phí và rút ngắn thời gian, nhưng chất lượng vẫn ở mức cao cấp.' },
        { q: 'Thiết kế có thể tùy chỉnh không?', a: 'Có—quy trình của chúng tôi hỗ trợ các kết quả kiến trúc bespoke.' },
        { q: 'Ai quản lý phần móng?', a: 'Phần móng được thực hiện bởi CoreBase Construction để đảm bảo khớp nối hoàn hảo.' }
      ]
    },
    contact: {
      tag: "Trao đổi",
      title: 'Khởi đầu dự án',
      desc: 'Phục vụ Melbourne và các vùng lân cận Victoria.',
      labels: {
        phone: 'Điện thoại',
        email: 'Email',
        area: 'Khu vực phục vụ',
        formTitle: 'Yêu cầu tư vấn',
        name: 'Họ và tên',
        brief: 'Sơ lược dự án',
        placeholder: 'Mô tả ngắn gọn tầm nhìn của bạn...',
        submit: 'Đặt lịch tư vấn'
      }
    }
  },
  [Language.HI]: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      services: 'सेवाएं',
      howItWorks: 'यह कैसे काम करता है',
      faq: 'अक्सर पूछे जाने वाले सवाल',
      contact: 'संपर्क करें',
      hub: 'विज्ञापन हब'
    },
    footer: {
      tagline: 'डिज़ाइन-आधारित मॉड्यूलर आवास। निश्चितता के साथ वितरण।',
      mission: 'हम क्लाइंट-डिज़ाइन की गई योजनाओं से मॉड्यूलर आवास देने में विशेषज्ञ हैं, जो डिज़ाइन से डिलीवरी तक अधिक स्पष्टता और नियंत्रण के साथ एक सुव्यवस्थित मार्ग प्रदान करते हैं।',
      col1: 'गैजेट्स',
      col2: 'सेवाएं',
      col3: 'संपर्क',
      col4: 'भागीदार और कानूनी',
      gadgets: {
        calculator: 'लागत कैलकुलेटर',
        measurer: 'साइट मापक',
        design: 'डिज़ाइन स्टूडियो'
      },
      serviceList: [
        'मॉड्यूलर आवास डिलीवरी',
        'डिज़ाइन व्यवहार्यता',
        'मॉड्यूलर अनुकूलन',
        'निर्माण पूर्व समन्वय'
      ],
      contactDetails: {
        phone: '0432 866 168',
        email: 'lesector.vic@gmail.com',
        area: 'ऑस्ट्रेलिया (विक्टोरिया)',
        hours: 'सोमवार – शुक्रवार, 9:00am – 5:00pm'
      },
      partners: [
        { name: '1st Mortgage Group', role: 'बंधक दलाल', url: 'https://www.1stmg.com.au' },
        { name: '8 Miles Estate', role: 'रियल एस्टेट एजेंसी', url: 'https://www.8milesestate.com.au' },
        { name: 'Core-Base Construction', role: 'नींव और ज़मीनी काम', url: 'https://www.corebasecons.com.au' }
      ],
      legal: ['गोपनीयता नीति', 'नियम और शर्तें'],
      copyright: '© Le Sector 2024. सर्वाधिकार सुरक्षित।',
      disclaimer: 'Le Sector मॉड्यूलर आवास वितरण और समन्वय सेवाएं प्रदान करता है। डिज़ाइन सेवाएं बाहरी वास्तुकारों और डिजाइनरों द्वारा प्रदान की जाती हैं।',
      cta: {
        title: 'भूमि या वित्त की चुनौतियों का सामना कर रहे हैं?',
        sub: 'अपनी निर्माण-पूर्व बाधाओं को हल करने के लिए हमारे रणनीतिक भागीदारों से बात करें।',
        btn: 'भागीदारों से जुड़ें'
      }
    },
    home: {
      heroTitle: 'डिज़ाइन-आधारित मॉड्यूलर आवास। निश्चितता के साथ वितरण।',
      heroSub: 'हम ग्राहक द्वारा डिज़ाइन की गई योजनाओं को लेते हैं और उन्हें एक सुव्यवस्थित मॉड्यूलर निर्माण मॉडल के माध्यम से वितरित करते हैं - जोखिम, समय और जटिलता को कम करते हुए।',
      ctaStart: 'अपनी मॉड्यूलर यात्रा शुरू करें',
      ctaSpeak: 'हमारी टीम से बात करें',
      whoTitle: 'हम कौन हैं',
      whoMain: 'Le Sector कस्टम-डिज़ाइन की गई योजनाओं से मॉड्यूलर आवास वितरित करने में माहिर है।',
      whoSub1: 'हम उन घर मालिकों, वास्तुकारों, डिजाइनरों और डेवलपर्स के साथ काम करते हैं जिनके पास पहले से ही एक विजन है—और जिन्हें एक ऐसे वितरण भागीदार की आवश्यकता है जो डिज़ाइन के उद्देश्य और निर्माण की वास्तविकता दोनों को समझता हो।',
      whoSub2: 'हमारी भूमिका डिजाइन अनुकूलन, मॉड्यूलर विनिर्माण और साइट की तैयारी को एक एकीकृत मार्ग में समन्वित करके अवधारणा और पूर्णता के बीच की खाई को पाटने की है।',
      salesPoints: {
        warranty: { title: "विनियमित वारंटी", desc: "पूर्ण मानक भवन वारंटी सुरक्षा (7 वर्ष), बिल्कुल पारंपरिक निर्माण की तरह।" },
        delays: { title: "साइट पर कोई देरी नहीं", desc: "साइट पर कभी भी श्रम चरण नहीं होते। फैक्टरी विनिर्माण बारिश की देरी को समाप्त करता है।" },
        fixedPrice: { title: "निश्चित मूल्य अनुबंध", desc: "निश्चित मूल्य पर रहें। हम विनिर्माण शुरू होने से पहले लागत को लॉक करते हैं।" },
        costRises: { title: "कोई लागत वृद्धि नहीं", desc: "कभी भी सामग्री लागत वृद्धि का सामना न करें। हम पहले ही सामग्री खरीद लेते हैं।" }
      }
    },
    ecosystem: {
      tag: 'एकीकृत पारिस्थितिकी तंत्र',
      title: 'Le Sector + CoreBase',
      desc: 'Le Sector, CoreBase Construction के साथ मिलकर काम करता है, जो नींव और ज़मीनी काम के विशेषज्ञ हैं।',
      quote: "यह सहयोग विनिर्माण और साइट पर होने वाले काम के बीच के अंतर को समाप्त करता है—जिसके परिणामस्वरूप बेहतर डिलीवरी होती है।",
      leSectorSubtitle: 'डिज़ाइन और मॉड्यूलर',
      coreBaseSubtitle: 'ज़मीनी काम'
    },
    process: {
      tag: 'हमारी प्रक्रिया',
      title: 'प्रक्रिया-आधारित आत्मविश्वास',
      steps: [
        { num: '01', title: 'डिज़ाइन समीक्षा और व्यवहार्यता', desc: 'हम मॉड्यूलर उपयुक्तता और अनुपालन के लिए योजनाओं का आकलन करते हैं।' },
        { num: '02', title: 'मॉड्यूलर अनुकूलन', desc: 'तेज़ी और लागत निश्चितता के लिए योजनाओं को परिष्कृत किया जाता है।' },
        { num: '03', title: 'निर्माण पूर्व समन्वय', desc: 'हम विनिर्माण और साइट की आवश्यकताओं को संरेखित करते हैं।' },
        { num: '04', title: 'मॉड्यूलर डिलीवरी', desc: 'मॉड्यूल्स को साइट के बाहर बनाया जाता है और सटीकता के साथ डिलीवर किया जाता है।' }
      ],
      finalCta: 'क्या आप मॉड्यूलर डिलीवरी के लिए तैयार हैं?',
      bookBtn: 'परामर्श बुक करें'
    },
    about: {
      tag: 'हमारा दृष्टिकोण',
      title: 'आर्किटेक्चर पहले। डिलीवरी हमेशा।',
      roleTitle: 'हमारी भूमिका',
      roleSub: 'हम एक डिलीवरी पार्टनर हैं।',
      roles: [
        { title: 'अनुवाद', desc: 'जटिल आर्किटेक्चरल डिज़ाइन को मॉड्यूलर निष्पादन में बदलना।' },
        { title: 'प्रबंधन', desc: 'विनिर्माण और साइट के बीच इंटरफेस का प्रबंधन करना।' },
        { title: 'स्पष्टता', desc: 'पूरी प्रक्रिया के दौरान संरचना और निश्चितता प्रदान करना।' }
      ],
      integrity: 'डिज़ाइन अखंडता'
    },
    services: {
      tag: 'हमारी विशेषज्ञता',
      title: 'डिज़ाइन-आधारित मॉड्यूलर डिलीवरी',
      desc: 'पहले डिज़ाइन समीक्षा से अंतिम इंस्टॉलेशन तक पूरी निगरानी।',
      list: [
        'डिज़ाइन व्यवहार्यता मूल्यांकन',
        'मॉड्यूलर अनुकूलन और समन्वय',
        'इंजीनियरिंग संरेखण',
        'निर्माण पूर्व योजना',
        'विनिर्माण समन्वय',
        'डिलीवरी और इंस्टॉलेशन निगरानी'
      ],
      groundTitle: 'नींव और साइट की तैयारी',
      groundTag: 'CoreBase के माध्यम से',
      groundList: [
        { title: 'नींव', desc: 'मॉड्यूल के वजन के लिए अनुकूलित पेशेवर नींव।' },
        { title: 'ज़मीनी काम', desc: 'पूर्ण नागरिक कार्य, जल निकासी और उपयोगिता ट्रेंचिंग।' },
        { title: 'संरचनात्मक तैयारी', desc: 'सटीक सेट-आउट यह सुनिश्चित करने के लिए कि मॉड्यूल सही ढंग से फिट हो।' }
      ]
    },
    faq: {
      tag: 'विश्वास और स्पष्टता',
      title: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        { q: 'क्या आप डिज़ाइन प्रदान करते हैं?', a: 'नहीं। हम ग्राहक की योजनाओं या बाहरी वास्तुकारों के साथ काम करते हैं।' },
        { q: 'क्या मॉड्यूलर सस्ता है?', a: 'यह समय और लागत की निश्चितता के बारे में है, लेकिन गुणवत्ता प्रीमियम रहती है।' },
        { q: 'क्या डिज़ाइन को अनुकूलित किया जा सकता है?', a: 'हाँ—हमारी प्रक्रिया कस्टम परिणामों का समर्थन करने के लिए बनाई गई है।' },
        { q: 'नींव का प्रबंधन कौन करता है?', a: 'नींव का काम CoreBase Construction के साथ मिलकर किया जाता है।' }
      ]
    },
    contact: {
      tag: "चर्चा करें",
      title: 'आपके प्रोजेक्ट की शुरुआत',
      desc: 'मेलबर्न और विक्टोरिया के क्षेत्रों में सेवाएं।',
      labels: {
        phone: 'डायरेक्ट लाइन',
        email: 'ईमेल',
        area: 'सेवा क्षेत्र',
        formTitle: 'परामर्श अनुरोध',
        name: 'पूरा नाम',
        brief: 'प्रोजेक्ट संक्षिप्त',
        placeholder: 'अपने विजन का वर्णन करें...',
        submit: 'परामर्श बुक करें'
      }
    }
  }
};
