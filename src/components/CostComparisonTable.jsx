export default function CostComparisonTable() {
  const rows = [
    { category: '房地产', item: '市中心租赁一居室公寓月租金', paris: '1,317', london: '2,668' },
    { category: '交通', item: '公共交通月卡（常规价格）', paris: '88', london: '221' },
    { category: '食品', item: '2人一餐，中档餐厅，三道菜', paris: '70', london: '96' },
    { category: '健康', item: '私人医生一次问诊', paris: '30', london: '60' },
    { category: '体育', item: '成人健身房月卡费用', paris: '33', london: '57' },
    { category: '休闲', item: '剧院，国际电影票1张', paris: '13', london: '17' },
    { category: '育儿', item: '全日制幼儿园或学前班（私立），1位儿童月开销', paris: '705', london: '2,148' },
    { category: '教育', item: '1位儿童，国际私立学校年费', paris: '14,857', london: '25,120' },
  ]

  return (
    <div className="mt-12 overflow-x-auto">
      <p className="font-en text-gold text-xs tracking-[0.25em] uppercase mb-4">Cost Comparison</p>
      <h3 className="font-display text-xl md:text-2xl text-charcoal mb-6">巴黎大区 vs 大伦敦地区 每月生活成本比较</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b-2 border-charcoal">
            <th className="py-3 px-4 text-sm font-medium text-charcoal">消费类别</th>
            <th className="py-3 px-4 text-sm font-medium text-charcoal">消费内容</th>
            <th className="py-3 px-4 text-sm font-medium text-gold">巴黎大区</th>
            <th className="py-3 px-4 text-sm font-medium text-gray-500">大伦敦地区</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
              <td className="py-3 px-4 text-sm text-charcoal font-medium">{row.category}</td>
              <td className="py-3 px-4 text-sm text-gray-600">{row.item}</td>
              <td className="py-3 px-4 text-sm text-charcoal font-semibold">{row.paris} <span className="text-xs text-gray-400 font-normal">EUR</span></td>
              <td className="py-3 px-4 text-sm text-gray-500">{row.london} <span className="text-xs text-gray-400 font-normal">GBP</span></td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-gray-400 text-xs mt-3">数据来源：Numbeo 2024, IDF Mobilites 2025, Ameli 2024, NHS 6/2024</p>
    </div>
  )
}
