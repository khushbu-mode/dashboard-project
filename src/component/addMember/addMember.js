"use client";

import RadioGroup from "../reusables/buttons/radioButtons/radioGroup";
import DatePicker from "../reusables/datePickers/datePicker";
import FormSection from "../reusables/forms/form";
import InputField from "../reusables/textBoxes/inputField";

export default function AddMember() {
  return (
    <div style={{ padding: "130px" }}>
      <h2 style={{ marginBottom: "20px" }}>← Add New Member</h2>
      <FormSection title="Personal Information">
        <InputField label="Full Name" required placeholder="Enter full name" />
        <InputField label="Email ID" required placeholder="Enter business email" />
        <InputField label="Mobile No" required placeholder="Enter mobile no" />
        <DatePicker label="Birthday Anniversary Date" required />
        <DatePicker label="Marriage Anniversary Date" />
        <InputField label="Passport Number" placeholder="Enter passport number" />
        <InputField label="Nationality" required placeholder="Enter nationality" />
        <InputField label="Address 1" required placeholder="House no, street, area" />
        <InputField label="Address 2" required placeholder="Locality/Town" />
        <InputField label="Address 3" required placeholder="City/District" />
        <InputField label="Pincode" required placeholder="Enter Pincode" />
        <InputField label="State" required placeholder="Enter State" />
      </FormSection>

      <FormSection title="Membership Information">
        <InputField label="Membership Code" required placeholder="G-101" />
        <RadioGroup
          label="Member Type"
          options={[
            { value: "gold", label: "Gold Membership" },
            { value: "platinum", label: "Platinum Membership" },
            { value: "titanium", label: "Titanium Membership" },
          ]}
        />
        <InputField label="Membership Amount" placeholder="Enter amount" />
        <DatePicker label="Date of Registration" required />
        <RadioGroup
          label="Validity"
          options={[
            { value: "1", label: "1 Year" },
            { value: "2", label: "2 Years" },
            { value: "renew", label: "Renewal" },
          ]}
        />
      </FormSection>

      <FormSection title="Business Information">
        <InputField label="Company Name" required placeholder="Enter company" />
        <InputField label="Business Website" placeholder="Enter website" />
        <InputField label="Business Category" placeholder="Enter category" />
        <InputField label="Designation" placeholder="Enter designation" />
      </FormSection>

      <FormSection title="Additional Information">
        <InputField label="Account Number" required placeholder="Enter account number" />
        <InputField label="Re-Account Number" placeholder="Re-enter account number" />
        <InputField label="Cheque Number" placeholder="Enter cheque number" />
        <InputField label="Bank Name" placeholder="Enter bank name" />
        <InputField label="IFSC Code" placeholder="Enter IFSC code" />
        <InputField label="UTR No" placeholder="Enter UTR no" />
      </FormSection>
    </div>
  );
}
