"use client";

import TextField from "../reusables/textBoxes/inputField";
import DateField from "../reusables/datePickers/datePicker";
import FormGrid from "../reusables/forms/formgrid";
import FormSection from "../reusables/forms/form";
import RadioGroup from "../reusables/buttons/radioButtons/radioGroup";
import ValidityRadio from "../reusables/buttons/radioButtons/validityradio";
import Header from "../layout/header/header";
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from "react-icons/fa";

export default function AddMember() {
  const { register, handleSubmit, control } = useForm({ defaultValues: { memberType: 'gold', validity: '1' } });

  const onSubmit = (data) => {
    console.log('FORM PAYLOAD', data);
    alert('Form submitted — open console to inspect payload');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="pt-[130px] px-4 sm:px-6 md:px-10 lg:px-36 pb-10">
        {/* Back Button */}
        <div className="flex items-center gap-2 mb-5">
          <FaArrowLeft className="text-xl cursor-pointer" onClick={() => window.history.back()} />
          <h2 className="text-lg font-semibold">Add New Member</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Personal Information */}
          <FormSection title="Personal Information">
            <div className="space-y-4">
              <TextField label="Full Name" name="fullName" register={register} placeholder="Enter full name" required />

              <FormGrid cols={2} className="gap-4">
                <TextField label="Email ID" name="email" register={register} placeholder="Enter business email" required />
                <TextField label="Mobile No" name="mobile" register={register} placeholder="Enter mobile no" required />

                <DateField label="Birthday Anniversary Date" name="birthday" control={control} />
                <DateField label="Marriage Anniversary Date" name="marriage" control={control} />

                <TextField label="Passport Number" name="passport" register={register} placeholder="Enter passport number" />
                <TextField label="Nationality" name="nationality" register={register} placeholder="Enter nationality" />

                <div className="col-span-2">
                  <label className="text-sm text-[#2b3a4a] mb-2 font-medium block">
                    Address <span className="text-[#d9534f]">*</span>
                  </label>
                  <input
                    {...register('address1', { required: true })}
                    placeholder="Enter Address 1 (House no, building, street, area)*"
                    className="w-full h-11 rounded-lg border border-[#e6e9ee] px-3 text-sm placeholder:text-[#9aa3b2] focus:outline-none focus:ring-2 focus:ring-[#0f2d66]/10"
                  />
                </div>

                <TextField label="Address 2 (Locality/Town)" name="address2" register={register} placeholder="Enter Address 2" />
                <TextField label="City/District" name="city" register={register} placeholder="Enter City/District" />
                <TextField label="Pincode" name="pincode" register={register} placeholder="Enter Pincode" />
                <TextField label="State" name="state" register={register} placeholder="Enter State" />
              </FormGrid>
            </div>
          </FormSection>

          {/* Membership Information */}
          <FormSection title="Membership Information">
            <div className="space-y-4">
              <TextField label="Membership Code" name="membershipCode" register={register} placeholder="G-101" />
              <RadioGroup control={control}/>
              <TextField label="Membership Amount" name="membershipAmount" register={register} placeholder="Enter amount" type="number" />
              <FormGrid cols={2} className="gap-4">
                <DateField label="Date Of Registration" name="registrationDate" control={control} />
                <ValidityRadio register={register} />
              </FormGrid>
            </div>
          </FormSection>

          {/* Business Information */}
          <FormSection title="Business Information">
            <div className="space-y-4">
              <FormGrid cols={2} className="gap-4">
                <TextField label="Company Name" name="companyName" register={register} placeholder="Enter company name" />
                <TextField label="Business Website" name="businessWebsite" register={register} placeholder="Enter website" />

                <TextField label="Business Category" name="businessCategory" register={register} placeholder="Enter category" />
                <TextField label="Designation" name="designation" register={register} placeholder="Enter designation" />
              </FormGrid>
            </div>
          </FormSection>

          {/* Additional Information */}
          <FormSection title="Additional Information">
            <div className="space-y-4">
              <FormGrid cols={2} className="gap-4">
                <TextField label="Account number" name="accountNumber" register={register} placeholder="Enter account number" />
                <TextField label="Re-Account number" name="reAccountNumber" register={register} placeholder="Enter re-account number" />

                <TextField label="Cheque Number" name="chequeNumber" register={register} placeholder="Enter cheque number" />
                <TextField label="Bank Name" name="bankName" register={register} placeholder="Enter bank name" />

                <TextField label="IFSC Code" name="ifsc" register={register} placeholder="Enter IFSC Code" />
                <TextField label="UTR No" name="utr" register={register} placeholder="Enter UTR No" />
              </FormGrid>
            </div>
          </FormSection>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={() => window.history.back()}
              className="px-4 py-2 rounded-md border border-[#e6e9ee] text-sm bg-white w-full sm:w-auto"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-[#0f2d66] text-white text-sm w-full sm:w-auto"
            >
              Save Member
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
