import React, { Component } from 'react'
import "../styles.scss"
import * as styles from './home-page-grid.module.scss';


export default class HomePageGrid extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [
        {
          name: 'Tyler Forge Design System',
          type: 'Design Systems',
          link: '/forge-ds',
          status: 'Coming soon!',
        },
        {
          name: 'Katie Arnold Photography',
          type: 'Web Design',
          link: '/katie-arnold',
          status: 'Coming soon!',
        },
        {
          name: 'Cru at UConn',
          type: 'Web Design',
          link: '/cru-uconn',
          status: 'Coming soon!',
        },
        {
          name: 'A case in meta: Portfolio',
          type: 'Web development',
          link: '/portoflio',
          status: 'Coming soon!',
        },
      ]
    }
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          {this.state.data.map(d => (
            <div className="portfolio-item">
              <div className="portfolio-inner">
                <p>{d.type}</p>
                <p className={styles.headline}>{d.name}</p>
                <p>{d.status}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
};