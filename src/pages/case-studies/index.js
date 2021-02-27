import React from 'react'

import Layout from '../../components/Layout'
import CaseStudyResults from '../../components/CaseStudyResults'
import { FilterBar } from '../../components/FilterBar/FilterBar'
import { Banner } from '../../components/Banner'
export default class CaseStudyIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Banner title="Case Study Library" search placeholder="Search for a case study" submitSearch={(searchTerm) => alert(searchTerm)}></Banner>
        <section className="section">
          <div className="container">

            <FilterBar />
            <CaseStudyResults />

          </div>
        </section>
      </Layout>
    )
  }
}
