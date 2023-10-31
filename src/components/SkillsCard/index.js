import './index.css';

const SkillsCard =(props) =>{
    const {skillDetails}= props
    const {imageUrl, name} = skillDetails;

    return(
        <li className='skill-list-items'>
            <img src={imageUrl} alt='skill logo' className='skill-image'/>
            <p className='image-name'>{name}</p>
        </li>
    )
}

export default SkillsCard