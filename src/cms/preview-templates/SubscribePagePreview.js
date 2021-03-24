import React from 'react'
import PropTypes from 'prop-types'
import { SubscribePageTemplate } from '../../templates/subscribe-page'

const SubscribePagePreview = ({ entry, widgetFor }) => (
  <SubscribePageTemplate
    title={entry.getIn(['data', 'title'])}
    bannerImage={entry.getIn(['data', 'subscribeBannerImage'])}
    content={widgetFor('body')}
    bannerColor={entry.getIn(['data', 'subscribeBannerColor'])}
    bannerOverlay={entry.getIn(['data', 'subscribeBannerOverlay'])}
  />
)

SubscribePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SubscribePagePreview
