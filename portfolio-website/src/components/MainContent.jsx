import Hero from "./Hero";
import TimeLine from "./TimeLine";
import Projects from "./Projects";
import Stars from "./Stars"
import React, { useRef, useEffect, useState } from "react";
import Scroll from "./Scroll";

function MainContent() {
    const timelineSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const containerRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState({
        total: 0,
        timelineLeftRatio: 0.6,
        timelineBottomRatio: 0.1,
        projectsRightRatio: 0.3
    });

    useEffect(() => {
        let rafId = null;
        
        const handleScroll = () => {
            const timelineSection = timelineSectionRef.current;
            const projectsSection = projectsSectionRef.current;
            
            if (!timelineSection || !projectsSection) return;

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Get positions
            const timelineRect = timelineSection.getBoundingClientRect();
            const projectsRect = projectsSection.getBoundingClientRect();
            
            const timelineStart = timelineRect.top + scrollY;
            
            // Calculate actual path lengths
            const timelineLeftHeight = timelineRect.height;
            const timelineBottomWidth = timelineRect.width;
            const projectsRightHeight = projectsRect.height;
            const totalPathLength = timelineLeftHeight + timelineBottomWidth + projectsRightHeight;
            
            // Current position along the path
            const pathStart = timelineStart;
            const currentScroll = scrollY + windowHeight * 0.3;
            
            // Calculate progress (0 to 1) based on actual path length
            let progress = 0;
            if (currentScroll > pathStart) {
                const scrolled = currentScroll - pathStart;
                progress = Math.min(scrolled / totalPathLength, 1);
            }
            
            progress = Math.max(0, Math.min(1, progress)) + 0.02;
            
            // Calculate proportional segments
            const timelineLeftRatio = timelineLeftHeight / totalPathLength;
            const timelineBottomRatio = timelineBottomWidth / totalPathLength;
            const projectsRightRatio = projectsRightHeight / totalPathLength;
            
            setScrollProgress({
                total: progress,
                timelineLeftRatio,
                timelineBottomRatio,
                projectsRightRatio
            });
        };

        const rafHandleScroll = () => {
            handleScroll();
            rafId = requestAnimationFrame(rafHandleScroll);
        };

        rafId = requestAnimationFrame(rafHandleScroll);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={containerRef}>
            <Stars />
            <section id="home" style={{ paddingTop: '100px', minHeight: '100vh' }}>
                <Hero></Hero>
            </section>
            <section id="about" ref={timelineSectionRef} style={{ minHeight: '100vh' }}>
                <TimeLine scrollProgress={scrollProgress} />
            </section>
            <section id="projects" ref={projectsSectionRef} style={{ minHeight: '100vh' }}>
                <Projects scrollProgress={scrollProgress} />
            </section>
            <Scroll></Scroll>
        </div>
    )
}



export default MainContent;