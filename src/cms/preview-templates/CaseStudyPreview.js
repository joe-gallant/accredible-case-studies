import React from 'react'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry, widgetFor }) => {
  const post = entry.getIn(['data']).toJS()

  return (
    <CaseStudyTemplate
      data={post}
      bannerImage={entry.getIn(['data', 'bannerImage'])}
      featuredImage={entry.getIn(['data', 'featuredimage'])}
      date="(This will show the date published)"
      featuredImageName=""
    />
  )
}

export default CaseStudyPreview
