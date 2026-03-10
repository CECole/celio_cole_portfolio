"use client";

import { AvatarGroup, Flex, Heading, RevealFx, SmartImage, SmartLink, Text, Tag } from "@/once-ui/components";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';

interface ProjectCardProps {
    href: string;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
    link: string;
    tag?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars,
    link,
    tag,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const t = useTranslations();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        if (images.length > 1) {
            setIsTransitioning(false);
            const nextIndex = (activeIndex + 1) % images.length;
            handleControlClick(nextIndex);

        }
    };

    const handleControlClick = (index: number) => {
        if (index !== activeIndex) {
            setIsTransitioning(false);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(true);
            }, 630);
        }
    };

    return (
        <Flex
            fillWidth gap="l"
            direction="row"           // 改为横向排版
            mobileDirection="column"  // 手机端自动切回上下排版
            alignItems="center"       // 垂直方向居中对齐     
        >
            {/* 图片区域 (占据 7 份宽度) */}
            <Flex flex={7} direction="column" gap="16" fillWidth>
                {images[activeIndex] && (
                    <Flex onClick={handleImageClick}>
                        <RevealFx
                            style={{width: '100%'}}
                            delay={0.4}
                            trigger={isTransitioning}
                            speed="fast">
                            <SmartImage
                                tabIndex={0}
                                radius="l"
                                alt={title}
                                aspectRatio="16 / 9"
                                src={images[activeIndex]}
                                style={{
                                    border: '1px solid var(--neutral-alpha-weak)',
                                    ...(images.length > 1 && {
                                        cursor: 'pointer',
                                    }),
                                }}/>
                        </RevealFx>
                    </Flex>
                )}
                {/* 轮播图指示条 */}
                {images.length > 1 && (
                    <Flex gap="4" fillWidth justifyContent="center">
                        {images.map((_, index) => (
                            <Flex
                                key={index}
                                onClick={() => handleControlClick(index)}
                                style={{
                                    background: activeIndex === index
                                        ? 'var(--neutral-on-background-strong)'
                                        : 'var(--neutral-alpha-medium)',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                }}
                                fillWidth
                                height="2">
                            </Flex>
                        ))}
                    </Flex>
                )}
            </Flex>

            {/* 文字区域 (占据 5 份宽度) */}
            <Flex flex={5} direction="column" gap="24">
                
                {/* 1. 标签与标题 */}
                <Flex direction="column" gap="12">
                    {title && (
                        <Heading
                            as="h2"
                            wrap="balance"
                            variant="heading-strong-xl">
                            {title}
                        </Heading>
                    )}
                    {tag && (
                        <Flex>
                            <Tag variant="neutral" size="l">
                                {t(`tags.${tag}`)}
                            </Tag>
                        </Flex>
                    )}
                    
                </Flex>

 

                {/* 2. 项目描述 */}
                {description?.trim() && (
                    <Text
                        wrap="balance"
                        variant="body-default-m"
                        onBackground="neutral-weak">
                        {description}
                    </Text>
                )}

                {/* 3. 底部链接 (Know more) */}
                <Flex gap="24" wrap paddingTop="8">
                    {content?.trim() && (
                        <SmartLink
                            suffixIcon="arrowRight"
                            style={{margin: '0', width: 'fit-content'}}
                            href={href}>
                                <Text variant="body-default-s">
                                    {t("projectCard.label") || "Know more"}
                                </Text>
                        </SmartLink>
                    )}
                    {link && (
                        <SmartLink
                            suffixIcon="arrowUpRightFromSquare"
                            style={{ margin: "0", width: "fit-content" }}
                            href={link}>
                            <Text variant="body-default-s">
                                {t("projectCard.link")}
                            </Text>
                        </SmartLink>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
};
