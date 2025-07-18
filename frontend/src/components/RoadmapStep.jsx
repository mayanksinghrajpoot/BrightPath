import React from 'react';

const RoadmapStep = ({ step, isLast }) => {
  return (
    <div className={`mb-10 ml-8 ${isLast ? '' : 'pb-4'}`}>
        <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full bg-warning border-5 border-primary"></div>
        <div className="bg-base-content/20 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:scale-103 transition">
            <span className="bg-primary text-primary-content text-sm font-semibold mr-2 px-3 py-1 rounded-full">{step.level}</span>
            <h3 className="text-2xl font-bold my-3 text-gray-900">{step.title}</h3>
            
            <div className="mt-4">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Key Topics:</h4>
                <ul className="space-y-2">
                    {step.topics.map((topic, index) => (
                        <li key={index} className="flex items-start">
                             <svg className="w-6 h-6 mr-2 text-success flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                            </svg>
                           <span className="text-gray-800">{topic}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mt-6">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Suggested Resources:</h4>
                <div className="flex flex-wrap gap-5">
                    {step.resources.map((resource, index) => (
                        <a 
                            key={index} 
                            href={resource.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-base-content text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-primary/70 hover:scale-105 hover:text-info-content transition-colors shadow-md"
                        >
                            {resource.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default RoadmapStep;
