import { FaGithub, FaReact, FaTwitter, FaJava, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiVite, SiKotlin, SiJavascript, SiExpress } from 'react-icons/si'

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

export const JavaIcon = ({ styles }) => {
  return (
    <a href='https://www.java.com/' style={{ ...deafultIconStyles, color: '#cc0001', ...styles }} target='_blank' rel='noreferrer'>
      <FaJava />
    </a>
  )
}

export const KotlinIcon = ({ styles }) => {
  return (
    <a href='https://kotlinlang.org/' style={{ ...deafultIconStyles, color: '#7f52ff', ...styles }} target='_blank' rel='noreferrer'>
      <SiKotlin />
    </a>
  )
}

export const JavascriptIcon = ({ styles }) => {
  return (
    <a href='https://www.javascript.com/' style={{ ...deafultIconStyles, color: '#f0db4f', ...styles }} target='_blank' rel='noreferrer'>
      <SiJavascript />
    </a>
  )
}

export const NodeJsIcon = ({ styles }) => {
  return (
    <a href='https://nodejs.org/' style={{ ...deafultIconStyles, color: '#5d9353', ...styles }} target='_blank' rel='noreferrer'>
      <FaNodeJs />
    </a>
  )
}

export const IconExpressJS = ({ styles }) => {
  return (
    <a href='https://expressjs.com/' style={{ ...deafultIconStyles, color: '#3f3f3f', ...styles }} target='_blank' rel='noreferrer'>
      <SiExpress />
    </a>
  )
}

export const IconByName = ({ name }) => {
  switch (name.toLowerCase()) {
    case 'github':
      return <GitHubIcon />
    case 'nextjs':
      return <NextJsIcon />
    case 'react':
      return <ReactIcon />
    case 'vite':
      return <ViteIcon />
    case 'twitter':
      return <TwitterIcon />
    case 'java':
      return <JavaIcon />
    case 'kotlin':
      return <KotlinIcon />
    case 'javascript':
      return <JavascriptIcon />
    case 'nodejs':
      return <NodeJsIcon />
    case 'expressjs':
      return <IconExpressJS />
    default:
      return null
  }
}
