export const getAllProjects = (tabIndex) => {
  const projects = [
    {
      tab: 0,
      title: 'Project 1',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true,
      teconologies: ['React', 'Vite']
    }, {
      tab: 0,
      title: 'Project 2',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['React', 'Vite']
    }, {
      tab: 0,
      title: 'Project 3',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['NextJs']
    }, {
      tab: 0,
      title: 'Project 4',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['NextJs']
    },
    {
      tab: 1,
      title: 'Project 5',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true,
      teconologies: ['Java']
    }, {
      tab: 1,
      title: 'Project 6',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Java']
    }, {
      tab: 1,
      title: 'Project 7',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Kotlin']
    }, {
      tab: 1,
      title: 'Project 8',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Kotlin']
    },
    {
      tab: 2,
      title: 'Project 9',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true,
      teconologies: ['NodeJs', 'expressjs']
    }, {
      tab: 2,
      title: 'Project 10',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['NodeJs']
    }, {
      tab: 2,
      title: 'Project 11',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Javascript']
    }, {
      tab: 2,
      title: 'Project 12',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false,
      teconologies: ['Javascript']
    }
  ]

  return Promise.resolve(projects.filter(project => project.tab === tabIndex))
}
