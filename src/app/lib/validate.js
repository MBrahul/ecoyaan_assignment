function fullName(name) {
    if (!name || name.trim() === "") {
        return { valid: false, error: "Full name is required" };
    }
    if (name.trim().length < 3) {
        return { valid: false, error: "Name must be at least 3 characters" };
    }
    if (name.trim().length > 50) {
        return { valid: false, error: "Name must be under 50 characters" };
    }
    if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
        return { valid: false, error: "Name can only contain letters, spaces, hyphens, and apostrophes" };
    }
    if (!/^[a-zA-Z]/.test(name.trim())) {
        return { valid: false, error: "Name must start with a letter" };
    }
    if (/\s{2,}/.test(name.trim())) {
        return { valid: false, error: "Name cannot have consecutive spaces" };
    }
    return { valid: true, error: "" };
}

function mobileNumber(mobile) {
    if (!mobile || mobile.trim() === "") {
        return { valid: false, error: "Mobile number is required" };
    }
    if (!/^[0-9]+$/.test(mobile.trim())) {
        return { valid: false, error: "Mobile number can only contain digits" };
    }
    if (mobile.trim().length !== 10) {
        return { valid: false, error: "Mobile number must be exactly 10 digits" };
    }
    if (!/^[6-9]/.test(mobile.trim())) {
        return { valid: false, error: "Mobile number must start with 6, 7, 8, or 9" };
    }
    if (/^(.)\1+$/.test(mobile.trim())) {
        return { valid: false, error: "Mobile number cannot be all repeated digits" };
    }
    return { valid: true, error: "" };
}

function email(value) {
    if (!value || value.trim() === "") {
        return { valid: false, error: "Email is required" };
    }
    if (value.trim().length > 254) {
        return { valid: false, error: "Email is too long" };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        return { valid: false, error: "Enter a valid email address" };
    }
    if (/\s/.test(value.trim())) {
        return { valid: false, error: "Email cannot contain spaces" };
    }
    const [local, domain] = value.trim().split("@");
    if (local.length > 64) {
        return { valid: false, error: "Email username is too long" };
    }
    if (/^\.|\.$/.test(local)) {
        return { valid: false, error: "Email username cannot start or end with a dot" };
    }
    if (/\.{2,}/.test(local)) {
        return { valid: false, error: "Email username cannot have consecutive dots" };
    }
    if (!/\.[a-zA-Z]{2,}$/.test(domain)) {
        return { valid: false, error: "Email must have a valid domain (e.g. .com, .in)" };
    }
    return { valid: true, error: "" };
}

function house(value) {
    if (!value || value.trim() === "") {
        return { valid: false, error: "House / flat / building is required" };
    }
    if (value.trim().length < 3) {
        return { valid: false, error: "Must be at least 3 characters" };
    }
    if (value.trim().length > 100) {
        return { valid: false, error: "Must be under 100 characters" };
    }
    if (!/^[a-zA-Z0-9\s,.\-/#]+$/.test(value.trim())) {
        return { valid: false, error: "Only letters, numbers, spaces, and , . - / # are allowed" };
    }
    return { valid: true, error: "" };
}

function street(value) {
    if (!value || value.trim() === "") {
        return { valid: false, error: "Street / area / locality is required" };
    }
    if (value.trim().length < 3) {
        return { valid: false, error: "Must be at least 3 characters" };
    }
    if (value.trim().length > 100) {
        return { valid: false, error: "Must be under 100 characters" };
    }
    if (!/^[a-zA-Z0-9\s,.\-/]+$/.test(value.trim())) {
        return { valid: false, error: "Only letters, numbers, spaces, and , . - / are allowed" };
    }
    return { valid: true, error: "" };
}

function landmark(value) {
    if (!value || value.trim() === "") {
        return { valid: true, error: "" };
    }
    if (value.trim().length < 3) {
        return { valid: false, error: "Must be at least 3 characters" };
    }
    if (value.trim().length > 100) {
        return { valid: false, error: "Must be under 100 characters" };
    }
    if (!/^[a-zA-Z0-9\s,.\-/]+$/.test(value.trim())) {
        return { valid: false, error: "Only letters, numbers, spaces, and , . - / are allowed" };
    }
    return { valid: true, error: "" };
}

function pincode(value) {
    if (!value || value.trim() === "") {
        return { valid: false, error: "Pincode is required" };
    }
    if (!/^[0-9]+$/.test(value.trim())) {
        return { valid: false, error: "Pincode can only contain digits" };
    }
    if (value.trim().length !== 6) {
        return { valid: false, error: "Pincode must be exactly 6 digits" };
    }
    if (/^0/.test(value.trim())) {
        return { valid: false, error: "Pincode cannot start with 0" };
    }
    if (/^(.)\1+$/.test(value.trim())) {
        return { valid: false, error: "Pincode cannot be all repeated digits" };
    }
    return { valid: true, error: "" };
}

function city(value) {
    if (!value || value.trim() === "") {
        return { valid: false, error: "City / town is required" };
    }
    if (value.trim().length < 2) {
        return { valid: false, error: "Must be at least 2 characters" };
    }
    if (value.trim().length > 50) {
        return { valid: false, error: "Must be under 50 characters" };
    }
    if (!/^[a-zA-Z\s\-'.]+$/.test(value.trim())) {
        return { valid: false, error: "City can only contain letters, spaces, hyphens, and apostrophes" };
    }
    if (!/^[a-zA-Z]/.test(value.trim())) {
        return { valid: false, error: "City must start with a letter" };
    }
    if (/\s{2,}/.test(value.trim())) {
        return { valid: false, error: "City cannot have consecutive spaces" };
    }
    return { valid: true, error: "" };
}

function state(value) {
    if (!value || value.trim() === "") {
        return { valid: false, error: "State is required" };
    }
    if (value.trim().length < 2) {
        return { valid: false, error: "Must be at least 2 characters" };
    }
    if (value.trim().length > 50) {
        return { valid: false, error: "Must be under 50 characters" };
    }
    if (!/^[a-zA-Z\s\-']+$/.test(value.trim())) {
        return { valid: false, error: "State can only contain letters, spaces, and hyphens" };
    }
    if (!/^[a-zA-Z]/.test(value.trim())) {
        return { valid: false, error: "State must start with a letter" };
    }
    if (/\s{2,}/.test(value.trim())) {
        return { valid: false, error: "State cannot have consecutive spaces" };
    }
    return { valid: true, error: "" };
}

const validate = {
    fullName, mobileNumber, email, state, street, house, landmark, pincode, city
};

export default validate;