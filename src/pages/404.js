import React from 'react'
import Layout from '../components/Layout'
import { Banner } from '../components/Banner'
import styled from 'styled-components'

const BannerContainer = styled.div`
  margin-bottom: 32px;
`

const NotFoundPage = () => (
  <Layout>
    <BannerContainer>
      <Banner title="Page not found" tagline="404"></Banner>
    </BannerContainer>
  </Layout>
)

export default NotFoundPage
