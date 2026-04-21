#!/usr/bin/env python3
"""
从 docx 文件中批量提取图片。
使用方式：
    python extract_images.py <input_dir_or_file> <output_dir>

示例：
    python extract_images.py ../子报告 ../scripts/extracted/
    python extract_images.py ../游鸿-出访报告-2025年150名规划师赴法研修项目-完整版.docx ../scripts/extracted/full/
"""

import zipfile
import os
import sys
import shutil
from pathlib import Path


def extract_images_from_docx(docx_path, output_dir):
    """从单个 docx 文件中提取所有图片。"""
    docx_path = Path(docx_path)
    output_dir = Path(output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    if not docx_path.exists():
        print(f"文件不存在: {docx_path}")
        return 0

    try:
        with zipfile.ZipFile(docx_path, 'r') as z:
            image_files = [f for f in z.namelist() if f.startswith('word/media/')]
            count = 0
            for img_path in image_files:
                img_name = os.path.basename(img_path)
                # 跳过占位图和小图标
                if img_name.endswith('.emf') or img_name.endswith('.wmf'):
                    continue
                dest = output_dir / img_name
                with z.open(img_path) as src, open(dest, 'wb') as dst:
                    dst.write(src.read())
                count += 1
            print(f"  提取 {count} 张图片 → {output_dir}")
            return count
    except Exception as e:
        print(f"  提取失败: {e}")
        return 0


def extract_from_directory(input_dir, output_dir):
    """从目录中的所有 docx 文件提取图片。"""
    input_dir = Path(input_dir)
    output_dir = Path(output_dir)
    total = 0

    if not input_dir.exists():
        print(f"目录不存在: {input_dir}")
        return

    docx_files = sorted(input_dir.glob('*.docx'))
    print(f"找到 {len(docx_files)} 个 docx 文件")

    for docx_file in docx_files:
        sub_output = output_dir / docx_file.stem
        count = extract_images_from_docx(docx_file, sub_output)
        total += count

    print(f"\n总计提取 {total} 张图片")


if __name__ == '__main__':
    base_dir = Path(__file__).parent.parent

    # 提取子报告图片
    subreport_dir = base_dir / '子报告'
    subreport_output = base_dir / 'scripts' / 'extracted' / 'subreports'
    if subreport_dir.exists():
        print(f"\n=== 提取子报告图片 ===")
        extract_from_directory(subreport_dir, subreport_output)

    # 提取完整版报告图片
    full_report = base_dir / '游鸿-出访报告-2025年150名规划师赴法研修项目-完整版.docx'
    full_output = base_dir / 'scripts' / 'extracted' / 'fullreport'
    if full_report.exists():
        print(f"\n=== 提取完整版报告图片 ===")
        extract_images_from_docx(full_report, full_output)

    print("\n提取完成！")
