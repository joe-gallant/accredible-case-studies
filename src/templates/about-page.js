import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'
import { Button } from '../components/Button'
import { Banner } from '../components/Banner'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Banner title={post.frontmatter.title} submitSearch={(searchTerm) => alert(searchTerm)} />
      <div className="container">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <p>lorem lorem ogierngoer ournegouern nogerunguoer nogunrg ouenrger oungr <a href="#">this is a link.</a> nrg ouenrger oung</p>
        <p><strong>strong text</strong> lorem lorem ogierngoer ournegouern nogerunguoer nogunrg ouenrger oungr <a href="#">this is a link.</a> nrg ouenrger oung</p>
        <ul>
          <li>Test list item</li>
          <li>Test list item</li>
          <li>Test list item</li>
          <li>Test list item</li>
        </ul>
        <ol>
          <li>Test list item</li>
          <li>Test list item</li>
          <li>Test list item</li>
          <li>Test list item</li>
        </ol>
        <Button small ClickHandler={() => navigate('/')} text="Test small" />
        <Button ClickHandler={() => navigate('/')} text="Test normal" />
      </div>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
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
      }
    }
  }
`
