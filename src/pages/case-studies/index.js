import React from 'react'
import Layout from '../../components/Layout'
import CaseStudyResults from '../../components/CaseStudyResults'
import { FilterBar } from '../../components/FilterBar/FilterBar'
import { Banner } from '../../components/Banner'
export default class CaseStudyIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.resultRef = React.createRef();
  }

  setSearch(search) {
    this.setState({
      searchTerm: search
    });

    this.resultRef.current.scrollIntoView();
  }

  render() {
    return (
      <Layout>
        <Banner title="Case Study Library" search searchValue={this.state.searchTerm} placeholder="Search for a case study" submitSearch={(searchTerm) => this.setSearch(searchTerm)}></Banner>
        <section ref={this.resultRef} className="section">
          <div className="container">
            <FilterBar searchTerm={this.state.searchTerm} clearSearch={() => this.setSearch('')} />
            <CaseStudyResults />
          </div>
        </section>
      </Layout>
    )
  }
}
