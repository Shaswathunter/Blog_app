import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../utils";

const Creators = () => {
  const [creator, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await axios.get(
         `${BACKEND_URL}/api/users/admins`,
        { withCredentials: true }
      );
      console.log(data);
      setCreators(data.admins);
    };
    fetchCreators();
  }, []);
  return (
  
      <div className="flex flex-wrap justify-center items-center my-20 bg-gray-100">
        {creator && creator.length > 0 ? (
          creator.map((creator) => (
            <div
              key={creator._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full m-2"
             
            >
            
                <div className="relative">
                  <img
                    src={creator.photo.url}
                    alt="avatar"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 transform translate-y-1/2 ">
                     <img
                    src={creator.photo.url}
                    alt="avatar"
                    className="w-16 h-16 rounded-full mx-auto border-4 border-gray-700 "
                  />
                  </div>
                
                </div>
                  <div className="px-4 py-6 mt-4 text-center">
                    <h2 className=" text-xl font-semibold">{creator.name}</h2>
                    <p className="text-gray-700 mt-2 ">{creator.email}</p>
                    <p className="text-gray-700 mt-2 ">{creator.phone}</p>
                    <p className="text-gray-700 mt-2 ">{creator.role}</p>
                  </div>
           
            </div>
          ))
        ) : (
          <div>No Creator found</div>
        )}
      </div>
  );
};

export default Creators;
