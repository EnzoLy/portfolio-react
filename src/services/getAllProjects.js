export const getAllProjects = (tabIndex) => {
  const projects = [
    {
      tab: 0,
      title: 'Project 1',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true,
      teconologies: ['React', 'Vite']
    }, {
      tab: 0,
      title: 'Project 2',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['React', 'Vite']
    }, {
      tab: 0,
      title: 'Project 3',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['NextJs']
    }, {
      tab: 0,
      title: 'Project 4',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['NextJs']
    },
    {
      tab: 1,
      title: 'Project 5',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true,
      teconologies: ['Java']
    }, {
      tab: 1,
      title: 'Project 6',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Java']
    }, {
      tab: 1,
      title: 'Project 7',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Kotlin']
    }, {
      tab: 1,
      title: 'Project 8',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Kotlin']
    },
    {
      tab: 2,
      title: 'Project 9',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true,
      teconologies: ['NodeJs', 'expressjs']
    }, {
      tab: 2,
      title: 'Project 10',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['NodeJs']
    }, {
      tab: 2,
      title: 'Project 11',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Javascript']
    }, {
      tab: 2,
      title: 'Project 12',
      url: 'https://github.com/enzoly',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Javascript']
    }
  ]

  return Promise.resolve(projects.filter(project => project.tab === tabIndex))
}
