import { connect } from 'react-redux';
import imports from '../components/Imports';
import { fetchMakes } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}
const mapDispatcToProps = (dispatch) => {
    return {
        fetchMakes: ()=> dispatch(fetchMakes())
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(imports)