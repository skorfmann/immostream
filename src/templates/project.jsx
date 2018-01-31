import React from 'react';
import Helmet from 'react-helmet';
import { Fade } from 'react-reveal';
import Palette from 'react-palette';
import format from 'date-fns/format';
import config from '../../config/SiteConfig';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/Footer';
import Container from '../components/Container/Container';
import styles from './project.module.scss';

const Project = (props) => {
  return (
    <div className="container project-container">
    </div>
  );
};

export default Project;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AirtableById {
    allAirtable {
      edges {
        node {
          id
          Name
          Rent
          Link
          Attachments {
            thumbnails {
              large {
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;
