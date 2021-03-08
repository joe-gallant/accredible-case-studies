import React from 'react'
import { Banner } from '../../components/Banner'

const CaseStudyParentPreview = ({ entry, widgetFor }) => (
  <Banner
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'bannerImage'])}
    overlayColor={entry.getIn(['data', 'bannerColor'])}
    overlay={entry.getIn(['data', 'bannerOverlay'])}
  />
)

export default CaseStudyParentPreview
