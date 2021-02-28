import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import Content, { HTMLContent } from '../components/Content'
import { Helmet } from "react-helmet";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <Helmet>
        <title>Replace with CMS</title>
      </Helmet>
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
      <Banner title={post.frontmatter.title} image={post.frontmatter.bannerImage} submitSearch={(searchTerm) => alert(searchTerm)} />
      <AboutPageTemplate
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
        title
        bannerImage
      }
    }
  }
`
