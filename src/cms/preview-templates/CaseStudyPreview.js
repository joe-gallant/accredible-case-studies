import React from 'react'
import { CaseStudyTemplate } from '../../templates/case-study'

const CaseStudyPreview = ({ entry, widgetFor }) => {
  const post = entry.getIn(['data']).toJS()

  return (
    <CaseStudyTemplate
      data={post}
    />
  )
}

export default CaseStudyPreview
