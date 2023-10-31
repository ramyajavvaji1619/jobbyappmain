import ProfileDetails from '../ProfileDetails'
import './index.css'


const JobFilterGroup = (props) => {
    const { employementTypesList, salaryRangeList, changeEmployemetType, changeSalary, searchInput, getJobs } = props;

    const getEmployementTypesList = () => {
        return employementTypesList.map((employ => {
            const onChangeEmployemetType = event =>
                changeEmployemetType(event.target.value)

            return (
                <li className='checkbox-list-items'
                    key={employ.employementTypeId}
                    onChange={onChangeEmployemetType}>
                    <input type='chechbox' className='check-radio' id={employ.employementTypeId} value={employ.employementTypeId} />
                    <label className='check-label' htmlFor={employ.employementTypeId}>{employ.label}</label>
                </li>
            )
        }))
    }

    const renderEmployementTypesList = () => (
        <div className='salary-container'>
            <h1 className='salary-heading'>Type Of Employement</h1>
            <ul className='salary-range-container'>{getEmployementTypesList()}</ul>
        </div>
    )

    const getSalaryRangeList = () => {
        return salaryRangeList.map(salary => {
            const onChangeSalary = () => (changeSalary(salary.salaryRangeId))
            return (
                <li className='checkbox-list-items'
                    key={salary.salaryRangeId}
                    onChange={onChangeSalary}>
                    <input type='radio' className='check-radio' id={salary.salaryRangeId}
                        name={salary} />
                    <label className='check-label' htmlFor={salary.salaryRangeId}>{salary.label}</label>
                </li>
            )
        })
    }

    const renderSalaryRangeList = () => (
        <div className='salary-container'>
            <h1 className='salary-heading'>Salary Range</h1>
            <ul className='salary-range-container'>{getSalaryRangeList()}</ul>
        </div>
    )
    return (
        <div className='job-filter-group'>
            <ProfileDetails />
            <hr className='horizontal-line' />
            {renderEmployementTypesList()}
            <hr className='horizontal-line' />
            {renderSalaryRangeList()}
        </div>
    )
}
export default JobFilterGroup;