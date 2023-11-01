import ProfileDetails from "../ProfileDetails";
import "./index.css";

const JobFilterGroup = (props) => {
  const {
    employmentTypesList,
    salaryRangeList,
    changeEmploymentType,
    changeSalary,
    searchInput,
    getJobs
  } = props;

  const getEmploymentTypesList = () => {
    return employmentTypesList.map((employ) => {
      const onChangeEmploymentType = (event) =>
        changeEmploymentType(event.target.value);
      console.log(employmentTypesList);

      return (
        <li
          className="checkbox-list-items"
          key={employ.employmentTypeId}
          onChange={onChangeEmploymentType}
        >
          <input
            type="checkbox"
            className="check-radio"
            id={employ.employmentTypeId}
            value={employ.employmentTypeId}
          />
          <label className="check-label" htmlFor={employ.employmentTypeId}>
            {employ.label}
          </label>
        </li>
      );
    });
  };

  const renderEmploymentTypesList = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Type Of Employement</h1>
      <ul className="salary-range-container">{getEmploymentTypesList()}</ul>
    </div>
  );

  const getSalaryRangeList = () => {
    return salaryRangeList.map((salary) => {
      const onChangeSalary = () => changeSalary(salary.salaryRangeId);
      return (
        <li
          className="checkbox-list-items"
          key={salary.salaryRangeId}
          onChange={onChangeSalary}
        >
          <input
            type="radio"
            className="check-radio"
            id={salary.salaryRangeId}
            name={salary}
          />
          <label className="check-label" htmlFor={salary.salaryRangeId}>
            {salary.label}
          </label>
        </li>
      );
    });
  };

  const renderSalaryRangeList = () => (
    <div className="salary-container">
      <h1 className="salary-heading">Salary Range</h1>
      <ul className="salary-range-container">{getSalaryRangeList()}</ul>
    </div>
  );
  return (
    <div className="job-filter-group">
      <ProfileDetails />
      <hr className="horizontal-line" />
      {renderEmploymentTypesList()}
      <hr className="horizontal-line" />
      {renderSalaryRangeList()}
    </div>
  );
};
export default JobFilterGroup;
