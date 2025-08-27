import { useContext } from "react"
import { ListItemContext } from "../../contexts/CheckoutProviders/ListItemProvider"
import { ItemMapContext } from "../../contexts/CheckoutProviders/ItemMapProvider"
import { formatPrice } from "../../utils/formatPrice"

const ListItem = () => {
  const { listItem } = useContext(ListItemContext)
  const {itemMap} = useContext(ItemMapContext)
  return (
    <>
      <h4>Danh sách sản phẩm:</h4>
      <ul className='list-group mb-3'>
        {listItem.map(item => (
          <li key={item?._id} className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
              {item?.variant?.product?.name} {item?.variant?.name} {item?.color?.name} <span className='fw-bold'>x{itemMap[item?._id].quantity}</span>
            </div>
            <span className='text-danger fw-bold'>{formatPrice((item.price * itemMap[item?._id].quantity))}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListItem