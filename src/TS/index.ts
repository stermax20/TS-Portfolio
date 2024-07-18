interface Project {
    title: string;
    description: string;
    link: string;
}

const projects: Project[] = [
    {
        title: 'Springboot Project',
        description: '2024-1 웹개발 동아리 프로젝트.',
        link: 'https://github.com/stermax20/Moving',
    },
    {
        title: 'React & Express Project',
        description: '2024-1 웹 방과후 프로젝트.',
        link: 'https://github.com/orgs/Kim-Gu-hyeon-Family/repositories',
    },
    {
        title: 'React & Express Project',
        description: '2024-1 스킬업 챌린지 프로젝트.',
        link: 'https://github.com/ksw-and-friends/Codi-Assistant',
    },
];

const createProjectItem = (project: Project): HTMLElement => {
    const projectItem = document.createElement('div');
    projectItem.className = 'project-item';

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;
    projectItem.appendChild(projectTitle);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;
    projectItem.appendChild(projectDescription);

    projectItem.addEventListener('click', () => {
        window.open(project.link, '_blank');
    });

    projectItem.style.cursor = 'pointer';

    return projectItem;
};

const loadProjects = () => {
    const projectsList = document.getElementById('projects-list');
    if (projectsList) {
        projects.forEach((project) => {
            const projectItem = createProjectItem(project);
            projectsList.appendChild(projectItem);
        });
    }
};

document.addEventListener('DOMContentLoaded', loadProjects);
