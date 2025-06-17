import { useEffect, useState } from 'react';
import SkillsCard from './SkillsCard';
import GraphClient from '../lib/GraphClient';
import { gql } from 'graphql-request';
const Skills = () => {
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    const query = gql`
      {
        skills {
          title
          technolgies
          achievements
          description {
            raw
          }
        }
      }
    `;
    const getData = async () => {
      const { skills } = await GraphClient(query);
      setSkills(skills);
    };
    if (!skills) getData();
  }, [skills]);

  return (
    <>
      <div
        className='container'
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <h1
          className='hero-h1 pb-5'
          style={{ textAlign: 'center', fontSize: '36px' }}
        >
          Skills
        </h1>
        <div
          className='row pb-5 skills-main-div'
          style={{ justifyContent: 'center' }}
        >
          {skills?.map((skill, index) => (
            <SkillsCard
              key={index}
              title={skill?.title}
              content={skill?.description?.raw}
              keyPoints={skill?.achievements}
              skills={skill?.technolgies}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
