import { useEffect, useState } from 'react';
import { User } from '../../types/user';
import { USER_MAIN_DATA_MOCKED } from '../../mocks/mockUserMainData';

function Dashboard({useMockedData} : {useMockedData?: boolean}) {
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(undefined);

  const fetchUserData = async () => {
    if (useMockedData) {
      const idFromUrl = window.location.pathname.split('/').pop();
      const user:User|undefined  = USER_MAIN_DATA_MOCKED.find((user) => user.id === parseInt(idFromUrl || ''));
      setCurrentUserData(user);
    } else {
      // fake call API
    }
  }
  useEffect (() => {
    fetchUserData();
  }, [useMockedData]);
  return (
    <div className="w-screen h-screen">
      <p className="text-xl mb-5 tracking-widest">
        <span>Bienvenue</span>
        <span>{currentUserData?.userInfos?.firstName}</span>
      </p>
      <p>Mocked data : {useMockedData ? 'yes' : 'no'}</p>
    </div>
  )
}

export default Dashboard;