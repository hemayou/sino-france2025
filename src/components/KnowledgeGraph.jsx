import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'

const nodes = [
  { id: 'center', label: '法国城市规划研修', x: 0.5, y: 0.5, size: 76, color: '#1A1A1A', textColor: '#fff', strokeColor: '#D4A574' },
  { id: 'admin', label: '行政体系', x: 0.5, y: 0.12, size: 52, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'region', label: '巴黎大区', x: 0.82, y: 0.28, size: 52, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'climate', label: '气候应对', x: 0.88, y: 0.62, size: 48, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'eco', label: '生态街区', x: 0.72, y: 0.88, size: 56, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'arch', label: '总师制度', x: 0.28, y: 0.88, size: 56, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'housing', label: '社会住房', x: 0.12, y: 0.62, size: 56, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'renewal', label: '城市更新', x: 0.18, y: 0.28, size: 56, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'public', label: '公共空间', x: 0.5, y: 0.78, size: 52, color: '#FFFFFF', textColor: '#1A1A1A', strokeColor: '#E8E8E8' },
  { id: 'internship', label: '事务所进修', x: 0.15, y: 0.45, size: 44, color: '#FAFAFA', textColor: '#737373', strokeColor: '#E8E8E8' },
]

const links = [
  { from: 'center', to: 'admin' },
  { from: 'center', to: 'region' },
  { from: 'center', to: 'climate' },
  { from: 'center', to: 'eco' },
  { from: 'center', to: 'arch' },
  { from: 'center', to: 'housing' },
  { from: 'center', to: 'renewal' },
  { from: 'center', to: 'public' },
  { from: 'center', to: 'internship' },
  { from: 'admin', to: 'region' },
  { from: 'region', to: 'climate' },
  { from: 'eco', to: 'public' },
  { from: 'arch', to: 'renewal' },
  { from: 'housing', to: 'renewal' },
]

const themeMap = {
  admin: 0, region: 1, climate: 2, eco: 3, arch: 4,
  housing: 5, renewal: 6, public: 7, internship: 8,
}

export default function KnowledgeGraph({ onNodeClick }) {
  const svgRef = useRef(null)
  const [hovered, setHovered] = useState(null)
  const [size, setSize] = useState({ w: 800, h: 500 })

  useEffect(() => {
    const update = () => {
      const rect = svgRef.current?.parentElement?.getBoundingClientRect()
      if (rect) setSize({ w: rect.width, h: Math.min(rect.width * 0.6, 520) })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll('.link-line')
    const circles = svgRef.current?.querySelectorAll('.node-circle')
    if (!paths || !circles) return

    gsap.fromTo(paths,
      { strokeDasharray: 400, strokeDashoffset: 400 },
      { strokeDashoffset: 0, duration: 1.8, stagger: 0.06, ease: 'power2.out', delay: 0.2 }
    )
    gsap.fromTo(circles,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(1.7)', delay: 0.6 }
    )
  }, [size])

  const getPos = (node) => ({ x: node.x * size.w, y: node.y * size.h })

  // 计算连线起点/终点（考虑圆半径，避免线被圆覆盖）
  const getLineEndpoints = (a, b) => {
    const nodeA = nodes.find(n => n.id === a)
    const nodeB = nodes.find(n => n.id === b)
    const pa = getPos(nodeA)
    const pb = getPos(nodeB)
    const dx = pb.x - pa.x
    const dy = pb.y - pa.y
    const dist = Math.sqrt(dx * dx + dy * dy) || 1
    const ra = nodeA.size * 0.5
    const rb = nodeB.size * 0.5
    return {
      x1: pa.x + (dx / dist) * ra,
      y1: pa.y + (dy / dist) * ra,
      x2: pb.x - (dx / dist) * rb,
      y2: pb.y - (dy / dist) * rb,
    }
  }

  return (
    <div className="w-full bg-gray-50 rounded-2xl py-6">
      <svg ref={svgRef} width={size.w} height={size.h} className="mx-auto">
        {/* 连线 */}
        {links.map((link, i) => {
          const ep = getLineEndpoints(link.from, link.to)
          const isHovered = hovered && (link.from === hovered || link.to === hovered)
          return (
            <line
              key={i}
              x1={ep.x1} y1={ep.y1} x2={ep.x2} y2={ep.y2}
              stroke={isHovered ? '#D4A574' : '#D4D4D4'}
              strokeWidth={isHovered ? 2.5 : 1.5}
              strokeLinecap="round"
              className="link-line transition-colors duration-300"
            />
          )
        })}

        {/* 节点 */}
        {nodes.map((node) => {
          const pos = getPos(node)
          const isCenter = node.id === 'center'
          const isHovered = hovered === node.id
          const r = isHovered ? node.size * 0.55 : node.size * 0.5

          return (
            <g
              key={node.id}
              className="cursor-pointer node-circle"
              onClick={() => {
                if (node.id !== 'center' && themeMap[node.id] !== undefined) {
                  onNodeClick?.(themeMap[node.id])
                }
              }}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* 外圈光晕（仅中心节点） */}
              {isCenter && (
                <circle
                  cx={pos.x} cy={pos.y} r={r + 6}
                  fill="none"
                  stroke="#D4A574"
                  strokeWidth={1}
                  opacity={0.3}
                />
              )}
              <circle
                cx={pos.x} cy={pos.y} r={r}
                fill={node.color}
                stroke={isHovered ? '#D4A574' : node.strokeColor}
                strokeWidth={isCenter ? 3 : isHovered ? 2.5 : 2}
                className="transition-all duration-300"
                style={{
                  filter: isHovered
                    ? 'drop-shadow(0 4px 16px rgba(212,165,116,0.35))'
                    : isCenter
                    ? 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                    : 'drop-shadow(0 2px 8px rgba(0,0,0,0.08))'
                }}
              />
              <text
                x={pos.x} y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                fill={node.textColor}
                fontSize={isCenter ? 14 : node.size > 50 ? 13 : 11}
                fontWeight={isCenter ? 700 : 500}
                className="select-none pointer-events-none"
                style={{ fontFamily: "'Noto Sans SC', sans-serif" }}
              >
                {node.label}
              </text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
