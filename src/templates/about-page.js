import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import Content, { HTMLContent } from '../components/Content'
import { Helmet } from "react-helmet";

export const AboutPageTemplate = ({ content, contentComponent, bannerImage, title, metaTitle, metaDescription }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <Banner title={title} image={bannerImage} />
      <section className="section section--bg">
        <div className="container container--sm">
          <PageContent className="content" content={content} />
        </div>
      </section>
    </>
  )
}

AboutPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        title={post.frontmatter.title}
        bannerImage={post.frontmatter.aboutBannerImage.publicURL}
        metaTitle={post.frontmatter.pageMeta.metaTitle}
        metaDescription={post.frontmatter.pageMeta.metaDescription}
        contentComponent={HTMLContent}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageMeta {
          metaTitle
          metaDescription
        }
        title
        aboutBannerImage {
          publicURL
        }
      }
    }
  }
`
