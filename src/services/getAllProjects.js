const projects = [
  {
    tab: 0,
    title: 'Project 1',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: true,
    teconologies: ['React', 'Vite']
  }, {
    tab: 0,
    title: 'Project 2',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['React', 'Vite']
  }, {
    tab: 0,
    title: 'Project 3',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['NextJs']
  }, {
    tab: 0,
    title: 'Project 4',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['NextJs']
  },
  {
    tab: 1,
    title: 'Project 5',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: true,
    teconologies: ['Java']
  }, {
    tab: 1,
    title: 'Project 6',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['Java']
  }, {
    tab: 1,
    title: 'Project 7',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['Kotlin']
  }, {
    tab: 1,
    title: 'Project 8',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['Kotlin']
  },
  {
    tab: 2,
    title: 'MichiClone',
    url: 'https://instagram.com',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'A clone of Instagram but i upload images and videos of my cats',
    recent: true,
    teconologies: ['NextJs', 'Firebase']
  },
  {
    tab: 2,
    title: 'MichiClone',
    url: 'https://instagram.com',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'A clone of Instagram but i upload images and videos of my cats',
    recent: true,
    teconologies: ['NextJs', 'Firebase']
  },
  {
    tab: 2,
    title: 'MichiClone',
    url: 'https://instagram.com',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'A clone of Instagram but i upload images and videos of my cats',
    recent: true,
    teconologies: ['NextJs', 'Firebase']
  },
  {
    tab: 2,
    title: 'MichiClone',
    url: 'https://instagram.com',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'A clone of Instagram but i upload images and videos of my cats',
    recent: true,
    teconologies: ['NextJs', 'Firebase']
  }
]

export const getAllProjects = (tabIndex) => Promise.resolve(projects.filter(project => project.tab === tabIndex))
