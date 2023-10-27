import { useNavigate } from "react-router";
import { USER_MAIN_DATA_MOCKED } from "../../mocks/mockUserMainData";
import { useState } from "react";
import { User } from "../../schema/userSchema";
import { fetchUserList } from "../../services/api";

function Home() {
  const navigate = useNavigate();
  const [useMockedData, setUseMockedData] = useState<boolean>(false);
  const [useAPIData, setUseAPIData] = useState<boolean>(false);
  const [userListFromAPI, setUserListFromAPI] = useState<User[]>([]);

  const handleNavigationClick = (uri: string) => {
    navigate(uri);
  };

  const handleFetchUserList = async () => {
    const data: unknown = await fetchUserList();
    setUserListFromAPI(data as User[]);
    setUseAPIData(true);
    setUseMockedData(false);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-xl mb-5 tracking-widest">Sport See : connexion</h2>
      <p className="text-center mb-5">
        Vous pouvez utiliser l'API ou les données mockées
      </p>
      <div className="flex gap-4">
        {useAPIData ? (
          userListFromAPI.map((user, index) => (
            <input
              key={index}
              type="button"
              className="bg-slate-500 p-4 m-2 rounded-md text-white w-fit hover:bg-slate-400 transition-all cursor-pointer"
              value={`Se connecter en tant que ${user.userInfos.firstName} ${user.userInfos.lastName}`}
              onClick={() => handleNavigationClick("/dashboard/" + user.id)}
            />
          ))
        ) : (
          <input
            type="button"
            className="bg-slate-500 p-4 m-2 rounded-md text-white w-56 hover:bg-slate-400 transition-all cursor-pointer"
            value="Utiliser l'API"
            onClick={() => handleFetchUserList()}
          />
        )}
      </div>
      <div className="flex gap-4">
        {useMockedData ? (
          USER_MAIN_DATA_MOCKED.map((user, index) => (
            <input
              key={index}
              type="button"
              className="bg-slate-500 p-4 m-2 rounded-md text-white w-fit hover:bg-slate-400 transition-all cursor-pointer"
              value={`Se connecter en tant que ${user.userInfos.firstName} ${user.userInfos.lastName}`}
              onClick={() =>
                handleNavigationClick("/dashboard/mock/" + user.id)
              }
            />
          ))
        ) : (
          <input
            type="button"
            className="bg-slate-500 p-4 m-2 rounded-md text-white w-56 hover:bg-slate-400 transition-all cursor-pointer"
            value="Utiliser les données mockées"
            onClick={() => {
              setUseMockedData(true);
              setUseAPIData(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
