export const getAllProjects = (tabIndex) => {
  const projects = [
    {
      tab: 0,
      title: 'Project 1',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true
    }, {
      tab: 0,
      title: 'Project 2',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    }, {
      tab: 0,
      title: 'Project 3',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    }, {
      tab: 0,
      title: 'Project 4',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    },
    {
      tab: 1,
      title: 'Project 5',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true
    }, {
      tab: 1,
      title: 'Project 6',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    }, {
      tab: 1,
      title: 'Project 7',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    }, {
      tab: 1,
      title: 'Project 8',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    },
    {
      tab: 2,
      title: 'Project 9',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: true
    }, {
      tab: 2,
      title: 'Project 10',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    }, {
      tab: 2,
      title: 'Project 11',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    }, {
      tab: 2,
      title: 'Project 12',
      url: '#',
      imgUrl: 'https://via.placeholder.com/300x200',
      recent: false
    }
  ]

  return Promise.resolve(projects.filter(project => project.tab === tabIndex))
}
