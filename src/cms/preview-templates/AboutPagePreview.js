import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    bannerImage={entry.getIn(['data', 'aboutBannerImage'])}
    content={widgetFor('body')}
    bannerColor={entry.getIn(['data', 'aboutBannerColor'])}
    bannerOverlay={entry.getIn(['data', 'aboutBannerOverlay'])}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
