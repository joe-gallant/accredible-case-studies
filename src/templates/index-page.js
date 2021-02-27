import React from 'react'
import PropTypes from 'prop-types'
import { graphql, navigate } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { BannerCarousel } from '../components/BannerCarousel'
import { Button } from '../components/Button'

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
  justify-content: center;
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

  p {
    margin-bottom: 24px;
  }
`

export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
}) => (
  <>
    <BannerCarousel title={heading} subheading={subheading}></BannerCarousel>
    <Section>
      <Container className="container">
        <ColumnLeft>
          <img src="https://assets.website-files.com/5f68558b209a0b8f85194e47/5fdb7a8539bf2d2757ead9a2_premium_white_labelling-premium_wl_fullpage.png" />
        </ColumnLeft>
        <ColumnRight>
          <h2 class="subTitle">What is the purpose of this site?</h2>
          <p className="text--lg">This site hosts a collection of links to digital credential case studies from a variety of different platform providers, brand names, and industry types. The case studies provide real-life applications of digital credentials and how they made a difference to the target organization. For more information, read our guide to What Is A Case Study or start browsing the library.</p>
          <Button ClickHandler={() => navigate('/case-studies')} text="Subscribe for Updates" />
        </ColumnRight>
      </Container>
    </Section>
    <Section>
      <Container className="container">
        <ColumnLeft>
          <h2>What is the purpose of this site?</h2>
          <p className="text--lg">This site hosts a collection of links to digital credential case studies from a variety of different platform providers, brand names, and industry types. The case studies provide real-life applications of digital credentials and how they made a difference to the target organization. For more information, read our guide to What Is A Case Study or start browsing the library.</p>
        </ColumnLeft>
        <ColumnRight>
          <h2>What is the purpose of this site?</h2>
          <p className="text--lg">This site hosts a collection of links to digital credential case studies from a variety of different platform providers, brand names, and industry types. The case studies provide real-life applications of digital credentials and how they made a difference to the target organization. For more information, read our guide to What Is A Case Study or start browsing the library.</p>
        </ColumnRight>
      </Container>
    </Section>
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
      }
    }
  }
`
