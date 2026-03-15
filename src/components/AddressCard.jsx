import Button from "./Button";

const AddressCard = ({ address ,handleEditAddress }) => {
  const {
    fullName, mobileNumber, email,
    house, street, landmark,
    pincode, city, state,
  } = address;

  const addressLine1 = [house, street, landmark].filter(Boolean).join(" | ");
  const addressLine2 = [city, state].filter(Boolean).join(", ") +
    (pincode ? ` – ${pincode}` : "");

  return (
    <div className="w-[100%] rounded-xl border-1 border-green-500 bg-white p-3 font-sans shadow-sm">
      <div className="flex justify-between items-center p-1">
        <p className="font-semibold text-green-700 text-xl">{fullName}</p>
         <button className="hover:bg-green-700 hover:text-white border-1 border-green-700 w-fit h-fit text-green-700 cursor-pointer px-4 py-1 rounded-full transition-transform duration-200" onClick={handleEditAddress}>
            Edit
        </button>
      </div>

      <div className="w-[100%] flex flex-col text-sm gap-1 border-t border-gray-200 pt-3">
        <Row label="Address:">
          {addressLine1 && <>{addressLine1}<br /></>}
          {addressLine2}
        </Row>
        <Row label="Phone:">{mobileNumber}</Row>
        <Row label="Email:">{email}</Row>
      </div>
    </div>
  );
};

const Row = ({ label, children }) => (
  <div className=" w-full flex sm:gap-3 gap-5">
    <span className="min-w-[64px] pt-[2px] font-semibold uppercase tracking-widest text-gray-400">
      {label}
    </span>
    <span className="leading-relaxed text-gray-800">{children}</span>
  </div>
);

export default AddressCard;