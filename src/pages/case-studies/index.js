import React from 'react'
import Layout from '../../components/Layout'
import { FilterBar } from '../../components/FilterBar/FilterBar'
import { Banner } from '../../components/Banner'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import { Card } from '../../components/Card'
import { filterCaseStudies } from '../../services/filter'

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const SingleCard = styled.div`
  flex: 0 0 calc(50% - 12px);

  @media (max-width: 767px) {
    flex: 0 0 100%;
  }
`;
class CaseStudyIndexPage extends React.Component {
  constructor(props) {
    super(props);

    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    this.state = { 
      searchTerm: '', 
      originalResults: posts,
      filteredResults: posts,
      topics: this.getArraysFromPosts(posts, 'topics'),
      industries: this.getArraysFromPosts(posts, 'industry'),
      platforms: this.getPlatformsFromPosts(posts),
    };

    this.resultRef = React.createRef();
  }

  getArraysFromPosts(posts, type) {
    let array = posts.map(post => post.node.frontmatter[type])
    array = [].concat.apply([], array);
    array = array.filter(topic => topic !== null)
    return Array.from(new Set(array))
  }

  getPlatformsFromPosts(posts) {
    let array = posts.map(post => post.node.frontmatter.platform);
    array = array.filter(topic => topic !== null)
    return Array.from(new Set(array))
  }

  setSearch(search) {
    this.setState({
      searchTerm: search
    });

    this.resultRef.current.scrollIntoView();
  }

  filter(filters) {
    filterCaseStudies(this.state.originalResults, { searchTerm: this.state.searchTerm, filters });
  }

  render() {

    return (
      <Layout>
        <Banner title="Case Study Library" search searchValue={this.state.searchTerm} placeholder="Search for a case study" submitSearch={(searchTerm) => this.setSearch(searchTerm)}></Banner>
        <section ref={this.resultRef} className="section">
          <div className="container">
            <FilterBar 
              resultCount={this.state.filteredResults.length}
              searchTerm={this.state.searchTerm}
              clearSearch={() => this.setState({ searchTerm: ''})}
              industries={this.state.industries}
              topics={this.state.topics}
              platforms={this.state.platforms}
              updateToFilters={(filters) => this.filter(filters)}
            />
            <Cards>
              {this.state.filteredResults.map(post => (
                <SingleCard>
                  <Card
                    title={post.node.frontmatter.title}
                    image={post.node.frontmatter.featuredimage?.childImageSharp.fluid.src}
                    slug={post.node.fields.slug} 
                    author={post.node.frontmatter.author} 
                    date={post.node.frontmatter.date} 
                    topics={post.node.frontmatter.topics} 
                    />
                </SingleCard>
              ))}
            </Cards>
          </div>
        </section>
      </Layout>
    )
  }
}

CaseStudyIndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query CaseStudyQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "case-study" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                author
                topics
                industry
                platform
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 400, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <CaseStudyIndexPage data={data} count={count} />}
  />
)
