import React from 'react'
import { Banner } from '../../components/Banner'

const CaseStudyParentPreview = ({ entry, widgetFor }) => (
  <Banner
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'bannerImage'])}
  />
)

export default CaseStudyParentPreview
