import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Palette from 'react-palette';
import styles from './ProjectListing.module.scss';
import format from 'date-fns/format';
import config from '../../../config/SiteConfig';

export default class ProjectListing extends React.PureComponent {
  getList() {
    const List = [];
    this.props.airtableEdges.forEach((airtableEdge) => {
      console.log(airtableEdge.node.Attachments)
      List.push({
        path: airtableEdge.node.id,
        cover: airtableEdge.node.Attachments && airtableEdge.node.Attachments[0].thumbnails && airtableEdge.node.Attachments[0].thumbnails.large.url,
        name: airtableEdge.node.Name,
        rent: airtableEdge.node.Rent,
        link: airtableEdge.node.Link,
        createdAt: format(airtableEdge.node.CreatedAt, config.dateFormat),
        address: airtableEdge.node.Address,
        imageURL: airtableEdge.node.Attachments && airtableEdge.node.Attachments[0].thumbnails && airtableEdge.node.Attachments[0].thumbnails.large.url,
      });
    });
    return List;
  }
  render() {
    const List = this.getList();
    return (
      <div className={styles.base}>
        {List.map(project => (
          <div key={project.path} className={styles.wrapper}>
            <div className={styles.content}>
              <div className={styles.image} >
                <div style={{ backgroundImage: "url(" + project.imageURL + ")", backgroundSize: "cover", backgroundPosition: "center", overflow: "hidden" }}>
                </div>
              </div>
              <a
                href={project.link}
                key={project.link}
                className={styles.link}
                target='_blank'
              >
                <Palette image={project.imageURL}>
                  {palette => (
                    <div
                      className={styles.overlay}
                      style={{ backgroundColor: palette.vibrant }}
                    />
					)}
                </Palette>
                <h2 className={styles.client} key={project.name}>
                  {project.name}
                </h2>
                <div className={styles.service} key={project.rent}>
                  <ul>
                    <li>{project.rent} Euro</li>
                    <li>{project.address}</li>
                    <li>Added: {project.createdAt}</li>
                  </ul>
                </div>
              </a>
            </div>
          </div>
		))}
      </div>
    );
  }
}
