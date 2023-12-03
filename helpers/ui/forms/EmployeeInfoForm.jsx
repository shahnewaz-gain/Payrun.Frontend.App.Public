import React from 'react';
import { AppSelect } from '@/helpers/ui';

const EmployeeInfoForm = () => {
  const options = [
    {
      id: 1,
      title: 'Parmanent'
    },
    {
      id: 2,
      title: 'Provision'
    },
    {
      id: 3,
      title: 'Tarinee'
    },
    {
      id: 4,
      title: 'Intern'
    }
  ];
  const defaultSelected = {
    id: 0,
    title: 'Parmanent'
  };
  const defaultSelectedDeveloper = {
    id: 0,
    title: 'Developer'
  };
  const defaultSelectedDepartment = {
    id: 0,
    title: 'Laravel department'
  };
  const defaultSelectedWorkShift = {
    id: 0,
    title: 'Regular workshift'
  };
  return (
    <div className="flex flex-col gap-3 w-full items-center">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 md:pr-3">
          <div className="mb-2 block">
            <label htmlFor="fname">
              <span className="text-sm font-medium leading-[21px]">
                <span className="text-dark">First name</span> <small className="text-red">*</small>
              </span>
            </label>
          </div>
          <input
            id="base"
            type="text"
            className="text-dark text-14 font-normal leading-[21px] rounded-md py-2 w-full pl-2 border border-gray placeholder:text-border placeholder:text-14 placeholder:font-medium placeholder:leading-[21px]"
            sizing="md"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-3">
          <div className="mb-2 block">
            <label htmlFor="lname">
              <span className="text-sm font-medium leading-[21px]">
                <span className="text-dark">Last name</span> <small className="text-red">*</small>
              </span>
            </label>
          </div>
          <input
            id="base"
            sizing="md"
            type="text"
            className="text-dark text-14 font-normal leading-[21px] rounded-md py-2 w-full pl-2 border border-gray placeholder:text-border placeholder:text-14 placeholder:font-medium placeholder:leading-[21px]"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 md:pr-3">
          <div className="mb-2 block">
            <label htmlFor="fname">
              <span className="text-sm font-medium leading-[21px]">
                <span className="text-dark">Employement status</span>{' '}
                <small className="text-red">*</small>
              </span>
            </label>
          </div>
          <AppSelect
            selectType="input"
            options={options}
            defaultSelected={defaultSelected}
            selectedOptionClass="text-dark"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-3">
          <div className="mb-2 block">
            <label htmlFor="lname">
              <span className="text-sm font-medium leading-[21px]">
                <span className="text-dark">Designation</span> <small className="text-red">*</small>
              </span>
            </label>
          </div>
          <AppSelect
            selectType="input"
            options={options}
            defaultSelected={defaultSelectedDeveloper}
            selectedOptionClass="text-dark"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 md:pr-3">
          <div className="mb-2 block">
            <label htmlFor="fname">
              <span className="text-sm font-medium leading-[21px]">
                <span className="text-dark">Department</span> <small className="text-red">*</small>
              </span>
            </label>
          </div>
          <AppSelect
            selectType="input"
            options={options}
            defaultSelected={defaultSelectedDepartment}
            selectedOptionClass="text-dark"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-3">
          <div className="mb-2 block">
            <label htmlFor="lname">
              <span className="text-sm font-medium leading-[21px]">
                <span className="text-dark">Workshift</span> <small className="text-red">*</small>
              </span>
            </label>
          </div>
          <AppSelect
            selectType="input"
            options={options}
            defaultSelected={defaultSelectedWorkShift}
            selectedOptionClass="text-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfoForm;
