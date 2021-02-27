import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        bannerTitle={data.banner.bannerTitle}
        bannerSubHeading={data.banner.bannerSubHeading}
        bannerButtonText={data.banner.bannerButtonText}
        bannerButtonLink={data.banner.bannerButtonLink}
        bannerTitle={data.banner.bannerTitle}
        bannerSubHeading={data.banner.bannerSubHeading}
        bannerButtonText={data.banner.bannerButtonText}
        bannerButtonLink={data.banner.bannerButtonLink}
        topPanelTitle={data.fullWidthImagePanel.panelTitle}
        topPanelText={data.fullWidthImagePanel.panelText}
        topPanelButtonText={data.fullWidthImagePanel.panelButtonText}
        topPanelButtonLink={data.fullWidthImagePanel.panelButtonLink}
        leftPanelTitle={data.leftTextPanel.panelTitle}
        leftPanelText={data.leftTextPanel.panelText}
        rightPanelTitle={data.rightTextPanel.panelTitle}
        rightPanelText={data.rightTextPanel.panelText}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
