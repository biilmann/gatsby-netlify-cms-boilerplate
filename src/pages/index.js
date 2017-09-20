import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const KeepReading = styled.span`
  a {
    background-color: rebeccapurple;
    padding: 4px 10px;
    font-size: 12px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-family: sans-serif;
    margin: 0 10px;
    border-radius: 3px;
  }
`;

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="blog-posts">
      {posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
        return (
          <div className="blog-post-preview" key={post.id}>
            <h1>
              <Link to={post.frontmatter.path}>
                {post.frontmatter.title}
              </Link>
            </h1>
            <h2>
              {post.frontmatter.date}
            </h2>
            <p>
              {post.excerpt}
              <KeepReading>
                <Link to={post.frontmatter.path}>Keep Reading</Link>
              </KeepReading>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
