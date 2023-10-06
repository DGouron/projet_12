function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-xl mb-5 tracking-widest">Sport See : connexion</h2>
      <button className="bg-slate-500 p-4 m-2 rounded-md text-white w-56 hover:bg-slate-400 transition-all">Utiliser l'API</button>
      <button className="bg-slate-500 p-4 m-2 rounded-md text-white w-56 hover:bg-slate-400 transition-all">Utiliser les données mockées</button>
    </div>
  )
}

export default Home