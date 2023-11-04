import React from "react";
function MenuList({ menu }) {
  return (
    <div>
      <div className="card m-auto my-3  ">
        <img src={menu.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{menu.ad} Menü Adı:</h5>
          <p className="card-text"> {menu.desc} Menü Acıklaması</p>
          <a href="#" style={{ textDecoration: "none" }}>
            Sepete Ekle
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
