const projects = [
  {
    tab: 0,
    title: 'Project 1',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: true,
    teconologies: ['React', 'Vite'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 0,
    title: 'Project 2',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['React', 'Vite'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 0,
    title: 'Project 3',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['NextJs'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 0,
    title: 'Project 4',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['NextJs'],
    github: 'https://github.com/enzoly'
  },
  {
    tab: 1,
    title: 'Project 5',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: true,
    teconologies: ['Java'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 1,
    title: 'Project 6',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['Java'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 1,
    title: 'Project 7',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['Kotlin'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 1,
    title: 'Project 8',
    url: 'https://github.com/enzoly',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['Kotlin'],
    github: 'https://github.com/enzoly'
  },
  {
    tab: 2,
    title: 'MichiGram',
    url: 'https://instagram-clone-enzoly.vercel.app/',
    imgUrl: 'https://via.placeholder.com/300x200',
    description: 'A clone of Instagram but i upload images and videos of my cats',
    recent: true,
    teconologies: ['NextJs', 'Firebase'],
    github: 'https://github.com/enzoly/michigram'
  }
]

export const getAllProjects = (tabIndex) => Promise.resolve(projects.filter(project => project.tab === tabIndex))
