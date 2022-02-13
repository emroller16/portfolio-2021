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
          link: 'https://www.figma.com/file/gypKJeGAe49YQxQ84EWojH/portfolio-2021?node-id=4%3A284',
          // status: 'Coming soon!',
        },
        {
          name: 'Design System 2.0',
          type: 'Design Systems',
          link: 'https://www.figma.com/proto/gypKJeGAe49YQxQ84EWojH/Emily's-Portfolio?node-id=831%3A2299&scaling=contain&page-id=7%3A261&starting-point-node-id=831%3A2299',
          // status: 'Coming soon!',
        },
        {
          name: 'Team processes',
          type: 'Organization / process',
          link: 'https://www.figma.com/file/gypKJeGAe49YQxQ84EWojH/portfolio-2021?node-id=101%3A119',
          // status: 'Coming soon!',
        },
        {
          name: 'A case in meta: Portfolio',
          type: 'Web development',
          link: 'https://www.figma.com/file/gypKJeGAe49YQxQ84EWojH/portfolio-2021?node-id=115%3A187',
          // status: 'Coming soon!',
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
                <a href={d.link} target="_blank" rel="noreferrer noopener">Read more</a>
                <p>{d.status}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
};
