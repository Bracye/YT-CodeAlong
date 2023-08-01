import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { SocialIcons } from './styles/SocialIcons.styled'

export default function StyledSocialIcons() {
  return (
    <SocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://linkedin.com'>
          <FaLinkedin />
        </a>
      </li>
    </SocialIcons>
  )
}