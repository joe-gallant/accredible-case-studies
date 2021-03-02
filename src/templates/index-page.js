import React from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { BannerCarousel } from '../components/BannerCarousel'
import { Button } from '../components/Button'
import ReactMarkdown from 'react-markdown'
import { Helmet } from "react-helmet";

const Section = styled.div`
  padding: 96px 0;

  &:last-of-type {
    background-color: #f4f5fa;
    margin-bottom: 48px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const ColumnLeft = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 767px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
`

const ColumnRight = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 24px;
  }

  .subTitle {
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 60px;
    font-weight: 700;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 42px;
    }
  }
`

export const IndexPageTemplate = ({
  bannerTitle,
  bannerSubHeading,
  bannerButtonText,
  bannerButtonLink,
  bannerImages,
  topPanelTitle,
  topPanelText,
  topPanelButtonText,
  topPanelButtonLink,
  leftPanelTitle,
  leftPanelText,
  rightPanelTitle,
  rightPanelText,
  metaTitle,
  metaDescription,
  metaOGImage
}) => (
  <>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:image" content={metaOGImage} />
    </Helmet>
    <BannerCarousel title={bannerTitle} subheading={bannerSubHeading} buttonText={bannerButtonText} buttonLink={bannerButtonLink} bannerImages={bannerImages}></BannerCarousel>
    <Section>
      <Container className="container">
        <ColumnLeft>
          <img alt="column-image" src="https://assets.website-files.com/5f68558b209a0b8f85194e47/5fdb7a8539bf2d2757ead9a2_premium_white_labelling-premium_wl_fullpage.png" />
        </ColumnLeft>
        <ColumnRight>
          <h2 className="subTitle">{topPanelTitle}</h2>
          <p className="text--lg">{topPanelText}</p>
          <Button ClickHandler={() => navigate(`${topPanelButtonLink}`)} text={topPanelButtonText} />
        </ColumnRight>
      </Container>
    </Section>
    <Section>
      <Container className="container">
        <ColumnLeft>
          <h2>{leftPanelTitle}</h2>
          <ReactMarkdown >{leftPanelText}</ReactMarkdown>
        </ColumnLeft>
        <ColumnRight>
          <h2>{rightPanelTitle}</h2>
          <ReactMarkdown>{rightPanelText}</ReactMarkdown>
        </ColumnRight>
      </Container>
    </Section>
  </>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log(frontmatter.pageMeta.OGImage)

  return (
    <Layout>
      <IndexPageTemplate
        metaTitle={frontmatter.pageMeta.metaTitle}
        metaDescription={frontmatter.pageMeta.metaDescription}
        metaOGImage={frontmatter.pageMeta.OGImage.publicURL}
        bannerTitle={frontmatter.banner.bannerTitle}
        bannerSubHeading={frontmatter.banner.bannerSubHeading}
        bannerButtonText={frontmatter.banner.bannerButtonText}
        bannerButtonLink={frontmatter.banner.bannerButtonLink}
        bannerImages={frontmatter.banner.bannerImages}
        topPanelTitle={frontmatter.fullWidthImagePanel.panelTitle}
        topPanelText={frontmatter.fullWidthImagePanel.panelText}
        topPanelButtonText={frontmatter.fullWidthImagePanel.panelButtonText}
        topPanelButtonLink={frontmatter.fullWidthImagePanel.panelButtonLink}
        leftPanelTitle={frontmatter.leftTextPanel.panelTitle}
        leftPanelText={frontmatter.leftTextPanel.panelText}
        rightPanelTitle={frontmatter.rightTextPanel.panelTitle}
        rightPanelText={frontmatter.rightTextPanel.panelText}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        pageMeta {
          metaTitle
          metaDescription
          OGImage {
            publicURL
          }
        }
        leftTextPanel {
          panelText
          panelTitle
        }
        banner {
          bannerButtonLink
          bannerButtonText
          bannerSubHeading
          bannerTitle
          bannerImages
        }
        rightTextPanel {
          panelText
          panelTitle
        }
        fullWidthImagePanel {
          panelButtonLink
          panelButtonText
          panelImage
          panelText
          panelTitle
        }
      }
    }
  }
`
