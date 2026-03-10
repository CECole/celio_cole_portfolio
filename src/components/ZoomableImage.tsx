"use client"; // 👈 这句话告诉 Next.js 这是一个可以在浏览器里交互的客户端组件

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ZoomableImage({ src, alt, style }: { src: string; alt: string; style?: React.CSSProperties }) {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false); // 确保在客户端挂载后再创建 Portal

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // 定义 Portal 中的 Overlay 渲染函数
    const renderOverlay = () => {
        if (!mounted) return null;

        return createPortal(
            (
                <div 
                    onClick={() => setIsOpen(false)} // 点击背景任意处关闭
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)', // 半透明黑色背景
                        backdropFilter: 'blur(4px)', // 背景毛玻璃模糊效果
                        zIndex: 1000000,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'zoom-out' // 鼠标变成缩小放大镜
                    }}
                >
                    {/* 右上角的 X 关闭按钮 */}
                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'absolute',
                            top: '30px',
                            right: '40px',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '40px',
                            cursor: 'pointer',
                            zIndex: 1000001
                        }}
                    >
                        &times;
                    </button>

                    {/* 放大后的原图 */}
                    <img 
                        src={src} 
                        alt={alt} 
                        onClick={(e) => e.stopPropagation()} // 防止点到图片本体时误触关闭
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90vh',
                            objectFit: 'contain', // 保证完整显示不断边
                            borderRadius: '8px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                            cursor: 'default'
                        }}
                    />
                </div>
            ),
            document.body
        );
    };

    return (
        <>
            {/* 文章里显示的缩略图（可以点击），保持不变 */}
            <img 
                src={src} 
                alt={alt} 
                onClick={() => setIsOpen(true)}
                style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '12px', 
                    margin: '2rem 0', 
                    cursor: 'zoom-in',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
                    ...style
                }} 
            />

            {isOpen && renderOverlay()}
        </>
    );
}