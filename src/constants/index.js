import {
  mobile,
  backend,
  creator,
  web,
  // my exports
  // learning journey
  freeCodeCamp,
  codepath,
  harvard,
  nathacks,
  udemy,
  upenn,
  skyit,
  develop_for_good,

  // projects
  davidsblog,
  bookshelfChronicles,
  studybot,
  williamPortfolio,
  physmatch,
  aifluently,
  cleverkiddos,

  // socials
  github_social,
  youtube,
  linkedin,
} from '../assets';

export const navLinks = [];

const services = [
  {
    title: '全栈Web开发工程师',
    icon: web,
    description: '美观的动态网站开发',
  },
  {
    title: '软件工程师',
    icon: mobile,
    description: '创新代码创造者',
  },
  {
    title: '前端技术专家',
    icon: backend,
    description: '用户体验优化专家',
  },
  {
    title: '持续学习者',
    icon: creator,
    description: '永恒的知识探索者',
  },
];

const experiences = [
  {
    title: 'Web前端开发工程师 / 开发技术负责人',
    company_name: '浙江刘小白智能有限公司 / 杭州星物种机器人有限公司',
    icon: mobile, // 您可以替换为公司logo
    iconBg: '#383E56',
    date: '2021.03 ~ 至今',
    points: [
      '作为软件平台开发负责人，全面负责机器人管理与控制平台的架构设计与技术实现，主导软件开发全流程',
      '负责系统总体设计、数据库设计及通信协议（MQTT）设计，确保系统在数据交互与实时控制方面的高稳定性与可扩展性',
      '主导Web前端开发工作，负责技术选型、框架升级与性能优化，持续提升平台的开发效率与可维护性',
      '负责微信小程序、支付宝小程序、Web管理后台及数据可视化大屏的开发与维护，为客户提供优秀的交互体验',
      '与后端及嵌入式团队协作，制定接口标准与数据交互规范，推动机器人业务系统快速落地',
      '跨部门协作，与市场和产品团队紧密配合，参与需求评估、技术方案评审与项目推进，确保项目按期高质量交付'
    ],
  },
  {
    title: 'Web前端开发工程师',
    company_name: '浙江孟想网络科技有限公司',
    icon: udemy,
    iconBg: '#E6DEDD',
    date: '2020.11 ~ 2021.02',
    points: [
      '负责孟想教育Uniapp混合开发项目的更新迭代与优化，提升系统稳定性与用户体验',
      '负责孟想教育图书商城的开发与功能升级，推动平台商业化进程',
      '支持《孟建平系列丛书》相关业务需求的开发和实现，为项目的顺利推进提供技术保障',
    ],
  },
  {
    title: '开发工程师',
    company_name: '安徽缀阳科技有限公司',
    icon: backend,
    iconBg: '#2b3f46',
    date: '2019.04 ~ 2020.10',
    points: [
      '参与多个项目功能模块的开发，确保产品按时交付并满足业务需求',
      '协助进行后台Web功能的迭代优化，提升系统性能和稳定性，提升用户体验',
    ],
  },
  {
    title: '物联网工程专业',
    company_name: '安徽建筑大学',
    icon: harvard,
    iconBg: '#fdfdfd',
    date: '2015.09 - 2019.07',
    points: [
      '主修课程：计算机网络、计算机组成原理、计算机操作系统、数据结构、C语言',
      'linux程序设计、数据库设计、数据挖掘与分析等核心技术课程',
      '为后续的前端开发职业生涯奠定了坚实的计算机科学基础',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      '我会偶尔在LinkedIn上发布项目展示或其他有趣的技术内容！',
    name: 'zhu-shaolong',
    designation: '',
    company: '',
    image: linkedin,
    src_link: 'https://www.linkedin.com/in/zhu-shaolong/',
  },
  {
    testimonial:
      '我的大部分项目都是开源的，托管在GitHub上！',
    name: 'zhu-shaolong',
    designation: '',
    company: '',
    image: github_social,
    src_link: 'https://github.com/zhu-shaolong',
  },
  {
    testimonial:
      '我会发布关于项目、学习内容或其他技术相关的视频！',
    name: 'zhu-shaolong-tech',
    designation: '',
    company: '',
    image: youtube,
    src_link: 'https://www.youtube.com/@zhu-shaolong-tech',
  },
];

const projects = [
  {
    name: '智能出纸机物联网系统平台',
    description:
      '构建围绕智能出纸机的物联网系统平台，包括啦撒小程序、运维端小程序、智慧大屏及后台管理',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'taro',
        color: 'green-text-gradient',
      },
      {
        name: 'vue',
        color: 'pink-text-gradient',
      },
      {
        name: 'bizcharts',
        color: 'orange-text-gradient',
      },
    ],
    image: bookshelfChronicles, // 您可以替换为项目截图
    about:
      '为公共卫生间提供智能监测和管理服务，覆盖用户、保洁员和物业的全流程需求，用户量达50万+。全面负责前端开发，主导啦撒小程序、运维端、代理商和广告系统的开发，升级Taro框架至3.6版本，利用bizcharts实现大屏数据可视化。',
    source_code_link: 'https://github.com/zhu-shaolong/iot-toilet-system',
    live_link: 'https://toilet-iot-platform.com',
  },
  {
    name: '孟想教育及相关项目',
    description: '基于《孟建平系列丛书》构建的互联网教育项目，支持安卓和iOS的Uniapp混合应用',
    tags: [
      {
        name: 'uniapp',
        color: 'blue-text-gradient',
      },
      {
        name: 'vue',
        color: 'green-text-gradient',
      },
      {
        name: 'element-ui',
        color: 'pink-text-gradient',
      },
    ],
    image: cleverkiddos,
    about:
      '用户量达150万+的教育平台项目。开发了错题本、课程、消息盒子、VIP引导等核心模块，负责商城页面的迭代优化、优惠券模块开发，开发内容录入、字库词库管理、试题批量处理等后台管理功能。',
    source_code_link: 'https://github.com/zhu-shaolong/mengxiang-education',
    live_link: 'https://mengxiang-edu.com',
  },
  {
    name: '智能床控制项目',
    description:
      '实现微信小程序与智能床的蓝牙通信，通过模块化设计提供便捷的设备操作体验',
    tags: [
      {
        name: 'wechat-miniprogram',
        color: 'blue-text-gradient',
      },
      {
        name: 'bluetooth',
        color: 'green-text-gradient',
      },
      {
        name: 'iot',
        color: 'pink-text-gradient',
      },
    ],
    image: physmatch,
    about:
      '成功实现了微信小程序与智能床的蓝牙通信，通过模块化设计，使用户能够便捷地操作智能床，并确保了多型号设备的兼容性和通信的稳定性。通过OTA更新（Ymodem协议），提升了设备的远程维护能力。',
    source_code_link: 'https://github.com/zhu-shaolong/smart-bed-control',
    live_link: '',
  },
  {
    name: '类抖音视频流小程序引流短剧平台',
    description: '通过发布短视频和短剧内容，成功吸引大量用户并提高平台活跃度',
    tags: [
      {
        name: 'wechat-miniprogram',
        color: 'blue-text-gradient',
      },
      {
        name: 'video-streaming',
        color: 'green-text-gradient',
      },
      {
        name: 'taro',
        color: 'pink-text-gradient',
      },
    ],
    image: studybot,
    about:
      '通过发布短视频和短剧内容，成功吸引了大量用户并提高了平台的活跃度和用户粘性。用户通过刷剧、追更和分享内容，促进了平台的持续增长和商业价值的提升。',
    source_code_link: 'https://github.com/zhu-shaolong/short-video-platform',
    live_link: '',
  },
  {
    name: '智能卫生间机器人IoT平台对接项目',
    description:
      '构建集成的物联网平台，实现智能卫生间机器人的实时监控、智能管理和远程维护功能',
    tags: [
      {
        name: 'iot',
        color: 'blue-text-gradient',
      },
      {
        name: 'robot-control',
        color: 'green-text-gradient',
      },
      {
        name: 'real-time-monitoring',
        color: 'pink-text-gradient',
      },
    ],
    image: aifluently,
    about:
      '构建了一个集成的物联网平台，实现了智能卫生间机器人的实时监控、智能管理和远程维护功能，显著提升了公共卫生间的清洁和维护效率，优化了卫生管理方案，增强了用户体验。',
    source_code_link: 'https://github.com/zhu-shaolong/toilet-robot-iot',
    live_link: '',
  },
  {
    name: '浙江政务服务网-总工会系统',
    description: '集成的工会组织管理系统，提供数字化和智能化服务',
    tags: [
      {
        name: 'vue',
        color: 'blue-text-gradient',
      },
      {
        name: 'government-service',
        color: 'green-text-gradient',
      },
      {
        name: 'management-system',
        color: 'pink-text-gradient',
      },
    ],
    image: williamPortfolio,
    about:
      '成功打造了一个集成的工会组织管理系统，提供数字化和智能化服务，帮助工会组织和职工实现更高效的管理和服务，提升了政务服务的质量与效率。',
    source_code_link: 'https://github.com/zhu-shaolong/zhejiang-gov-union',
    live_link: 'https://zj-gov-union.com',
  },
];

export { services, experiences, testimonials, projects };