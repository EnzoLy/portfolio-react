import { FaGithub, FaReact, FaTwitter } from 'react-icons/fa'
import { SiNextdotjs, SiVite } from 'react-icons/si'

const deafultIconStyles = {
  fontSize: '1.6em',
  marginLeft: '5px',
  marginRight: '5px',
  marginTop: '10px'
}

export const GitHubIcon = ({ href, styles }) => {
  return (
    <a href={href} style={{ ...deafultIconStyles, color: '#000', ...styles }} target='_blank' rel='noreferrer'>
      <FaGithub />
    </a>
  )
}

export const NextJsIcon = ({ styles }) => {
  return (
    <a href='https://nextjs.org/' style={{ ...deafultIconStyles, color: '#000', ...styles }} target='_blank' rel='noreferrer'>
      <SiNextdotjs />
    </a>
  )
}

export const ReactIcon = ({ styles }) => {
  return (
    <a href='https://reactjs.org/' style={{ ...deafultIconStyles, color: '#5cd3f3', ...styles }} target='_blank' rel='noreferrer'>
      <FaReact />
    </a>
  )
}

export const ViteIcon = ({ styles }) => {
  return (
    <a href='https://vitejs.dev/' style={{ ...deafultIconStyles, color: '#ffc820', ...styles }} target='_blank' rel='noreferrer'>
      <SiVite />
    </a>
  )
}

export const TwitterIcon = ({ href, styles }) => {
  return (
    <a href={href} style={{ ...deafultIconStyles, color: '#1d9bf0', ...styles }} target='_blank' rel='noreferrer'>
      <FaTwitter />
    </a>
  )
}
