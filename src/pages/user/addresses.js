import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";

//internal import
import Error from "@component/form/Error";
import Dashboard from "@pages/user/dashboard";
import InputArea from "@component/form/InputArea";
import UserServices from "@services/UserServices";
import { notifyError, notifySuccess } from "@utils/toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import AddressService from "@services/AddressService";
import { coolGray } from "tailwindcss/colors";
const Addresses = () => {
  const [addAddressField, setAddressField] = useState(false);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("Ontario");
  const [zip, setZip] = useState("");
  const [userId, setUserId] = useState("");
  const [addressDetails, setAddressDetails] = useState([]);
  const [updateField, setUpdateField] = useState(false);
  const [editAddress, setEditAddress] = useState("");
  const [editCity, setEditCity] = useState("");
  const [editProvince, setEditProvince] = useState("Ontario");
  const [editZip, setEditZip] = useState("");
  const [eid, setEditId] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const refresh = async () => {
    const user = JSON.parse(Cookies.get("userInfo"));
    const addr = await AddressService.getAllAddresses(user._id);
    setAddressDetails(addr);
    setAddress("");
    setCity("");
    setProvince("");
    setZip("");
    setEditAddress("");
    setEditCity("");
    setEditProvince("");
    setEditZip("");
    // setAdd(addr)
    // let addresDetails = localStorage.getItem('addresses');
    // if(addresDetails){
    //   addresDetails = JSON.parse(addresDetails)
    //   setAddressDetails(addresDetails);
    // }
    // else{
    //     setAddressDetails([])
    // }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    AddressService.createAddress({
      address,
      userId,
      city,
      province: "Ontario",
      zip,
    })
      .then((res) => {
        if (res) {
          notifySuccess(res.message);
          refresh();
        }
      })
      .catch((err) => {
        notifyError(err ? err.response.data.message : err.message);
      });
    // addressDetails.push(address)
    // localStorage.setItem('addresses',JSON.stringify(addressDetails))
    setAddressField(false);
  };
  const getAddress = (id, address, city, province, zip) => {
    setEditId(id);
    setUpdateField(true);
    setEditAddress(address);
    setEditCity(city);
    setEditProvince(province);
    setEditZip(zip);
  };

  const updateAddress = (id, address) => {
    AddressService.updateAddress(eid, {
      address: editAddress,
      userId,
      city: editCity,
      province: "Ontario",
      zip: editZip,
    })
      .then((res) => {
        if (res) {
          notifySuccess(res.message);
          refresh();
          setUpdateField(false);
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err ? err.response.data.message : err.message);
      });
  };

  const deleteAddress = (id) => {
    AddressService.deleteAddress(id)
      .then((res) => {
        if (res) {
          notifySuccess(res.message);
          refresh();
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError(err ? err.response.data.message : err.message);
      });
  };
  useEffect(() => {
    if (Cookies.get("userInfo")) {
      const user = JSON.parse(Cookies.get("userInfo"));
      setValue("email", user.email);
      setUserId(user._id);
      refresh();
    }
  }, []);
  return (
    <Dashboard
      title="Your Addresses"
      description="This is users addresses page"
    >
      <div className="flex justify-between flex-wrap">
        <h2 className="text-xl font-serif font-semibold mb-5">
          Your Addresses
        </h2>
        <button
          // type="submit"
          className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-6 lg:px-8 py-2 md:py-3 lg:py-3 hover:text-white hover:bg-green-600 h-12 text-sm lg:text-sm w-full sm:w-auto"
          onClick={() => setAddressField(true)}
        >
          Add New Address
        </button>
      </div>
      {addAddressField && (
        <form onSubmit={onSubmit}>
          <label
            htmlFor="address"
            className="form-label inline-block mb-1 text-gray-700"
          >
            Address
          </label>
          <div className="flex justify-center">
            <textarea
              className="
                    form-control
                    block
                    w-full
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
              id="address"
              rows="3"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>

          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center">
              <label
                htmlFor="city"
                className="form-label inline-block mt-4 mr-11 text-gray-700"
              >
                City
              </label>
              <input
                className="
                    form-control
                    block
                    p-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="city"
                rows="3"
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </div>
            <div className="flex justify-center">
              <label
                htmlFor="province"
                className="form-label inline-block mt-4 mr-2 text-gray-700"
              >
                Province
              </label>

              <input
                className="
                    form-control
                    block
                    p-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="province"
                rows="3"
                value="Ontario"
                disabled
                placeholder="Province"
                onChange={(e) => setProvince(e.target.value)}
              ></input>
            </div>
            <div className="flex justify-center">
              <label
                htmlFor="zip"
                className="form-label inline-block mt-4 text-gray-700"
              >
                Zip/Postal
              </label>
              <input
                className="
                    form-control
                    p-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="zip"
                rows="3"
                minLength={6}
                maxLength={6}
                placeholder="Zip/Postal"
                onChange={(e) => setZip(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-5 lg:px-5 py-2 md:py-2 lg:py-2 hover:text-white hover:bg-green-600 h-10 text-sm lg:text-sm w-full sm:w-auto mr-2"
              onClick={() => setAddressField(false)}
            >
              Clear
            </button>
            <button
              type="submit"
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-5 lg:px-5 py-2 md:py-2 lg:py-2 hover:text-white hover:bg-green-600 h-10 text-sm lg:text-sm w-full sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      )}
      {updateField && (
        <div>
          <label
            htmlFor="address"
            className="form-label inline-block mb-1 text-gray-700"
          >
            Address
          </label>
          <div className="flex justify-center">
            <textarea
              className="
                    form-control
                    block
                    w-full
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
              id="address"
              rows="3"
              placeholder="Address"
              defaultValue={editAddress}
              onChange={(e) => setEditAddress(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex justify-center">
              <label
                htmlFor="city2"
                className="form-label inline-block mt-4 mr-11 text-gray-700"
              >
                City
              </label>
              <input
                className="
                   form-control
                    block
                    p-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="city2"
                rows="3"
                placeholder="City"
                defaultValue={editCity}
                onChange={(e) => setEditCity(e.target.value)}
              />
            </div>


            <div className="flex justify-center">
              <label
                htmlFor="province2"
                className="form-label inline-block mt-4 mr-2 text-gray-700"
              >
                Province
              </label>
              <input
                className="
                    form-control
                    block
                    p-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="province2"
                rows="3"
                disabled
                placeholder="Province"
                defaultValue={editProvince}
                onChange={(e) => setEditProvince(e.target.value)}
              />
            </div>


            <div className="flex justify-between">
              <label
                htmlFor="zip2"
                className="form-label inline-block mt-4 text-gray-700"
              >
                Zip/Postal
              </label>
              <input
                className="
                    form-control
                    block
                    p-2
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-2
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="zip2"
                rows="3"
                minLength={6}
                maxLength={6}
                placeholder="Zip/Postal"
                defaultValue={editZip}
                onChange={(e) => setEditZip(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-5 lg:px-5 py-2 md:py-2 lg:py-2 hover:text-white hover:bg-green-600 h-10 text-sm lg:text-sm w-full sm:w-auto mr-2"
              onClick={() => setUpdateField(false)}
            >
              Clear
            </button>
            <button
              className="md:text-sm leading-5 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-medium text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none bg-green-500 text-white px-5 md:px-5 lg:px-5 py-2 md:py-2 lg:py-2 hover:text-white hover:bg-green-600 h-10 text-sm lg:text-sm w-full sm:w-auto"
              onClick={() => updateAddress()}
            >
              Update
            </button>
          </div>
        </div>
      )}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-3">
        {addressDetails &&
          addressDetails.map((addr, index) => {
            return (
              <div
                className="border-2 p-3 border-slate-300 rounded"
                key={index}
              >
                <div className="">
                  {/*<input type="radio" id={index} name="address" className="appearance-none indeterminate:bg-gray-300" value={addr.address} />*/}
                  <label htmlFor={index}>
                    {addr.address}, {addr.city}, {addr.province}, {addr.zip}
                  </label>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() =>
                      getAddress(
                        addr._id,
                        addr.address,
                        addr.city,
                        addr.province,
                        addr.zip
                      )
                    }
                  >
                    <FiEdit
                      className="flex-shrink-0 h-4 w-4 m-2 text-blue-500"
                      aria-hidden="true"
                    />
                  </button>
                  <button onClick={() => deleteAddress(addr._id)}>
                    <FiTrash2
                      className="flex-shrink-0 h-4 w-4 m-2 text-red-500"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </Dashboard>
  );
};

export default Addresses;
