import { increment, decrement } from '@store/counter/counterActions'
import Counter from '@components/counter/Counter'
import { AppState } from '@store/store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

const mapStateToProps = ({ counter }: AppState) => ({
  count: counter.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: () => dispatch(increment),
  remove: () => dispatch(decrement),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
