import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { addTagToURL } from '../services/tagClick'

const Section = styled.section`
  background: #f4f5fa;
  padding: 48px 0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 48px;
  border-radius: 8px;
  box-shadow: 0 8px 32px 0 rgb(40 41 85 / 15%);

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

  Button {
    margin-top: 30px;
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

export const CaseStudyTemplate = ({ data, date, bannerImage, featuredImage, featuredImageName }) => {
  return (
    <>
      <Helmet titleTemplate="%s | Case Study">
        <title>{data.pageMeta ? data.pageMeta.metaTitle : data.title}</title>
        <meta name="description" content={data.pageMeta ? data.pageMeta.metaDescription : data.synopsis} />
        {data.pageMeta && <meta property="og:image" content={data.pageMeta.OGImage.publicURL} />}
      </Helmet>
      <Banner image={bannerImage} smallHeader title={data.title} tagline={data.author ? 'Author: ' + data.author : null}></Banner>
      <Section className="section section--bg">
        <div className="container container--sm">
          <Wrapper>
            <Image>
              {featuredImage && <a href={data.websiteURL}><img src={featuredImage} alt={featuredImageName} /></a>}
              {data.websiteURL && <Button ClickHandler={() => window.location.href=data.websiteURL} text="Read Case Study" />}
            </Image>
            <Content>
              <ul>
                {data.platform && <li><strong>Platform:</strong> {data.platform}</li>}
                {date && <li><strong>Published:</strong> {date}</li>}
                {data.company_name && <li><strong>Company name:</strong> {data.company_name}</li>}
                {data.publishing_company_name && <li><strong>Publishing company name:</strong> {data.publishing_company_name}</li>}
              </ul>
              <hr />
              {data.synopsis && (
                <>
                  <h3>Synopsis:</h3>
                  <ReactMarkdown className="synopsis">{data.synopsis}</ReactMarkdown>
                  <hr />
                </>
              )}
              {data.topics && data.topics.length > 0 && (
                <>
                  <h3>Topics</h3>
                  <div className="tags-section">
                    {data.topics.map((topic, index) => <div onClick={() => addTagToURL(topic, 'topics')} key={index} className="single-tag">{topic}</div>)}
                  </div>
                  <br />
                  <hr />
                </>
              )}
              {data.industry && data.industry.length > 0 && (
                <>
                  <h3>Industries</h3>
                  <div className="tags-section">
                    {data.industry.map((ind, index) => <div onClick={() => addTagToURL(ind, 'industries')} key={index} className="single-tag">{ind}</div>)}
                  </div>
                  <br />
                  <hr />
                </>
              )}

            </Content>
          </Wrapper>
        </div>
      </Section>
    </>
  )
}

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CaseStudyTemplate 
        data={post.frontmatter} 
        bannerImage={post.frontmatter.bannerImage?.publicURL}
        featuredImage={post.frontmatter.featuredimage?.publicURL}
        featuredImageName={post.frontmatter.featuredimage?.name}
        date={post.frontmatter.date}
      />
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
        pageMeta {
          metaTitle
          metaDescription
          OGImage {
            publicURL
          }
        }
        date(formatString: "MMMM DD, YYYY")
        title
        websiteURL
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
        bannerImage {
          publicURL
        }
      }
    }
  }
`
