import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from '../store/userSlice.js';
import { changeCount } from '../store.js';

function Cart() {

    let userItem = useSelector((state) => { return state.userItem })
    let user = useSelector((state) => { return state.user })
    console.log(user)
    
    let dispatch = useDispatch()

    return (
        <div>

            {user.name}({user.age})의 장바구니
            <button onClick={()=> {
                dispatch(changeAge(1))
            }}>늙는 버튼임</button>
            <button onClick={()=> {
                dispatch(changeAge(10))
            }}>심하게 늙는 버튼임</button>
            
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userItem.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.name}</td>
                                    <td>{a.count}개</td>
                                    <td>
                                        <button onClick={()=> {
                                            dispatch(changeCount(a.id))
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;