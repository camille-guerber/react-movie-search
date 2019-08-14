import React from 'react'
import { connect } from 'react-redux';

class PageList extends React.Component {
    render() {
        const { pages } = this.props
        const pageTitles = pages.map((page, index) => {
            return (
                <li key={index}>{page.title}</li>
            )
        })

        return(
            <div>
                <p>Hello welcome one the page list</p>
                <h4>All pages</h4>
                <ul>
                   {pageTitles}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pages: state.page,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PageList)