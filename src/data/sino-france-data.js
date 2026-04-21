// 中法公共空间城市更新对比数据
// 来源：PPT《FROM URBANIZATION TOWARDS URBANITY》

export const sinoFranceIntro = {
  title: '从城市化迈向城市性',
  subtitle: '中法公共空间城市更新·新叙事观察',
  description: '通过聚焦河流、公园和街道空间，梳理总结中法城市通过公共空间的城市更新，重建人与人有效交流协作的"城市性"的典型案例与经验做法。',
}

export const comparisonThemes = [
  {
    id: 'river',
    title: '河流',
    englishTitle: 'River',
    themeQuestion: '重构城市、人与河流的关系',
    french: {
      context: '塞纳河与巴黎： Paris, Métropole sur Seine',
      description: '不在于建造什么，而是这里给谁用，允许什么在这里生长、繁荣，要包容什么。人们以什么方式跨越河流？如何让既有的建筑结构焕发新的想象力？',
      images: [
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide11_img026.png`, caption: '塞纳河与巴黎' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/seine2.jpg`, caption: '塞纳河畔' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/seine3.jpg`, caption: '塞纳河畔' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/seine.png`, caption: '塞纳河与巴黎' },
      ],
    },
    chinese: {
      context: '上海黄浦江、苏州河 / 北京亮马河、清河',
      description: '如何重新评估滨水资源价值，重塑消费场景；如何活化工业遗存，建立文化地标；如何将水岸的基因与场景运营结合。',
      cases: [
        { name: '上海徐汇滨江·西岸梦中心', desc: '工业遗存活化与滨水消费场景重塑' },
        { name: '北京亮马河', desc: '"北京的塞纳河"——公共艺术与松弛感空间' },
        { name: '北京海淀·清河之洲', desc: '生态治理与亲水空间再造' },
      ],
      images: [
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide17_img030.jpg`, caption: '上海滨水' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide17_img031.jpg`, caption: '北京亮马河' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide18_img032.jpg`, caption: '清河之洲' },
      ],
    },
    reflection: '规划是否能超越线性逻辑和叙事——探索可逆性设计与渐进性实验的方法论创新？能否超越"生态排他主义"，从三维视角实现多功能综合空间设计？',
  },
  {
    id: 'greenery',
    title: '绿色空间',
    englishTitle: 'Greenery',
    themeQuestion: '城市中的公园、广场与森林',
    french: {
      context: '巴黎：在一座历史文化名城中，如何增加和织补绿色',
      description: '截止2025年，巴黎已实施完成超过250条通学路/花园街道。通过环城小铁路环线（petite ceinture）改造为绿色生态廊道，将130所学校操场改造为绿色儿童探险乐园。',
      images: [
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide24_img042.jpg`, caption: '巴黎花园街道改造' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide26_img044.jpg`, caption: 'Rue Charles Baudelaire' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide27_img048.jpg`, caption: '可以"坐"的街道' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide28_img049.jpg`, caption: '铁路绿道改造' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide33_img062.jpg`, caption: '勒内-杜蒙绿色步道' },
      ],
    },
    chinese: {
      context: '中国：大量城市公园，维护成本高昂',
      description: '如何更好利用公园绿色资产，激活公园运营潜能？如何在负面的灰色空间和冷漠的社会关系中，创造绿色与城市生活，重塑社区邻里关系？',
      cases: [
        { name: '上海创智农园', desc: '社区参与式都市农业' },
        { name: '北京京张铁路遗址公园', desc: '自上而下政府推动的铁路遗址改造' },
        { name: '上海宝山火车菜园', desc: '自下而上荒废绿化带改造' },
      ],
      images: [
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide31_img054.jpg`, caption: '中国城市公园' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide32_img057.jpg`, caption: '上海创智农园' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide32_img060.jpg`, caption: '京张铁路遗址公园' },
      ],
    },
    reflection: '这些看似微小的设计细节，共同构成了"城市性"的物质基础。当我们关注城市的"标志性"景观的同时，是否也可能在城市毛细血管层面，创造空间"日常性"体验的可能？',
  },
  {
    id: 'street',
    title: '街道与出行',
    englishTitle: 'Street & Mobility',
    themeQuestion: '重塑"居住-就业-通勤"链条',
    french: {
      context: '巴黎：回归慢行的城市',
      description: '1995-2024年，自行车道从5km增至1203km。小轿车流量自2001年以来减少50%，小汽车拥车率从50%（1999）下降至31%（2022）。公共空间分配给汽车的比例从66%下降至50%。',
      images: [
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide38_img069.jpg`, caption: '巴黎办公转住宅十年趋势' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide39_img072.png`, caption: '自行车道发展' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide40_img077.jpg`, caption: '空间权益重新分配' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide39_img075.jpg`, caption: '自行车机动车出行占比' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide39_img076.jpg`, caption: '自行车路网' },
      ],
    },
    chinese: {
      context: '中国城市：电动摩托车的治理挑战',
      description: '如何治理大量电动摩托车的安全与停放问题？公共交通能否想象并实现一种新的范式？',
      cases: [
        { name: '电动摩托车治理', desc: '安全与停放的新挑战' },
      ],
      images: [
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide41_img078.jpg`, caption: '中国城市街道' },
        { src: `${import.meta.env.BASE_URL}images/sino-france/slide41_img079.jpg`, caption: '电动摩托车停放' },
      ],
    },
    reflection: '公共交通：能否想象并实现一种新的范式？回归慢行的城市？为自行车和行人提供更多空间供给——重新分配空间权益，而不是花钱建造新的基础设施。',
  },
]

export const sinoFranceClosing = {
  text: '从巴黎的规划体系和典型案例中，我们能得出"什么经验"；针对北京当前城市发展面临的挑战问题，能得到什么"可供借鉴的做法"。',
  question: '城市，何以成为城市？',
}
