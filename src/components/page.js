import React from 'react'
import { connect } from 'react-redux'
import { getPages } from '../actions/page';

class Page extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>Hello I'm a page</div> 
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Page)