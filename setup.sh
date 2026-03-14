#!/bin/bash

echo "正在设置个人作品集网站..."

# 检查是否安装了npm
if ! command -v npm &> /dev/null; then
    echo "错误: 未找到npm。请先安装Node.js。"
    exit 1
fi

# 安装依赖
echo "正在安装依赖..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ 依赖安装成功！"
    echo ""
    echo "🚀 启动开发服务器:"
    echo "   cd portfolio-website"
    echo "   npm run dev"
    echo ""
    echo "应用查看地址: http://localhost:5173"
else
    echo "❌ 依赖安装失败，请检查错误信息。"
fi