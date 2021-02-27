import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Image = styled.div`
  flex: 0 0 calc(50% - 24px);

  img {
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  flex: 0 0 calc(50% - 24px);
  padding: 24px 0;
`;

export const CaseStudyTemplate = ({
  title,
  helmet,
  topics,
  author,
  synopsis,
  industry,
  platform,
  image,
}) => {
  return (
    <>
      {helmet || ''}
      <Banner title={title} tagline={author}></Banner>
      <section class="section section--bg">
        <div class="container container--sm">
          <Wrapper>
            <Image>
              <img src={image.publicURL} alt={image.name} />
            </Image>
            <Content>
              {author && <p>Author: <strong>{author}</strong></p>}
              {platform && <p>Platform: <strong>{platform}</strong></p>}
              {industry && <p>Industries: <strong>{industry.join(', ')}</strong></p>}
              {topics && <p>Topics: <strong>{topics.join(', ')}</strong></p>}
              {synopsis && <p>Synopsis:<br />{synopsis}</p>}
            </Content>
          </Wrapper>
        </div>
      </section>
    </>
  )
}

CaseStudyTemplate.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CaseStudyTemplate
        helmet={
          <Helmet titleTemplate="%s | Case Study">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.synopsis}`}
            />
          </Helmet>
        }
        topics={post.frontmatter.topics}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
        synopsis={post.frontmatter.synopsis}
        industry={post.frontmatter.industry}
        platform={post.frontmatter.platform}
        image={post.frontmatter.featuredimage}
      />
    </Layout>
  )
}

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        synopsis
        topics
        industry
        platform
        author
        featuredimage {
          publicURL
          name
        }
      }
    }
  }
`
