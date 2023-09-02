import uniqid from 'uniqid'
import ArrowList from './ArrowList';

const ChronologyDetails = ({ experience }) => {
    return (
        <li key={uniqid()}>
        <div class="flex flex-start items-center">
            {/* Bullet Point */}
            <div className='bg-pink w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-4 md:-mt-2'></div>
            <div className=' text-very-dark-grey leading-5 font-semibold text-lg md:text-xl 2xl:text-2xl md:-mt-2 -mt-4 flex flex-wrap'>{experience.title}</div>
        </div>
        <div className='ml-6 mb-2 pb-6'>
            <p className='inline-block text-red font-bold md:text-lg 2xl:text-xl leading-tight mr-2'>{experience.location}</p>
            <p className='inline-block text-middle-pink uppercase text-xs font-medium md:font-light md:text-base 2xl:text-lg'>{experience.date}</p>
            <ul class=''>
                {experience.more.map((task) => (
                    <ArrowList task={task} />
                ))}
            </ul>
        </div>
    </li>
    );
};

export default ChronologyDetails;