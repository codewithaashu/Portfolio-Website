import React from 'react'
import SkillsCard from './SkillsCard';
import skillsSubCategory1 from '../DataBase/SkillsSubCategory1';
import skillsSubCategory2 from '../DataBase/SkillsSubCategory2';
import skillsSubCategory3 from '../DataBase/SkillsSubCategory3';
import skillsPopup from '../DataBase/SkillsPopup';
const Skills = () => {
    return (
        <>
            <div className="container" style={{ justifyContent: "center", alignItems: "center" }}>
                <h1 className='hero-h1 pb-5' style={{ textAlign: "center", fontSize: "36px" }}>
                    Skills
                </h1>
                <div className="row pb-5 skills-main-div" style={{ justifyContent: "center" }}>
                    <SkillsCard title={"Frontend Development"} skills={skillsSubCategory1}
                        content={skillsPopup[0].content} keyPoints={skillsPopup[0].keyPoints} />
                    <SkillsCard title={"Backend Development"} skills={skillsSubCategory2} content={skillsPopup[1].content} keyPoints={skillsPopup[1].keyPoints} />
                    <SkillsCard title={"Programming Language"} skills={skillsSubCategory3}
                        content={skillsPopup[2].content} keyPoints={skillsPopup[2].keyPoints} />
                </div>
            </div>
        </>
    )
}

export default Skills