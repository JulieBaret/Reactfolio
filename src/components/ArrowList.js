import uniqid from 'uniqid'

const ArrowList = ({ task }) => {
    return (
        <li key={uniqid()}>
            <p className='timeline-what'>› {task}</p>
        </li>
    );
};

export default ArrowList;