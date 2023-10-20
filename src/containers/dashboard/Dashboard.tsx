import { useEffect, useState } from 'react';
import { User } from '../../types/user';
import { USER_MAIN_DATA_MOCKED } from '../../mocks/mockUserMainData';
import Welcome from './widgets/Welcome';
import { fetchUserMainData } from '../../helpers/api';

function Dashboard({useMockedData} : {useMockedData?: boolean}) {
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(undefined);

  const fetchUserData = async () => {
    const idFromUrl = window.location.pathname.split('/').pop();
    if (useMockedData) {    
      const user:User|undefined  = USER_MAIN_DATA_MOCKED.find((user) => user.id === parseInt(idFromUrl || ''));
      setCurrentUserData(user);
    } else {
      const dataReceived = await fetchUserMainData(parseInt(idFromUrl || ''));
      setCurrentUserData(dataReceived);
    }
  }
  useEffect (() => {
    fetchUserData();
  }, [useMockedData]);
  return (
    <div className="w-full h-screen ml-56 mt-14">
      <Welcome currentUserData={currentUserData} />
      <p>Mocked data : {useMockedData ? 'yes' : 'no'}</p>
    </div>
  )
}

export default Dashboard;