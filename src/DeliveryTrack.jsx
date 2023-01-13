import dayjs from "dayjs"
import "./DeliveryTrack.css"

export const DeliveryTrack = (props) => {
    const {deliveryTrack, ok, error} = props
    console.log(deliveryTrack.to.name)

    if(!ok) return <div>조회결과없음  {error}</div>

    const deliveryStatus = [...deliveryTrack.progresses];

    return <div className="tracker">
        <div className="tracking-title">배송조회</div>
        <div className="tracking-illustration"></div>
        <div className="tracking-detail">
            <ul> 
        {deliveryStatus.map((pg, index) => {
            const {time, location, status, description} = pg;
            const date = dayjs(time).format('YYYY.MM.DD');
            const timeStr = dayjs(time).format('A HH:mm');

            return  <li key={"devlieryCell" + index} className="tracking-list">
                        <div className="loc">
                            <p className="loc__name">{location.name}</p>
                            <p className="loc__time">{date}{timeStr}</p>
                        </div>
                        <div className="desc">
                            <p className="desc__short">{status.text}</p>
                            <p className="desc__long">{description}</p>
                        </div>
                    </li>
        })}
            </ul>
        </div>
        <div className="tracking-info-title">기본정보</div>
        <div className="tracking-info">
            <ul>
                <li className="tracking-info-list">
                    <h4>받는사람</h4>
                    <p>{deliveryTrack.to.name}</p>
                </li>
                <li className="tracking-info-list">
                    <h4>택배사</h4>
                    <p>{deliveryTrack.carrier.name}</p>
                </li>
                <li className="tracking-info-list">
                    <h4>송장번호</h4>
                    <p>{deliveryTrack.carrier.id}</p>
                </li>
                <li className="tracking-info-list">
                    <h4>보낸사람</h4>
                    <p>{deliveryTrack.from.name}</p>
                </li>            
            </ul>
        </div>
    </div>
}






