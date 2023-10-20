import { User } from '../../../types/user'

function Welcome({currentUserData}: {currentUserData: User | undefined}) {
  return (
    <section className="text-xl mb-5 flex flex-col gap-8">
      <article className='flex gap-3'>
        <span className='text-primary text-5xl font-medium'>Bienvenue</span>
        <span className='text-highlight text-5xl font-medium'>{currentUserData?.userInfos?.firstName}</span>
      </article>
      <p className='text-primary text-lg font-normal'>
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  )
}

export default Welcome