import React from "react"
import { FacebookShareButton, FacebookIcon, 
         TwitterShareButton, TwitterIcon,
         EmailShareButton, EmailIcon } from 'react-share'

class Share extends React.Component {
  render() {

    const { url, title } = this.props
    return (
      <ul className="social-share">
        <li>Share:</li>
        <li>
            <FacebookShareButton url={url} quote={title}
              className="button">
              <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </li>
        <li>
            <TwitterShareButton url={url} quote={title}
              className="button">
              <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </li>
        <li>
            <EmailShareButton url={url} quote={title}
              className="button">
              <EmailIcon size={32} round={true} />
          </EmailShareButton>
        </li>
      </ul>
    )
  }
}

export default Share

