// 图片路径辅助工具
// 使用 Vite 的 import.meta.glob 动态获取图片

const allImages = import.meta.glob('/images/**/*.{jpg,jpeg,png,gif,webp}', { eager: true })

export function getImagesInFolder(folderPath) {
  return Object.keys(allImages)
    .filter(path => path.includes(`/images/${folderPath}/`))
    .map(path => path)
}

// 获取指定目录下的图片列表（用于展示）
export function getFolderImages(folderPath) {
  // 返回已知模式的图片路径数组
  // 实际使用时，图片文件名需要从提取后的文件中确定
  const patterns = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpeg', 'image5.jpeg',
                    'image1.png', 'image2.png', 'image3.png', 'image4.png', 'image5.png',
                    'image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']
  return patterns.map(p => `${import.meta.env.BASE_URL}images/${folderPath}/${p}`)
}
