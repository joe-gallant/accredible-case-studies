import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import CaseStudyPreview from './preview-templates/CaseStudyPreview'
import CaseStudyParentPreview from './preview-templates/CaseStudyParentPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import withStyledComponentsRendered from '../services/previewRender'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate(
  'index',
  withStyledComponentsRendered(IndexPagePreview)
)
CMS.registerPreviewTemplate(
  'about',
  withStyledComponentsRendered(AboutPagePreview)
)
CMS.registerPreviewTemplate(
  'case-study-library',
  withStyledComponentsRendered(CaseStudyParentPreview)
)
CMS.registerPreviewTemplate(
  'case-studies',
  withStyledComponentsRendered(CaseStudyPreview)
)
