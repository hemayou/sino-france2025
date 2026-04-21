// 在法调研考察照片
// 来源：Act1-在法调研照片

const rawPhotos = [
  { file: '01-调研Victor Hugo生态街区-1.jpg', caption: '调研Victor Hugo生态街区' },
  { file: '02-调研Pari Habitat.jpg', caption: '调研Paris Habitat社会住房' },
  { file: '03-调研历史文化建筑活化利用.jpg', caption: '调研历史文化建筑活化利用' },
  { file: '04-Austerlitz火车站改造.jpg', caption: 'Austerlitz火车站改造' },
  { file: '05-Reuilly兵营改造社会住房.jpg', caption: 'Reuilly兵营改造社会住房' },
  { file: '06-法国生态转型部.jpg', caption: '法国生态转型部座谈' },
  { file: '07-Pantin协议更新区-滨水空间.jpg', caption: 'Pantin协议更新区-滨水空间' },
  { file: '08-小巴黎规划院APUR.jpg', caption: '小巴黎规划院APUR' },
  { file: '09-Saint de Paul 医院更新.jpg', caption: 'Saint de Paul医院更新' },
  { file: '10-巴黎市政府-雨水管理座谈.jpg', caption: '巴黎市政府-雨水管理座谈' },
  { file: '11-调研Victor Hugo生态街区2.jpg', caption: '调研Victor Hugo生态街区' },
  { file: '12-调研巴黎左岸协议更新区.jpg', caption: '调研巴黎左岸协议更新区' },
  { file: '13-Pantin协议更新区-滨水空间2.jpg', caption: 'Pantin协议更新区-滨水空间' },
  { file: '14-巴黎市政府-雨水管理座谈2.jpg', caption: '巴黎市政府-雨水管理座谈' },
  { file: '15-夏邦杰事务所-法国主建筑师建筑制度.jpg', caption: '夏邦杰事务所-法国主建筑师制度' },
  { file: '16-Austerlitz火车站改造2.jpg', caption: 'Austerlitz火车站改造' },
  { file: '17-Saint de Paul 医院更新-场地.jpg', caption: 'Saint de Paul医院更新-场地' },
  { file: '18-大巴黎规划院IPA巴黎新总规2040.jpg', caption: '大巴黎规划院IPA-巴黎新总规2040' },
  { file: '19-小巴黎规划院APUR-2.jpg', caption: '小巴黎规划院APUR' },
  { file: '20-调研Victor Hugo生态街区3.jpg', caption: '调研Victor Hugo生态街区' },
  { file: '22-调研巴黎左岸协议更新区-2.jpg', caption: '调研巴黎左岸协议更新区' },
  { file: '23-巴黎市政府-雨水管理座谈3.jpg', caption: '巴黎市政府-雨水管理座谈' },
  { file: '24-调研巴黎左岸协议更新区-4.jpg', caption: '调研巴黎左岸协议更新区' },
  { file: '25-Reuilly兵营改造社会住房-2.jpg', caption: 'Reuilly兵营改造社会住房' },
  { file: '26-巴黎市政府-雨水管理座谈4.jpg', caption: '巴黎市政府-雨水管理座谈' },
  { file: '27-Pantin协议更新区-滨水空间3.jpg', caption: 'Pantin协议更新区-滨水空间' },
  { file: '28-AS事务所-索邦大学校区更新1.jpg', caption: 'AS事务所-索邦大学校区更新' },
  { file: '29-Axel Schoenert 事务所座谈.jpg', caption: 'Axel Schoenert事务所座谈' },
  { file: '30-夏邦杰事务所-法国主建筑师建筑制度-2.jpg', caption: '夏邦杰事务所-法国主建筑师制度' },
  { file: '31-夏邦杰事务所-法国主建筑师建筑制度-3.jpg', caption: '夏邦杰事务所-法国主建筑师制度' },
  { file: '32-AS事务所-索邦大学校区更新2.jpg', caption: 'AS事务所-索邦大学校区更新' },
  { file: '33-巴黎市政府-雨水管理座谈4.jpg', caption: '巴黎市政府-雨水管理座谈' },
  { file: '34-AS事务所-索邦大学校区更新3.jpg', caption: 'AS事务所-索邦大学校区更新' },
]

export const fieldworkPhotos = rawPhotos.map(p => ({
  src: `/images/act1/fieldwork/${p.file}`,
  caption: p.caption,
}))
