import React from 'react';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import ProjectListing from '../components/ProjectListing/ProjectListing';
import Footer from '../components/Footer/Footer';

const Index = (props) => {
  const airtableEdges = props.data.allAirtable.edges.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.node.CreatedAt) - new Date(a.node.CreatedAt);
  }).slice(0,45);
  return (
    <div className="container index-container">
      <Helmet>
        <title>{config.siteTitle}</title>
      </Helmet>
      <div>
        <ProjectListing airtableEdges={airtableEdges} />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query AirtTable {
    allAirtable {
      edges {
        node {
          id
          Name
          Rent
          Link
          Address
          CreatedAt
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
