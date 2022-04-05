const projects = [
  {
    tab: 0,
    title: 'Project 1',
    url: 'https://github.com/enzoly',
    description: 'lore ipsum',
    recent: true,
    teconologies: ['React', 'Vite'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 0,
    title: 'Project 2',
    url: 'https://github.com/enzoly',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['React', 'Vite'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 0,
    title: 'Project 3',
    url: 'https://github.com/enzoly',
    description: 'lore ipsum',
    recent: false,
    teconologies: ['NextJs'],
    github: 'https://github.com/enzoly'
  }, {
    tab: 0,
    title: 'Project 4',
    url: 'https://github.com/enzoly',
    description: 'lorem ipsum',
    recent: false,
    teconologies: ['NextJs'],
    github: 'https://github.com/enzoly'
  },
  {
    tab: 1,
    title: 'RecipeBuilder',
    url: 'https://github.com/EnzoLy/RecipeBuilder',
    description: 'Small Api for manage recipes in Spigot/Bukkit',
    recent: true,
    teconologies: ['Java'],
    github: 'https://github.com/EnzoLy/RecipeBuilder'
  }, {
    tab: 1,
    title: 'Kit-Preview-Essentialsx-addon',
    url: 'https://www.spigotmc.org/resources/kit-preview-essentialsx-addon-1-12-1-17.67791/',
    description: 'Addon for EssentialsX Plugin',
    recent: false,
    teconologies: ['Java'],
    github: 'https://github.com/EnzoLy/Kit-Preview-Essentialsx-addon'
  }, {
    tab: 1,
    title: 'Hotbar',
    url: 'https://github.com/EnzoLy/Hotbar',
    description: 'Small API for manage hotbar of players in Spigot/Bukkit',
    recent: false,
    teconologies: ['Java'],
    github: 'https://github.com/EnzoLy/Hotbar'
  }, {
    tab: 1,
    title: 'ArmorEffects',
    url: 'https://www.spigotmc.org/resources/armor-effects.98482/',
    description: 'Give effects in armor or hand to player in Spigot/Bukkit',
    recent: false,
    teconologies: ['Java'],
    github: 'https://github.com/EnzoLy/ArmorEffects'
  }, {
    tab: 1,
    title: 'Skywars',
    url: 'https://github.com/EnzoLy/eSkywars',
    description: 'Plugin of famous game Skywars (unfinished)',
    recent: false,
    teconologies: ['Kotlin'],
    github: 'https://github.com/EnzoLy/eSkywars'
  },
  {
    tab: 2,
    title: 'MichiGram',
    url: 'https://instagram-clone-enzoly.vercel.app/',
    description: 'A clone of Instagram but i upload images and videos of my cats',
    recent: true,
    teconologies: ['NextJs', 'Firebase'],
    github: 'https://github.com/enzoly/michigram'
  }
]

export const getAllProjects = (tabIndex) => Promise.resolve(projects.filter(project => project.tab === tabIndex))
