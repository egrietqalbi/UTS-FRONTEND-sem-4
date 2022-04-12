import {useState} from'react'
function Toko(props){
    const [angka, setAngka] = useState(0);
    const ubahAngka = () => {
        setAngka(angka + 1);
    }
    return(
        <div className="card">
        <div className="card-body">
            <h4 className="card-title">Toko Sepatu</h4>
            <p className="card-text">Nama barang = {props.barang}</p>
            <p className="card-text">Total barang = {angka}</p>
            <button onClick={ubahAngka}>Tambah</button>
        </div>
        </div>
    )
}
export default Toko;