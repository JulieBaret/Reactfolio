import uniqid from 'uniqid'

const ArrowList = ({ task }) => {
    return (
        <li key={uniqid()}>
            <p className='text-dark-grey mt-2 text-sm 2xl:text-base'>› {task}</p>
        </li>
    );
};

export default ArrowList;