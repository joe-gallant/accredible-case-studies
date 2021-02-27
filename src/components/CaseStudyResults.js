import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { Card } from './Card'
import styled from 'styled-components'

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SingleCard = styled.div`
  flex: 0 0 calc(50% - 12px);

  @media (max-width: 767px) {
    flex: 0 0 100%;
  }
`;

class CaseStudyResults extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Cards>
        {posts.map(post => (
          <SingleCard>
            <Card
              title={post.node.frontmatter.title}
              image={post.node.frontmatter.featuredimage?.childImageSharp.fluid.src}
              slug={post.node.fields.slug} 
              author={post.node.frontmatter.author} 
              date={post.node.frontmatter.date} 
              topics={post.node.frontmatter.topics} 
              />
          </SingleCard>
        ))}
      </Cards>
    )
  }
}

CaseStudyResults.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                author
                topics
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CaseStudyResults data={data} count={count} />}
  />
)
