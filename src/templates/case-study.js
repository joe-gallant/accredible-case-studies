import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  flex: 0 0 calc(50% - 24px);

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 600px) {
    margin-bottom: 24px;
    max-width: 300px;
  }
`;

const Content = styled.div`
  flex: 0 0 calc(50% - 24px);

  h3 {
    margin-bottom: 2px;
    margin-top: 12px;
  }

  p {
    font-size: 16px;
  }

  .synopsis {
    min-height: 100px;
    margin-bottom: 24px;
  }

  ul {
    list-style: none;

    li {
      margin: 0 0 6px 0;
      padding: 0;

      &:before {
        display: none;
      }
    }
  }
`;

export const CaseStudyTemplate = ({ post }) => {
  return (
    <>
      <Helmet titleTemplate="%s | Case Study">
        <title>{`${post.frontmatter.title}`}</title>
        <meta
          name="description"
          content={`${post.frontmatter.synopsis}`}
        />
      </Helmet>
      <Banner title={post.frontmatter.title} tagline={'Author: ' + post.frontmatter.author}></Banner>
      <section class="section section--bg">
        <div class="container container--sm">
          <Wrapper>
            <Image>
              {post.frontmatter.featuredimage && <img src={post.frontmatter.featuredimage.publicURL} alt={post.frontmatter.featuredimage.name} />}
            </Image>
            <Content>
              <ul>
                {post.frontmatter.platform && <li><strong>Platform:</strong> {post.frontmatter.platform}</li>}
                {post.frontmatter.date && <li><strong>Published:</strong> {post.frontmatter.date}</li>}
                {post.frontmatter.company_name && <li><strong>Company name:</strong> {post.frontmatter.company_name}</li>}
                {post.frontmatter.publishing_company_name && <li><strong>Publishing company name:</strong> {post.frontmatter.publishing_company_name}</li>}
              </ul>
              <hr />
              {post.frontmatter.synopsis && (
                <>
                  <h3>Synopsis:</h3>
                  <ReactMarkdown className="synopsis">{post.frontmatter.synopsis}</ReactMarkdown>
                  <hr />
                </>
              )}
              {post.frontmatter.topics && post.frontmatter.topics.length > 0 && (
                <>
                  <h3>Topics</h3>
                  <div className="tags-section">
                    {post.frontmatter.topics.map((topic, index) => <div key={index} className="single-tag">{topic}</div>)}
                  </div>
                  <br />
                  <hr />
                </>
              )}
              {post.frontmatter.industry && post.frontmatter.industry.length > 0 && (
                <>
                  <h3>Industries</h3>
                  <div className="tags-section">
                    {post.frontmatter.industry.map((ind, index) => <div key={index} className="single-tag">{ind}</div>)}
                  </div>
                  <br />
                  <hr />
                </>
              )}

            </Content>
          </Wrapper>
        </div>
      </section>
    </>
  )
}

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CaseStudyTemplate post={post} />
    </Layout>
  )
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        synopsis
        topics
        industry
        platform
        author
        company_name
        publishing_company_name
        featuredimage {
          publicURL
          name
        }
      }
    }
  }
`
