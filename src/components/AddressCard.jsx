import { saveAddressesToLocalStorage } from "@/app/lib/localStorage";
import { appContext } from "@/contexts/AppContext";
import { useContext } from "react";

const AddressCard = ({ address, handleEditAddress, setPrevAddress, isActionAllowed }) => {
  const {
    fullName, mobileNumber, email,
    house, street, landmark,
    pincode, city, state,
  } = address;

  const { order, setOrder, addresses, setAddresses } = useContext(appContext);

  const handleSelectAddress = () => {
    setOrder({ ...order, address: address });
  }

  const handleDeleteAddress = () => {
    const temp = addresses?.filter((d) => d.id !== address.id);
    setAddresses(temp);
    saveAddressesToLocalStorage('addresses', temp);
    if (order.address.id === address.id) setOrder({ ...order, address: null });
  }

  const addressLine1 = [house, street, landmark].filter(Boolean).join(" | ");
  const addressLine2 = [city, state].filter(Boolean).join(", ") + (pincode ? ` – ${pincode}` : "");

  if (!address || !handleEditAddress || !setPrevAddress) return null;

  const isSelected = order.address === address;

  return (
    <div
      onClick={(e) => {
        if (isActionAllowed) {
          e.stopPropagation();
          handleSelectAddress();
        }
      }}
      className={`w-full rounded-2xl border p-4 transition-all duration-200 ${isActionAllowed ? "cursor-pointer" : ""} ${isSelected ? "border-emerald-400 bg-emerald-50 shadow-sm shadow-emerald-100" : "border-stone-200 bg-white hover:border-emerald-300 hover:shadow-sm"}`}
    >

      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          {isSelected && (
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          )}
          <p className={`font-bold text-base tracking-tight ${isSelected ? "text-emerald-700" : "text-stone-800"}`}>
            {fullName}
          </p>
        </div>

        {isActionAllowed && (
          <div className="flex gap-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPrevAddress(address);
                handleEditAddress();
              }}
              className="text-xs font-semibold text-emerald-700 border border-emerald-200 bg-emerald-50 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 px-3 py-1 rounded-full transition-all duration-150"
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteAddress();
              }}
              className="text-xs font-semibold text-red-500 border border-red-200 bg-red-50 hover:bg-red-500 hover:text-white hover:border-red-500 px-3 py-1 rounded-full transition-all duration-150"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 border-t border-stone-100 pt-3">
        <Row label="Address">
          {addressLine1 && <>{addressLine1}<br /></>}
          {addressLine2}
        </Row>
        <Row label="Phone">{mobileNumber}</Row>
        <Row label="Email">{email}</Row>
      </div>

    </div>
  );
};

const Row = ({ label, children }) => (
  <div className="w-full flex gap-3">
    <span className="min-w-[56px] pt-px text-xs font-bold uppercase tracking-widest text-stone-400 shrink-0">
      {label}
    </span>
    <span className="text-sm leading-relaxed text-stone-700">{children}</span>
  </div>
);

export default AddressCard;