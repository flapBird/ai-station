import React from 'react';
import { Item } from './data';


interface ItemComponentProps {
    item: Item;
}

const ItemComponent: React.FC<ItemComponentProps> = ({ item }) => {
    return (
        <div className="bg-white rounded-lg py-4 [box-shadow:rgb(216,_216,_216)_6px_6px_32px] h-[340px]">
            <div className="flex flex-col justify-start px-8">
                <div className="flex justify-center items-center h-[120px] mt-4"><a target="_blank" href={item.url}><img
                    src={item.pic}
                    alt="BrickCenter" className="rounded-md w-[99%]"/></a></div>
                <div className="flex justify-between items-center mt-8">
                    <div className="w-4/5 flex justify-start text-lg font-bold hover:text-blue-500 text-main-color-0"><a
                        target="_blank" href={item.url}><span className="line-clamp-1">{item.title}</span></a>
                    </div>
                    <div className="w-1/5 flex justify-end"><a target="_blank" rel="nofollow"
                                                               className="text-gray-500 hover:text-blue-500"
                                                               href={item.url}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="w-6 h-6">
                            <path fill-rule="evenodd"
                                  d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    </a></div>
                </div>
                <div className="flex justify-start text-main-color-2 mt-2 break-words">
                    <div className="text-md line-clamp-3 text-gray-500">{item.description}</div>
                </div>
            </div>
        </div>

    );
};

export default ItemComponent;
