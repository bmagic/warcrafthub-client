import React from 'react'

import './Footer.scss'

class Footer extends React.Component {
  render () {
    return (
      <section className='footer'>
        <nav className='container text-center'>
          <div className='row social-network'>
            <div className='col-xs-6 col-sm-3'>
              <a href='https://twitter.com/warcraft_hub' className='div-link' target='_blank' />
              <i className='fa fa-twitter fa-fw' /> Twitter
            </div>
            <div className='col-xs-6 col-sm-3'>
              <a href='warcrafthub@gmail.com' className='div-link' target='_blank' />
              <i className='fa fa-envelope fa-fw' /> Email
            </div>
            <div className='col-xs-6 col-sm-3'>
              <a href='http://discord.gg/7j7QtvD' className='div-link' target='_blank' />
              Discord
            </div>
            <div className='col-xs-6 col-sm-3 patreon'>
              <a href='https://www.patreon.com/warcrafthub' className='div-link' target='_blank' />
              Patreon
            </div>
          </div>
        </nav>
        <div className='disclaimer'>
          <div className='container gray'>
            <div className='row'>
              <div className='col-sm-9'>
                <p>
                  World of Warcraft and Blizzard Entertainment are all trademarks or registered trademarks of Blizzard
                   Entertainment in the United States and/or other countries. These terms and all related materials,
                   logos, and images are copyright Blizzard Entertainment. This site is in no way associated with or
                   endorsed by Blizzard Entertainment.
                </p>
              </div>
              <ul className='col-sm-3'>
                <li><a href='#'>FAQs</a></li>
                <li><a href='#'>Legal Stuff</a></li>
                <li><a href='#'>Git Hub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Footer
