/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./App.css";
import "./Reviews"
import Reviews from "./Reviews";
import PropTypes from 'prop-types'; // ES6
 


function App() {
  return (
    // setiap komponen kalau jamak/ lebih dari satu
    // harus di bungkus parent/div
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" category="Lebaran" name="Sepatu Sneakers" />
      <Reviews />
    </div>
  );
}

// menambahkan diskon
// conditional rendering
function CheckDiscount(props) {
  const { isDiscount, discount} = props;

  if (isDiscount == `yes`) {
    return <p>Diskon {discount}% off</p>;
  } else if (isDiscount == "comming") {
    return <p>Comming Soon</p>;
  }
}


function FotoProduk() {
  return (
    <div className="Foto">
      <img src="https://images.pexels.com/photos/2812474/pexels-photo-2812474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    </div>
  );
}


// Buat Object/ Halaman Baru
// membuat object category dengan props

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const price = `74.000.000`;
  const benefits = [
    "Tidak Kusut Terkena Air",
    "Bahan Lebih Halus",
    "Tidak Gerak",
  ];
  const listItems = benefits.map((benefits) => <li>{benefits}</li>);

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} discount={50} />
        <p className="Info">
          One Of the most recognizable shoes in the AJ Collection, The Converse
          features lightWeight, Visible cushioning just like the original from
          '88. Signature Details and Materials Celebrate The game-changing icon'
        </p>
        <ul>
          <li>{listItems}</li>
        </ul>
        {/*   <a onClick={(sub props) => TambahCart(req,ref.key)} href="#"> Add to Cart</a>*/}
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
// Arguments Event : cuma bisa 1 value aja ;
// onClick: Jangan Tambahin Tanda Kurung biar ga jalan otomatis

// e: props/argumen
function TambahCart(e) {
  return alert(`Berhasil Membeli Product ${e}`);
}

// propstypes memaksa jenis variabel tertentu 

// jadikan diskon itu string padahal sudah di set int hasilnyua 

// CheckDiscount.propTypes = {

//   discount: PropTypes.string;
// }

export default App;
