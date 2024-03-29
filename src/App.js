import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Item(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={props.url} className="card-img-top" style={{height: '18rem'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.price}<br/>
                  {props.content}</p>
                <a href="#" className="btn btn-primary">구매하기</a>
            </div>
        </div>
    );
}

function App() {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <Item name="iPhone12"
          url="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTlfMjI5%2FMDAxNzA4MjkyMzc1NjQ3.7_PJi666kOZ29D3K49M2zvstMEYJaQsvfhe_yNj0Glog.U1-HOwIYWFq-UShBh5qpu1a7oOQfhQXUeYR34XK5ckAg.PNG.ohsm3672%2Fimage.png&type=a340"
          price="120만원"
          content="부트스트랩은 이렇게 사용합니다." />
    <Item name="다우니 프리미엄"
          url="https://image11.coupangcdn.com/image/cmg/oms/banner/ee6fed04-5526-4189-b6fa-8981d2eb4c4f_1459x1200.jpg"
          content="다우니 실내건조 세탁세제 출시!"/>
    </div>

  );
}

export default App;
