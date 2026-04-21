// 第二幕：学习交流（精简版）

export const act2Intro = {
  title: '学习交流',
  subtitle: '法国城市规划的多维洞察',
  description: '围绕法国行政与规划体系、巴黎大区发展、气候环境应对、生态街区、协调建筑师制度、社会住房、城市更新等主题，系统学习法国（尤其是巴黎）的实践经验。',
}

export const adminSystem = {
  id: 'admin',
  title: '法国行政与规划体系',
  subtitle: 'Territorial Governance',
  badge: 'gold',
  intro: '法国实行兼具中央集权与地方分权特征的单一制国家结构，空间规划权相对集中于国家体系。',
  images: [
    { src: '/images/act2/admin/admin01.png', caption: 'Regions and departments of Metropolitan France' },
    { src: '/images/act2/admin/admin02.png', caption: 'Carte administrative de la France' },
    { src: '/images/act2/admin/admin03.webp', caption: '法国行政层级的"千层饼"模式' },
  ],
  levels: [
    {
      title: '行政架构',
      content: '三大层级：大区（14个）→ 省（94个）→ 市镇（34934个）。\n\n国家通过派驻行政官员（préfet）维护法律统一；地方自治单位依据宪法行使法定职权。',
    },
    {
      title: '四级规划传导',
      content: '国家（DREAL）→ 大区（SRADDET）→ 市镇联合体（SCoT）→ 市镇（PLU）。\n\nPLU是建筑许可的唯一法定依据，具有行政诉讼可抗辩性。',
    },
  ],
  cases: [],
}

export const parisRegion = {
  id: 'region',
  title: '巴黎大区概况',
  subtitle: 'Paris Region',
  badge: 'gold',
  intro: '2023年常住人口1240万，占法国总人口18.2%，GDP达7830亿欧元，贡献法国全国GDP的30%。',
  images: [
    { src: '/images/act2/region/region01.png', caption: '巴黎大区在欧盟的区位图' },
    { src: '/images/act2/region/region02.png', caption: '巴黎大区、大巴黎都市区与巴黎市区划图' },
    { src: '/images/act2/region/region03.png', caption: '巴黎吸引国际游客目的地及其规模（2023）' },
    { src: '/images/act2/region/region04.png', caption: '巴黎主要商业消费中心分布图' },
    { src: '/images/act2/region/region05.png', caption: '巴黎2024年奥运会与残奥会设施及遗产' },
    { src: '/images/act2/region/region06.png', caption: '巴黎萨克雷大学校园' },
    { src: '/images/act2/region/region07.png', caption: '巴黎大区外国直接投资来源国及就业岗位' },
    { src: '/images/act2/region/region08.png', caption: '巴黎大区商务办公市场分布图' },
  ],
  levels: [
    {
      title: '核心数据',
      content: '• 人口：1240万，密度1025人/km²\n• GDP：7830亿欧元，人均63256欧元\n• 服务业占87.9%就业岗位\n• 2023年新增企业29.6万家',
    },
    {
      title: '全球竞争力',
      content: '• 全球城市指数第3位（仅次于纽约、伦敦）\n• "宜居性"全球第一，"文化互动"第二\n• 2024年接待游客4760万人次\n• 拥有16所公立大学、79所精英大学校',
    },
  ],
  cases: [],
}

export const climateEnv = {
  id: 'climate',
  title: '气候与环境应对',
  subtitle: 'Climate & Environment',
  badge: 'eco',
  intro: '巴黎正面临显著变暖、极端气候、内涝与污染的多重挑战。',
  images: [
    { src: '/images/act2/climate/temperature_hipe.png', caption: '巴黎近年来气温急剧升高' },
    { src: '/images/act2/climate/high_density.png', caption: '巴黎人口密度分布' },
    { src: '/images/act2/climate/adaptation.png', caption: '巴黎2050气候适应目标' },
    { src: '/images/act2/climate/carte_coups_de_coeur_pietons_grand_paris_1200px.jpg', caption: '大巴黎快线及其沿途人们步行可达的自然景观、人文遗产，以及最喜爱的地点' },
    { src: '/images/act2/climate/rue-milton.jpg', caption: 'Rue Milton, 9e arrondissement' },
    { src: '/images/act2/climate/rue-foncin.jpg', caption: 'Rue Pierre Foncin, 20e' },
    { src: '/images/act2/climate/rue-oran.jpg', caption: 'Rue d\'Oran, espace de stationnement' },
    { src: '/images/act2/climate/petite-ceinture.png', caption: 'Petite ceinture, jardin partagé' },
  ],
  levels: [
    {
      title: '五大风险',
      content: '• 气温升高：年均温上升2.15℃，极端气温逼近50℃\n• 内涝暴雨：99%雨水排入下水道，仅1%就地渗透\n• 空气污染：约970万居民暴露在显著污染中\n• 高密度：城区平均密度2万人/km²\n• 生态压力：树冠覆盖率低于欧洲多数城市',
    },
    {
      title: '应对战略',
      content: '• 大巴黎快线（GPE）：新建200km地铁+68站，2030年98%居民距车站2km内\n• 花园街道：已实施250条，2026年再增300条\n• 气候目标：碳足迹缩减80%，100%可再生能源',
    },
  ],
  cases: [],
}

export const ecoQuartier = {
  id: 'eco',
  title: '生态街区',
  subtitle: 'ÉcoQuartier',
  badge: 'eco',
  intro: '生态街区（ÉcoQuartier）是法国推行的可持续城市规划核心模式。',
  images: [
    { src: '/images/act2/eco/eco01-维克多雨果生态街区区位图.jpeg', caption: '维克多雨果生态街区区位图' },
    { src: '/images/act2/eco/eco02-地区鸟瞰图-衰败的郊区街区.jpg', caption: '地区鸟瞰图-衰败的郊区街区' },
    { src: '/images/act2/eco/eco03-城市设计.jpg', caption: '城市设计' },
    { src: '/images/act2/eco/eco04-公共空间整合.jpg', caption: '公共空间整合' },
    { src: '/images/act2/eco/eco05-保留场地内百年大树.jpg', caption: '保留场地内百年大树' },
    { src: '/images/act2/eco/eco06-保留自然地形.jpg', caption: '保留自然地形' },
    { src: '/images/act2/eco/eco07-开放街区与步行网络.jpg', caption: '开放街区与步行网络' },
    { src: '/images/act2/eco/eco08-在步行尺度上职住平衡与功能混合.jpg', caption: '在步行尺度上职住平衡与功能混合' },
  ],
  levels: [
    {
      title: '四大核心价值',
      content: '（1）方法与程序：民主参与、全成本方法\n（2）生活条件：包容性、健康宜居、遗产保护\n（3）地域发展：功能多样、资源优化、可持续出行\n（4）环境气候：气候韧性、能源节俭、生物多样性',
    },
    {
      title: '政策演进',
      content: '2009-2011：倡议与评估体系建立\n2012-2020：标签化推广，超500个项目\n2021-2023："EcoQuartier 2030"，引入3年后评估',
    },
    {
      title: '挑战与反思',
      content: '• 中产主导导致社会分层与绅士化\n• 生态规范对不同社会背景构成隐性压力\n• 强调"绿色议程"但忽视"蓝色议程"\n\n启示：生态规范与社会公平的平衡需嵌入制度设计。',
    },
  ],
  cases: [
    {
      name: '维克多·雨果生态街区',
      location: '巴黎郊区巴涅克斯',
      area: '19.5公顷',
      description: '围绕新建交通枢纽展开的综合城市更新，地铁4号线+15号线换乘，日均60000客流。',
      highlights: ['TOD一体化', '多模式枢纽', '服务22000人口'],
    },
  ],
}

export const architectSystem = {
  id: 'arch',
  title: '协调建筑师制度',
  subtitle: 'Architecte Urbaniste de Coordination',
  badge: 'gold',
  intro: '法国城市设计中的技术协调制度，协调建筑师拥有技术裁量权，确保城市设计的整体性。',
  images: [
    { src: '/images/act2/arch/arch01-城市更新与城市设计流程（中法语境）.jpg', caption: '城市更新与城市设计流程（中法语境）' },
    { src: '/images/act2/arch/arch02-城市设计四控守则.jpg', caption: '城市设计四控守则' },
    { src: '/images/act2/arch/arch03-城市设计：总体性与特殊性的博弈.jpg', caption: '城市设计：总体性与特殊性的博弈' },
    { src: '/images/act2/arch/arch04-从建筑首层到城市首层.jpg', caption: '从建筑首层到城市首层' },
  ],
  levels: [
    {
      title: '制度定位',
      content: '总师是独立服务团队（建筑师+规划师+景观师+工程师），通过公开招标选定，职责贯穿10-15年开发全程。\n\n核心权力：技术裁量权。若无总师"签证"，土地所有者不签署出售合同。',
    },
    {
      title: 'CPAUPE四控守则',
      content: '为特定街区量身定制的"项目准则"：\n\n• 建筑与城市规划：高度、退让、材质、透明度\n• 景观与公共空间：私人空间参与整体景观\n• 环境网络：蓝色（水）、绿色（植被）、棕色（土壤）、黑色（光污染）\n• 多方协商：承上启下，赋予城市设计法律效力',
    },
  ],
  cases: [],
}

export const socialHousing = {
  id: 'housing',
  title: '社会住房',
  subtitle: 'Logement Social',
  badge: 'question',
  intro: '法国社会住房体系以SRU法为法律基石，通过强制配额与混合社区策略构建住房保障网络。',
  images: [
    { src: '/images/act2/housing/image113.png', caption: '巴黎社会住房分布图' },
    { src: '/images/act2/housing/image121.png', caption: '巴黎社会住房年代分布图' },
    { src: '/images/act2/housing/image117.png', caption: '低于巴黎廉租房最低收入标准的家庭分布图' },
    { src: '/images/act2/housing/image118.png', caption: '社会住房中的独居老人比例' },
    { src: '/images/act2/housing/image122.jpeg', caption: 'Reuilly兵营再造的社会住房' },
    { src: '/images/act2/housing/image129.jpeg', caption: '紧邻德芳斯商务区的60-70年代建设的云朵大厦（艾友大厦）' },
    { src: '/images/act2/housing/image130.png', caption: '70年代建设的蛇形大厦' },
    { src: '/images/act2/housing/image138.jpeg', caption: '1920s年代建设的花园住区（社会住房Suresnes社区）' },
    { src: '/images/act2/housing/image140.jpeg', caption: '70-80年代野兽派建筑师设计的星云社会住房项目' },
    { src: '/images/act2/housing/image142.jpeg', caption: '近年来办公楼宇改建的社会住房（法国最高建筑奖）' },
    { src: '/images/act2/housing/image146.jpeg', caption: '国防部大楼（历史建筑）改造的社会住房' },
    { src: '/images/act2/housing/image157.jpeg', caption: '80-90年代郊区建设的纯木构社会住房社区（皮埃尔·塞马尔城的"尖角区"）' },
    { src: '/images/act2/housing/image161.jpeg', caption: '皮埃尔·塞马尔城的"尖角区"公共空间' },
    { src: '/images/act2/housing/image159.jpeg', caption: '波兰裔建筑师布奇科夫斯卡（青年）' },
    { src: '/images/act2/housing/image160.jpeg', caption: '波兰裔建筑师布奇科夫斯卡（老年）' },
  ],
  levels: [
    {
      title: 'SRU强制配额',
      content: '• 每个市镇社会住房比例须达25%（2025年目标）\n• 巴黎PLU-b法案将短缺地区比例提升至50%\n• 不达标城市将面临财政干预甚至强制分配土地',
    },
    {
      title: '社会混合与参与式设计',
      content: '• 避免贫困集中，不同收入层次住房空间融合\n• 勒伊军营社区：底层设托儿所、共享办公、商店、老人康复工作室\n• 前期设计工作坊邀请潜在租户参与\n• 从"供需数量"转向"人房关系"',
    },
  ],
  cases: [
    {
      name: '兵营改造社会住房',
      location: '巴黎',
      operator: 'Paris Habitat',
      description: '旧军事营房改造为包含社会住房、市场价住房、青年公寓、老年人住房的混合社区。',
      highlights: ['社会混合', '代际融合', '公共空间共享'],
    },
  ],
}

export const urbanRenewal = {
  id: 'renewal',
  title: '城市更新',
  subtitle: 'Renouvellement Urbain & ZAC',
  badge: 'eco',
  intro: 'ZAC（协议开发区）是法国城市更新的核心制度工具，通过协商一致的开发协议整合公共利益与私人开发。',
  images: [
    { src: '/images/act2/renewal/image43.jpeg', caption: 'Pantin港口ZAC' },
    { src: '/images/act2/renewal/image52.jpeg', caption: 'Clichy Batignolles 协议更新区' },
    { src: '/images/act2/renewal/image61.png', caption: '巴黎左岸（Rive Gauche）协议更新区（总平面图）' },
    { src: '/images/act2/renewal/image62.jpeg', caption: '今日左岸' },
    { src: '/images/act2/renewal/image75.png', caption: 'Saint de Vincent医院更新' },
    { src: '/images/act2/renewal/image77.jpeg', caption: '圣日尔曼市场更新' },
    { src: '/images/act2/renewal/image104.jpeg', caption: '溪流花园小微空间更新' },
    { src: '/images/act2/renewal/image107.png', caption: '铁路花园小微空间更新' },
  ],
  levels: [
    {
      title: 'ZAC制度',
      content: '• 市政府划定范围，制定公共利益要求\n• 与土地所有者协商整合零散地块\n• 协调建筑师制定城市设计导则\n• 分阶段实施，优先建设公共空间\n\n关键：协商而非强制，利益共享机制。',
    },
    {
      title: 'Clichy Batignolles案例',
      content: '• 54公顷综合更新，原为铁路货运场地\n• 马丁·路德·金公园优先实施（10公顷）\n• 公园定义为"生态走廊"和"社区枢纽"\n• 周边建筑限高、体量、材质须与公园"对话"',
    },
  ],
  cases: [
    {
      name: 'Clichy Batignolles ZAC',
      location: '巴黎西北16区',
      area: '约54公顷',
      description: '综合化更新区域，公园优先实施，500种植物、湿地、农田、9处游憩场地。',
      highlights: ['公园优先', '生态修复', '社区枢纽'],
    },
  ],
}

export const publicSpace = {
  id: 'public-space',
  title: '公共空间',
  subtitle: 'Espace Public',
  badge: 'gold',
  intro: '巴黎公共空间的更新改造走过了一条从"遗忘与污染"到"复兴与赋权"的漫长历程。与其花巨资推倒重建，为什么不能用更温和、更聪慧的方式让这些被遗弃的角落重新焕发生命？',
  images: [],
  levels: [],
  insights: [
    {
      num: '01',
      title: '尊重历史而非消灭历史',
      quote: '渐进式的改造提供了一种在"过渡"的过程中，切换、流转和寻求新机遇的可能性。',
      content: '巴黎没有选择像其他城市那样推倒工业遗迹后统一打造新区，而是保留了小环线的铁轨、河道的堤岸、屠宰场的某些建筑，在这些承载着城市记忆的物质基础上进行"更加有温度的改造"。将"耐心"与"时间"变成了城市更新中另一种难得的"资源"，新的公共空间因此有了丰富的"故事感"和"叙事性"。',
    },
    {
      num: '02',
      title: '从"自上而下"转向"自下而上"',
      quote: '政府的角色变成了"支持者"而非主宰者。',
      content: '以溪流花园为例，不是市政府主导，而是100多位本地居民主动发起，用自己的时间和热情进行清理、设计、施工。这种参与不仅生成了更贴近社区需求的空间，更重要的是重建了居民对城市的拥有感和责任感——过去周边社区往铁路丢弃垃圾的行为，不再单独由政府和环卫部门监管，而是受到更新后花园"共创者"们的共同监督。',
    },
    {
      num: '03',
      title: '空间更新的新使命：回归生活与邻里',
      quote: '"开放绿色休闲，以及美"不再是单一目的。',
      content: '新时期拉维莱特公园不只是公园，它同时是文化中心（音乐城、科技馆）、生态场所、社交舞台；铁路农场不只是农场，它是社会救济（为无家可归者提供工作和住处）、粮食生产、生态修复、社区教育的综合体。这种多维整合使得城市公共空间成为应对多个城市问题的解决方案，而非孤立的美学对象。',
    },
    {
      num: '04',
      title: '可逆性、渐进式的实验方法',
      quote: '如果不允许"不作为"，必须做什么，得做得聪明。',
      content: '巴黎没有上来就大投入改造塞纳河全部堤岸，而是先尝试 Paris Plage 暑期临时沙滩。只有在这个短期实验成功后，政府和更多社会主体才逐步推行更大规模的永久性改造。这种做法允许试错与学习，允许居民在看到效果后再做判断，也降低了失败的风险和成本。存量更新时代，谁也无法预料未来，对于不确定性的包容本身就是一种智慧。',
    },
    {
      num: '05',
      title: '工业遗迹转化为现代生活的生产工具',
      quote: '这些空间既不是"遗产博物馆"，也不是"商业开发区"。',
      content: '最令人印象深刻的变化是，改造不是把工业遗迹当作"美学纪念品"来保护，而是赋予它们现实的生产功能——铁路农场的农业生产、溪流花园的社区教育、拉维莱特的文化与科技生产，都是实实在在的、每天在进行的活动。这实际上是对现代建筑美学的深刻反思：它们不是"花瓶"或者"商场"，而是城市日常生活的有机组成部分。',
    },
  ],
  conclusion: '巴黎没有把工业化和快速城市化时代遗留下来的"伤疤"，当作必须掩盖或推倒的东西，而是大胆向自己提出了一个看似平常但极具挑战性的问题——"我们如何在保留这些痕迹的基础上，让它们成为21世纪城市生活的一部分？"那些曾经被忽视、污染、危险的空间，逐步变成了最有生命力、最具包容性、最能触发人心的公共场所。',
  cases: [],
}

export const internship = {
  id: 'internship',
  title: '事务所进修',
  subtitle: 'Professional Internship',
  badge: 'gold',
  intro: '在AS建筑工作室实习期间，参与多项专题研究与跨界交流。',
  images: [],
  levels: [
    {
      title: '主要工作',
      content: '• 马赛-艾克斯-普罗旺斯大都市区区域生态协同规划研究\n• 中法TOD背景下城市更新对比研究《From TOD to Urban Regeneration》\n• 独立完成《从城市化迈向城市性——中法公共空间城市更新·新叙事观察》',
    },
    {
      title: '成果分享',
      content: '• 受邀在AS建筑事务所上海《Tracé Bleu蓝书》中文版新书发布会上宣讲\n• 以跨界圆桌形式分享中法公共空间更新比较研究',
    },
  ],
  cases: [],
}

export const act2Themes = [
  adminSystem,
  parisRegion,
  climateEnv,
  ecoQuartier,
  architectSystem,
  socialHousing,
  urbanRenewal,
  publicSpace,
  internship,
]
