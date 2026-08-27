import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'窗见 · 系统门窗销售情报台',description:'把门窗行业资讯转化为销售机会、推荐方案与可复制话术。'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}

