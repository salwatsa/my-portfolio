import React from 'react'
import { myProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <h3 className="text-white font-bold mb-6 lg:hidden">PROJECT</h3>
      <div className="space-y-6">
        {/* mapping */}
        {myProjects.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects