import React, { useCallback } from "react";
import "../styles/About.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const skills = [
    { name: 'react', icon: 'devicon-react-original' },
    { name: 'nextjs', icon: 'devicon-nextjs-line' },
    { name: 'javascript', icon: 'devicon-javascript-plain' },
    { name: 'typescript', icon: 'devicon-typescript-original' },
    { name: 'sass', icon: 'devicon-sass-original' },
    { name: 'tailwind', icon: 'devicon-tailwindcss-plain' },
    { name: 'git', icon: 'devicon-git-plain' },
    { name: 'webpack', icon: 'devicon-webpack-plain' },
    { name: 'jest', icon: 'devicon-jest-plain' },
    { name: 'npm', icon: 'devicon-npm-original-wordmark' },
    { name: 'mongodb', icon: 'devicon-mongodb-plain' },
  ];


const About = () => {
    return (
        <div className="aboutContainer" id="section1">
            <h2 className="sectionHeader"><span>01.</span>About Me</h2>
            <div className="splitAbout">
                <div className="aboutMeContentContainer">
                    <div className="aboutMeContent"><span>Hello!</span> My name is Minchan and I'm a web developer with a passion for front end development and design.</div>
                    <p className="aboutMeContent2">
                        I have been Web Devoloping since 2019 after coming across a basic coding course online, ever since then i have fallen in love. 
                        I started spending all my free time playing around with code, it started with HTML and CSS then moving onto Javascript. 
                    </p>

                    <p className="aboutMeContent3">
                        I have had the oppurtunity to work with clients and make their digital vision come true by making accessible and inclusive digital products. 
                        I am constantly striving to improve myself in the rapidly changing field that is web development.
                    </p>
                </div>
            </div>
            <div className="technologiesContainer">
                <h2 className="technologiesHeader">Some technologies I've worked with</h2>
                <div className="carouselContainer">
                    <SkillsCarousel />
                </div>
            </div>
        </div>
    )
}

const SkillsCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, dragFree: true },
        [Autoplay({ delay: 2000 }, (emblaRoot) => emblaRoot.parentElement)]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi])

    return (
        <div className="skills">
            <div className="skills-carousel" ref={emblaRef}>
                <div className="skills-carousel_container">
                    {skills.map((skill, index) => (
                        <Skill 
                            key={skill.name} 
                            name={skill.name} 
                            icon={skill.icon} 
                            index={index}
                        />
                    ))}
                </div>
            </div>
            <button
                className='skills-carousel_prev'
                aria-label='previous'
                onClick={scrollPrev}>
                <svg
                className='embla__button__svg'
                viewBox='137.718 -1.001 366.563 644'>
                <path
                    fill='currentColor'
                    d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z'
                />
                </svg>
            </button>
            <button
                className='skills-carousel_next'
                aria-label='next'
                onClick={scrollNext}>
                <svg
                className='embla__button__svg'
                viewBox='0 0 238.003 238.003'>
                <path
                    fill='currentColor'
                    d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z'
                />
                </svg>
            </button>
        </div>
    )
}

const Skill = ({name, icon, index}) => {
    return (
        <div className="skill">
            <i className={`${icon} colored`}></i>
            <p>{name}</p>
            <span className="skill_index" aria-hidden="true">{index}</span>
        </div>
    )
}

export default About;