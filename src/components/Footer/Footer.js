import React from 'react'

import './Footer.scss'

class Header extends React.Component {
  render () {
    return (
      <div className='footer'>
        <div className='block-social-network'>
          <div className='container'>
            <div className='row'>
              <div className='brand col-xs-3'>
                <a href='https://www.facebook.com/but' className='social-network' target='_blank'>
                  <i className='fa fa-twitter' />
                </a>
              </div>
              <div className='brand col-xs-3'>
                <a href='https://twitter.com/But' className='social-network' target='_blank'>
                  <i className='fa fa-discord' />
                </a>
              </div>
              <div className='brand col-xs-3'>
                <a href='https://www.youtube.com/user/but' className='social-network' target='_blank'>
                  <i className='fa fa-envelope-o' />
                </a>
              </div>
              <div className='brand col-xs-3'>
                <a href='https://www.youtube.com/user/but' className='social-network' target='_blank'>
                  <i className='fa fa-github' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='block-link-list'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-6 col-md-3 link'>
                <i className='fa fa-angle-right' /> <a href='#'>F.A.Q</a>
              </div>
              <div className='col-xs-6 col-md-3 link'>
                <i className='fa fa-angle-right' /> <a href='#'>Legal stuff</a>
              </div>
              <div className='col-xs-6 col-md-3 link'>
                <i className='fa fa-angle-right' /> <a href='#'>Widget</a>
              </div>
              <div className='col-xs-6 col-md-3 link'>
                <i className='fa fa-angle-right' /> <a href='#'>Patreon</a>
              </div>
            </div>
          </div>
        </div>
        <div className='block-blizzard-copyright'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                World of Warcraft and Blizzard Entertainment are all trademarks or registered trademarks of Blizzard
                Entertainment in the United States and/or other countries. These terms and all related materials, logos,
                 and images are copyright Blizzard Entertainment. This site is in no way associated with or endorsed by
                Blizzard Entertainment.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
