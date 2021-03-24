import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import { Button } from '../components/Button'
import Content, { HTMLContent } from '../components/Content'
import { Helmet } from 'react-helmet'
import { useHubspotForm } from '@aaronhayes/react-use-hubspot-form';

export const SubscribePageTemplate = ({
  content,
  contentComponent,
  bannerImage,
  title,
  metaTitle,
  metaDescription,
  metaOGImage,
  bannerColor,
  bannerOverlay,
}) => {
  const PageContent = contentComponent || Content

  const { loaded, error, formCreated } = useHubspotForm({
        portalId: '2977146',
        formId: '85b2921e-3994-45a8-b863-00d8328392e7',
        target: '#my-hubspot-form'
    });

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:image" content={metaOGImage} />
      </Helmet>
      <Banner
        overlay={bannerOverlay}
        overlayColor={bannerColor}
        title={title}
        image={bannerImage}
      />
      <section className="section section--bg">
        <div className="container container--sm">
          <PageContent className="content" content={content} />
          <div id="my-hubspot-form"></div>
        </div>
      </section>
    </>
  )
}

SubscribePageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const SubscribePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SubscribePageTemplate
        title={post.frontmatter.title}
        bannerImage={post.frontmatter.subscribeBannerImage.publicURL}
        metaTitle={post.frontmatter.pageMeta.metaTitle}
        metaDescription={post.frontmatter.pageMeta.metaDescription}
        metaOGImage={post.frontmatter.pageMeta.OGImage.publicURL}
        contentComponent={HTMLContent}
        content={post.html}
        bannerColor={post.frontmatter.subscribeBannerColor}
        bannerOverlay={post.frontmatter.subscribeBannerOverlay}
      />
    </Layout>
  )
}

SubscribePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SubscribePage

export const subscribePageQuery = graphql`
  query SubscribePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageMeta {
          metaTitle
          metaDescription
          OGImage {
            publicURL
          }
        }
        title
        subscribeBannerOverlay
        subscribeBannerColor
        subscribeBannerImage {
          publicURL
        }
      }
    }
  }
`