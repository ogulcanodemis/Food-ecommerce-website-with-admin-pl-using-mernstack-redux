import React from "react";
import menuler from "../yemekdata";
import MenuList from "../components/MenuList";
function HomePage() {
  return (
    <div>
      <div className="row ">
        {menuler.map((menu) => (
          <div className="col-md-4 g-0 p-5 ">
            {
              <MenuList
                menu={menu}
              /> /* menu propu oluşturduk menuyu mapledik.*/
            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
