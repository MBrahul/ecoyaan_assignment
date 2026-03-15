"use client"

import { useContext, useEffect, useState } from "react";

import validate from "@/app/lib/validate";
import { appContext } from "@/contexts/AppContext";

const AddressFormModal = ({ isOpen, onClose, prevAddress }) => {

    const { order, setOrder } = useContext(appContext);

    const inputs = [
        { label: "Full Name", id: "fullName", placeholder: "Enter full name", required: true, type: "text", col: "full" },
        { label: "Mobile Number", id: "mobileNumber", placeholder: "Enter mobile number", required: true, type: "number", col: "half" },
        { label: "Email", id: "email", placeholder: "Enter email", required: true, type: "email", col: "half" },
        { label: "House / Flat / Building", id: "house", placeholder: "House no. / flat / building name", required: true, type: "text", col: "full" },
        { label: "Street / Area / Locality", id: "street", placeholder: "Street / area / locality", required: true, type: "text", col: "full" },
        { label: "Landmark", id: "landmark", placeholder: "Nearby landmark", required: false, type: "text", col: "full" },
        { label: "Pincode", id: "pincode", placeholder: "Pincode", required: true, type: "number", col: "half" },
        { label: "City / Town", id: "city", placeholder: "City / town", required: true, type: "text", col: "half" },
        { label: "State", id: "state", placeholder: "State", required: true, type: "text", col: "full" },
    ];


    const [errors, setErrors] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        house: "",
        street: "",
        landmark: "",
        pincode: "",
        city: "",
        state: "",
    });

    const [address, setAddress] = useState({
        fullName: "",
        mobileNumber: "",
        email: "",
        house: "",
        street: "",
        landmark: "",
        pincode: "",
        city: "",
        state: "",
    })

    const handleAddAddress = () => {
        try {
            for (let key in errors) {
                if (errors[key]) return;
            }
            setOrder({ ...order, address });
            onClose();
        } catch (error) {

        }
    }

    useEffect(() => {

        if (prevAddress && Object.keys(prevAddress).length)setAddress(prevAddress);

        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEsc);
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose, prevAddress]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl border border-gray-100 w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Sticky header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 sticky top-0 bg-white z-10">
                    <div>
                        <h2 className="text-base font-medium text-gray-900">Delivery address</h2>
                        <p className="text-xs text-gray-400 mt-0.5">Fields marked * are required</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors text-lg leading-none"
                    >
                        ×
                    </button>
                </div>

                {/* Scrollable form */}
                <div className="overflow-y-auto p-6">
                    <div className="grid grid-cols-2 gap-4">
                        {inputs.map((input, key) => (
                            <div
                                key={key}
                                className={`flex flex-col gap-1.5 ${input.col === "full" ? "col-span-2" : "col-span-1"}`}
                            >
                                <label className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                                    {input.label}{" "}
                                    {input.required && <span className="text-red-600">*</span>}
                                    {!input.required && <span className="text-gray-400">(Optional)</span>}
                                </label>
                                <input
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    className={`h-10 px-3 rounded-lg border ${errors[input.id] ? 'border-red-200' : 'border-gray-200'} bg-white text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-500 transition-colors`}
                                    value={address[input.id]}
                                    onChange={(e) => {
                                        setAddress({ ...address, [input.id]: e.target.value });
                                    }}
                                    onBlur={(e) => {
                                        const obj = validate[input.id](address[input.id]);
                                        setErrors({
                                            ...errors, [input.id]: obj.error
                                        });
                                    }}
                                />
                                <p className="text-xs text-red-500 px-2">{errors[input.id]}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 h-10 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-[2] h-10 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors"
                            onClick={handleAddAddress}
                        >
                            Save address
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressFormModal;