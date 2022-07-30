/* eslint-disable no-restricted-globals */
import { useDispatch, useSelector } from 'react-redux'

import { useInjectReducer, useInjectSaga } from '../utils'
import reducer from '../store/global/reducer'
import saga from '../store/global/saga'
import { testAction } from '../store/global/action'
import { makeSelectUsers } from '../store/global/selector'

export const useGlobalStore = () => {
    useInjectSaga({ key: 'globalStore', saga })
    useInjectReducer({ key: 'globalStore', reducer })
    const dispatch = useDispatch()

    const users = useSelector(makeSelectUsers())
    const testSaga = () => dispatch(testAction())

    return { users, testSaga }
}
