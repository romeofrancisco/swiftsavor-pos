import React from "react";
import { useMemo } from "react";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { logout } from "../store/slices/auth/authThunk";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { BsCart3, BsBasket } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { IoPricetagsOutline } from "react-icons/io5";
import { TbReceipt } from "react-icons/tb";

function Layout() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const roles = {
    manager: "Manager",
    employee: "Employee",
  };

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      navigate("/");
    });
  };

  const userNav = useMemo(() => {
    if (user?.role === roles.manager) {
      return [
        {
          name: "Dashboard",
          link: "/manager/dashboard",
          icon: <TfiDashboard size={23} />,
        },
        {
          name: "Products",
          link: "/manager/products",
          icon: <BsBasket size={23} />,
        },
        {
          name: "Categories",
          link: "/manager/categories",
          icon: <IoPricetagsOutline size={23} />,
        },
        {
          name: "Transactions",
          link: "/manager/all-transactions",
          icon: <TbReceipt size={23} />,
        },
      ];
    } else if (user?.role === roles.employee) {
      return [
        { name: "Order", link: "/employee/order", icon: <BsCart3 size={23} /> },
        {
          name: "Transactions",
          link: "/employee/transactions",
          icon: <TbReceipt size={23} />,
        },
      ];
    }
    return [];
  }, [user]);

  return (
    <div className="max-w-[100vw] min-h-screen flex">
      <div className="rounded-r-lg bg-DarkBackground w-[4.2rem] pt-[5rem] p-[0.6rem]">
        <div className="h-full flex flex-col justify-center">
          <ul className="flex flex-col gap-5 flex-grow items-center">
            {userNav.map((item, i) => (
              <li
                key={i}
                className={`tooltip tooltip-right w-full h-[2.9rem] flex justify-center items-center rounded-xl transition-colors duration-200 ${
                  location.pathname === item.link
                    ? "bg-Primary bg-opacity-60"
                    : "hover:bg-Background hover:bg-opacity-60"
                }`}
                data-tip={item.name}
              >
                <Link
                  to={item.link}
                  className="w-full h-full flex justify-center items-center"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className="h-[2.8rem] mb-7 pr-1  flex gap-2 justify-center items-center rounded-xl tooltip tooltip-right 
            cursor-pointer hover:bg-myBackground hover:bg-opacity-60"
            onClick={handleLogout}
            data-tip="Logout"
          >
            <BiLogOut size={25} />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
