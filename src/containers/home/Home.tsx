import { useNavigate } from "react-router";
import { USER_MAIN_DATA_MOCKED } from "../../mocks/mockUserMainData";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [useMockedDate, setUseMockedDate] = useState<boolean>(false);
  const handleNavigationClick = (uri:string) => {
    navigate(uri);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-xl mb-5 tracking-widest">Sport See : connexion</h2>
      <p className="text-center mb-5">Vous pouvez utiliser l'API ou les données mockées</p>
      <input 
        type="button" 
        className={`${useMockedDate ? 'bg-slate-400' : 'bg-slate-500'} p-4 m-2 rounded-md text-white w-56 hover:bg-slate-400 transition-all cursor-pointer`}
        value="Utiliser l'API"
        onClick={() => setUseMockedDate(false)} 
      />
      <div className="flex gap-4">
        { useMockedDate ? 
          USER_MAIN_DATA_MOCKED.map((user, index) => (
            <input 
              key={index}
              type="button" 
              className="bg-slate-500 p-4 m-2 rounded-md text-white w-fit hover:bg-slate-400 transition-all cursor-pointer" 
              value={`Se connecter en tant que ${user.userInfos.firstName} ${user.userInfos.lastName}`}
              onClick={() => handleNavigationClick('/dashboard/mock/' + user.id)} 
            />
          ))
          :  
          <input 
            type="button" 
            className="bg-slate-500 p-4 m-2 rounded-md text-white w-56 hover:bg-slate-400 transition-all cursor-pointer" 
            value="Utiliser les données mockées"
            onClick={() => setUseMockedDate(true)} 
          />
        }
      </div>  
    </div>
  )
}

export default Home