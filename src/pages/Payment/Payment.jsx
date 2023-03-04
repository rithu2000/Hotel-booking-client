import { useLocation } from 'react-router-dom'
import { updateDate } from '../../Api/UserApi';
import Paypal from '../Payment/Paypal';

export default function Payment() {

  const location = useLocation()
  const data = location?.state;
  const Id = data.roomDet.D.roomId
  const UADate = data.roomDet.D.UA
  
  const pay = async () => {
    const data = await updateDate(Id, UADate)
  }

  return (
    <div>
      <button onClick={pay}>
        <Paypal />
        click
      </button>
    </div>
  )
}
