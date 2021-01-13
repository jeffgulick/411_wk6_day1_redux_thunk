import { connect } from 'react-redux';
import imports from '../components/Imports';
import { fetchMakes, deleteMakes } from '../redux/actions';


const mapStateToProps = (state) => {
    return {
        makes: state.makes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchMakes: ()=> dispatch(fetchMakes()),
        deleteMakes: (index) => dispatch(deleteMakes(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(imports)